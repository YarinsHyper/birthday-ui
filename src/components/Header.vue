<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
  <CreateButton
    @click="() => CreateTogglePopup('buttonTrigger')"
    text="Create"
    color="rgb(97, 140, 196)"
  />
  <UpdatePopup
    v-if="updatePopupTrigger.buttonTrigger"
    :updateTogglePopup="() => UpdateTogglePopup('buttonTrigger')"
  >
    <h2>Update Birthday</h2>
  </UpdatePopup>
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
import UpdatePopup from "./popups/UpdatePopup";
import { ref } from "vue";

export default {
  setup() {
    const createPopupTrigger = ref({
      buttonTrigger: false,
    });

    const updatePopupTrigger = ref({
      buttonTrigger: false,
    });

    const CreateTogglePopup = (trigger) => {
      createPopupTrigger.value[trigger] = !createPopupTrigger.value[trigger];
      if (createPopupTrigger.value[trigger] === false) {
      }
    };

    const UpdateTogglePopup = (trigger) => {
      updatePopupTrigger.value[trigger] = !updatePopupTrigger.value[trigger];
    };

    return {
      CreateButtonPopup,
      UpdatePopup,
      createPopupTrigger,
      updatePopupTrigger,
      CreateTogglePopup,
      UpdateTogglePopup,
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
    UpdatePopup,
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