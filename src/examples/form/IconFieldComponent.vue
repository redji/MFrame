<template>
  <div class="icon-field-component p-4">
    <h2 class="text-lg font-bold mb-4">Icon Field</h2>
    <div class="flex flex-col gap-4">
      <!-- Basic -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Basic</h3>
        <div class="flex flex-col gap-4">
          <!-- Left Icon -->
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText v-model="value1" placeholder="Search" />
          </span>

          <!-- Right Icon -->
          <span class="p-input-icon-right">
            <i class="pi pi-spin pi-spinner" />
            <InputText v-model="value2" placeholder="Loading..." />
          </span>
        </div>
      </div>

      <!-- Multiple Icons -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Multiple Icons</h3>
        <div class="flex flex-col gap-4">
          <!-- Both Sides -->
          <span class="p-input-icon-left p-input-icon-right">
            <i class="pi pi-user" />
            <InputText v-model="value3" placeholder="Username" />
            <i class="pi pi-check text-green-500" v-if="value3.length > 0" />
          </span>

          <!-- Multiple Left -->
          <span class="p-input-icon-left p-input-icon-left-1 p-input-icon-left-2">
            <i class="pi pi-calendar" />
            <i class="pi pi-clock" />
            <InputText v-model="value4" placeholder="Date and Time" />
          </span>
        </div>
      </div>

      <!-- With Float Label -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">With Float Label</h3>
        <div class="flex flex-col gap-4">
          <!-- Left Icon -->
          <span class="p-input-icon-left">
            <i class="pi pi-envelope" />
            <span class="p-float-label">
              <InputText v-model="value5" inputId="email" />
              <label for="email">Email</label>
            </span>
          </span>

          <!-- Right Icon -->
          <span class="p-input-icon-right">
            <i :class="['pi', passwordIcon]" @click="togglePassword" />
            <span class="p-float-label">
              <InputText v-model="value6" :type="passwordType" inputId="password" />
              <label for="password">Password</label>
            </span>
          </span>
        </div>
      </div>

      <!-- With Different Components -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">With Different Components</h3>
        <div class="flex flex-col gap-4">
          <!-- With Textarea -->
          <span class="p-input-icon-left">
            <i class="pi pi-comment" />
            <Textarea v-model="value7" rows="3" placeholder="Your message" />
          </span>

          <!-- With InputNumber -->
          <span class="p-input-icon-left">
            <i class="pi pi-dollar" />
            <InputNumber v-model="value8" placeholder="Amount" mode="currency" currency="USD" />
          </span>
        </div>
      </div>

      <!-- With Validation -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">With Validation</h3>
        <div class="flex flex-col gap-4">
          <!-- Success -->
          <span class="p-input-icon-right">
            <i class="pi pi-check text-green-500" />
            <InputText v-model="value9" class="p-inputtext-success" placeholder="Valid input" />
          </span>

          <!-- Error -->
          <span class="p-input-icon-right">
            <i class="pi pi-exclamation-triangle text-red-500" />
            <InputText v-model="value10" class="p-invalid" placeholder="Invalid input" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import InputNumber from 'primevue/inputnumber'

// Basic
const value1 = ref('')
const value2 = ref('')

// Multiple Icons
const value3 = ref('')
const value4 = ref('')

// Float Label
const value5 = ref('')
const value6 = ref('')
const showPassword = ref(false)

const passwordType = computed(() => showPassword.value ? 'text' : 'password')
const passwordIcon = computed(() => showPassword.value ? 'pi-eye-slash' : 'pi-eye')

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

// Different Components
const value7 = ref('')
const value8 = ref<number | null>(null)

// Validation
const value9 = ref('Valid input')
const value10 = ref('Invalid input')
</script>

<style>
.card {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Icon Field Styles */
.p-input-icon-left,
.p-input-icon-right {
  position: relative;
  display: inline-block;
  width: 100%;
}

.p-input-icon-left > i,
.p-input-icon-right > i {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #6c757d;
  cursor: pointer;
}

.p-input-icon-left > i {
  left: 0.75rem;
}

.p-input-icon-right > i {
  right: 0.75rem;
}

.p-input-icon-left > .p-inputtext {
  padding-left: 2.5rem;
}

.p-input-icon-right > .p-inputtext {
  padding-right: 2.5rem;
}

/* Multiple Icons */
.p-input-icon-left-1 > i:nth-of-type(1) {
  left: 0.75rem;
}

.p-input-icon-left-2 > i:nth-of-type(2) {
  left: 2.25rem;
}

.p-input-icon-left.p-input-icon-left-1.p-input-icon-left-2 > .p-inputtext {
  padding-left: 4rem;
}

/* Float Label Adjustments */
.p-input-icon-left .p-float-label label {
  margin-left: 2.5rem;
}

.p-input-icon-right .p-float-label label {
  margin-right: 2.5rem;
}

/* Component Specific Adjustments */
.p-input-icon-left > .p-inputtextarea,
.p-input-icon-right > .p-inputtextarea {
  padding-top: 2rem;
}

.p-input-icon-left > .p-inputnumber > .p-inputtext {
  padding-left: 2.5rem;
}

/* Validation States */
.p-inputtext.p-inputtext-success {
  border-color: #10b981;
}

.p-inputtext.p-inputtext-success:enabled:hover {
  border-color: #059669;
}

.p-inputtext.p-inputtext-success:enabled:focus {
  box-shadow: 0 0 0 2px #a7f3d0;
}

.p-inputtext.p-invalid {
  border-color: #ef4444;
}

.p-inputtext.p-invalid:enabled:hover {
  border-color: #dc2626;
}

.p-inputtext.p-invalid:enabled:focus {
  box-shadow: 0 0 0 2px #fecaca;
}

/* Hover States */
.p-input-icon-left > i:hover,
.p-input-icon-right > i:hover {
  color: #343a40;
}

/* Input Base Styles */
.p-inputtext {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.p-inputtext:enabled:hover {
  border-color: #2563eb;
}

.p-inputtext:enabled:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 2px #bfdbfe;
}

/* Responsive Adjustments */
@media screen and (max-width: 640px) {
  .p-input-icon-left > i,
  .p-input-icon-right > i {
    font-size: 0.875rem;
  }

  .p-input-icon-left > .p-inputtext {
    padding-left: 2rem;
  }

  .p-input-icon-right > .p-inputtext {
    padding-right: 2rem;
  }
}
</style>
