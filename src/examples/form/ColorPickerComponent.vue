<template>
  <div class="color-picker-component p-4">
    <h2 class="text-lg font-bold mb-4">ColorPicker</h2>
    <div class="flex flex-col gap-4">
      <!-- Inline -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Inline</h3>
        <ColorPicker v-model="color1" :inline="true" />
      </div>

      <!-- Basic -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Basic</h3>
        <div class="flex items-center gap-4">
          <ColorPicker v-model="color2" />
          <span>Selected Color: {{ color2 }}</span>
        </div>
      </div>

      <!-- Format -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Format</h3>
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-4">
            <ColorPicker v-model="color3" format="hex" />
            <span>HEX Format: {{ color3 }}</span>
          </div>
          <div class="flex items-center gap-4">
            <ColorPicker v-model="color4" format="rgb" />
            <span>RGB Format: {{ color4 }}</span>
          </div>
          <div class="flex items-center gap-4">
            <ColorPicker v-model="color5" format="hsb" />
            <span>HSB Format: {{ color5 }}</span>
          </div>
        </div>
      </div>

      <!-- Default Color -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Default Color</h3>
        <div class="flex items-center gap-4">
          <ColorPicker v-model="color6" defaultColor="1976D2" />
          <span>Selected Color: {{ color6 }}</span>
        </div>
      </div>

      <!-- Disabled -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Disabled</h3>
        <div class="flex items-center gap-4">
          <ColorPicker v-model="color7" :disabled="true" />
          <span>Disabled Picker</span>
        </div>
      </div>

      <!-- Custom Panel -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Custom Panel</h3>
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-4">
            <ColorPicker
              v-model="color8"
              class="custom-colorpicker"
              panelClass="custom-colorpicker-panel"
            />
            <span>Selected Color: {{ color8 }}</span>
          </div>
          <div class="flex gap-4">
            <button
              class="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
              @click="color8 = defaultColor"
            >Reset</button>
            <button
              class="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700"
              @click="applyColor"
            >Apply</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ColorPicker from 'primevue/colorpicker'

// Inline
const color1 = ref('#1976D2')

// Basic
const color2 = ref('#1976D2')

// Format
const color3 = ref('#1976D2') // hex
const color4 = ref('rgb(25, 118, 210)') // rgb
const color5 = ref('hsb(207, 88%, 82%)') // hsb

// Default Color
const color6 = ref('')
const defaultColor = '#1976D2'

// Disabled
const color7 = ref('#1976D2')

// Custom Panel
const color8 = ref('#1976D2')

const applyColor = () => {
  // You can add custom logic here when applying the color
  console.log('Applied color:', color8.value)
}
</script>

<style>
.card {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.p-colorpicker-preview {
  width: 2rem;
  height: 2rem;
}

.p-colorpicker-panel {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
}

.custom-colorpicker .p-colorpicker-preview {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.375rem;
}

.custom-colorpicker-panel {
  padding: 1rem;
  border: 2px solid #e2e8f0;
}

.p-colorpicker-panel .p-colorpicker-color-handle,
.p-colorpicker-panel .p-colorpicker-hue-handle {
  border-color: white;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
}

.p-colorpicker-panel .p-colorpicker-preview {
  margin-top: 0.5rem;
}
</style>
