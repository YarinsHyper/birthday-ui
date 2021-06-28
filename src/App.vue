<template>
  <div class="container">
    <Header title="Yarin's Birthday Service" />
    <div class="birthdayOutput">
      <Birthdays @toggle-modify="toggleModify" :birthdays="birthdays" />
    </div>
    <div class="pagination"></div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Birthdays from "./components/Birthdays";

export default {
  name: "App",
  components: {
    Header,
    Birthdays,
  },
  data() {
    return { birthdays: [] };
  },
  created() {
    this.birthdays = [
      {
        _id: "ObjectId(60d2c3bae3f1ccfc99e3bfa8)",
        date: "3215646123",
        personalNumber: "25819714123",
        name: "shahar",
        modify: true,
      },
      {
        _id: "ObjectId(60d2c3c7e3f1ccfc99e3bfa9)",
        date: "10022002",
        personalNumber: "322491465",
        name: "yarin",
        modify: true,
      },
      {
        _id: false,
        date: "15061990",
        personalNumber: "648876529",
        name: "yosef",
        modify: false,
      },
      {
        _id: "ObjectId(60d2c3e3e3f1ccf8698a6da69)",
        date: "28476325",
        personalNumber: "871263876",
        name: "aviel",
        modify: false,
      },
    ];
  },
  methods: {
    toggleModify(id, modify) {
      let pn = '';
      this.birthdays = this.birthdays.map((birthday) =>
        birthday._id === id
          ? { ...birthday, modify: !birthday.modify}
          : birthday
      );
      console.log(!modify);
    },
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
  border: 1px solid black;
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
