<template>
  <select-multiple-dropdown :choices="items" :placeholder="'Select modules'" />
</template>

<script setup lang="ts">
import SelectMultipleDropdown from "../../../directus/app/src/interfaces/select-multiple-dropdown/select-multiple-dropdown.vue";
import { ref } from "vue";

//TODO: get these items dynamically so that as new ones are added they become part of the list. Consider doing this with a custom endpoint, using a core directus service or a Pinia store
const items = ref([
  {
    text: "Content",
    value: "content",
  },
  {
    text: "Users",
    value: "users",
  },
  {
    text: "Files",
    value: "files",
  },
  {
    text: "Insights",
    value: "insights",
  },
  {
    text: "Documentation",
    value: "documentation",
  },
  {
    text: "Settings",
    value: "catalog",
  },
]);
</script>
