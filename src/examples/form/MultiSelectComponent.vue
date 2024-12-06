<template>
  <div class="multiselect-component p-4">
    <h2 class="text-lg font-bold mb-4">MultiSelect</h2>
    <div class="flex flex-col gap-4">
      <!-- Basic -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Basic</h3>
        <MultiSelect
          v-model="selectedCities1"
          :options="cities"
          optionLabel="name"
          placeholder="Select Cities"
          class="w-full md:w-20rem"
        />
      </div>

      <!-- Chips -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Chips</h3>
        <MultiSelect
          v-model="selectedCities2"
          :options="cities"
          optionLabel="name"
          placeholder="Select Cities"
          :display="'chip'"
          class="w-full md:w-20rem"
        />
      </div>

      <!-- Template -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Template</h3>
        <MultiSelect
          v-model="selectedCountries"
          :options="countries"
          optionLabel="name"
          placeholder="Select Countries"
          class="w-full md:w-20rem"
        >
          <template #option="slotProps">
            <div class="flex items-center gap-2">
              <i :class="'flag flag-' + slotProps.option.code.toLowerCase()" style="width: 1.5rem"></i>
              <div>{{ slotProps.option.name }}</div>
            </div>
          </template>
          <template #value="slotProps">
            <div class="flex flex-wrap gap-2">
              <template v-if="slotProps.value && slotProps.value.length > 0">
                <div v-for="item in slotProps.value" :key="item.code" class="flex items-center gap-1">
                  <i :class="'flag flag-' + item.code.toLowerCase()" style="width: 1.5rem"></i>
                  <span>{{ item.name }}</span>
                </div>
              </template>
              <div v-else>Select Countries</div>
            </div>
          </template>
        </MultiSelect>
      </div>

      <!-- Groups -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Groups</h3>
        <MultiSelect
          v-model="selectedGroupedCities"
          :options="groupedCities"
          optionLabel="name"
          optionGroupLabel="label"
          optionGroupChildren="items"
          placeholder="Select Cities"
          class="w-full md:w-20rem"
        />
      </div>

      <!-- Virtual Scroll -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Virtual Scroll (100k Items)</h3>
        <MultiSelect
          v-model="selectedItems"
          :options="items"
          optionLabel="label"
          placeholder="Select Items"
          :virtualScrollerOptions="{ itemSize: 43 }"
          class="w-full md:w-20rem"
        />
      </div>

      <!-- Filter -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Filter</h3>
        <MultiSelect
          v-model="selectedCities3"
          :options="cities"
          optionLabel="name"
          placeholder="Select Cities"
          :filter="true"
          class="w-full md:w-20rem"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MultiSelect from 'primevue/multiselect'

interface City {
  name: string
  code: string
}

interface Country {
  name: string
  code: string
}

interface GroupedCity {
  label: string
  code: string
  items: City[]
}

// Cities data
const cities = ref<City[]>([
  { name: 'New York', code: 'NY' },
  { name: 'London', code: 'LDN' },
  { name: 'Paris', code: 'PRS' },
  { name: 'Tokyo', code: 'TKY' },
  { name: 'Berlin', code: 'BRL' },
  { name: 'Rome', code: 'RM' },
  { name: 'Madrid', code: 'MD' }
])

// Countries data
const countries = ref<Country[]>([
  { name: 'United States', code: 'us' },
  { name: 'United Kingdom', code: 'gb' },
  { name: 'France', code: 'fr' },
  { name: 'Japan', code: 'jp' },
  { name: 'Germany', code: 'de' },
  { name: 'Italy', code: 'it' },
  { name: 'Spain', code: 'es' }
])

// Grouped Cities data
const groupedCities = ref<GroupedCity[]>([
  {
    label: 'North America',
    code: 'NA',
    items: [
      { name: 'New York', code: 'NY' },
      { name: 'Los Angeles', code: 'LA' },
      { name: 'Chicago', code: 'CHI' }
    ]
  },
  {
    label: 'Europe',
    code: 'EU',
    items: [
      { name: 'London', code: 'LDN' },
      { name: 'Paris', code: 'PRS' },
      { name: 'Berlin', code: 'BRL' }
    ]
  },
  {
    label: 'Asia',
    code: 'AS',
    items: [
      { name: 'Tokyo', code: 'TKY' },
      { name: 'Seoul', code: 'SEO' },
      { name: 'Shanghai', code: 'SH' }
    ]
  }
])

// Generate 100k items for virtual scroll
const items = ref(Array.from({ length: 100000 }).map((_, i) => ({
  label: `Item #${i}`,
  value: i
})))

// Selected values
const selectedCities1 = ref<City[]>([])
const selectedCities2 = ref<City[]>([])
const selectedCities3 = ref<City[]>([])
const selectedCountries = ref<Country[]>([])
const selectedGroupedCities = ref<City[]>([])
const selectedItems = ref([])
</script>

<style scoped>
.card {
  @apply bg-white p-6 rounded-lg shadow-md;
}

/* Flag icons */
.flag {
  display: inline-block;
  position: relative;
  width: 1.5rem;
  height: 1rem;
  background-size: contain;
  background-position: 50%;
  background-repeat: no-repeat;
}

.flag-us {
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjM1IDY1MCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KPGRlZnM+DQo8ZyBpZD0idW5pb24iPg0KPHVzZSB5PSItLjIxNiIgeGxpbms6aHJlZj0iI3g0Ii8+DQo8dXNlIHk9Ii0uMjE2IiB4bGluazpocmVmPSIjeDUiLz4NCjx1c2UgeT0iLjIxNiIgeGxpbms6aHJlZj0iI3M2Ii8+DQo8L2c+DQo8ZyBpZD0ieDQiPg0KPHVzZSB4bGluazpocmVmPSIjczYiLz4NCjx1c2UgeT0iLjA1NCIgeGxpbms6aHJlZj0iI3N0YXIiLz4NCjx1c2UgeT0iLjEwOCIgeGxpbms6aHJlZj0iI3M2Ii8+DQo8dXNlIHk9Ii4xNjIiIHhsaW5rOmhyZWY9IiNzdGFyIi8+DQo8L2c+DQo8ZyBpZD0ieDUiPg0KPHVzZSB4PSIuMDYzIiB4bGluazpocmVmPSIjc3RhciIvPg0KPHVzZSB4PSIuMTI2IiB4bGluazpocmVmPSIjc3RhciIvPg0KPHVzZSB4PSIuMTg5IiB4bGluazpocmVmPSIjc3RhciIvPg0KPHVzZSB4PSIuMjUyIiB4bGluazpocmVmPSIjc3RhciIvPg0KPHVzZSB4PSIuMzE1IiB4bGluazpocmVmPSIjc3RhciIvPg0KPC9nPg0KPGcgaWQ9InM2Ij4NCjx1c2UgeD0iLjA2MyIgeGxpbms6aHJlZj0iI3M1Ii8+DQo8dXNlIHg9Ii4xMjYiIHhsaW5rOmhyZWY9IiNzNSIvPg0KPHVzZSB4PSIuMTg5IiB4bGluazpocmVmPSIjczUiLz4NCjx1c2UgeD0iLjI1MiIgeGxpbms6aHJlZj0iI3M1Ii8+DQo8dXNlIHg9Ii4zMTUiIHhsaW5rOmhyZWY9IiNzNSIvPg0KPC9nPg0KPGcgaWQ9InM1Ij4NCjx1c2UgeD0iLS4yNTIiIHhsaW5rOmhyZWY9IiNzdGFyIi8+DQo8dXNlIHg9Ii0uMTI2IiB4bGluazpocmVmPSIjc3RhciIvPg0KPHVzZSB4bGluazpocmVmPSIjc3RhciIvPg0KPHVzZSB4PSIuMTI2IiB4bGluazpocmVmPSIjc3RhciIvPg0KPHVzZSB4PSIuMjUyIiB4bGluazpocmVmPSIjc3RhciIvPg0KPC9nPg0KPHBhdGggZmlsbD0iI2ZmZiIgaWQ9InN0YXIiIGQ9Ik0wLC4zMjVsLjI5NC0uMjA3TC4yMzYtLjA3OGwuMjM2LS4wNzhMLjI5NCwuMTE4TC41ODgsLjMyNUwuMjk0LC4yMDdMLjAwMCwuMzI1TC4yMzYsLjExOEwuMjM2LS4wNzhaIi8+DQo8L2RlZnM+DQo8cGF0aCBmaWxsPSIjYjIyMjM0IiBkPSJtMCwwaDEyMzV2NjUwSDB6Ii8+DQo8cGF0aCBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iNTAiIGQ9Im0wLDc1aDEyMzVtMCwxNTBoLTEyMzVtMCwxNTBoMTIzNW0wLDE1MGgtMTIzNSIvPg0KPHJlY3QgZmlsbD0iIzNjM2I2ZSIgd2lkdGg9IjQ5NCIgaGVpZ2h0PSIzNTAiLz4NCjx1c2UgeGxpbms6aHJlZj0iI3VuaW9uIiB0cmFuc2Zvcm09Im1hdHJpeCg2NTAgMCAwIDY1MCAyNDcgMTc1KSIvPg0KPC9zdmc+DQo=');
}

.flag-gb {
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCAzMCI+DQo8Y2xpcFBhdGggaWQ9InQiPg0KPHBhdGggZD0iTTMwLDE1aDMwdjE1ek0wLDB2MTVoMzB6Ii8+DQo8L2NsaXBQYXRoPg0KPHBhdGggZD0iTTAsMHY0LjVMNTMuMTMsMzBINjB2LTQuNUw2Ljg3LDBIMHptNjAsMHY0LjVMNi44NywzMEgwdi00LjVMNTMuMTMsMEg2MHoiIGZpbGw9IiMwMDI0N2QiLz4NCjxwYXRoIGQ9Ik0wLDBsNjAsMzBtMC0zMEwwLDMwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iNiIvPg0KPHBhdGggZD0iTTAsMGw2MCwzMG0wLTMwTDAsMzAiIGNsaXAtcGF0aD0idXJsKCN0KSIgc3Ryb2tlPSIjY2YxNDJiIiBzdHJva2Utd2lkdGg9IjQiLz4NCjxwYXRoIGQ9Ik0zMCwwdjMwTTAsMTVoNjAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxMCIvPg0KPHBhdGggZD0iTTMwLDB2MzBNMCwxNWg2MCIgc3Ryb2tlPSIjY2YxNDJiIiBzdHJva2Utd2lkdGg9IjYiLz4NCjwvc3ZnPg0K');
}

.flag-fr {
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5MDAgNjAwIj4NCjxwYXRoIGZpbGw9IiNlZDI5MzkiIGQ9Im0wLDBoOTAwdjYwMGgtOTAweiIvPg0KPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTAsMGg2MDB2NjAwaC02MDB6Ii8+DQo8cGF0aCBmaWxsPSIjMDAyMzk1IiBkPSJtMCwwaDMwMHY2MDBoLTMwMHoiLz4NCjwvc3ZnPg0K');
}

.flag-jp {
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5MDAgNjAwIj4NCjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0wLDBoOTAwdjYwMGgtOTAweiIvPg0KPGNpcmNsZSBmaWxsPSIjYmUwMDI2IiBjeD0iNDUwIiBjeT0iMzAwIiByPSIxODAiLz4NCjwvc3ZnPg0K');
}

.flag-de {
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1IDMiPg0KPHBhdGggZD0ibTAsMGg1djNoLTV6Ii8+DQo8cGF0aCBmaWxsPSIjZDAwIiBkPSJtMCwxaDV2MmgtNXoiLz4NCjxwYXRoIGZpbGw9IiNmZmNlMDAiIGQ9Im0wLDJoNXYxaC01eiIvPg0KPC9zdmc+DQo=');
}

.flag-it {
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5MDAgNjAwIj4NCjxwYXRoIGZpbGw9IiNjZTJiMzciIGQ9Im0wLDBoOTAwdjYwMGgtOTAweiIvPg0KPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTAsMGg2MDB2NjAwaC02MDB6Ii8+DQo8cGF0aCBmaWxsPSIjMDA5MjQ2IiBkPSJtMCwwaDMwMHY2MDBoLTMwMHoiLz4NCjwvc3ZnPg0K');
}

.flag-es {
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NTAgNTAwIj4NCjxwYXRoIGZpbGw9IiNjNjBiMWUiIGQ9Im0wLDBoNzUwdjUwMGgtNzUweiIvPg0KPHBhdGggZmlsbD0iI2ZmYzQwMCIgZD0ibTAsMTI1aDc1MHYyNTBoLTc1MHoiLz4NCjwvc3ZnPg0K');
}

/* Responsive Adjustments */
@media screen and (max-width: 640px) {
  .card {
    @apply p-4;
  }
}
</style>
