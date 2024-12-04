<template>
  <div class="ifta-label-component p-4">
    <h2 class="text-lg font-bold mb-4">Input Field with Floating Label</h2>
    <div class="flex flex-col gap-4">
      <!-- Basic -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Basic</h3>
        <div class="flex flex-col gap-4">
          <span class="p-float-label">
            <InputText v-model="value1" inputId="username" />
            <label for="username">Username</label>
          </span>

          <span class="p-float-label">
            <InputText v-model="value2" inputId="email" type="email" />
            <label for="email">Email</label>
          </span>
        </div>
      </div>

      <!-- With Icons -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">With Icons</h3>
        <div class="flex flex-col gap-4">
          <span class="p-input-icon-left">
            <i class="pi pi-user" />
            <span class="p-float-label">
              <InputText v-model="value3" inputId="username-icon" />
              <label for="username-icon">Username</label>
            </span>
          </span>

          <span class="p-input-icon-right">
            <i :class="['pi', passwordIcon]" @click="togglePassword" />
            <span class="p-float-label">
              <InputText v-model="value4" :type="passwordType" inputId="password" />
              <label for="password">Password</label>
            </span>
          </span>
        </div>
      </div>

      <!-- Different Components -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Different Components</h3>
        <div class="flex flex-col gap-4">
          <!-- Textarea -->
          <span class="p-float-label">
            <Textarea v-model="value5" inputId="description" rows="3" autoResize />
            <label for="description">Description</label>
          </span>

          <!-- InputNumber -->
          <span class="p-float-label">
            <InputNumber v-model="value6" inputId="amount" mode="currency" currency="USD" />
            <label for="amount">Amount</label>
          </span>

          <!-- Calendar -->
          <span class="p-float-label">
            <Calendar v-model="value7" inputId="date" showIcon />
            <label for="date">Date</label>
          </span>

          <!-- Dropdown -->
          <span class="p-float-label">
            <Dropdown v-model="value8" inputId="country" :options="countries" optionLabel="name" />
            <label for="country">Country</label>
          </span>
        </div>
      </div>

      <!-- Validation States -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Validation States</h3>
        <div class="flex flex-col gap-4">
          <!-- Success -->
          <span class="p-float-label">
            <InputText v-model="value9" inputId="success" class="p-inputtext-success" />
            <label for="success">Success Input</label>
          </span>

          <!-- Error -->
          <span class="p-float-label">
            <InputText v-model="value10" inputId="error" class="p-invalid" />
            <small class="p-error block mt-1">This field is required.</small>
            <label for="error">Error Input</label>
          </span>

          <!-- With Helper Text -->
          <span class="p-float-label">
            <InputText v-model="value11" inputId="helper" />
            <small class="text-gray-500 block mt-1">Enter at least 8 characters</small>
            <label for="helper">With Helper</label>
          </span>
        </div>
      </div>

      <!-- Disabled State -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Disabled State</h3>
        <div class="flex flex-col gap-4">
          <span class="p-float-label">
            <InputText v-model="value12" inputId="disabled" disabled />
            <label for="disabled">Disabled Input</label>
          </span>

          <span class="p-float-label">
            <Dropdown v-model="value13" inputId="disabled-dropdown" :options="countries" optionLabel="name" disabled />
            <label for="disabled-dropdown">Disabled Dropdown</label>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import InputNumber from 'primevue/inputnumber'
import Calendar from 'primevue/calendar'
import Dropdown from 'primevue/dropdown'

interface Country {
  name: string;
  code: string;
}

// Basic
const value1 = ref<string>('')
const value2 = ref<string>('')

// With Icons
const value3 = ref<string>('')
const value4 = ref<string>('')
const showPassword = ref<boolean>(false)

const passwordType = computed((): 'text' | 'password' => showPassword.value ? 'text' : 'password')
const passwordIcon = computed((): string => showPassword.value ? 'pi-eye-slash' : 'pi-eye')

const togglePassword = (): void => {
  showPassword.value = !showPassword.value
}

// Different Components
const value5 = ref<string>('')
const value6 = ref<number | null>(null)
const value7 = ref<Date | null>(null)
const value8 = ref<Country | null>(null)

const countries = ref<Country[]>([
  { name: 'United States', code: 'US' },
  { name: 'United Kingdom', code: 'UK' },
  { name: 'Germany', code: 'DE' },
  { name: 'France', code: 'FR' },
  { name: 'Japan', code: 'JP' }
])

// Validation States
const value9 = ref<string>('Valid input')
const value10 = ref<string>('')
const value11 = ref<string>('')

// Disabled State
const value12 = ref<string>('Disabled value')
const value13 = ref<Country | null>(null)
</script>

<style>
.card {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Float Label Base Styles */
.p-float-label {
  position: relative;
  margin-bottom: 1rem;
}

.p-float-label label {
  position: absolute;
  top: 50%;
  left: 0.75rem;
  transform: translateY(-50%);
  transition: all 0.2s ease;
  color: #6c757d;
  cursor: text;
}

.p-float-label input:focus ~ label,
.p-float-label input.p-filled ~ label,
.p-float-label textarea:focus ~ label,
.p-float-label textarea.p-filled ~ label,
.p-float-label .p-inputwrapper-focus ~ label,
.p-float-label .p-inputwrapper-filled ~ label {
  top: -0.75rem;
  left: 0.75rem;
  font-size: 12px;
  background-color: white;
  padding: 0 0.25rem;
  color: #2563eb;
}

/* Icon Adjustments */
.p-input-icon-left .p-float-label label,
.p-input-icon-right .p-float-label label {
  z-index: 1;
}

.p-input-icon-left .p-float-label label {
  margin-left: 1.75rem;
}

/* Component Specific Adjustments */
.p-float-label .p-calendar .p-inputtext {
  width: 100%;
}

.p-float-label .p-dropdown {
  width: 100%;
}

.p-float-label textarea ~ label {
  top: 1rem;
}

.p-float-label textarea:focus ~ label,
.p-float-label textarea.p-filled ~ label {
  top: -0.75rem;
}

/* Input Base Styles */
.p-inputtext,
.p-dropdown,
.p-calendar input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.p-inputtext:enabled:hover,
.p-dropdown:not(.p-disabled):hover {
  border-color: #2563eb;
}

.p-inputtext:enabled:focus,
.p-dropdown:not(.p-disabled).p-focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 2px #bfdbfe;
}

/* Validation Styles */
.p-inputtext.p-inputtext-success {
  border-color: #10b981;
}

.p-inputtext.p-inputtext-success:enabled:hover {
  border-color: #059669;
}

.p-inputtext.p-inputtext-success:enabled:focus {
  box-shadow: 0 0 0 2px #a7f3d0;
}

.p-inputtext.p-invalid {
  border-color: #ef4444;
}

.p-inputtext.p-invalid:enabled:hover {
  border-color: #dc2626;
}

.p-inputtext.p-invalid:enabled:focus {
  box-shadow: 0 0 0 2px #fecaca;
}

/* Disabled Styles */
.p-inputtext:disabled,
.p-dropdown.p-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Helper Text */
.p-error {
  color: #ef4444;
  font-size: 0.875rem;
}

/* Responsive Adjustments */
@media screen and (max-width: 640px) {
  .p-float-label label {
    font-size: 0.875rem;
  }

  .p-float-label input:focus ~ label,
  .p-float-label input.p-filled ~ label,
  .p-float-label textarea:focus ~ label,
  .p-float-label textarea.p-filled ~ label,
  .p-float-label .p-inputwrapper-focus ~ label,
  .p-float-label .p-inputwrapper-filled ~ label {
    font-size: 0.75rem;
  }
}
</style>
