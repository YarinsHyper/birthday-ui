<template>
  <div>
    <div class="pagination-row">
      <button class="pagination-button">Previous</button>
      <span v-for="(item, index) in new Array(10)" :key="index">
        <button class="pagination-button">{{ index + 1 }}</button>
      </span>
      <button class="pagination-button">Next</button>
    </div>
    <slot />
  </div>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

export default {
  state: {
    birthdays: [],
  },
  mutations: {
    loadBirthdays(state, birthdatLoad) {
      state.birthdays;
    },
  },
  actions: {
    loadBirth(context) {
      axios
        .get("http://localhost:9000/api/getAllBirthdays")
        .then((repsonse) => {
          let reversed = response.data.birthdays.reverse();
          context.commit("loadBirthdays", reversed);
        });
    },
  },
  getters: {
    birth: (state) => state.birthdays,
  },
};
</script>

<style scoped>
.pagination-button {
  padding: 9px;
  margin: 5px;
  border-radius: 3px;
  font-size: 18px;
  cursor: pointer;
  background: rgb(97, 140, 196);
  margin-left: 5px;
}

.pagination-row {
  margin-top: 20px;
  margin-left: 150px;
}
</style>