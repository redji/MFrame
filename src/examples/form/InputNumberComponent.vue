<template>
  <div class="input-number-component p-4">
    <h2 class="text-lg font-bold mb-4">Input Number</h2>
    <div class="flex flex-col gap-4">
      <!-- Numerals -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Numerals</h3>
        <div class="flex flex-col gap-4">
          <div class="field">
            <label for="integeronly" class="block text-sm font-medium text-gray-700 mb-1">Integer Only</label>
            <InputNumber
              v-model="value1"
              inputId="integeronly"
              class="w-full"
            />
          </div>
        </div>
      </div>

      <!-- Decimals -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Decimals</h3>
        <div class="flex flex-col gap-4">
          <div class="field">
            <label for="withoutgrouping" class="block text-sm font-medium text-gray-700 mb-1">Without Grouping</label>
            <InputNumber
              v-model="value2"
              inputId="withoutgrouping"
              :useGrouping="false"
              class="w-full"
            />
          </div>

          <div class="field">
            <label for="minmaxfraction" class="block text-sm font-medium text-gray-700 mb-1">Min-Max Fraction Digits</label>
            <InputNumber
              v-model="value3"
              inputId="minmaxfraction"
              :minFractionDigits="2"
              :maxFractionDigits="5"
              class="w-full"
            />
          </div>

          <div class="field">
            <label for="minmax" class="block text-sm font-medium text-gray-700 mb-1">Min-Max Boundaries</label>
            <InputNumber
              v-model="value4"
              inputId="minmax"
              :min="0"
              :max="100"
              class="w-full"
            />
          </div>
        </div>
      </div>

      <!-- Currency -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Currency</h3>
        <div class="flex flex-col gap-4">
          <div class="field">
            <label for="currency" class="block text-sm font-medium text-gray-700 mb-1">Currency</label>
            <InputNumber
              v-model="value5"
              inputId="currency"
              mode="currency"
              currency="USD"
              class="w-full"
            />
          </div>

          <div class="field">
            <label for="currency-different" class="block text-sm font-medium text-gray-700 mb-1">Different Currency</label>
            <InputNumber
              v-model="value6"
              inputId="currency-different"
              mode="currency"
              currency="EUR"
              locale="de-DE"
              class="w-full"
            />
          </div>
        </div>
      </div>

      <!-- Prefix and Suffix -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Prefix and Suffix</h3>
        <div class="flex flex-col gap-4">
          <div class="field">
            <label for="mile" class="block text-sm font-medium text-gray-700 mb-1">Mile</label>
            <InputNumber
              v-model="value7"
              inputId="mile"
              suffix=" mi"
              class="w-full"
            />
          </div>

          <div class="field">
            <label for="percent" class="block text-sm font-medium text-gray-700 mb-1">Percent</label>
            <InputNumber
              v-model="value8"
              inputId="percent"
              suffix="%"
              class="w-full"
            />
          </div>

          <div class="field">
            <label for="expiry" class="block text-sm font-medium text-gray-700 mb-1">Expiry</label>
            <InputNumber
              v-model="value9"
              inputId="expiry"
              prefix="Expires in "
              suffix=" days"
              class="w-full"
            />
          </div>

          <div class="field">
            <label for="temperature" class="block text-sm font-medium text-gray-700 mb-1">Temperature</label>
            <InputNumber
              v-model="value10"
              inputId="temperature"
              prefix="↑ "
              suffix="℃"
              :min="-20"
              :max="50"
              class="w-full"
            />
          </div>
        </div>
      </div>

      <!-- Buttons -->
      <div class="card">
        <h3 class="text-sm font-semibold mb-4">Buttons</h3>
        <div class="flex flex-col gap-4">
          <div class="field">
            <label for="stacked" class="block text-sm font-medium text-gray-700 mb-1">Stacked</label>
            <InputNumber
              v-model="value11"
              inputId="stacked"
              showButtons
              buttonLayout="stacked"
              :step="0.25"
              decrementButtonClass="p-button-danger"
              incrementButtonClass="p-button-success"
              incrementButtonIcon="pi pi-plus"
              decrementButtonIcon="pi pi-minus"
              class="w-full"
            />
          </div>

          <div class="field">
            <label for="horizontal" class="block text-sm font-medium text-gray-700 mb-1">Horizontal with Step</label>
            <InputNumber
              v-model="value12"
              inputId="horizontal"
              showButtons
              :step="0.25"
              class="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import InputNumber from 'primevue/inputnumber'

// Numerals
const value1: Ref<number | null> = ref(42)

// Decimals
const value2: Ref<number | null> = ref(58.42)
const value3: Ref<number | null> = ref(10.5)
const value4: Ref<number | null> = ref(50)

// Currency
const value5: Ref<number | null> = ref(50)
const value6: Ref<number | null> = ref(100.50)

// Prefix and Suffix
const value7: Ref<number | null> = ref(20)
const value8: Ref<number | null> = ref(50)
const value9: Ref<number | null> = ref(30)
const value10: Ref<number | null> = ref(20)

// Buttons
const value11: Ref<number | null> = ref(0)
const value12: Ref<number | null> = ref(0)
</script>

<style>
.card {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.field {
  margin-bottom: 1rem;
}

.p-inputnumber {
  width: 100%;
}

.p-inputtext {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
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

.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-up {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding: 0;
  border: 1px solid #d1d5db;
}

.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-down {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 0;
  padding: 0;
  border: 1px solid #d1d5db;
}

.p-button.p-button-success {
  background: #10b981;
  border-color: #10b981;
}

.p-button.p-button-success:hover {
  background: #059669;
  border-color: #059669;
}

.p-button.p-button-danger {
  background: #ef4444;
  border-color: #ef4444;
}

.p-button.p-button-danger:hover {
  background: #dc2626;
  border-color: #dc2626;
}

/* Responsive Adjustments */
@media screen and (max-width: 640px) {
  .card {
    padding: 1rem;
  }

  .p-inputtext {
    font-size: 0.875rem;
  }
}
</style>
