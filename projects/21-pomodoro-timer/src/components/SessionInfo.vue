<script setup>
import { useSessionStore } from '@/stores/session'

const sessionStore = useSessionStore()
</script>

<template>
  <h2>{{ sessionStore.name }}</h2>
  <p>Work session: {{ sessionStore.workSessionCount }}</p>
</template>

<style scoped>
h2 {
  margin-bottom: 5px;
}

p {
  margin-top: 2px;
  margin-bottom: 5px;
}
</style>
