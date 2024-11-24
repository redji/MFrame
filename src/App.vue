<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted, getCurrentInstance } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import 'primeicons/primeicons.css'

defineOptions({
  name: 'App'
})

onMounted(() => {
  const app = getCurrentInstance()?.appContext.app
  if (app) {
    app.use(PrimeVue, {
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          dakModeSelector: 'system',
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
