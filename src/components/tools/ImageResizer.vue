<template>
  <div class="image-resizer">
    <input type="file"
           id="image"
           @change="changeImage"
           accept="image/*"
           :disabled="loading"
           name="image"/>
    <section class="image-resizer__details">
      <label for="originalSize">Original size: </label>
      <output for="image" name="originalSize">
        {{ originalSize }}
      </output>

      <label for="originalDimension">Original dimension: </label>
      <output for="image" name="originalDimension">
        {{ originalDimension }}
      </output>
    </section>
    <section
      v-if="image"
      class="image-resizer__resizer">
      <input
        type="number"
        id="reducePercent"
        name="reducePercent"
        min="10" max="90"
        v-model="reducePercent">
      <button v-on:click="reduceIt">Reduce it!</button>
      <a class="image-resizer__download" ref="downloadLink" href="#">Download it!</a>
      <canvas class="image-resizer__result" ref="canvas"></canvas>
    </section>
  </div>
</template>

<script>
import Pica from 'pica';

const pica = Pica();

function formatBytes(bytes, decimals) {
  // https://stackoverflow.com/a/18650828
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals <= 0 ? 0 : decimals || 2;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / (k ** i)).toFixed(dm))} ${sizes[i]}`;
}

function slug(str) {
  return str
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

function extractFilenameAndExtension(str) {
  const arr = str.split('.');
  const extension = arr.pop();
  const filename = arr.join('');

  return [filename, extension];
}

export default {
  name: 'ImageResizer',
  data() {
    return {
      originalSize: '',
      originalDimension: '',
      originalType: '',
      originalName: '',
      loading: false,
      image: null,
      reducePercent: 90,
    };
  },
  methods: {
    reduceIt() {
      pica
        .resize(this.image, this.$refs.canvas, {
          unsharpAmount: 80,
          unsharpRadius: 0.6,
          unsharpThreshold: 2,
          width: 400,
        })
        .then(result => pica.toBlob(result, this.originalType))
        .then((result) => {
          const downloadUrl = URL.createObjectURL(result);
          const a = this.$refs.downloadLink;
          const fileData = extractFilenameAndExtension(this.originalName);

          a.href = downloadUrl;
          a.download = `${slug(fileData[0])}.${fileData[1]}`;
          a.click();
          window.URL.revokeObjectURL(downloadUrl);
        });
    },

    changeImage({ target }) {
      const file = target.files[0];
      const size = formatBytes(file.size);

      this.originalName = file.name;
      this.originalType = file.type;
      this.originalSize = size;
      this.loading = true;
      const reader = new FileReader();

      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const dimension = `${img.width}x${img.height}`;
          this.originalDimension = dimension;
          this.image = img;
          // ctx.drawImage(img,0,0);
        };
        img.src = event.target.result;
      };

      reader.readAsDataURL(file);
    },
  },
};
</script>

<style scoped>
.image-resizer__resizer {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.image-resizer__download {
  display: none;
}
</style>
