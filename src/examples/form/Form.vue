<template>
  <div class="categories-component">
    <Tabs value="0">
      <TabList>
          <!-- <Tab value="0">Configurator</Tab> -->
          <Tab value="1" class="mr-2">AutoComplete</Tab>
          <Tab value="2" class="mr-2">CascadeSelect</Tab>
          <Tab value="3" class="mr-2">Checkbox</Tab>
          <Tab value="4" class="mr-2">ColorPicker</Tab>
          <Tab value="5" class="mr-2">DatePicker</Tab>
          <Tab value="6" class="mr-2">Editor</Tab>
          <Tab value="7" class="mr-2">FloatLabel</Tab>
          <Tab value="8" class="mr-2">IconField</Tab>
          <Tab value="9" class="mr-2">IftaLabel</Tab>
          <Tab value="10" class="mr-2">InputGroup</Tab>
          <Tab value="11" class="mr-2">InputMask</Tab>
          <Tab value="12" class="mr-2">InputNumber</Tab>
          <Tab value="13" class="mr-2">InputOpt</Tab>
          <Tab value="14" class="mr-2">InputText</Tab>
          <Tab value="15" class="mr-2">KeyFilter</Tab>
          <Tab value="16" class="mr-2">Knob</Tab>
          <Tab value="17" class="mr-2">ListBox</Tab>
          <Tab value="18" class="mr-2">Multiselect</Tab>
          <Tab value="19" class="mr-2">Password</Tab>
          <Tab value="20" class="mr-2">RadioButton</Tab>
          <Tab value="21" class="mr-2">Rating</Tab>
          <Tab value="22" class="mr-2">Select</Tab>
          <Tab value="23" class="mr-2">Slider</Tab>
          <Tab value="24" class="mr-2">Textarea</Tab>
          <Tab value="25" class="mr-2">ToggleButton</Tab>
          <Tab value="26" class="mr-2">ToggleSwitch</Tab>
          <Tab value="27" class="mr-2">TreeSelect</Tab>
      </TabList>
      <TabPanels>
          <!-- <TabPanel value="0">
            <div class="text-3xl font-bold mb-4">Configurator</div>
          </TabPanel> -->
          <TabPanel value="1">
            <div class="text-3xl font-bold mb-4">AutoComplete</div>
            <AutoComplete />
          </TabPanel>
          <TabPanel value="2">
            <div class="text-3xl font-bold mb-4">CascadeSelect</div>
            <CascadeSelect />
          </TabPanel>
          <TabPanel value="3">
            <div class="text-3xl font-bold mb-4">Checkbox</div>
            <Checkbox />
          </TabPanel>
          <TabPanel value="4">
            <div class="text-3xl font-bold mb-4">ColorPicker</div>
            <ColorPicker />
          </TabPanel>
          <TabPanel value="5">
            <div class="text-3xl font-bold mb-4">DatePicker</div>
            <DatePicker />
          </TabPanel>
          <TabPanel value="6">
            <div class="text-3xl font-bold mb-4">Editor</div>
            <Editor />
          </TabPanel>
          <TabPanel value="7">
            <div class="text-3xl font-bold mb-4">FloatLabel</div>
            <FloatLabel />
          </TabPanel>
          <TabPanel value="8">
            <div class="text-3xl font-bold mb-4">IconField</div>
            <IconField />
          </TabPanel>
          <TabPanel value="9">
            <div class="text-3xl font-bold mb-4">IftaLabel</div>
            <Ifta />
          </TabPanel>
          <TabPanel value="10">
            <div class="text-3xl font-bold mb-4">InputGroup</div>
            <InputGroup />
          </TabPanel>
          <TabPanel value="11">
            <div class="text-3xl font-bold mb-4">InputMask</div>
            <InputMask />
          </TabPanel>
          <TabPanel value="12">
            <div class="text-3xl font-bold mb-4">InputNumber</div>
            <InputNumber />
          </TabPanel>
          <TabPanel value="13">
            <div class="text-3xl font-bold mb-4">InputOpt</div>
            <InputOpt />
          </TabPanel>
          <TabPanel value="14">
            <div class="text-3xl font-bold mb-4">InputText</div>
            <InputText />
          </TabPanel>
          <TabPanel value="15">
            <div class="text-3xl font-bold mb-4">KeyFilter</div>
            <KeyFilter />
          </TabPanel>
          <TabPanel value="16">
            <div class="text-3xl font-bold mb-4">Knob</div>
            <Knob />
          </TabPanel>
          <TabPanel value="17">
            <div class="text-3xl font-bold mb-4">ListBox</div>
            <ListBox />
          </TabPanel>
          <TabPanel value="18">
            <div class="text-3xl font-bold mb-4">Multiselect</div>
            <MultiSelect />
          </TabPanel>
          <TabPanel value="19">
            <div class="text-3xl font-bold mb-4">Password</div>
            <Password />
          </TabPanel>
          <TabPanel value="20">
            <div class="text-3xl font-bold mb-4">RadioButton</div>
            <RadioButton />
          </TabPanel>
          <TabPanel value="21">
            <div class="text-3xl font-bold mb-4">Rating</div>
            <Rating />
          </TabPanel>
          <TabPanel value="22">
            <div class="text-3xl font-bold mb-4">Select</div>
            <Select />
          </TabPanel>
          <TabPanel value="23">
            <div class="text-3xl font-bold mb-4">Slider</div>
            <Slider />
          </TabPanel>
          <TabPanel value="24">
            <div class="text-3xl font-bold mb-4">Textarea</div>
            <Textarea />
          </TabPanel>
          <TabPanel value="25">
            <div class="text-3xl font-bold mb-4">ToggleButton</div>
            <ToggleButton />
          </TabPanel>
          <TabPanel value="26">
            <div class="text-3xl font-bold mb-4">ToggleSwitch</div>
            <ToggleSwitch />
          </TabPanel>
          <TabPanel value="27">
            <div class="text-3xl font-bold mb-4">TreeSelect</div>
            <TreeSelect />
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
import AutoComplete from './AutoCompleteComponent.vue'
import CascadeSelect from './CascadeSelectComponent.vue'
import Checkbox from './CheckboxComponent.vue'
import ColorPicker from './ColorPickerComponent.vue'
import DatePicker from './DatePickerComponent.vue'
import Editor from './EditorComponent.vue'
import FloatLabel from './FloatLabelComponent.vue'
import IconField from './IconFieldComponent.vue'
import Ifta from './IftaLabelComponent.vue'
import InputGroup from './InputGroupComponent.vue'
import InputMask from './InputMaskComponent.vue'
import InputNumber from './InputNumberComponent.vue'
import InputOpt from './InputOptComponent.vue'
import InputText from './InputTextComponent.vue'
import KeyFilter from './KeyFilterComponent.vue'
import Knob from './KnobComponent.vue'
import ListBox from './ListBoxComponent.vue'
import MultiSelect from './MultiSelectComponent.vue'
import Password from './PasswordComponent.vue'
import RadioButton from './RadioButtonComponent.vue'
import Rating from './RatingComponent.vue'
import Select from './SelectButton.vue'
import Slider from './SliderComponent.vue'
import Textarea from './TextareaComponent.vue'
import ToggleButton from './ToggleButtonComponent.vue'
import ToggleSwitch from './ToggleSwitchComponent.vue'
import TreeSelect from './TreeSelectComponent.vue'

defineOptions({
  name: 'FormComponent'
})
</script>
<style lang="scss">
  .p-tablist-tab-list {
    display: flex;
    flex-wrap: wrap;
    border: 0;
  }
</style>
