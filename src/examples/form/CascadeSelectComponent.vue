<template>
  <div class="cascade-select-component p-4" style="max-width: 400px;">
    <h2 class="text-lg font-bold mb-4">CascadeSelect</h2>
    <div class="flex flex-col gap-4">
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">Basic</h3>
        <CascadeSelect
          v-model="selectedBasic"
          :options="countries"
          optionLabel="name"
          optionGroupLabel="name"
          :optionGroupChildren="['states', 'cities']"
          placeholder="Select a Location"
          class="w-full"
        />
      </div>
      <div class="card">
        <h3 class="text-sm font-semibold mb-2">With Templates</h3>
        <CascadeSelect
          v-model="selectedTemplate"
          :options="categories"
          optionLabel="name"
          optionGroupLabel="name"
          :optionGroupChildren="['subcategories', 'products']"
          placeholder="Select a Product"
          class="w-full"
        >
          <template #option="{ option }">
            <div class="flex items-center gap-2">
              <i :class="option.icon" />
              <div>
                <div class="font-medium">{{ option.name }}</div>
                <small v-if="option.description" class="text-gray-600">{{ option.description }}</small>
              </div>
            </div>
          </template>
        </CascadeSelect>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CascadeSelect from 'primevue/cascadeselect'
interface City {
  name: string;
  code: string;
}
interface State {
  name: string;
  code: string;
  cities?: City[];
}
interface Location {
  name: string;
  code: string;
  states?: State[];
}
interface Product {
  name: string;
  code: string;
  icon: string;
  description?: string;
  price?: number;
}
interface Subcategory {
  name: string;
  code: string;
  icon: string;
  description?: string;
  products?: Product[];
}
interface Category {
  name: string;
  code: string;
  icon: string;
  description?: string;
  subcategories?: Subcategory[];
}
// Location data
const countries = ref<Location[]>([
  {
    name: 'United States',
    code: 'US',
    states: [
      {
        name: 'California',
        code: 'CA',
        cities: [
          { name: 'Los Angeles', code: 'LA' },
          { name: 'San Francisco', code: 'SF' },
          { name: 'San Diego', code: 'SD' }
        ]
      },
      {
        name: 'New York',
        code: 'NY',
        cities: [
          { name: 'New York City', code: 'NYC' },
          { name: 'Buffalo', code: 'BUF' },
          { name: 'Albany', code: 'ALB' }
        ]
      },
      {
        name: 'Texas',
        code: 'TX',
        cities: [
          { name: 'Houston', code: 'HOU' },
          { name: 'Dallas', code: 'DAL' },
          { name: 'Austin', code: 'AUS' }
        ]
      }
    ]
  },
  {
    name: 'Canada',
    code: 'CA',
    states: [
      {
        name: 'Ontario',
        code: 'ON',
        cities: [
          { name: 'Toronto', code: 'TOR' },
          { name: 'Ottawa', code: 'OTT' },
          { name: 'Hamilton', code: 'HAM' }
        ]
      },
      {
        name: 'Quebec',
        code: 'QC',
        cities: [
          { name: 'Montreal', code: 'MTL' },
          { name: 'Quebec City', code: 'QUE' },
          { name: 'Laval', code: 'LAV' }
        ]
      }
    ]
  }
])

// Product categories data
const categories = ref<Category[]>([
  {
    name: 'Electronics',
    code: 'ELEC',
    icon: 'pi pi-desktop',
    description: 'Electronic devices and accessories',
    subcategories: [
      {
        name: 'Computers',
        code: 'COMP',
        icon: 'pi pi-laptop',
        description: 'Laptops and desktops',
        products: [
          { name: 'Gaming Laptop', code: 'GL', icon: 'pi pi-bolt', description: 'High-performance gaming laptop', price: 1499.99 },
          { name: 'Business Desktop', code: 'BD', icon: 'pi pi-desktop', description: 'Professional workstation', price: 999.99 }
        ]
      },
      {
        name: 'Phones',
        code: 'PHONE',
        icon: 'pi pi-mobile',
        description: 'Smartphones and accessories',
        products: [
          { name: 'Smartphone Pro', code: 'SP', icon: 'pi pi-mobile', description: 'Latest flagship smartphone', price: 999.99 },
          { name: 'Budget Phone', code: 'BP', icon: 'pi pi-mobile', description: 'Affordable smartphone', price: 299.99 }
        ]
      }
    ]
  },
  {
    name: 'Clothing',
    code: 'CLTH',
    icon: 'pi pi-shopping-bag',
    description: 'Apparel and accessories',
    subcategories: [
      {
        name: 'Men',
        code: 'MEN',
        icon: 'pi pi-user',
        description: "Men's clothing",
        products: [
          { name: 'Business Suit', code: 'BS', icon: 'pi pi-briefcase', description: 'Professional attire', price: 599.99 },
          { name: 'Casual Shirt', code: 'CS', icon: 'pi pi-shopping-bag', description: 'Comfortable casual wear', price: 49.99 }
        ]
      },
      {
        name: 'Women',
        code: 'WOMEN',
        icon: 'pi pi-user',
        description: "Women's clothing",
        products: [
          { name: 'Evening Dress', code: 'ED', icon: 'pi pi-star', description: 'Elegant evening wear', price: 299.99 },
          { name: 'Summer Dress', code: 'SD', icon: 'pi pi-sun', description: 'Light summer fashion', price: 79.99 }
        ]
      }
    ]
  }
])

const selectedBasic = ref<Location | null>(null)
const selectedTemplate = ref<Category | null>(null)
</script>
