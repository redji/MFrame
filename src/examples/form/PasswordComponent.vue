<template>
  <div class="password-component p-4">
    <h2 class="text-lg font-bold mb-4">Password</h2>
    <div class="flex flex-col gap-4">
      <!-- Basic -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Basic</h3>
        <Password v-model="value1" inputId="basic-password" />
      </div>

      <!-- Password Meter -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Password Meter</h3>
        <Password v-model="value2" :feedback="true" inputId="meter-password" />
      </div>

      <!-- Show Password -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Show Password</h3>
        <Password v-model="value3" :toggleMask="true" inputId="toggle-password" />
      </div>
      <!-- Float Label -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Float Label</h3>
        <span class="p-float-label">
          <Password v-model="value5" :feedback="false" inputId="float-password" />
          <label for="float-password">Password</label>
        </span>
      </div>

      <!-- Invalid -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Invalid</h3>
        <Password v-model="value6" class="p-invalid" :feedback="false" inputId="invalid-password" />
      </div>

      <!-- Disabled -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Disabled</h3>
        <Password v-model="value7" :disabled="true" :feedback="false" inputId="disabled-password" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Password from 'primevue/password'

interface Props {}

type Emits = {
  (e: 'update:modelValue', value: string): void
}

// Define props and emits
defineProps<Props>()
defineEmits<Emits>()

// Password values with proper typing
const value1 = ref<string>('')
const value2 = ref<string>('')
const value3 = ref<string>('')
const value5 = ref<string>('')
const value6 = ref<string>('')
const value7 = ref<string>('disabled')
</script>

<style scoped>
.card {
  @apply bg-white p-6 rounded-lg shadow-md;
}

/* Responsive Adjustments */
@media screen and (max-width: 640px) {
  .card {
    @apply p-4;
  }
}

/* Custom Password Styles */
:deep(.p-password input) {
  @apply w-full;
}

:deep(.p-password.p-invalid > .p-password-input) {
  @apply border-red-500;
}

:deep(.p-float-label) {
  @apply block relative;
}

:deep(.p-float-label label) {
  @apply absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-200 pointer-events-none;
}

:deep(.p-float-label input:focus ~ label),
:deep(.p-float-label input.p-filled ~ label) {
  @apply -top-4 left-2 text-sm bg-white px-1;
}
</style>
