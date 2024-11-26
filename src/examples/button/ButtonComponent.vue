<template>
  <div class="button-component">
    <div class="text-2xl font-bold mb-4">Button</div>
    <div class="flex flex-nowrap">
      <Button
        class="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
        @click="log('Home')"
        icon="pi pi-home"
        aria-label="Home"
      />
      <Button
        class="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition duration-200"
        @click="log('Profile')"
        label="Profile"
        icon="pi pi-user" />
      <Button
          class="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-yellow-600 transition duration-200"
        @click="log('Save')"
        label="Save"
        icon="pi pi-check"
        iconPos="right" />
      <Button
        class="bg-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-600 transition duration-200"
        @click="log('Search')"
        label="Search"
        icon="pi pi-search"
        iconPos="top" />
      <Button
        class="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition duration-200"
        @click="log('Update')"
        label="Update"
        icon="pi pi-refresh"
        iconPos="bottom" />
    </div>
    <div class="text-2xl font-bold mb-4">Dropdown button</div>
    <div class="relative flex items-center">
      <!-- Dropdown Button Only -->
      <button
        @click="toggleDropdown"
        class="bg-blue-600 text-white font-semibold border border-blue-700 shadow-md hover:bg-blue-700 transition duration-200 py-2 px-4 flex items-center"
        :class="{ 'opacity-50 cursor-not-allowed': disabled }"
        aria-haspopup="true"
        :aria-expanded="dropdownOpen"
        :disabled="disabled"
      >
        <i v-if="loading" class="pi pi-spinner animate-spin mr-2"></i>
        <span class="mr-2">{{ selectedValue || 'Select Action' }}</span>
        <span>▼</span>
      </button>

      <!-- Dropdown Menu (hidden by default) -->
      <div v-if="dropdownOpen" class="absolute mt-1 w-full bg-white rounded-md shadow-lg z-10">
        <ul class="py-1">
          <li v-for="(item, index) in items" :key="index">
            <button
              @click="handleSecondaryAction(item)"
              class="px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left flex items-center"
              :class="{
                'opacity-50 cursor-not-allowed': item.disabled,
                'text-green-600': item.severity === 'success',
                'text-red-600': item.severity === 'danger',
                'text-blue-600': item.severity === 'info',
                'text-yellow-600': item.severity === 'warning'
              }"
              :disabled="item.disabled"
            >
              <i :class="item.icon + ' mr-2'"></i>
              {{ item.label }}
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="text-2xl font-bold mb-4">Speed dial</div>
    <div class="relative h-screen flex justify-between items-end">
      <SpeedDial @click="log('Update')" :model="items" :direction="'up'" style="position: absolute; left: calc(50% - 2rem); bottom: 0" />
      <SpeedDial @click="log('Update')" :model="items" :direction="'down'" style="position: absolute; left: calc(50% - 2rem); top: 0" />
      <SpeedDial @click="log('Update')" :model="items" :direction="'left'" style="position: absolute; top: calc(50% - 2rem); right: 0" />
      <SpeedDial @click="log('Update')" :model="items" :direction="'right'" style="position: absolute; top: calc(50% - 2rem); left: 0" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import SpeedDial from 'primevue/speeddial'

const log = (name: string) => {
  console.log('Button: ' + name + ' clicked')
}

const dropdownOpen = ref(false)
const selectedValue = ref('')
const loading = ref(false)
const disabled = ref(false)

interface Item {
  label: string
  icon: string
  url?: string
  command?: () => void
  disabled?: boolean
  severity?: 'success' | 'info' | 'warning' | 'danger'
}

const items = ref([
  {
    label: 'New',
    icon: 'pi pi-plus',
    command: () => { console.log('New item action triggered') },
    severity: 'success'
  },
  {
    label: 'Edit',
    icon: 'pi pi-pencil',
    command: () => { console.log('Edit action triggered') }
  },
  {
    label: 'Delete',
    icon: 'pi pi-trash',
    command: () => { console.log('Delete action triggered') },
    severity: 'danger'
  },
  {
    label: 'Export',
    icon: 'pi pi-download',
    command: () => { console.log('Export action triggered') }
  },
  {
    label: 'Share',
    icon: 'pi pi-share-alt',
    command: () => { console.log('Share action triggered') },
    disabled: true
  },
  {
    label: 'Documentation',
    icon: 'pi pi-book',
    url: 'https://www.primevue.org/button'
  }
] as Array<Item>)

const toggleDropdown = () => {
  if (!disabled.value) {
    dropdownOpen.value = !dropdownOpen.value
  }
}

const handleSecondaryAction = (item: Item) => {
  if (item.disabled) return

  loading.value = true
  selectedValue.value = item.label

  if (item.command) {
    item.command()
  } else if (item.url) {
    window.open(item.url, '_blank')
  }

  loading.value = false
  dropdownOpen.value = false
}
</script>
<style scoped lang="scss">
button {
  margin-right: 5px;
}
</style>
