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
        aria-haspopup="true"
        :aria-expanded="dropdownOpen"
      >
        <span>Dropdown button ▼</span> <!-- Dropdown arrow -->
      </button>

      <!-- Dropdown Menu (hidden by default) -->
      <div v-if="dropdownOpen" class="absolute mt-1 w-full bg-white rounded-md shadow-lg z-10">
        <ul class="py-1">
          <li v-for="(item, index) in items" :key="index">
            <button
              @click="handleSecondaryAction(item)"
              class="px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left flex items-center"
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

interface Item {
  label: string
  icon: string
  url?: string
  command?: () => void
}

const items = ref([
  {
    label: 'Add',
    icon: 'pi pi-plus',
    command: () => { console.log('Add action triggered') }
  },
  {
    label: 'Update',
    icon: 'pi pi-refresh',
    command: () => { console.log('Update action triggered') }
  },
  {
    label: 'Delete',
    icon: 'pi pi-trash',
    command: () => { console.log('Delete action triggered') }
  },
  {
    label: 'Upload',
    icon: 'pi pi-upload',
    command: () => { console.log('Upload action triggered') }
  },
  {
    label: 'External Link',
    icon: 'pi pi-external-link',
    url: 'https://www.primevue.org'
  }
] as Array<Item>)

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const handleSecondaryAction = (item: Item) => {
  if (item.command) {
    item.command() // Call the command if it exists
  } else if (item.url) {
    window.open(item.url, '_blank') // Open external link in a new tab
  }
  dropdownOpen.value = false // Close the dropdown after selection
}
</script>
<style scoped lang="scss">
button {
  margin-right: 5px;
}
</style>
