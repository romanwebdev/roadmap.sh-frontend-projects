<script setup>
import { useTimerStore } from '@/stores/timer'
import SessionInfo from './SessionInfo.vue'

const timerStore = useTimerStore()
</script>

<template>
  <SessionInfo />
  <div class="timer">
    {{ String(timerStore.minutes).padStart(2, '0') }}:{{
      String(timerStore.seconds).padStart(2, '0')
    }}
  </div>
</template>

<style scoped>
.timer {
  font-size: 3rem;
  font-family: monospace;
  text-align: center;
}
</style>
