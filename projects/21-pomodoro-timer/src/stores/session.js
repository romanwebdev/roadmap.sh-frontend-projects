import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useSessionStore = defineStore('session', () => {
  const name = computed(() =>
    !isBreak.value ? 'Work' : workSessionCount.value % 4 ? 'Short Break' : 'Long Break',
  )
  const color = computed(() =>
    !isBreak.value ? '#ffb8b8' : workSessionCount.value % 4 ? '#b8ffb8' : '#b8efff',
  )
  const isBreak = ref(false)
  const workSessionCount = ref(1)

  return { name, color, isBreak, workSessionCount }
})
