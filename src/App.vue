<template>
  <MainPopup />
  <div class="container">
    <img id="balloonsGif" src="./images/3.gif" />
    <img id="titleImage" src="./images/title2.png" />
    <Header title="Yarin's Birthday Service" />
    <div class="birthdayOutput">
      <Birthdays :birthdays="birthdays" />
    </div>
    <img id="presentGif" src="./images/present.gif" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Birthdays from "./components/data/Birthdays";
import MainPopup from "./MainPopup";
const getBirthdaysAddress = "http://localhost:9000/api/birthdays";

export default {
  name: "App",
  components: {
    Header,
    Birthdays,
    MainPopup,
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
  background-color: white;
}

.container {
  width: 1700px;
  height: 880px;
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
  margin-top: 15vh;
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
  position: absolute;
  left: 715px;
  top: 48px;
  position: inline;
}

#titleImage {
  width: 672px;
  height: 230px;
  position: absolute;
  left: 640px;
  top: -29px;
  max-width: 100%;
  max-height: 210px;
}

#balloonsGif {
  position: absolute;
  width: 200px;
}

#presentGif {
  position: absolute;
  top: 700px;
  width: 200px;
  left: 1640px;
}
</style>