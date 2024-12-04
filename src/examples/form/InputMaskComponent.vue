<template>
  <div class="input-mask-component p-4">
    <h2 class="text-lg font-bold mb-4">Input Mask</h2>
    <div class="flex flex-col gap-4">
      <!-- Basic -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Basic</h3>
        <div class="flex flex-col gap-4">
          <div class="field">
            <label for="basic" class="block text-sm font-medium text-gray-700 mb-1">Basic</label>
            <InputMask
              id="basic"
              v-model="value1"
              mask="99-999999"
              placeholder="99-999999"
              class="w-full"
            />
          </div>
        </div>
      </div>

      <!-- Date -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Date</h3>
        <div class="flex flex-col gap-4">
          <div class="field">
            <label for="date" class="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <InputMask
              id="date"
              v-model="value2"
              mask="99/99/9999"
              placeholder="dd/mm/yyyy"
              slotChar="dd/mm/yyyy"
              class="w-full"
            />
          </div>
        </div>
      </div>

      <!-- Phone -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Phone</h3>
        <div class="flex flex-col gap-4">
          <div class="field">
            <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <InputMask
              id="phone"
              v-model="value3"
              mask="(999) 999-9999"
              placeholder="(999) 999-9999"
              class="w-full"
            />
          </div>
        </div>
      </div>

      <!-- Phone Ext -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Phone Ext</h3>
        <div class="flex flex-col gap-4">
          <div class="field">
            <label for="phoneext" class="block text-sm font-medium text-gray-700 mb-1">Phone Ext</label>
            <InputMask
              id="phoneext"
              v-model="value4"
              mask="(999) 999-9999? x99999"
              placeholder="(999) 999-9999? x99999"
              class="w-full"
            />
          </div>
        </div>
      </div>

      <!-- Serial Number -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Serial Number</h3>
        <div class="flex flex-col gap-4">
          <div class="field">
            <label for="serial" class="block text-sm font-medium text-gray-700 mb-1">Serial Number</label>
            <InputMask
              id="serial"
              v-model="value5"
              mask="a*-999-a999"
              placeholder="a*-999-a999"
              class="w-full"
            />
          </div>
        </div>
      </div>

      <!-- Optional Mask -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Optional Mask</h3>
        <div class="flex flex-col gap-4">
          <div class="field">
            <label for="optional" class="block text-sm font-medium text-gray-700 mb-1">Optional Mask</label>
            <InputMask
              id="optional"
              v-model="value6"
              mask="(999) 999-9999? x99999"
              placeholder="(999) 999-9999? x99999"
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
import InputMask from 'primevue/inputmask'

// Basic
const value1: Ref<string> = ref('')

// Date
const value2: Ref<string> = ref('')

// Phone
const value3: Ref<string> = ref('')

// Phone Ext
const value4: Ref<string> = ref('')

// Serial Number
const value5: Ref<string> = ref('')

// Optional Mask
const value6: Ref<string> = ref('')
</script>

<style>
.card {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.field {
  margin-bottom: 1rem;
}

.p-inputtext {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
}

.p-inputtext:enabled:hover {
  border-color: #2563eb;
}

.p-inputtext:enabled:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 2px #bfdbfe;
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
