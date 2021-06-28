<template>
  <div :key="birthday._id" v-for="birthday in birthdays">
    <Birthday
      @toggle-modify="$emit('toggle-modify', birthday._id, birthday.modify)"
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
  emits: ["toggle-modify"],
};
</script>
