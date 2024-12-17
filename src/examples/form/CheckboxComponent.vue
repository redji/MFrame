<template>
  <div class="checkbox-component p-4">
    <h2 class="text-lg font-bold mb-4">Checkbox</h2>
    <div class="flex flex-col gap-4">
      <!-- Basic -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Basic</h3>
        <div class="flex items-center gap-2">
          <Checkbox v-model="checked" :binary="true" inputId="terms" />
          <label for="terms" class="text-sm">Accept terms</label>
        </div>
      </div>

      <!-- Multiple -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Multiple Selection</h3>
        <div class="flex flex-col gap-2">
          <div v-for="category in categories" :key="category.key" class="flex items-center gap-2">
            <Checkbox
              v-model="selectedCategories"
              :value="category.key"
              :name="category.key"
              :inputId="category.key"
            />
            <label :for="category.key" class="text-sm">{{ category.name }}</label>
          </div>
        </div>
      </div>

      <!-- Dynamic -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Dynamic Checks</h3>
        <div class="flex flex-wrap gap-4">
          <div v-for="city in cities" :key="city.name" class="flex items-center gap-2">
            <Checkbox
              v-model="selectedCities"
              :value="city.name"
              :disabled="city.disabled"
              :inputId="city.name.toLowerCase().replace(' ', '-')"
            />
            <label :for="city.name.toLowerCase().replace(' ', '-')" class="text-sm">{{ city.name }}</label>
          </div>
        </div>
      </div>

      <!-- Indeterminate -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Indeterminate Group</h3>
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-2 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800">
            <Checkbox
              :modelValue="selectAll"
              :indeterminate="isIndeterminate"
              @change="handleSelectAll"
              :binary="true"
              inputId="select-all"
              class="parent-checkbox"
            />
            <label for="select-all" class="text-sm font-medium cursor-pointer select-none">
              All Tasks
              <span v-if="selectedTasks.length > 0" class="text-xs text-gray-500 ml-2">
                ({{ selectedTasks.length }}/{{ tasks.length }})
              </span>
            </label>
          </div>
          <div class="ml-6 flex flex-col gap-2">
            <div
              v-for="task in tasks"
              :key="task.id"
              class="flex items-center gap-2 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <Checkbox
                v-model="selectedTasks"
                :value="task.id"
                :inputId="`task-${task.id}`"
              />
              <label :for="`task-${task.id}`" class="text-sm cursor-pointer select-none">
                {{ task.name }}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Checkbox from 'primevue/checkbox'

// Basic checkbox
const checked = ref(false)

// Multiple selection
interface Category {
  key: string
  name: string
}

const categories = ref<Category[]>([
  { key: 'tech', name: 'Technology' },
  { key: 'health', name: 'Healthcare' },
  { key: 'finance', name: 'Finance' },
  { key: 'edu', name: 'Education' }
])
const selectedCategories = ref<string[]>([])

// Dynamic checks
interface City {
  name: string
  disabled?: boolean
}

const cities = ref<City[]>([
  { name: 'New York' },
  { name: 'London' },
  { name: 'Tokyo' },
  { name: 'Paris', disabled: true },
  { name: 'Berlin' }
])
const selectedCities = ref<string[]>([])

// Indeterminate group
interface Task {
  id: number
  name: string
}

const tasks = ref<Task[]>([
  { id: 1, name: 'Design Review' },
  { id: 2, name: 'Code Testing' },
  { id: 3, name: 'Documentation' }
])

const selectedTasks = ref<number[]>([])

const selectAll = computed(() => {
  return selectedTasks.value.length === tasks.value.length
})

const isIndeterminate = computed(() => {
  const selectedCount = selectedTasks.value.length
  return selectedCount > 0 && selectedCount < tasks.value.length
})

const handleSelectAll = (event: Event) => {
  const target = event.target as HTMLInputElement
  selectedTasks.value = target.checked ? tasks.value.map(task => task.id) : []
}
</script>

<style scoped>
.card {
  @apply bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm;
}

/* Custom styles for the parent checkbox to make the indeterminate state more visible */
:deep(.parent-checkbox .p-checkbox-box.p-highlight) {
  @apply bg-primary-500 border-primary-500;
}

:deep(.parent-checkbox .p-checkbox-box.p-indeterminate) {
  @apply bg-primary-400 border-primary-400;
}

:deep(.parent-checkbox .p-checkbox-box) {
  @apply transition-colors duration-200;
}
</style>
