<template>
  <div class="auto-complete-component p-4" style="max-width: 600px;">
    <div class="flex flex-col gap-6">
      <div class="card">
        <h5 class="text-sm font-semibold mb-2">Basic</h5>
        <AutoComplete
          v-model="selectedItem"
          v-model:suggestions="filteredItems"
          @complete="searchItems"
          placeholder="Search programming languages..."
          :pt="{
            ...defaultPt,
            panel: { class: 'p-0' },
            list: { class: 'py-0' }
          }"
          optionLabel="label"
          :field="'label'"
          :delay="0"
          showClear
          :scrollHeight="`${filteredItems.length > 0 ? Math.min(filteredItems.length * 40, 200) : 40}px`"
        >
          <template #option="{ option }">
            <div class="py-2 px-3 border-b border-gray-100 last:border-0 text-base">
              {{ option.label }}
            </div>
          </template>
        </AutoComplete>
      </div>

      <div class="card">
        <h5 class="text-sm font-semibold mb-2">With Templates</h5>
        <AutoComplete
          v-model="selectedTemplateItem"
          v-model:suggestions="filteredTemplateItems"
          @complete="searchTemplateItems"
          placeholder="Search countries..."
          :pt="{
            ...defaultPt,
            panel: { class: 'p-0' },
            list: { class: 'py-0' }
          }"
          optionLabel="label"
          :field="'label'"
          :dropdown="true"
          :delay="0"
          showClear
          :scrollHeight="`${filteredTemplateItems.length > 0 ? Math.min(filteredTemplateItems.length * 60, 240) : 60}px`"
          appendTo="body"
        >
          <template #option="{ option }">
            <div class="flex items-center gap-3 p-3 border-b border-gray-100 last:border-0">
              <i :class="[option.icon, 'text-lg']" />
              <div>
                <div class="font-medium text-base">{{ option.label }}</div>
                <small class="text-gray-600 text-xs">{{ option.description }}</small>
              </div>
            </div>
          </template>
        </AutoComplete>
      </div>

      <div class="card">
        <h5 class="text-sm font-semibold mb-2">Multiple Selection</h5>
        <AutoComplete
          v-model="selectedMultipleItems"
          v-model:suggestions="filteredItems"
          @complete="searchItems"
          placeholder="Select multiple items..."
          :pt="{
            ...defaultPt,
            panel: { class: 'p-0' },
            list: { class: 'py-0' }
          }"
          optionLabel="label"
          :field="'label'"
          :multiple="true"
          :delay="0"
          showClear
          :scrollHeight="`${filteredItems.length > 0 ? Math.min(filteredItems.length * 40, 200) : 40}px`"
        >
          <template #option="{ option }">
            <div class="py-2 px-3 border-b border-gray-100 last:border-0 text-base">
              {{ option.label }}
            </div>
          </template>
        </AutoComplete>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import AutoComplete from 'primevue/autocomplete'
import type { AutoCompleteCompleteEvent } from 'primevue/autocomplete'

interface Item {
  label: string
  icon?: string
  description?: string
  code?: string
}

// Common PT (Pass Through) props
const defaultPt = {
  root: { class: 'w-full' },
  input: { class: 'w-full p-2 text-sm' }
}

// Basic items
const items = ref<Item[]>([
  { label: 'JavaScript' },
  { label: 'TypeScript' },
  { label: 'Vue.js' },
  { label: 'React' },
  { label: 'Angular' },
  { label: 'Svelte' },
  { label: 'Node.js' },
  { label: 'Python' },
  { label: 'Java' },
  { label: 'C#' }
].sort((a, b) => a.label.localeCompare(b.label)))

// Template items with icons and descriptions
const templateItems = ref<Item[]>([
  {
    label: 'United States',
    icon: 'pi pi-flag-usa',
    description: 'North America',
    code: 'US'
  },
  {
    label: 'United Kingdom',
    icon: 'pi pi-flag-uk',
    description: 'Europe',
    code: 'UK'
  },
  {
    label: 'Germany',
    icon: 'pi pi-flag-de',
    description: 'Europe',
    code: 'DE'
  },
  {
    label: 'Japan',
    icon: 'pi pi-flag-jp',
    description: 'Asia',
    code: 'JP'
  },
  {
    label: 'Australia',
    icon: 'pi pi-flag-au',
    description: 'Oceania',
    code: 'AU'
  }
].sort((a, b) => a.label.localeCompare(b.label)))

// Selected values
const selectedItem = ref<Item | null>(null)
const selectedTemplateItem = ref<Item | null>(null)
const selectedMultipleItems = ref<Item[]>([])

// Filtered suggestions
const filteredItems = ref<Item[]>([])
const filteredTemplateItems = ref<Item[]>([])

// Search functions with proper type
const searchItems = (event: AutoCompleteCompleteEvent) => {
  const query = event.query.toLowerCase().trim()
  filteredItems.value = items.value.filter(
    item => item.label.toLowerCase().includes(query)
  )
}

const searchTemplateItems = (event: AutoCompleteCompleteEvent) => {
  const query = event.query.toLowerCase().trim()
  filteredTemplateItems.value = templateItems.value.filter(
    item =>
      item.label.toLowerCase().includes(query) ||
      item.description?.toLowerCase().includes(query) ||
      item.code?.toLowerCase().includes(query)
  )
}
</script>
