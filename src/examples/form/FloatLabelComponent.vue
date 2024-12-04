<template>
  <div class="float-label-component p-4">
    <h2 class="text-lg font-bold mb-4">Float Label</h2>
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
            <Password
              v-model="value2"
              inputId="password"
              :feedback="true"
              toggleMask
            >
              <template #footer>
                <div class="p-password-meter">
                  <div :class="['p-password-strength', strengthClass]"></div>
                </div>
                <div class="p-password-info">{{ strengthText }}</div>
              </template>
            </Password>
            <label for="password">Password</label>
          </span>
        </div>
      </div>

      <!-- Text Area -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Text Area</h3>
        <span class="p-float-label">
          <Textarea
            v-model="value3"
            inputId="description"
            rows="4"
            autoResize
          />
          <label for="description">Description</label>
        </span>
      </div>

      <!-- Number -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Number</h3>
        <span class="p-float-label">
          <InputNumber
            v-model="value4"
            inputId="amount"
            mode="currency"
            currency="USD"
          />
          <label for="amount">Amount</label>
        </span>
      </div>

      <!-- Dropdown -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Dropdown</h3>
        <span class="p-float-label">
          <Dropdown
            v-model="selectedCity"
            inputId="city"
            :options="cities"
            optionLabel="name"
            placeholder="Select a City"
            :filter="true"
          />
          <label for="city">City</label>
        </span>
      </div>

      <!-- MultiSelect -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">MultiSelect</h3>
        <span class="p-float-label">
          <MultiSelect
            v-model="selectedCountries"
            inputId="countries"
            :options="countries"
            optionLabel="name"
            placeholder="Select Countries"
            :filter="true"
            display="chip"
          />
          <label for="countries">Countries</label>
        </span>
      </div>

      <!-- Calendar -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Calendar</h3>
        <span class="p-float-label">
          <Calendar
            v-model="date"
            inputId="birthday"
            v-bind="calendarProps"
          />
          <label for="birthday">Birthday</label>
        </span>
      </div>

      <!-- Chips -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Chips</h3>
        <span class="p-float-label">
          <Chips
            v-model="values"
            inputId="tags"
            v-bind="chipsProps"
          />
          <label for="tags">Tags</label>
        </span>
      </div>

      <!-- Input Mask -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Input Mask</h3>
        <span class="p-float-label">
          <InputMask
            v-model="phone"
            inputId="phone"
            mask="(999) 999-9999"
            v-bind="maskProps"
          />
          <label for="phone">Phone</label>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Textarea from 'primevue/textarea'
import InputNumber from 'primevue/inputnumber'
import Dropdown from 'primevue/dropdown'
import MultiSelect from 'primevue/multiselect'
import Calendar from 'primevue/calendar'
import Chips from 'primevue/chips'
import InputMask from 'primevue/inputmask'

// Basic
const value1 = ref('')
const value2 = ref('')

// Password strength
const strengthClass = computed(() => {
  const length = value2.value.length
  if (length === 0) return ''
  if (length < 8) return 'weak'
  if (length < 12) return 'medium'
  return 'strong'
})

const strengthText = computed(() => {
  switch (strengthClass.value) {
    case 'weak':
      return 'Weak - Add more characters'
    case 'medium':
      return 'Medium - Add special characters'
    case 'strong':
      return 'Strong password'
    default:
      return 'Enter a password'
  }
})

// Text Area
const value3 = ref('')

// Number
const value4 = ref<number | null>(null)

// Dropdown
interface City {
  name: string
  code: string
}

const cities = ref<City[]>([
  { name: 'New York', code: 'NY' },
  { name: 'London', code: 'LDN' },
  { name: 'Paris', code: 'PRS' },
  { name: 'Tokyo', code: 'TKY' }
])
const selectedCity = ref<City | null>(null)

// MultiSelect
interface Country {
  name: string
  code: string
}

const countries = ref<Country[]>([
  { name: 'United States', code: 'US' },
  { name: 'United Kingdom', code: 'UK' },
  { name: 'Germany', code: 'DE' },
  { name: 'Japan', code: 'JP' },
  { name: 'France', code: 'FR' }
])
const selectedCountries = ref<Country[]>([])

// Calendar
const date = ref<Date | null>(null)
const calendarProps = {
  showIcon: true,
  dateFormat: 'dd/mm/yy'
}

// Chips
const values = ref<string[]>([])
const chipsProps = {
  addOnBlur: true,
  separator: ','
}

// Input Mask
const phone = ref('')
const maskProps = {
  placeholder: '(999) 999-9999',
  slotChar: '_'
}
</script>

<style>
.card {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Float Label Styles */
.p-float-label {
  position: relative;
  display: block;
}

.p-float-label label {
  position: absolute;
  pointer-events: none;
  top: 50%;
  left: 0.75rem;
  transform-origin: 0 0;
  transition: all 0.2s ease;
  color: #6c757d;
  transform: translateY(-50%);
}

.p-float-label textarea ~ label {
  top: 1rem;
}

.p-float-label input:focus ~ label,
.p-float-label input.p-filled ~ label,
.p-float-label textarea:focus ~ label,
.p-float-label textarea.p-filled ~ label,
.p-float-label .p-inputwrapper-focus ~ label,
.p-float-label .p-inputwrapper-filled ~ label {
  top: -0.75rem;
  font-size: 12px;
  color: var(--primary-color, #3B82F6);
}

.p-float-label .p-placeholder,
.p-float-label input::placeholder,
.p-float-label textarea::placeholder {
  opacity: 0;
}

/* Component specific adjustments */
.p-float-label .p-password-input {
  width: 100%;
}

.p-float-label .p-dropdown,
.p-float-label .p-multiselect {
  width: 100%;
}

.p-float-label .p-multiselect-label {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.p-float-label .p-calendar .p-inputtext {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.p-float-label .p-chips .p-chips-multiple-container {
  padding-top: 0.5rem;
  padding-bottom: 0.25rem;
  min-height: 43px;
}

.p-float-label .p-inputmask {
  width: 100%;
}

/* Input Styles */
.p-inputtext,
.p-password-input,
.p-dropdown,
.p-multiselect,
.p-calendar .p-inputtext,
.p-chips .p-chips-multiple-container,
.p-inputmask {
  padding: 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 6px;
  width: 100%;
  transition: all 0.2s ease;
}

.p-inputtext:enabled:hover,
.p-password-input:enabled:hover,
.p-dropdown:not(.p-disabled):hover,
.p-multiselect:not(.p-disabled):hover,
.p-calendar .p-inputtext:enabled:hover,
.p-chips .p-chips-multiple-container:hover,
.p-inputmask:enabled:hover {
  border-color: #2563eb;
}

.p-inputtext:enabled:focus,
.p-password-input:enabled:focus,
.p-dropdown:not(.p-disabled).p-focus,
.p-multiselect:not(.p-disabled).p-focus,
.p-calendar .p-inputtext:enabled:focus,
.p-chips .p-chips-multiple-container.p-focus,
.p-inputmask:enabled:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 2px #bfdbfe;
}

/* Panel Styles */
.p-dropdown-panel,
.p-multiselect-panel {
  background: white;
  border: 1px solid #ced4da;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.p-dropdown-items,
.p-multiselect-items {
  padding: 0.5rem 0;
}

.p-dropdown-item,
.p-multiselect-item {
  padding: 0.75rem 1rem;
  margin: 0;
  border: 0 none;
  color: #495057;
  transition: all 0.2s ease;
}

.p-dropdown-item:hover,
.p-multiselect-item:hover {
  background: #f8f9fa;
}

.p-dropdown-item.p-highlight,
.p-multiselect-item.p-highlight {
  background: #e0f2fe;
  color: #0284c7;
}

/* Multiline Input Adjustments */
.p-float-label textarea.p-inputtextarea {
  min-height: 120px;
  resize: vertical;
}

.p-float-label .p-chips .p-chips-multiple-container .p-chips-token {
  margin: 2px;
  padding: 2px 8px;
  background: #e0f2fe;
  color: #0284c7;
  border-radius: 4px;
}

/* Password Panel */
.p-password-panel {
  background: white;
  padding: 1rem;
  border: 1px solid #ced4da;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.p-password-meter {
  margin-top: 0.5rem;
}

.p-password-info {
  font-size: 0.875rem;
  color: #6c757d;
  margin-top: 0.25rem;
}

/* Calendar Panel Adjustments */
.p-calendar-panel {
  background: white;
  border: 1px solid #ced4da;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.p-datepicker {
  padding: 0.5rem;
}

.p-datepicker table {
  font-size: 0.875rem;
  margin: 0.5rem 0;
}

.p-datepicker table td {
  padding: 0.25rem;
}

.p-datepicker table td > span {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.p-datepicker table td > span:hover {
  background: #f8f9fa;
}

.p-datepicker table td > span.p-highlight {
  background: #e0f2fe;
  color: #0284c7;
}

/* Input Icons */
.p-float-label .p-input-icon-right > i,
.p-float-label .p-input-icon-left > i {
  margin-top: -0.5rem;
}

.p-float-label .p-input-icon-left > input {
  padding-left: 2.5rem;
}

.p-float-label .p-input-icon-right > input {
  padding-right: 2.5rem;
}

/* Validation States */
.p-float-label .p-invalid {
  border-color: #ef4444;
}

.p-float-label .p-invalid:enabled:hover {
  border-color: #dc2626;
}

.p-float-label .p-invalid:enabled:focus {
  box-shadow: 0 0 0 2px #fecaca;
}

/* Disabled States */
.p-float-label .p-disabled,
.p-float-label .p-component:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Responsive Adjustments */
@media screen and (max-width: 640px) {
  .p-float-label .p-calendar,
  .p-float-label .p-dropdown,
  .p-float-label .p-multiselect {
    width: 100%;
  }

  .p-datepicker table {
    font-size: 0.75rem;
  }

  .p-datepicker table td > span {
    width: 1.75rem;
    height: 1.75rem;
  }
}

/* Password Strength Meter */
.p-password-strength {
  height: 4px;
  margin-top: 0.5rem;
  border-radius: 2px;
  transition: all 0.2s ease;
}

.p-password-strength.weak {
  background: #ef4444;
  width: 33%;
}

.p-password-strength.medium {
  background: #f59e0b;
  width: 66%;
}

.p-password-strength.strong {
  background: #10b981;
  width: 100%;
}
</style>
