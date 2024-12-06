<template>
  <div class="listbox-component p-4">
    <h2 class="text-lg font-bold mb-4">ListBox</h2>
    <div class="flex flex-col gap-4">
      <!-- Basic -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Basic</h3>
        <ListBox
          v-model="selectedCity"
          :options="cities"
          optionLabel="name"
          class="w-full md:w-14rem"
        />
      </div>

      <!-- Multiple Selection -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Multiple Selection</h3>
        <ListBox
          v-model="selectedCities"
          :options="cities"
          :multiple="true"
          :filter="true"
          optionLabel="name"
          class="w-full md:w-14rem"
        />
      </div>

      <!-- With Filter -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Filter</h3>
        <ListBox
          v-model="selectedCity2"
          :options="cities"
          :filter="true"
          optionLabel="name"
          class="w-full md:w-14rem"
        />
      </div>

      <!-- With Template -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Template</h3>
        <ListBox
          v-model="selectedCountry"
          :options="countries"
          :filter="true"
          optionLabel="name"
          class="w-full md:w-14rem"
          listStyle="max-height:250px"
        >
          <template #option="slotProps">
            <div class="flex items-center gap-2">
              <span :class="'fi fi-' + slotProps.option.code.toLowerCase()" style="font-size: 1.5rem"></span>
              <div>{{ slotProps.option.name }}</div>
            </div>
          </template>
        </ListBox>
      </div>

      <!-- Disabled -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Disabled</h3>
        <ListBox
          v-model="selectedCity3"
          :options="cities"
          optionLabel="name"
          :disabled="true"
          class="w-full md:w-14rem"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ListBox from 'primevue/listbox'

interface City {
  name: string
  code: string
}

interface Country {
  name: string
  code: string
}

// Cities data
const cities = ref<City[]>([
  { name: 'New York', code: 'NY' },
  { name: 'London', code: 'LDN' },
  { name: 'Paris', code: 'PRS' },
  { name: 'Tokyo', code: 'TKY' },
  { name: 'Berlin', code: 'BRL' }
])

// Countries data with ISO country codes
const countries = ref<Country[]>([
  { name: 'United States', code: 'us' },
  { name: 'United Kingdom', code: 'gb' },
  { name: 'France', code: 'fr' },
  { name: 'Japan', code: 'jp' },
  { name: 'Germany', code: 'de' }
])

// Selected values
const selectedCity = ref<City | null>(null)
const selectedCities = ref<City[]>([])
const selectedCity2 = ref<City | null>(null)
const selectedCity3 = ref<City | null>(null)
const selectedCountry = ref<Country | null>(null)
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
</style>
