<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted, getCurrentInstance } from 'vue'
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'

defineOptions({
  name: 'App'
})

onMounted(() => {
  const app = getCurrentInstance()?.appContext.app
  if (app) {
    app.use(PrimeVue, {
      theme: {
        preset: 'none',
        options: {
          prefix: 'p',
          darkModeSelector: 'system',
          cssLayer: {
            name: 'primevue',
            order: 'tailwind-base, primevue, tailwind-utilities'
          }
        }
      }
    })
  }
})
</script>
