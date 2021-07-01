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
export default {};
</script>

<style scoped>
.pagination-button {
  padding: 9px;
  margin: 2px;
  border-radius: 3px;
  font-size: 1em;
  cursor: pointer;
  background: rgb(97, 140, 196);
  margin-left:5px;
}

.pagination-row {
  margin-left: 150px;
}
</style>