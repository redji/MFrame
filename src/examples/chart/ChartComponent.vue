<template>
  <div class="chart-component'">
    <div class="text-2xl font-bold mb-4">Basic</div>
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
    <Chart type="radar" :data="chartData" :options="chartOptions" class="w-full md:w-[30rem]" />
    <div class="text-2xl font-bold mb-4">Combo</div>
    <Chart type="bar" :data="chartDataCombo" :options="chartOptionsCombo" class="h-[30rem]" />
  </div>
</template>

<script setup lang="ts">
import Chart from 'primevue/chart'
import { ref } from 'vue'

const chartData = ref({
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
})
const multiChartData = ref({
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
})
// Define chart data with different styles
const chartDataLineStyle = ref({
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
})
const chartDataCombo = ref({
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'New Customers',
      type: 'bar', // This dataset is a bar chart
      backgroundColor: '#42A5F5',
      data: [30, 70, 45, 60, 80, 90]
    },
    {
      label: 'Revenue',
      type: 'line', // This dataset is a line chart
      borderColor: '#FF6384',
      backgroundColor: 'rgba(255, 99, 132, 0.2)', // Area fill color (optional)
      data: [100000, 142000, 165000, 198000, 164000, 151000],
      fill: false
    },
    {
      label: 'Expenses',
      type: 'line', // Another line dataset
      borderColor: '#66BB6A',
      backgroundColor: 'rgba(102, 187, 106, 0.2)', // Area fill color (optional)
      data: [80000, 120000, 140000, 160000, 150000, 130000],
      fill: false
    }
  ]
})
const chartOptions = ref({
  responsive: true,
  scales: {
    y: {
      beginAtZero: true
    }
  }
})
const chartOptionsY = ref({
  responsive: true,
  scales: {
    y: {
      beginAtZero: true
    }
  },
  indexAxis: 'y'
})
const chartOptionsStacked = ref({
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
})
const chartOptionsMultiAxis = ref({
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
})
const chartOptionsLineStyle = ref({
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
})
// Define chart options for styling
const chartOptionsCombo = ref({
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
        text: 'Values',
        beginAtZero: true
      }
    }
  }
})
</script>
