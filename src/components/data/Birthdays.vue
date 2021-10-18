<template>
  <div :key="birthday.personalNumber" v-for="birthday in birthdays">
    <Birthday :birthday="birthday" />
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
};
</script>
