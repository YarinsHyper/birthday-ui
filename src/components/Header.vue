<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
  <CreateButton
    @click="() => TogglePopup('buttonTrigger')"
    text="Create"
    color="rgb(97, 140, 196)"
  />

  <Popup
    v-if="popupTriggers.buttonTrigger"
    :TogglePopup="() => TogglePopup('buttonTrigger')"
  >
    <h2>Create Birthday Info</h2>

    <!-- <label for="date">date:</label><br>
    <input type="fname" />
    <label for="personalNumber">First name:</label><br>
    <input type="personal-number" /> -->
  </Popup>
  <UpdateButton text="Update" color="rgb(97, 140, 196)" />
  <DeleteButton text="Delete" color="rgb(97, 140, 196)" />
</template>

<script>
import CreateButton from "./CreateButton";
import UpdateButton from "./UpdateButton";
import DeleteButton from "./DeleteButton";
import Popup from "./Popup";
import { ref } from "vue";

export default {
  setup() {
    const popupTriggers = ref({
      buttonTrigger: false,
    });

    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };

    return {
      Popup,
      popupTriggers,
      TogglePopup,
    };
  },
  name: "Header",
  props: {
    title: String,
  },
  components: {
    CreateButton,
    UpdateButton,
    DeleteButton,
    Popup,
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
</style>