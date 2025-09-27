<script setup>
import Timer from './components/TimerDisplay.vue'
import Actions from './components/TimerActions.vue'
import IntervalConfiguration from './components/IntervalConfiguration.vue'
import { useSessionStore } from './stores/session'

const sessionStore = useSessionStore()
</script>

<template>
  <div class="wrapper" :style="{ background: sessionStore.color }">
    <div class="container">
      <h1>Pomodoro Timer</h1>
      <Timer />
      <IntervalConfiguration />
      <Actions />
    </div>
  </div>
</template>

<style>
html {
  font-family: Arial, sans-serif;
}

html,
body,
#app,
.wrapper {
  margin: 0;
  height: 100dvh;
}

h1,
h2 {
  margin: 20px;
}

h1 {
  text-align: center;
}

.wrapper {
  display: flex;
  justify-content: center;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 8px;
}
</style>
