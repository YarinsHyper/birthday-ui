<template>
  <div class="container">
    <Header title="Yarin's Birthday Service" />
    <div class="birthdayOutput">
      <Birthdays @toggle-selected="toggleSelected" :birthdays="birthdays" />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Birthdays from "./components/Birthdays";

const getBirthdaysAddress = "http://localhost:9000/api/getAllBirthdays";
export let selectedArray = [];
let bdsSelected = 0;

let selectedAmount = 0;

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
    toggleSelected(personalNumber, selected) {
      if (!selectedArray.includes(personalNumber) && !selected)
        selectedArray.push(personalNumber);
      if (selected) selectedArray = [];
      selectedAmount = selectedArray.length;
      this.birthdays = this.birthdays.map((birthday) =>
        birthday.personalNumber === personalNumber
          ? { ...birthday, selected: !selected }
          : birthday
      );

      console.log(!selected, personalNumber);
      console.log("count: ", selectedAmount);
      console.log(selectedArray);
      return selectedAmount;
    },
    async fetchBirthdays() {
      const res = await fetch(getBirthdaysAddress);
      const data = res.json();
      return data;
    },
  },
  async created() {
    const birthdaysData = await this.fetchBirthdays();
    this.birthdays = birthdaysData.birthdays;

    this.birthdays.forEach((birthday) => {
      if (birthday.selected === true) bdsSelected++;
    });
    console.log("selected: " + bdsSelected);
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
  background-color: rgb(159, 178, 204);
}

.container {
  width: 1700px;
  height: 916px;
  margin: 30px auto;
  /* border: 1px solid black; */
  padding: 0px;
}

.birthdayOutput {
  width: 1200px;
  height: 660px;
  margin: 12px auto;
  overflow: auto;
  /* border: 1px solid black; */
  padding: 0px;
}

.pagination {
  width: 800px;
  height: 80px;
  margin: 10px auto;
  overflow: auto;
  /* border: 1px solid black; */
  padding: 0px;
}

.button {
  display: inline-block;
  /* background:red; */
  color: black;
  font-weight: bold;
  border: 1 black;
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

