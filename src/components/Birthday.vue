<template>
  <div
    @dblclick="$emit('toggle-selected', birthday.personalNumber, birthday.selected)"
    :class="[birthday.selected ? 'selected' : '', 'birthday']"
  >
    <h3>Birthday Object:</h3>
    <p>{{ "name: " + birthday.name }}</p>
    <p>{{ "date: " + birthday.date }}</p>
    <p>{{ "personalNumber: " + birthday.personalNumber }}</p>
    <!-- <input type="checkbox" id="selectedCheck" /> -->
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
</style>