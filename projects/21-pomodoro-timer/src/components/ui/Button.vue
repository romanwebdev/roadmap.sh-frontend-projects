<script setup>
defineOptions({ name: 'ButtonUI' })

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  click: {
    type: Function,
    required: false,
  },
})

defineEmits(['click'])
</script>

<template>
  <button @click="$emit('click')" type="button" :aria-label="props.label" tabindex="0">
    {{ props.label }}
  </button>
</template>

<style scoped>
button {
  border: none;
  padding: 6px 16px;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  box-shadow: 1px 1px 2px 1px grey;

  &:active {
    transform: translate(1px, 1px);
    box-shadow: none;
  }
}
</style>
