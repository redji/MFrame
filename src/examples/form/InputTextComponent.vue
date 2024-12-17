<template>
  <div class="input-text-component p-4">
    <h2 class="text-lg font-bold mb-4">Input Text</h2>
    <div class="flex flex-col gap-4">
      <!-- Basic -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Basic</h3>
        <div class="flex flex-col gap-4">
          <div class="field">
            <label for="basic" class="block text-sm font-medium text-gray-700 mb-1">Basic</label>
            <InputText
              id="basic"
              v-model="value1"
              aria-describedby="basic-help"
              class="w-full"
            />
            <small id="basic-help" class="block mt-1 text-gray-500">Enter your username</small>
          </div>
        </div>
      </div>

      <!-- Icons -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Icons</h3>
        <div class="flex flex-col gap-4">
          <!-- Left Icon -->
          <div class="field">
            <label for="lefticon" class="block text-sm font-medium text-gray-700 mb-1">Left Icon</label>
            <span class="p-input-icon-left w-full">
              <i class="pi pi-search" />
              <InputText
                id="lefticon"
                v-model="value2"
                placeholder="Search"
                class="w-full"
              />
            </span>
          </div>

          <!-- Right Icon -->
          <div class="field">
            <label for="righticon" class="block text-sm font-medium text-gray-700 mb-1">Right Icon</label>
            <span class="p-input-icon-right w-full">
              <i class="pi pi-spin pi-spinner" />
              <InputText
                id="righticon"
                v-model="value3"
                class="w-full"
              />
            </span>
          </div>

          <!-- Both Icons -->
          <div class="field">
            <label for="bothicons" class="block text-sm font-medium text-gray-700 mb-1">Both Icons</label>
            <span class="p-input-icon-left p-input-icon-right w-full">
              <i class="pi pi-user" />
              <i class="pi pi-search" />
              <InputText
                id="bothicons"
                v-model="value4"
                placeholder="Search"
                class="w-full"
              />
            </span>
          </div>
        </div>
      </div>

      <!-- Sizes -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Sizes</h3>
        <div class="flex flex-col gap-4">
          <!-- Small -->
          <div class="field">
            <label for="small" class="block text-sm font-medium text-gray-700 mb-1">Small</label>
            <InputText
              id="small"
              v-model="value5"
              class="w-full p-inputtext-sm"
            />
          </div>

          <!-- Normal -->
          <div class="field">
            <label for="normal" class="block text-sm font-medium text-gray-700 mb-1">Normal</label>
            <InputText
              id="normal"
              v-model="value6"
              class="w-full"
            />
          </div>

          <!-- Large -->
          <div class="field">
            <label for="large" class="block text-sm font-medium text-gray-700 mb-1">Large</label>
            <InputText
              id="large"
              v-model="value7"
              class="w-full p-inputtext-lg"
            />
          </div>
        </div>
      </div>

      <!-- Invalid -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Invalid</h3>
        <div class="flex flex-col gap-4">
          <div class="field">
            <label for="invalid" class="block text-sm font-medium text-gray-700 mb-1">Invalid</label>
            <InputText
              id="invalid"
              v-model="value8"
              :class="{ 'p-invalid': true }"
              aria-describedby="invalid-help"
              class="w-full"
            />
            <small id="invalid-help" class="p-error block mt-1">This field is required.</small>
          </div>
        </div>
      </div>

      <!-- Disabled -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Disabled</h3>
        <div class="flex flex-col gap-4">
          <div class="field">
            <label for="disabled" class="block text-sm font-medium text-gray-700 mb-1">Disabled</label>
            <InputText
              id="disabled"
              v-model="value9"
              disabled
              class="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import InputText from 'primevue/inputtext'

// Basic
const value1: Ref<string> = ref('')

// Icons
const value2: Ref<string> = ref('')
const value3: Ref<string> = ref('')
const value4: Ref<string> = ref('')

// Sizes
const value5: Ref<string> = ref('')
const value6: Ref<string> = ref('')
const value7: Ref<string> = ref('')

// Invalid
const value8: Ref<string> = ref('')

// Disabled
const value9: Ref<string> = ref('Disabled')
</script>

<style scoped>
.card {
  @apply bg-white dark:bg-gray-800;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.field {
  margin-bottom: 1rem;
}

.p-inputtext {
  padding: 0.75rem;
  @apply border border-gray-300 dark:border-gray-600;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
  @apply bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100;
}

.p-inputtext:enabled:hover {
  border-color: var(--primary-color);
}

.p-inputtext:enabled:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px var(--primary-200);
}

.p-inputtext.p-invalid {
  border-color: var(--red-500);
}

.p-inputtext.p-invalid:enabled:hover {
  border-color: var(--red-600);
}

.p-inputtext.p-invalid:enabled:focus {
  box-shadow: 0 0 0 2px var(--red-200);
}

.p-input-icon-left,
.p-input-icon-right {
  position: relative;
  display: inline-block;
}

.p-input-icon-left > i,
.p-input-icon-right > i {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  @apply text-gray-500 dark:text-gray-400;
}

.p-input-icon-left > i {
  left: 0.75rem;
}

.p-input-icon-right > i {
  right: 0.75rem;
}

.p-input-icon-left > .p-inputtext {
  padding-left: 2.5rem;
}

.p-input-icon-right > .p-inputtext {
  padding-right: 2.5rem;
}

.p-input-icon-left.p-input-icon-right > .p-inputtext {
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}

.p-inputtext-sm {
  padding: 0.5rem;
  font-size: 0.875rem;
}

.p-inputtext-lg {
  padding: 1rem;
  font-size: 1.125rem;
}

.p-error {
  color: #ef4444;
  font-size: 0.875rem;
}

/* Responsive Adjustments */
@media screen and (max-width: 640px) {
  .card {
    padding: 1rem;
  }

  .p-inputtext {
    font-size: 0.875rem;
  }
}
</style>
