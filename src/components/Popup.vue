<template>
  <div class="popup">
    <div class="popup-inner">
      <div>
        <slot />
        <form>
          <label id="inputTitle">Name: </label>
          <input type="name" required v-model="name" /><br />
          <label id="inputTitle">Date: </label>
          <input type="name" required v-model="date" /><br />
          <label id="inputTitle">Personal id: </label>
          <input type="name" required v-model="personalNumber" />
        </form>
      </div>
      <div>
        <button id="popupClose" @click="TogglePopup">Close</button>
        <button id="popupButton" @click="inputInfo">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios").default;
const qs = require("qs");
const url = "http://localhost:9000/api";

export default {
  props: ["TogglePopup"],
  data() {
    return {
      name: "",
      date: "",
      personalNumber: "",
    };
  },
  methods: {
    inputInfo() {
      axios.post(
        `${url}/createBirthday`,
        qs.stringify({
          name: this.name,
          date: this.date,
          personalNumber: this.personalNumber,
        })
      );
    },
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.3);

  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-inner {
  background: rgb(159, 178, 204);
  border-radius: 1.5mm;
  padding: 42px;
}

#popupClose {
  margin-left: 70px;
  padding: 6px;
  font-size: 16px;
}

#popupButton {
  padding: 6px;
  /* margin: 10px 0px; */
  margin-left: 20px;
  margin-top: 30px;
  font-size: 16px;
}

#inputTitle {
  font-size: 20px;
  /* font-weight: bold; */
}
</style>