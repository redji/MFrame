<template>
  <div class="categories-component">
    <Tabs value="0">
      <TabList>
          <Tab value="0">Form</Tab>
          <Tab value="1">Button</Tab>
          <Tab value="2">Data</Tab>
          <Tab value="3">Panel</Tab>
          <Tab value="4">Overlay</Tab>
          <Tab value="5">File</Tab>
          <Tab value="6">Menu</Tab>
          <Tab value="7">Chart</Tab>
          <Tab value="8">Messages</Tab>
          <Tab value="9">Media</Tab>
          <Tab value="10">Misc</Tab>
      </TabList>
      <TabPanels>
          <TabPanel value="0">
            <div class="text-3xl font-bold mb-4">Form</div>
          </TabPanel>
          <TabPanel value="1">
            <div class="text-3xl font-bold mb-4">Button</div>
          </TabPanel>
          <TabPanel value="2">
            <div class="text-3xl font-bold mb-4">Data</div>
          </TabPanel>
          <TabPanel value="3">
            <div class="text-3xl font-bold mb-4">Panel</div>
          </TabPanel>
          <TabPanel value="4">
            <div class="text-3xl font-bold mb-4">Overlay</div>
          </TabPanel>
          <TabPanel value="5">
            <div class="text-3xl font-bold mb-4">File</div>
          </TabPanel>
          <TabPanel value="6">
            <div class="text-3xl font-bold mb-4">Menu</div>
          </TabPanel>
          <TabPanel value="7">
            <div class="text-3xl font-bold mb-4">Chart</div>
            <ChartComponent />
          </TabPanel>
          <TabPanel value="8">
            <div class="text-3xl font-bold mb-4">Messages</div>
          </TabPanel>
          <TabPanel value="9">
            <div class="text-3xl font-bold mb-4">Media</div>
          </TabPanel>
          <TabPanel value="10">
            <div class="text-3xl font-bold mb-4">Misc</div>
          </TabPanel>
      </TabPanels>
    </Tabs>
</div>
</template>
<script setup lang="ts">
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import ChartComponent from 'src/examples/chart/ChartComponent.vue'

defineOptions({
  name: 'CategoriesComponent'
})
</script>
