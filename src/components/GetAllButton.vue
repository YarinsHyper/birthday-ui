<template>
  <button @click="getBirthdays" :style="{ background: color }" class="button">
    {{ text }}
  </button>
</template>

<script>
const axios = require("axios");

export default {
  name: "getAllButton",
  props: {
    text: String,
    color: String,
  },
  methods: {
    async getBirthdays() {
      let birthdaysData = [];
      try {
        birthdaysData = await axios.get(
          "http://localhost:9000/api/getAllBirthdays"
        );
        let newData = birthdaysData.data.birthdays;
        console.log(newData);

        // newData.forEach((birthday) => {
        //   console.log(birthday);
        // });
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