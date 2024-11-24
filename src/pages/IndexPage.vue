<template>
  <q-page class="row">
   <CategoriesComponent />
  </q-page>
</template>

<script setup lang="ts">
import CategoriesComponent from '../components/CategoriesComponent.vue'

defineOptions({
  name: 'IndexPage'
})
</script>
