<template>
  <div class="container">
    <Header title="Yarin's Birthday Service" />
    <div class="birthdayOutput">
      <Birthdays :birthdays="birthdays" />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Birthdays from "./components/data/Birthdays";
const getBirthdaysAddress = "http://api-gateway:9000/api/birthdays";

export default {
  name: "App",
  components: {
    Header,
    Birthdays,
  },
  data() {
    return {
      birthdays: [],
    };
  },
  methods: {
    async fetchBirthdays() {
      const res = await fetch(getBirthdaysAddress);
      const data = res.json();
      return data;
    },
  },
  async created() {
    const birthdaysData = await this.fetchBirthdays();
    this.birthdays = birthdaysData.birthdays;
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Poppins", sans-serif;
  background-color: #799cb4;
}

.container {
  width: 1700px;
  height: 916px;
  margin: 30px auto;
  padding: 0px;
}

.birthdayOutput {
  width: 1200px;
  height: 680px;
  margin: 12px auto;
  overflow: auto;
  padding: 0px;
}

.pagination {
  width: 800px;
  height: 80px;
  margin: 10px auto;
  overflow: auto;
  padding: 0px;
}

.button {
  display: inline-block;
  font-weight: bold;
  border: solid 1 black;
  padding: 10px 15px;
  margin: 5px;
  margin-top: 5.5vh;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.button:focus {
  outline: none;
}

.button:active {
  transform: scale(0.98);
}

.button-block {
  display: block;
  width: 100%;
}

h1 {
  font-size: 45px;
}
</style>