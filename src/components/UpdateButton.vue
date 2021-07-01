<template>
  <button @click="getBirthdays" :style="{ background: color }" class="button">
    {{ text }}
  </button>
</template>

<script>
const axios = require("axios");

export default {
  name: "updateButton",
  props: {
    text: String,
    color: String,
  },
  methods: {
    async getBirthdays() {
      const data = {};
      try {
        data = await axios.get("http://localhost:9000/api/getAllBirthday");
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
button {
  margin-left: 3vw;
}
</style>