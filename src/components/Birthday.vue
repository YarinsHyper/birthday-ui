<template>
  <div
    @dblclick="$emit('toggle-modify', birthday._id, birthday.modify)"
    :class="[birthday.modify ? 'modify' : '', 'birthday']"
  >
    <h3>Birthday Object:</h3>
    <p>{{ "name: " + birthday.name }}</p>
    <p>{{ "date: " + birthday.date }}</p>
    <p>{{ "personalNumber: " + birthday.personalNumber }}</p>
    <!-- <input type="checkbox" id="modifyCheck" /> -->
  </div>
</template>

<script>
export default {
  name: "Birthday",
  props: {
    birthday: Object,
  },
};
</script>

<style>
.fas {
  color: red;
}

.birthday {
  background: lightslategrey;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 2.5mm;
}

.birthday.modify {
  border-left: 5px solid blue;
}

.birthday h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#modifyCheck {
  /* margin-left: 90%; */
  position: relative;
  left: 1070px;
  bottom: 50px;
  /* padding:20px; */
}
</style>