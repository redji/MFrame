<template>
  <div class="knob-component p-4">
    <h2 class="text-lg font-bold mb-4">Knob</h2>
    <div class="flex flex-col gap-4">
      <template v-for="(example, index) in examples" :key="index">
        <div class="card">
          <h3 class="text-sm font-semibold mb-4">{{ example.title }}</h3>
          <div class="field">
            <Knob
              :modelValue="example.value"
              @update:modelValue="(val) => example.value = val"
              v-bind="example.props"
            />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Knob from 'primevue/knob'

interface KnobProps {
  readonly?: boolean;
  disabled?: boolean;
  min?: number;
  max?: number;
  step?: number;
  valueTemplate?: (value: number) => string;
  strokeWidth?: number;
  size?: number;
  valueColor?: string;
  rangeColor?: string;
}

interface KnobExample {
  title: string;
  value: number;
  props?: KnobProps;
}

// Value template function with proper type
const percentageTemplate = (val: number): string => `${val}%`

// Examples configuration
const examples = ref<KnobExample[]>([
  {
    title: 'Basic',
    value: 60
  },
  {
    title: 'Readonly',
    value: 40,
    props: {
      readonly: true
    }
  },
  {
    title: 'Disabled',
    value: 50,
    props: {
      disabled: true
    }
  },
  {
    title: 'Min/Max',
    value: 0,
    props: {
      min: -50,
      max: 50
    }
  },
  {
    title: 'Step',
    value: 20,
    props: {
      step: 10
    }
  },
  {
    title: 'Template',
    value: 40,
    props: {
      valueTemplate: percentageTemplate
    }
  },
  {
    title: 'Stroke',
    value: 30,
    props: {
      strokeWidth: 5
    }
  },
  {
    title: 'Size',
    value: 70,
    props: {
      size: 200
    }
  },
  {
    title: 'Color',
    value: 50,
    props: {
      valueColor: 'var(--primary-500)',
      rangeColor: 'var(--surface-200)'
    }
  }
])
</script>

<style scoped>
.card {
  @apply bg-white p-6 rounded-lg shadow-md;
}

.field {
  @apply flex justify-center items-center;
}

/* Responsive Adjustments */
@media screen and (max-width: 640px) {
  .card {
    @apply p-4;
  }
}
</style>
