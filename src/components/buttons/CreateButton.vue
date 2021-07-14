<template>
  <button :style="{ background: color }" class="button">
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
};
</script>

<style scoped>
button {
  margin-left: 41vw;
}
</style>