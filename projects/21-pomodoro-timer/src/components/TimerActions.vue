<script setup>
import { useTimerStore } from '@/stores/timer'
import Button from './ui/Button.vue'

const { start, pause, stop, resume } = useTimerStore()
</script>

<template>
  <div class="actions">
    <h3>Actions</h3>
    <div class="btns">
      <Button label="Start" @click="start" />
      <Button label="Pause" @click="pause" />
      <Button label="Resume" @click="resume" />
      <Button label="Stop" @click="stop" />
    </div>
  </div>
</template>

<style scoped>
.actions {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btns {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;

  @media screen and (max-width: 400px) {
    gap: 8px;
  }
}
</style>
