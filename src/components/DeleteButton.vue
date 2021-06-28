<template>
  <button :style="{ background: color }" class="button">{{ text }}</button>
</template>

<script>
export default {
  name: "deleteButton",
  props: {
    text: String,
    color: String,
  },
};
</script>

<style scoped>
button {
  margin-left: 3vw;
}
</style>