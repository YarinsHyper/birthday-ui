<template>
  <div :key="birthday.personalNumber" v-for="birthday in birthdays">
    <Birthday
      @toggle-selected="$emit('toggle-selected', birthday.personalNumber, birthday.selected)"
      :birthday="birthday"
    />
  </div>
</template>

<script>
import Birthday from "./Birthday";

export default {
  name: "Birthdays",
  props: {
    birthdays: Array,
  },
  components: {
    Birthday,
  },
  emits: ["toggle-selected"],
};
</script>
