<template>
  <div class="date-picker-component p-4">
    <h2 class="text-lg font-bold mb-4">DatePicker</h2>
    <div class="flex flex-col gap-4">
      <!-- Basic -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Basic</h3>
        <Calendar v-model="date1" />
      </div>

      <!-- Date Format -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Date Format</h3>
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-4">
            <Calendar v-model="date2" dateFormat="dd/mm/yy" />
            <span>Selected: {{ date2 }}</span>
          </div>
        </div>
      </div>

      <!-- Min/Max -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Min/Max</h3>
        <div class="flex items-center gap-4">
          <Calendar v-model="date3" :minDate="minDate" :maxDate="maxDate" />
          <span>Min: -1 month, Max: +1 month</span>
        </div>
      </div>

      <!-- Multiple Selection -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Multiple Selection</h3>
        <div class="flex items-center gap-4">
          <Calendar v-model="dates" selectionMode="multiple" />
        </div>
      </div>

      <!-- Range Selection -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Range Selection</h3>
        <div class="flex items-center gap-4">
          <Calendar v-model="dateRange" selectionMode="range" />
        </div>
      </div>

      <!-- Month/Year Picker -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Month/Year Picker</h3>
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-4">
            <Calendar v-model="month" view="month" dateFormat="mm/yy" />
            <span>Month Picker</span>
          </div>
          <div class="flex items-center gap-4">
            <Calendar v-model="year" view="year" dateFormat="yy" />
            <span>Year Picker</span>
          </div>
        </div>
      </div>

      <!-- Time Picker -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Time Picker</h3>
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-4">
            <Calendar v-model="time24h" showTime />
            <span>24h Format</span>
          </div>
          <div class="flex items-center gap-4">
            <Calendar v-model="time12h" showTime hourFormat="12" />
            <span>12h Format</span>
          </div>
          <div class="flex items-center gap-4">
            <Calendar v-model="timeOnly" timeOnly />
            <span>Time Only</span>
          </div>
        </div>
      </div>

      <!-- Button Bar -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Button Bar</h3>
        <div class="flex items-center gap-4">
          <Calendar v-model="dateButton" showButtonBar />
        </div>
      </div>

      <!-- Custom Template -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Custom Template</h3>
        <Calendar v-model="dateTemplate" showButtonBar>
          <template #date="slotProps">
            <div
              class="flex items-center justify-center w-8 h-8"
              :class="{
                'bg-blue-100': isSelected(slotProps.date),
                'text-blue-700': isSelected(slotProps.date)
              }"
            >
              {{ slotProps.date.day }}
              <div v-if="hasEvent(slotProps.date)" class="w-1 h-1 bg-red-500 rounded-full absolute bottom-1"></div>
            </div>
          </template>
        </Calendar>
      </div>

      <!-- Inline -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Inline</h3>
        <Calendar v-model="dateInline" :inline="true" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Calendar from 'primevue/calendar'

// Basic
const date1 = ref<Date | null>(null)

// Date Format
const date2 = ref<Date | null>(null)

// Min/Max
const date3 = ref<Date | null>(null)
const minDate = new Date()
minDate.setMonth(minDate.getMonth() - 1)
const maxDate = new Date()
maxDate.setMonth(maxDate.getMonth() + 1)

// Multiple Selection
const dates = ref<Date[]>([])

// Range Selection
const dateRange = ref<[Date, Date] | null>(null)

// Month/Year Picker
const month = ref<Date | null>(null)
const year = ref<Date | null>(null)

// Time Picker
const time24h = ref<Date | null>(null)
const time12h = ref<Date | null>(null)
const timeOnly = ref<Date | null>(null)

// Button Bar
const dateButton = ref<Date | null>(null)

// Custom Template
const dateTemplate = ref<Date | null>(null)
const events = [
  new Date(2024, 0, 15),
  new Date(2024, 0, 20),
  new Date(2024, 1, 5)
]

const isSelected = (date: { day: number; month: number; year: number }) => {
  if (!dateTemplate.value) return false
  const d = dateTemplate.value
  return d.getDate() === date.day &&
         d.getMonth() === date.month &&
         d.getFullYear() === date.year
}

const hasEvent = (date: { day: number; month: number; year: number }) => {
  return events.some(event =>
    event.getDate() === date.day &&
    event.getMonth() === date.month &&
    event.getFullYear() === date.year
  )
}

// Inline
const dateInline = ref<Date | null>(null)
</script>

<style>
.card {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.p-calendar {
  @apply w-full sm:w-auto;
}

.p-datepicker {
  @apply bg-white border border-gray-200 rounded-lg shadow-lg;
}

.p-datepicker-header {
  @apply border-b border-gray-200 p-4;
}

.p-datepicker-calendar {
  @apply p-4;
}

.p-datepicker table td {
  @apply p-0;
}

.p-datepicker table td > span {
  @apply w-8 h-8 flex items-center justify-center rounded-full transition-colors;
}

.p-datepicker table td > span:hover {
  @apply bg-gray-100;
}

.p-datepicker table td.p-datepicker-today > span {
  @apply bg-blue-100 text-blue-700;
}

.p-datepicker table td.p-highlight > span {
  @apply bg-blue-500 text-white;
}

.p-datepicker-buttonbar {
  @apply border-t border-gray-200 p-4 flex justify-end gap-2;
}

.p-datepicker-buttonbar button {
  @apply px-4 py-2 text-sm font-medium rounded-md transition-colors;
}

.p-datepicker-buttonbar .p-button-text {
  @apply text-gray-700 hover:bg-gray-100;
}

.p-datepicker-buttonbar .p-button {
  @apply bg-blue-500 text-white hover:bg-blue-600;
}

.p-timepicker {
  @apply border-t border-gray-200 p-4;
}

.p-timepicker > div {
  @apply flex items-center justify-center gap-2;
}

.p-timepicker span {
  @apply text-gray-700;
}

.p-timepicker button {
  @apply p-1 rounded hover:bg-gray-100 transition-colors;
}

.p-datepicker-other-month > span {
  @apply text-gray-400;
}
</style>
