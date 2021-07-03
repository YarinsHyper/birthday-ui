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
// let birthdaysNew = [];

export default {
  name: "App",
  components: {
    Header,
    Birthdays,
    Pagination,
  },
  data() {
    return { birthdays: [] };
  },
  methods: {
    toggleModify(id, modify) {
      this.birthdays = this.birthdays.map((birthday) =>
        birthday._id === id
          ? { ...birthday, modify: !birthday.modify }
          : birthday
      );
      console.log(!modify, id);
    },
    async fetchBirthdays() {
      const res = await fetch("api/birthdays");

      const data = res.json();

      return data;
    },
  },
  // async beforeMount() {
  //   let birthdaysData = [];
  //   try {
  //     birthdaysData = await axios.get(
  //       "http://localhost:9000/api/getAllBirthdays"
  //     );
  //     let newData = birthdaysData.data.birthdays;
  //     birthdaysNew = birthdaysData;
  //     birthdaysNew.forEach((birthday) => {
  //       fs.appendFile(".../db.json", birthday, function (err) {
  //         if (err) throw err;
  //         console.log("data inserted succesfully");
  //       });
  //     });
  //     console.log(newData);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
  async created() {
    this.birthdays = await this.fetchBirthdays();

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
