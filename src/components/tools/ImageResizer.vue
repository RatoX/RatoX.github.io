<template>
  <div class="image-resizer">
    <input type="file"
           id="image"
           @change="changeImage"
           accept="image/*"
           :disabled="loading"
           name="image"/>
    <section
      v-if="image"
      class="image-resizer__resizer">
      <section class="image-resizer__original-details">
        <label for="originalSize">Original size: </label>
        <output for="image" name="originalSize">
          {{ original.size }}
        </output>

        <label for="originalDimension">Original dimension: </label>
        <output for="image" name="originalDimension">
          {{ original.dimension }}
        </output>
      </section>
      <section class="image-resizer__new-details">
        <label for="newDimension">New dimension: </label>
        <output for="image" name="newDimension">
          {{ newDimension }}
        </output>
      </section>
      <input
        type="range"
        id="reducePercent"
        name="reducePercent"
        min="0" max="90"
        v-model="reducePercent"
        v-on:change="updateNewDimensions"
        v-on:input="updateNewDimensions"
        />
      <button v-on:click="reduceIt">Reduce it!</button>
      <a class="image-resizer__download" ref="downloadLink" href="#">Download it!</a>
      <canvas
        class="image-resizer__result"
        ref="canvas"
        :width="newFile.width"
        :height="newFile.height"
        ></canvas>
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
      original: {
        size: '',
        dimension: '',
        type: '',
        name: '',
      },
      newFile: {
        width: '0',
        height: '0',
      },
      loading: false,
      image: null,
      reducePercent: 90,
    };
  },
  computed: {
    newDimension() {
      return `${this.reducePercent}% ${this.newFile.width}x${this.newFile.height}`;
    },
  },
  methods: {
    updateNewDimensions() {
      const percent = this.reducePercent;
      const { width, height } = this.image;
      const newWidth = Math.ceil(width - (width * (percent / 100)));
      const newHeight = Math.ceil(height - (height * (percent / 100)));

      this.newFile.width = newWidth;
      this.newFile.height = newHeight;
    },
    reduceIt() {
      pica
        .resize(this.image, this.$refs.canvas, {
          unsharpAmount: 80,
          unsharpRadius: 0.6,
          unsharpThreshold: 2,
        })
        .then(result => pica.toBlob(result, this.original.type))
        .then((result) => {
          const downloadUrl = URL.createObjectURL(result);
          const a = this.$refs.downloadLink;
          const fileData = extractFilenameAndExtension(this.original.name);

          a.href = downloadUrl;
          a.download = `${slug(fileData[0])}.${fileData[1]}`;
          a.click();
          window.URL.revokeObjectURL(downloadUrl);
        });
    },

    changeImage({ target }) {
      const file = target.files[0];
      const size = formatBytes(file.size);

      this.original.name = file.name;
      this.original.type = file.type;
      this.original.size = size;
      this.loading = true;
      const reader = new FileReader();

      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const dimension = `${img.width}x${img.height}`;
          this.original.dimension = dimension;
          this.image = img;
          this.updateNewDimensions();
        };
        img.src = event.target.result;
      };

      reader.readAsDataURL(file);
    },
  },
};
</script>

<style scoped>
.image-resizer {
  width: 100%;
}

.image-resizer__resizer {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.image-resizer__download {
  display: none;
}

.image-resizer__result {
  display: none;
}
</style>
