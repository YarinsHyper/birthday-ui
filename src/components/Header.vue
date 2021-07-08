<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
  <CreateButton
    @click="() => CreateTogglePopup('buttonTrigger')"
    text="Create"
    color="rgb(169 172 173)"
  />
  <CreateButtonPopup
    v-if="createPopupTrigger.buttonTrigger"
    :createTogglePopup="() => CreateTogglePopup('buttonTrigger')"
  >
    <h2>Create Birthday Info</h2>
  </CreateButtonPopup>
</template>

<script>
import CreateButton from "./buttons/CreateButton";
import CreateButtonPopup from "./popups/CreateButtonPopup";
import { ref } from "vue";

export default {
  setup() {
    const createPopupTrigger = ref({
      buttonTrigger: false,
    });

    const CreateTogglePopup = (trigger) => {
      createPopupTrigger.value[trigger] = !createPopupTrigger.value[trigger];
      if (createPopupTrigger.value[trigger] === false) {
      }
    };

    return {
      CreateButtonPopup,
      createPopupTrigger,
      CreateTogglePopup,
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