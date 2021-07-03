<template>
  <button @click="onClick()" :style="{ background: color }" class="button">
    {{ text }}
  </button>
</template>

<script>

export default {
  name: "updateButton",
  props: {
    text: String,
    color: String,
  },
  methods: {
    onClick() {
      console.log("Update Button Pressed!");
    },
  },
};
</script>

<style scoped>
button {
  margin-left: 3vw;
}
</style>