<template>
  <div class="input-group-component p-4">
    <h2 class="text-lg font-bold mb-4">Input Groups</h2>
    <div class="flex flex-col gap-4">
      <!-- Basic -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Basic</h3>
        <div class="flex flex-col gap-4">
          <!-- Text Addon -->
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">@</span>
            <InputText v-model="username" placeholder="Username" />
          </div>

          <!-- Price Input -->
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">$</span>
            <InputNumber v-model="price" :minFractionDigits="2" />
            <span class="p-inputgroup-addon">.00</span>
          </div>

          <!-- Search with Button -->
          <div class="p-inputgroup">
            <InputText v-model="search" placeholder="Search" />
            <Button type="button" label="Search" :pt="{
              root: { class: 'p-button' },
              label: { class: 'p-button-label' },
              icon: { class: 'pi pi-search' }
            }" />
          </div>
        </div>
      </div>

      <!-- Multiple Addons -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Multiple Addons</h3>
        <div class="flex flex-col gap-4">
          <!-- Double Prefix -->
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-user"></i>
            </span>
            <span class="p-inputgroup-addon">
              <i class="pi pi-lock"></i>
            </span>
            <InputText v-model="secureInput" placeholder="Secure Input" />
          </div>

          <!-- Mixed Addons -->
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">$</span>
            <span class="p-inputgroup-addon">0.00</span>
            <InputNumber v-model="amount" :minFractionDigits="2" />
            <Button type="button" label="Submit" :pt="{
              root: { class: 'p-button' },
              label: { class: 'p-button-label' },
              icon: { class: 'pi pi-check' }
            }" />
          </div>
        </div>
      </div>

      <!-- With Buttons -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">With Buttons</h3>
        <div class="flex flex-col gap-4">
          <!-- Button Addons -->
          <div class="p-inputgroup">
            <Button type="button" label="Search" :pt="{
              root: { class: 'p-button' },
              label: { class: 'p-button-label' },
              icon: { class: 'pi pi-search' }
            }" />
            <InputText v-model="searchQuery" placeholder="Keyword" />
            <Button type="button" :pt="{
              root: { class: 'p-button p-button-danger' },
              icon: { class: 'pi pi-times' }
            }" />
          </div>

          <!-- Multiple Buttons -->
          <div class="p-inputgroup">
            <Button type="button" label="Add" :pt="{
              root: { class: 'p-button p-button-success' },
              label: { class: 'p-button-label' },
              icon: { class: 'pi pi-plus' }
            }" />
            <InputText v-model="newItem" placeholder="New Item" />
            <Button type="button" label="Remove" :pt="{
              root: { class: 'p-button p-button-danger' },
              label: { class: 'p-button-label' },
              icon: { class: 'pi pi-trash' }
            }" />
          </div>
        </div>
      </div>

      <!-- With Dropdown -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">With Dropdown</h3>
        <div class="flex flex-col gap-4">
          <!-- Dropdown and Input -->
          <div class="p-inputgroup">
            <Dropdown v-model="selectedProtocol" :options="protocols" optionLabel="name" placeholder="Protocol" class="w-full md:w-14rem" />
            <InputText v-model="url" placeholder="URL" />
            <Button type="button" label="Visit" :pt="{
              root: { class: 'p-button' },
              label: { class: 'p-button-label' },
              icon: { class: 'pi pi-external-link' }
            }" />
          </div>

          <!-- Multiple Components -->
          <div class="p-inputgroup">
            <Dropdown v-model="selectedCurrency" :options="currencies" optionLabel="name" placeholder="Currency" class="w-full md:w-14rem" />
            <InputNumber v-model="currencyAmount" :minFractionDigits="2" />
            <Button type="button" label="Convert" :pt="{
              root: { class: 'p-button' },
              label: { class: 'p-button-label' },
              icon: { class: 'pi pi-refresh' }
            }" />
          </div>
        </div>
      </div>

      <!-- With Checkbox/Radio -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">With Checkbox/Radio</h3>
        <div class="flex flex-col gap-4">
          <!-- Checkbox Group -->
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <Checkbox v-model="subscribe" :binary="true" />
            </span>
            <InputText v-model="email" placeholder="Email for subscription" />
            <Button type="button" label="Subscribe" :pt="{
              root: { class: 'p-button' },
              label: { class: 'p-button-label' },
              icon: { class: 'pi pi-envelope' }
            }" />
          </div>

          <!-- Radio Group -->
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <RadioButton v-model="gender" name="gender" value="male" />
            </span>
            <span class="p-inputgroup-addon">
              <RadioButton v-model="gender" name="gender" value="female" />
            </span>
            <InputText v-model="fullName" placeholder="Full Name" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown'
import Checkbox from 'primevue/checkbox'
import RadioButton from 'primevue/radiobutton'

interface Protocol {
  name: string;
  value: string;
}

interface Currency {
  name: string;
  code: string;
  symbol: string;
}

// Basic
const username: Ref<string> = ref('')
const price: Ref<number | null> = ref(null)
const search: Ref<string> = ref('')

// Multiple Addons
const secureInput: Ref<string> = ref('')
const amount: Ref<number | null> = ref(null)

// With Buttons
const searchQuery: Ref<string> = ref('')
const newItem: Ref<string> = ref('')

// With Dropdown
const url: Ref<string> = ref('')
const selectedProtocol: Ref<Protocol | null> = ref(null)
const protocols: Ref<Protocol[]> = ref([
  { name: 'HTTP', value: 'http://' },
  { name: 'HTTPS', value: 'https://' },
  { name: 'FTP', value: 'ftp://' }
])

const currencyAmount: Ref<number | null> = ref(null)
const selectedCurrency: Ref<Currency | null> = ref(null)
const currencies: Ref<Currency[]> = ref([
  { name: 'US Dollar', code: 'USD', symbol: '$' },
  { name: 'Euro', code: 'EUR', symbol: '€' },
  { name: 'British Pound', code: 'GBP', symbol: '£' },
  { name: 'Japanese Yen', code: 'JPY', symbol: '¥' }
])

// With Checkbox/Radio
const email: Ref<string> = ref('')
const subscribe: Ref<boolean> = ref(false)
const fullName: Ref<string> = ref('')
const gender: Ref<string> = ref('')
</script>

<style>
.card {
  @apply bg-white dark:bg-gray-800;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.p-inputgroup {
  display: flex;
  align-items: stretch;
  width: 100%;
}

.p-inputgroup-addon {
  @apply bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--surface-300);
  border-radius: 0.375rem;
}

.p-inputgroup > .p-inputgroup-addon:first-child {
  border-right: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.p-inputgroup > .p-inputgroup-addon:last-child {
  border-left: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.p-inputgroup > .p-inputtext:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.p-inputgroup > .p-inputtext:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.p-inputgroup .p-button {
  margin: 0;
}

.p-inputgroup > .p-button:first-child {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.p-inputgroup > .p-button:last-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.p-inputtext {
  @apply bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100;
  padding: 0.75rem;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
  width: 100%;
}

.p-inputtext:enabled:hover {
  border-color: var(--primary-color);
}

.p-inputtext:enabled:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px var(--primary-200);
}

.p-button {
  @apply bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700;
}
</style>
