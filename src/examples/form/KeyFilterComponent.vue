<template>
  <div class="key-filter-component p-4">
    <h2 class="text-lg font-bold mb-4">Key Filter</h2>
    <div class="flex flex-col gap-4">
      <!-- Presets -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Presets</h3>
        <div class="flex flex-col gap-4">
          <!-- Integers -->
          <div class="field">
            <label for="integer" class="block text-sm font-medium text-gray-700 mb-1">Integers</label>
            <InputText
              id="integer"
              v-model="value1"
              keyfilter="int"
              class="w-full"
              placeholder="Only integers"
            />
          </div>

          <!-- Numbers -->
          <div class="field">
            <label for="number" class="block text-sm font-medium text-gray-700 mb-1">Numbers</label>
            <InputText
              id="number"
              v-model="value2"
              keyfilter="num"
              class="w-full"
              placeholder="Numbers"
            />
          </div>

          <!-- Money -->
          <div class="field">
            <label for="money" class="block text-sm font-medium text-gray-700 mb-1">Money</label>
            <InputText
              id="money"
              v-model="value3"
              keyfilter="money"
              class="w-full"
              placeholder="Money"
            />
          </div>
        </div>
      </div>

      <!-- Regex -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Regex</h3>
        <div class="flex flex-col gap-4">
          <!-- Hex -->
          <div class="field">
            <label for="hex" class="block text-sm font-medium text-gray-700 mb-1">Hex</label>
            <InputText
              id="hex"
              v-model="value4"
              :keyfilter="hexFilter"
              class="w-full"
              placeholder="Hex numbers"
            />
          </div>

          <!-- Alphabetic -->
          <div class="field">
            <label for="alpha" class="block text-sm font-medium text-gray-700 mb-1">Alphabetic</label>
            <InputText
              id="alpha"
              v-model="value5"
              :keyfilter="alphaFilter"
              class="w-full"
              placeholder="Alphabetic chars"
            />
          </div>

          <!-- Alphanumeric -->
          <div class="field">
            <label for="alphanum" class="block text-sm font-medium text-gray-700 mb-1">Alphanumeric</label>
            <InputText
              id="alphanum"
              v-model="value6"
              :keyfilter="alphanumFilter"
              class="w-full"
              placeholder="Alphanumeric chars"
            />
          </div>
        </div>
      </div>

      <!-- Block -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Block</h3>
        <div class="flex flex-col gap-4">
          <!-- Block Special -->
          <div class="field">
            <label for="block-special" class="block text-sm font-medium text-gray-700 mb-1">Block Special</label>
            <InputText
              id="block-special"
              v-model="value7"
              :keyfilter="blockSpecialFilter"
              class="w-full"
              placeholder="Block < > * !"
            />
          </div>

          <!-- Block Numbers -->
          <div class="field">
            <label for="block-numbers" class="block text-sm font-medium text-gray-700 mb-1">Block Numbers</label>
            <InputText
              id="block-numbers"
              v-model="value8"
              :keyfilter="blockNumbersFilter"
              class="w-full"
              placeholder="Block numbers"
            />
          </div>
        </div>
      </div>

      <!-- Function -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Function</h3>
        <div class="flex flex-col gap-4">
          <div class="field">
            <label for="custom" class="block text-sm font-medium text-gray-700 mb-1">Custom Function</label>
            <InputText
              id="custom"
              v-model="value9"
              :keyfilter="blockSpaces"
              class="w-full"
              placeholder="Block spaces"
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

// Presets
const value1: Ref<string> = ref('')
const value2: Ref<string> = ref('')
const value3: Ref<string> = ref('')

// Regex
const value4: Ref<string> = ref('')
const value5: Ref<string> = ref('')
const value6: Ref<string> = ref('')

// Block
const value7: Ref<string> = ref('')
const value8: Ref<string> = ref('')

// Function
const value9: Ref<string> = ref('')

// Regex patterns
const hexFilter = /[0-9a-f]/i
const alphaFilter = /^[a-z\s]*$/i
const alphanumFilter = /^[a-z0-9]*$/i
const blockSpecialFilter = /[^<>*!]+$/
const blockNumbersFilter = /[^0-9]+$/

// Custom filter function
const blockSpaces = (event: KeyboardEvent): boolean => {
  const key = event.key
  if (key === ' ') {
    event.preventDefault()
    return false
  }
  return true
}
</script>

<style scoped>
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
