<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
  <CreateButton
    @click="() => createToggle()"
    text="Create"
    color="rgb(169 172 173)"
  />
  <CreateButtonPopup v-if="isCreatePopup" :createToggle="createToggle">
    <h2>Create Birthday Info</h2>
  </CreateButtonPopup>
</template>

<script>
import CreateButton from "./buttons/CreateButton";
import CreateButtonPopup from "./popups/CreateButtonPopup";

export default {
  data() {
    const isCreatePopup = false;

    return {
      isCreatePopup,
    };
  },
  name: "Header",
  props: {
    title: String,
    color: String,
  },
  components: {
    CreateButton,
    CreateButtonPopup,
  },
  methods: {
    createToggle() {
      this.isCreatePopup = !this.isCreatePopup;
      return this.isCreatePopup;
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 31vw;
}

h2 {
  margin-bottom: 20px;
  margin-left: 20px;
}

button {
  font-size: 17px;
}
</style>