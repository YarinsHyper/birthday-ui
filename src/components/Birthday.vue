<template>
  <div
    @dblclick="$emit('toggle-selected', birthday.personalNumber)"
    :class="[birthday.selected ? 'selected' : '', 'birthday']"
  >
    <h3>
      Birthday Object:
      <xIcon
        @click="onDelete(birthday.personalNumber, birthday.name)"
        name="xlogo"
        class="xLogo"
      ></xIcon>
    </h3>
    <p>{{ "name: " + birthday.name }}</p>
    <p>{{ "date: " + birthday.date }}</p>
    <p>{{ "personalNumber: " + birthday.personalNumber }}</p>
  </div>
</template>

<script>
import xIcon from "./XIcon";
import axios from "axios";

export default {
  name: "Birthday",
  props: {
    birthday: Object,
    selected: Boolean,
  },
  state: {
    selected: false,
  },
  components: {
    xIcon,
  },
  methods: {
    onDelete(id,name) {
      if (confirm(`Are you sure you want to \ndelete ${name}'s birthday?`)) {
        axios.delete(
          `http://localhost:9000/api/deleteBirthday?personalNumber=${id}`
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
  /* margin-left: 90%; */
  position: relative;
  left: 1070px;
  bottom: 50px;
  /* padding:20px; */
}

.xLogo {
  width: 30px;
}
</style>