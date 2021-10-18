<template>
  <div class="Popup" v-if="isMain" :isMain="isMain">
    <div class="Popup-inner">
      <h2>🎈Welcome To Yarin's🎈</h2>
      <h3>Birthday Page!</h3>
      <button id="PopupButton" @click="enterPopup()">Enter</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { isMain: (this.isMain = true) };
  },
  methods: {
    enterPopup() {
      this.isMain = !this.isMain;
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
  background: rgb(147, 187, 226);
  border-radius: 1.5mm;
  padding: 42px;
  width: 1800px;
  height: 900px;
}

#PopupClose {
  margin-left: 70px;
  padding: 6px;
  font-size: 16px;
}

#PopupButton {
  padding: 6px;
  font-size: 35px;
  position: absolute;
  top: 520px;
  left: 920px;
  border-radius: 2.5mm;
}

#inputTitle {
  font-size: 20px;
}

h2 {
  margin-top: 100px;
  font-size: 70px;
  position: absolute;
  width: 850px;
  left: 550px;
  top: 180px;
  position: inline;
}

h3 {
  margin-top: 100px;
  font-size: 70px;
  position: absolute;
  width: 650px;
  left: 720px;
  top: 270px;
  position: inline;
}
</style>