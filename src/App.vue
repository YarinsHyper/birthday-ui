<template>
  <div class="container">
    <Header title="Yarin's Birthday Service" />
    <div class="birthdayOutput">
      <Birthdays @toggle-modify="toggleModify" :birthdays="birthdays" />
    </div>
    <div class="pagination">
      <Pagination />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Birthdays from "./components/Birthdays";
import Pagination from "./components/Pagination";

let modifies = 0;

export default {
  name: "App",
  components: {
    Header,
    Birthdays,
    Pagination,
  },
  data() {
    return {
      birthdays: [],
    };
  },
  methods: {
    toggleModify(personalNumber, modify) {
      this.birthdays = this.birthdays.map((birthday) =>
        birthday.personalNumber === personalNumber
          ? { ...birthday, modify: !birthday.modify }
          : birthday
      );
      console.log(!modify, personalNumber);
    },
    async fetchBirthdays() {
      const res = await fetch("http://localhost:9000/api/getAllBirthdays");
      const data = res.json();
      return data;
    },
  },
  async created() {
    const birthdaysData = await this.fetchBirthdays();
    this.birthdays = birthdaysData.birthdays;

    this.birthdays.forEach((birthday) => {
      if (birthday.modify === true) modifies++;
    });
    console.log("modify-count: " + modifies);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");

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
  height: 915px;
  margin: 30px auto;
  overflow: auto;
  /* border: 1px solid black; */
  padding: 0px;
}

.birthdayOutput {
  width: 1200px;
  height: 655px;
  margin: 15px auto;
  overflow: auto;
  /* border: 1px solid black; */
  padding: 0px;
}

.pagination {
  width: 800px;
  height: 45px;
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

