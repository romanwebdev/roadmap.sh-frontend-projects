<script setup>
import { ref } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  input: {
    type: Function,
  },
  modelValue: {
    type: [String, Number],
    required: false,
  },
})

const emit = defineEmits(['update:modelValue'])
const innerValue = ref(props.modelValue ?? '')

function onInput(e) {
  const value = e.target.value
  innerValue.value = value
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="control">
    <label :for="props.name" :id="`${props.name}-label`">{{ label }}</label>
    <input
      :type="type"
      :name="props.name"
      :id="props.name"
      :value="innerValue"
      @input="onInput"
      :aria-label="label"
      :aria-labelledby="`${props.name}-label`"
      :aria-required="props.required ?? false"
      autocomplete="off"
    />
  </div>
</template>

<style scoped>
.control {
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 2px;
  }

  input {
    border-radius: 4px;
    border: none;
    padding: 6px 12px;
    box-shadow: 1px 1px 2px 1px grey;
  }
}
</style>
