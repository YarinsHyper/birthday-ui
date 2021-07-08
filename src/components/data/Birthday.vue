<template>
  <div :class="['birthday']">
    <h3>
      Birthday Object:
      <documentlogo
        @click="updateToggle()"
        name="documentlogo"
        class="documentLogo"
      ></documentlogo>
      <xIcon @click="onDelete()" name="xlogo" class="xLogo"></xIcon>
      <UpdatePopup
        v-if="updateToggle.buttonTrigger"
        :UpdateToggle="updateToggle"
      >
        <h2>Update Birthday</h2>
      </UpdatePopup>
    </h3>
    <p>{{ "Name: " + birthday.name }}</p>
    <p>{{ "Date: " + birthday.date }}</p>
    <p>{{ "Personal Number: " + birthday.personalNumber }}</p>
  </div>
</template>

<script>
import xIcon from "../icons/XIcon";
import documentlogo from "../icons/DocumentIcon";
import UpdatePopup from "../popups/UpdatePopup";
import axios from "axios";
import { ref } from "vue";

export default {
  name: "Birthday",
  props: {
    birthday: Object,
    selected: Boolean,
  },
  state: {
    selected: false,
  },
  // setup() {
  //   const updatePopupTrigger = ref({
  //     buttonTrigger: false,
  //   });

  //   const UpdateTogglePopup = () => {
  //     const trigger = "buttonTrigger";
  //     updatePopupTrigger.value[trigger] = !updatePopupTrigger.value[trigger];
  //   };
  //   return { UpdateTogglePopup, updatePopupTrigger };
  // },
  components: {
    xIcon,
    documentlogo,
    UpdatePopup,
  },
  methods: {
    onDelete() {
      if (
        confirm(
          `Are you sure you want to \ndelete ${this.birthday.name}'s birthday?`
        )
      ) {
        axios.delete(
          `http://localhost:9000/api/deleteBirthday?personalNumber=${this.birthday.personalNumber}`
        );
        location.reload();
      }
    },
    updateToggle() {
      const updatePopupTrigger = ref({
        buttonTrigger: false,
      });
      const trigger = "buttonTrigger";
      updatePopupTrigger.value[trigger] = !updatePopupTrigger.value[trigger];
    },
  },
};
</script>

<style>
.birthday {
  background: rgb(94, 135, 175);
  border: solid 2px black;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 2.5mm;
}

.birthday.selected {
  border-left: 5px solid blue;
}

.birthday h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 25px;
}

.birthday p {
  font-size: 19px;
  margin-top: 3px;
}

#selectedCheck {
  position: relative;
  left: 1070px;
  bottom: 50px;
}

.xLogo {
  width: 30px;
}

.documentLogo {
  width: 30px;
  margin-left: 850px;
}

.birthday h2 {
  margin-bottom: 20px;
  margin-left: 50px;
  font-size: 25px;
}
</style>