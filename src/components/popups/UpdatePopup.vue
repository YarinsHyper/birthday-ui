<template>
  <div class="Popup">
    <div class="Popup-inner">
      <div>
        <slot />
        <form>
          <label id="inputTitle">Name: </label>
          <input id="nameInput" type="name" required v-model="name" /><br />
          <label id="inputTitle">Date: </label>
          <input id="dateInput" type="name" required v-model="date" /><br />
          <label id="inputTitle">Personal id: </label>
          <input
            id="personalNumberInput"
            type="name"
            required
            v-model="personalNumber"
          />
        </form>
      </div>
      <div>
        <button id="PopupClose" @click="UpdateToggle">Close</button>
        <button id="PopupButton" @click="updateBirthday">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios").default;
const qs = require("qs");
const updateAddress = "http://localhost:9000/api/updateBirthday";

export default {
  props: ["UpdateToggle", "birthday"],
  data() {
    return {
      name: this.birthday.name,
      date: this.birthday.date,
      personalNumber: this.birthday.personalNumber,
    };
  },
  methods: {
    updateBirthday() {
      axios.post(
        updateAddress,
        qs.stringify({
          name: this.name,
          date: this.date,
          personalNumber: this.personalNumber,
        })
      );
      location.reload();
    },
  },
};
</script>

<style scoped>
.Popup {
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

.Popup-inner {
  background: rgb(159, 178, 204);
  border-radius: 1.5mm;
  padding: 42px;
}

#PopupClose {
  margin-left: 70px;
  padding: 6px;
  font-size: 16px;
}

#PopupButton {
  padding: 6px;
  margin-left: 20px;
  margin-top: 30px;
  font-size: 16px;
}

#inputTitle {
  font-size: 20px;
}
</style>