<template>
  <div class="input-otp-component p-4">
    <h2 class="text-lg font-bold mb-4">Input OTP</h2>
    <div class="flex flex-col gap-4">
      <!-- Basic -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Basic</h3>
        <div class="flex flex-col gap-4">
          <div class="field">
            <label for="basic" class="block text-sm font-medium text-gray-700 mb-1">Basic</label>
            <div class="flex gap-2 justify-center">
              <input
                v-for="(digit, index) in 4"
                :key="index"
                type="text"
                :id="`basic-${index}`"
                v-model="values.basic[index]"
                maxlength="1"
                class="otp-input"
                @input="handleInput($event, index, 'basic')"
                @keydown="handleKeydown($event, index, 'basic')"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- With Mask -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">With Mask</h3>
        <div class="flex flex-col gap-4">
          <div class="field">
            <label for="masked" class="block text-sm font-medium text-gray-700 mb-1">Masked Input</label>
            <div class="flex gap-2 justify-center">
              <input
                v-for="(digit, index) in 4"
                :key="index"
                type="password"
                :id="`masked-${index}`"
                v-model="values.masked[index]"
                maxlength="1"
                class="otp-input"
                @input="handleInput($event, index, 'masked')"
                @keydown="handleKeydown($event, index, 'masked')"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- With Separator -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">With Separator</h3>
        <div class="flex flex-col gap-4">
          <div class="field">
            <label for="separator" class="block text-sm font-medium text-gray-700 mb-1">With Separator</label>
            <div class="flex gap-2 items-center justify-center">
              <template v-for="(digit, index) in 4" :key="index">
                <input
                  type="text"
                  :id="`separator-${index}`"
                  v-model="values.separator[index]"
                  maxlength="1"
                  class="otp-input"
                  @input="handleInput($event, index, 'separator')"
                  @keydown="handleKeydown($event, index, 'separator')"
                />
                <span v-if="index < 3" class="otp-separator">-</span>
              </template>
            </div>
          </div>
        </div>
      </div>

      <!-- With Validation -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">With Validation</h3>
        <div class="flex flex-col gap-4">
          <div class="field">
            <label for="validation" class="block text-sm font-medium text-gray-700 mb-1">With Validation</label>
            <div class="flex gap-2 justify-center">
              <input
                v-for="(digit, index) in 4"
                :key="index"
                type="text"
                :id="`validation-${index}`"
                v-model="values.validation[index]"
                maxlength="1"
                :class="['otp-input', { 'p-invalid': isInvalid }]"
                @input="handleInput($event, index, 'validation')"
                @keydown="handleKeydown($event, index, 'validation')"
              />
            </div>
            <small class="p-error block mt-1" v-if="isInvalid">Invalid OTP code</small>
          </div>
        </div>
      </div>

      <!-- Custom Style -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Custom Style</h3>
        <div class="flex flex-col gap-4">
          <div class="field">
            <label for="custom" class="block text-sm font-medium text-gray-700 mb-1">Custom Style</label>
            <div class="flex gap-2 justify-center">
              <input
                v-for="(digit, index) in 4"
                :key="index"
                type="text"
                :id="`custom-${index}`"
                v-model="values.custom[index]"
                maxlength="1"
                class="otp-input custom-otp"
                @input="handleInput($event, index, 'custom')"
                @keydown="handleKeydown($event, index, 'custom')"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { Ref } from 'vue'

interface OtpValues {
  basic: string[];
  masked: string[];
  separator: string[];
  validation: string[];
  custom: string[];
}

// Initialize values object with empty arrays
const values = reactive<OtpValues>({
  basic: Array(4).fill(''),
  masked: Array(4).fill(''),
  separator: Array(4).fill(''),
  validation: Array(4).fill(''),
  custom: Array(4).fill('')
})

const isInvalid: Ref<boolean> = ref(false)

// Handle input for each digit
const handleInput = (event: Event, index: number, type: keyof OtpValues) => {
  const input = event.target as HTMLInputElement
  const value = input.value

  // Ensure only numbers
  if (!/^\d*$/.test(value)) {
    input.value = ''
    return
  }

  // Move to next input if available
  if (value && index < 3) {
    const nextInput = document.getElementById(`${type}-${index + 1}`)
    nextInput?.focus()
  }

  // Check for completion in validation example
  if (type === 'validation') {
    const fullValue = values.validation.join('')
    if (fullValue.length === 4) {
      isInvalid.value = fullValue !== '1234'
    }
  }
}

// Handle backspace and arrow keys
const handleKeydown = (event: KeyboardEvent, index: number, type: keyof OtpValues) => {
  if (event.key === 'Backspace' && index > 0 && !(event.target as HTMLInputElement).value) {
    const prevInput = document.getElementById(`${type}-${index - 1}`)
    prevInput?.focus()
  } else if (event.key === 'ArrowLeft' && index > 0) {
    const prevInput = document.getElementById(`${type}-${index - 1}`)
    prevInput?.focus()
  } else if (event.key === 'ArrowRight' && index < 3) {
    const nextInput = document.getElementById(`${type}-${index + 1}`)
    nextInput?.focus()
  }
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

.otp-input {
  width: 3rem;
  height: 3rem;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
  -moz-appearance: textfield;
}

.otp-input::-webkit-outer-spin-button,
.otp-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.otp-input:enabled:hover {
  border-color: #2563eb;
}

.otp-input:enabled:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 2px #bfdbfe;
}

.otp-input.p-invalid {
  border-color: #ef4444;
}

.otp-input.p-invalid:enabled:hover {
  border-color: #dc2626;
}

.otp-input.p-invalid:enabled:focus {
  box-shadow: 0 0 0 2px #fecaca;
}

.otp-separator {
  font-size: 1.25rem;
  font-weight: 600;
  color: #6b7280;
}

.custom-otp {
  background-color: #f3f4f6;
  border: 2px solid #9ca3af;
  border-radius: 1rem;
  color: #1f2937;
  font-family: monospace;
}

.custom-otp:enabled:hover {
  border-color: #4b5563;
  background-color: #e5e7eb;
}

.custom-otp:enabled:focus {
  border-color: #3b82f6;
  background-color: white;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

.p-error {
  color: #ef4444;
  font-size: 0.875rem;
}

/* Responsive Adjustments */
@media screen and (max-width: 640px) {
  .otp-input {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1rem;
  }

  .card {
    padding: 1rem;
  }
}
</style>
