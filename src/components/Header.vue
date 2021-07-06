<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
  <CreateButton
    @click="() => CreateTogglePopup('buttonTrigger')"
    text="Create"
    color="rgb(97, 140, 196)"
  />
  <UpdateButton
    @click="() => UpdateTogglePopup('buttonTrigger')"
    text="Update"
    :color="isMod ? `red` : 'rgb(97, 140, 196)'"
  />
  <GetAllButton text="Get All" color="rgb(97, 140, 196)" />
  <DeleteButton text="Delete" color="rgb(97, 140, 196)" />

  <UpdateButtonPopup
    v-if="updatePopupTrigger.buttonTrigger"
    :updateTogglePopup="() => UpdateTogglePopup('buttonTrigger')"
  >
    <h2>Update Birthday</h2>
  </UpdateButtonPopup>
  <CreateButtonPopup
    v-if="createPopupTrigger.buttonTrigger"
    :createTogglePopup="() => CreateTogglePopup('buttonTrigger')"
  >
    <h2>Create Birthday Info</h2>
  </CreateButtonPopup>
</template>

<script>
import CreateButton from "./CreateButton";
import GetAllButton from "./GetAllButton";
import UpdateButton from "./UpdateButton";
import DeleteButton from "./DeleteButton";
import CreateButtonPopup from "./CreateButtonPopup";
import UpdateButtonPopup from "./UpdateButtonPopup";
import { ref } from "vue";
import { isMod } from "../App";

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
        location.reload();
      }
    };

    const UpdateTogglePopup = (trigger) => {
      updatePopupTrigger.value[trigger] = !updatePopupTrigger.value[trigger];
    };

    return {
      CreateButtonPopup,
      UpdateButtonPopup,
      createPopupTrigger,
      updatePopupTrigger,
      CreateTogglePopup,
      UpdateTogglePopup,
      isMod,
    };
  },
  name: "Header",
  props: {
    title: String,
    color: String,
  },
  components: {
    CreateButton,
    UpdateButton,
    GetAllButton,
    DeleteButton,
    CreateButtonPopup,
    UpdateButtonPopup,
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