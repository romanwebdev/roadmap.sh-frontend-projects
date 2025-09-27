<script setup>
import { useTimerStore } from '@/stores/timer'
import FormControl from './ui/FormControl.vue'

const store = useTimerStore()
</script>

<template>
  <div class="intervals">
    <h3>Set intervals</h3>
    <form>
      <FormControl
        name="work"
        label="Work"
        type="number"
        :modelValue="store.workMinutes"
        @input="(event) => store.changeWorkMinutes(event.target.value)"
      />
      <FormControl name="break" label="Break" type="number" v-model="store.breakMinutes" />
      <FormControl
        name="longBreak"
        label="Long Break"
        type="number"
        v-model="store.longBreakMinutes"
      />
    </form>
  </div>
</template>

<style scoped>
.intervals {
  display: flex;
  flex-direction: column;
  align-items: center;
}

form {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
