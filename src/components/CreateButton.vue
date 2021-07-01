<template>
  <button @click="onClick()" :style="{ background: color }" class="button">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "createButton",
  props: {
    text: String,
    color: String,
  },
  methods: {
    onClick() {
      console.log("Create Button Pressed!");
    },
  },
};
</script>

<style scoped>
button {
  margin-left: 34vw;
}
</style>