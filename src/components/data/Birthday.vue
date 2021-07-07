<template>
  <div
    @dblclick="$emit('toggle-selected', birthday.personalNumber)"
    :class="[birthday.selected ? 'selected' : '', 'birthday']"
  >
    <h3>
      Birthday Object:
      <documentlogo
        @click="UpdateTogglePopup('buttonTrigger')"
        name="documentlogo"
        class="documentLogo"
      ></documentlogo>
      <xIcon
        @click="onDelete(birthday.personalNumber, birthday.name)"
        name="xlogo"
        class="xLogo"
      ></xIcon>
      <UpdatePopup
        v-if="updatePopupTrigger.buttonTrigger"
        :updateTogglePopup="() => UpdateTogglePopup('buttonTrigger')"
      >
        <h2>Update Birthday</h2>
      </UpdatePopup>
    </h3>
    <p>{{ "name: " + birthday.name }}</p>
    <p>{{ "date: " + birthday.date }}</p>
    <p>{{ "personalNumber: " + birthday.personalNumber }}</p>
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
  setup() {
    const updatePopupTrigger = ref({
      buttonTrigger: false,
      name: "",
      date: "",
      personalNumber: "",
    });

    const UpdateTogglePopup = (trigger, personalNumber, name, date) => {
      updatePopupTrigger.value[trigger] = !updatePopupTrigger.value[trigger];
    };
    return { UpdateTogglePopup, updatePopupTrigger };
  },
  components: {
    xIcon,
    documentlogo,
    UpdatePopup,
  },
  methods: {
    onDelete(Id, Name) {
      if (confirm(`Are you sure you want to \ndelete ${Name}'s birthday?`)) {
        axios.delete(
          `http://localhost:9000/api/deleteBirthday?personalNumber=${Id}`
        );
        location.reload();
      }
    },
  },
};
</script>

<style>
.birthday {
  background: lightslategrey;
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