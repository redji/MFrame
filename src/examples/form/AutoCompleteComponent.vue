<template>
  <div class="auto-complete-component p-4">
    <div class="flex flex-col gap-4">
      <div class="card">
        <h5 class="text-sm font-semibold mb-2">Basic</h5>
        <AutoComplete
          v-model="selectedItem"
          v-model:suggestions="filteredItems"
          @complete="searchItems"
          placeholder="Search programming languages..."
          :pt="defaultPt"
          optionLabel="label"
          :field="'label'"
          :delay="0"
          showClear
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
          :pt="defaultPt"
          optionLabel="label"
          :field="'label'"
          :dropdown="true"
          :delay="0"
          showClear
        >
          <template #option="{ option }">
            <div class="flex items-center gap-2 p-2 border-b border-gray-100 last:border-0">
              <i :class="option.icon" />
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
          :pt="defaultPt"
          optionLabel="label"
          :field="'label'"
          :multiple="true"
          :delay="0"
          showClear
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

<style>
.card {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 0.875rem;
}

/* AutoComplete base styles */
.p-autocomplete {
  width: 100%;
  position: relative;
}

/* Panel styles */
.p-autocomplete-panel {
  padding: 0;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin-top: 0.25rem;
  position: fixed;
  max-height: 200px;
  overflow-y: auto;
}

/* Ensure panel stays above other content */
.p-autocomplete {
  width: 100%;
  position: relative;
}

.p-autocomplete-items {
  padding: 0;
  background: white;
  border-radius: 0.5rem;
  max-height: inherit;
  overflow-y: auto;
}

/* Adjust panel position when near bottom */
.p-autocomplete-panel[data-pc-section="panel"] {
  transform-origin: center top;
  min-width: 100%;
  width: max-content;
}

.p-autocomplete-panel[data-pc-state="overlay"] {
  position: absolute;
  z-index: 1000;
}

/* Items container */
.p-autocomplete-list-container {
  border: 1px solid #281d6e;
}
.p-autocomplete-items {
  padding: 0;
  background: white;
  border-radius: 0.5rem;
}

/* Individual item */
.p-autocomplete-item {
  margin: 0;
  transition: all 0.2s ease;
  font-size: 1rem;
}

/* Option styles */
.p-autocomplete-option {
  padding: 0.5rem 0.5rem;
  cursor: pointer;
  border-bottom: 1px solid #e2e8f0;
  transition: background-color 0.2s;
  font-size: 1rem;
}

.p-autocomplete-option:last-child {
  border-bottom: none;
}

.p-autocomplete-option:hover {
  background-color: #f8fafc;
}

.p-autocomplete-option.p-highlight {
  background-color: #e0f2fe;
  color: #0284c7;
}

/* List styles */
.p-autocomplete-list {
  list-style: none;
  margin: 0;
  padding: 0.5rem 0;
  background: white;
  border-radius: 0.5rem;
  max-height: 200px;
  overflow-y: auto;
}

/* Scrollbar styles */
.p-autocomplete-list::-webkit-scrollbar {
  width: 6px;
}

.p-autocomplete-list::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 3px;
}

.p-autocomplete-list::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

.p-autocomplete-list::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Token styles */
.p-autocomplete-token {
  background: #e0f2fe;
  color: #0284c7;
  border-radius: 0.375rem;
  padding: 0.25rem 0.75rem;
  margin: 0.25rem;
  font-size: 0.875rem;
}

/* Multiple container styles */
.p-autocomplete-multiple-container {
  padding: 0.25rem;
  gap: 0.25rem;
  min-height: 42px;
}

/* Input styles */
.p-inputtext {
  width: 100%;
  padding: 0.625rem 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
  font-size: 0.875rem;
}

.p-inputtext:hover {
  border-color: #0284c7;
}

.p-inputtext:focus {
  outline: none;
  border-color: #0284c7;
  box-shadow: 0 0 0 2px #e0f2fe;
}
</style>
