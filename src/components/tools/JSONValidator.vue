<template>
  <div class="json">
    <h1>JSON Playground</h1>
    <textarea id="text" name="text"
      v-on:keyup="validate"
      cols="30" rows="10"></textarea>
    <output for="text">
      <pre>{{ result }}</pre>
    </output>
  </div>
</template>

<script>
const applyQuotesOnKey = (str) => {
  const regex = /(\w+):/gm;
  const subst = '"$1":';
  return str.replace(regex, subst);
};

const isValidJSON = (data) => {
  try {
    return JSON.parse(data);
  } catch (e) {
    return false;
  }
};

export default {
  name: 'JSONValidator',
  data() {
    return {
      result: '',
    };
  },
  computed: {
    validateResult: {
      get() {
        return this.result;
      },

      set(v) {
        if (v === false) {
          this.result = 'Not a valid JSON';
        } else {
          this.result = JSON.stringify(v, null, 2);
        }
      },
    },
  },
  methods: {
    validate(event) {
      const { target } = event;
      const { value } = target;
      let result = isValidJSON(value);
      if (!result) {
        result = isValidJSON(applyQuotesOnKey(value));
      }

      this.validateResult = result;
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}

.json {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
}

</style>
