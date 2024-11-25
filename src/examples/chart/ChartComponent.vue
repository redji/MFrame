<template>
  <div class="chart-component'">
    <q-btn
      label="Basic"
      color="primary"
      @click="setChartPropertiesAndOpen('bar', chartData, chartOptions)" />
    <q-btn
      label="Pie"
      color="primary"
      @click="setChartPropertiesAndOpen('pie', chartData, chartOptions)" />
    <q-btn
      label="Doughnut"
      color="primary"
      @click="setChartPropertiesAndOpen('doughnut', chartData, chartOptions)" />
    <q-btn
      label="Horizontal bar"
      color="primary"
      @click="setChartPropertiesAndOpen('bar', chartData, chartOptionsY)" />
    <q-btn
      label="Stacked bar"
      color="primary"
      @click="setChartPropertiesAndOpen('bar', chartData, chartOptionsStacked)" />
    <q-btn
      label="Line"
      color="primary"
      @click="setChartPropertiesAndOpen('line', chartData, chartOptions)" />
    <q-btn
      label="Multi axis"
      color="primary"
      @click="setChartPropertiesAndOpen('line', multiChartData, chartOptionsMultiAxis)" />
    <q-btn
      label="Line styles"
      color="primary"
      @click="setChartPropertiesAndOpen('line', chartDataLineStyle, chartOptionsLineStyle)" />
    <q-btn
      label="Polar area"
      color="primary"
      @click="setChartPropertiesAndOpen('polarArea', chartDataLineStyle, chartOptionsLineStyle)" />
    <q-btn
      label="Radar"
      color="primary"
      @click="setChartPropertiesAndOpen('radar', chartDataLineStyle, chartOptionsLineStyle)" />

     <!-- Chart dialog -->
      <q-dialog v-model="prompt"  persistent>
      <q-card style="min-height: 50%; min-width: 50%;">
        <q-card-section>
          <div class="text-h6">Chart example</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <Chart v-show="chart" :type="type" @loaded="showChart" :data="data" :options="options" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!--  <div class="text-2xl font-bold mb-4">Basic</div>
    <Chart type="bar" :data="chartData" :options="chartOptions" />
    <div class="text-2xl font-bold mb-4">Pie</div>
    <Chart type="pie" :data="chartData" :options="chartOptions" class="w-full md:w-[30rem]" />
    <div class="text-2xl font-bold mb-4">Doughnut</div>
    <Chart type="doughnut" :data="chartData" :options="chartOptions" class="w-full md:w-[30rem]" />
    <div class="text-2xl font-bold mb-4">Vertical bar</div>
    <Chart type="bar" :data="chartData" :options="chartOptions" class="h-[30rem]"  />
    <div class="text-2xl font-bold mb-4">Horizontal bar</div>
    <Chart type="bar" :data="chartData" :options="chartOptionsY" class="h-[30rem]"  />
    <div class="text-2xl font-bold mb-4">Stacked bar</div>
    <Chart type="bar" :data="chartData" :options="chartOptionsStacked" class="h-[30rem]" />
    <div class="text-2xl font-bold mb-4">Line</div>
    <Chart type="line" :data="chartData" :options="chartOptions" class="h-[30rem]" />
    <div class="text-2xl font-bold mb-4">Multi Axis</div>
    <Chart type="line" :data="multiChartData" :options="chartOptionsMultiAxis" class="h-[30rem]" />
    <div class="text-2xl font-bold mb-4">Line Styles</div>
    <Chart type="line" :data="chartDataLineStyle" :options="chartOptionsLineStyle" class="h-[30rem]" />
    <div class="text-2xl font-bold mb-4">Polar Area</div>
    <Chart type="polarArea" :data="chartData" :options="chartOptions" class="w-full md:w-[30rem]" />
    <div class="text-2xl font-bold mb-4">Radar</div>
    <Chart type="radar" :data="chartData" :options="chartOptions" class="w-full md:w-[30rem]" /> -->
  </div>
</template>

<script setup lang="ts">
import Chart from 'primevue/chart'
import { ref } from 'vue'
import { ChartData, ChartOptions } from 'chart.js'

const prompt = ref(false)
const chart = ref(false)
const data = ref({
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Sales',
      backgroundColor: '#42A5F5',
      data: [40, 60, 80, 100, 120, 140]
    },
    {
      label: 'Expenses',
      backgroundColor: '#FF6384',
      data: [30, 50, 70, 90, 110, 130]
    }
  ]
} as ChartData),
  options = ref({}),
  type = ref('bar')

const setChartPropertiesAndOpen = (passedType: string, passedData: ChartData, passedOptions: ChartOptions) => {
  chart.value = false
  type.value = passedType
  data.value = passedData
  options.value = passedOptions
  prompt.value = true
}
const showChart = () => {
  chart.value = true
}

const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Sales',
      backgroundColor: '#42A5F5',
      data: [40, 60, 80, 100, 120, 140]
    },
    {
      label: 'Expenses',
      backgroundColor: '#FF6384',
      data: [30, 50, 70, 90, 110, 130]
    }
  ]
} as ChartData
const multiChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'New Customers',
      borderColor: '#47acb1',
      backgroundColor: 'rgba(71,172,177,0.2)',
      data: [30, 70, 45, 60, 80, 90],
      yAxisID: 'customersAxis' // Link this dataset to the first axis
    },
    {
      label: 'Revenue',
      borderColor: '#f07113',
      backgroundColor: 'rgba(240,113,19,0.2)',
      data: [100000, 142000, 165000, 198000, 164000, 151000],
      yAxisID: 'revenueAxis' // Link this dataset to the second axis
    }
  ]
} as ChartData

// Define chart data with different styles
const chartDataLineStyle = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Sales',
      borderColor: '#42A5F5',
      backgroundColor: 'rgba(66, 165, 245, 0.2)', // Area fill color
      data: [30, 70, 45, 60, 80, 90],
      fill: true, // Fill the area under the line
      tension: 0.4 // Smooth curve
    },
    {
      label: 'Expenses',
      borderColor: '#FF6384',
      backgroundColor: 'rgba(255, 99, 132, 0.2)', // Area fill color
      data: [20, 50, 30, 40, 60, 70],
      fill: true, // Fill the area under the line
      tension: 0.4 // Smooth curve
    },
    {
      label: 'Profit',
      borderColor: '#66BB6A',
      backgroundColor: 'rgba(102, 187, 106, 0.2)', // Area fill color
      data: [10, 20, 15, 20, 20, 30],
      fill: true,
      tension: 0.4
    }
  ]
} as ChartData
const chartOptions = {
  animation: false,
  responsive: true,
  scales: {
    y: {
      beginAtZero: true
    }
  }
} as ChartOptions
const chartOptionsY = {
  animation: false,
  responsive: true,
  scales: {
    y: {
      beginAtZero: true
    }
  },
  indexAxis: 'y'
} as ChartOptions
const chartOptionsStacked = {
  animation: false,
  responsive: true,
  scales: {
    x: {
      stacked: true
    },
    y: {
      stacked: true,
      beginAtZero: true
    }
  }
} as ChartOptions
const chartOptionsMultiAxis = {
  animation: false,
  responsive: true,
  scales: {
    x: {
      title: {
        display: true,
        text: 'Months'
      }
    },
    customersAxis: {
      type: 'linear',
      position: 'left',
      title: {
        display: true,
        text: 'New Customers',
        fontColor: '#47acb1'
      },
      ticks: {
        color: '#47acb1'
      }
    },
    revenueAxis: {
      type: 'linear',
      position: 'right',
      title: {
        display: true,
        text: 'Revenue ($)',
        fontColor: '#f07113'
      },
      ticks: {
        color: '#f07113'
      },
      grid: {
        drawOnChartArea: false // Only want the grid lines for one axis to show up
      }
    }
  }
} as ChartOptions
const chartOptionsLineStyle = {
  animation: false,
  responsive: true,
  scales: {
    x: {
      title: {
        display: true,
        text: 'Months'
      }
    },
    y: {
      title: {
        display: true,
        text: 'Values'
      },
      beginAtZero: true
    }
  }
} as ChartOptions
</script>
