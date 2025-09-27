import { ref, computed } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import { useSessionStore } from './session.js'
import { useRafLoop } from '../composables/use-raf-loop.js'

const SECONDS_IN_A_MINUTE = 60
const DEFAULT_WORK_MINUTES = 25
const DEFAULT_BREAK_MINUTES = 5
const DEFAULT_LONG_BREAK_MINUTES = 15

export const useTimerStore = defineStore('timer', () => {
  const bellSound = new Audio('/sounds/bell.mp3')
  const { isBreak, workSessionCount } = storeToRefs(useSessionStore())
  const workMinutes = ref(DEFAULT_WORK_MINUTES)
  const breakMinutes = ref(DEFAULT_BREAK_MINUTES)
  const longBreakMinutes = ref(DEFAULT_LONG_BREAK_MINUTES)
  const remainingSeconds = ref(workMinutes.value * SECONDS_IN_A_MINUTE)
  const minutes = computed(() => Math.floor(remainingSeconds.value / SECONDS_IN_A_MINUTE))
  const seconds = computed(() => remainingSeconds.value % SECONDS_IN_A_MINUTE)
  const raf = useRafLoop(onRafUpdate)
  let endTime = 0
  let isRunning = false
  let isPaused = false

  function onRafUpdate() {
    const diffMs = Math.max(0, endTime - Date.now())
    remainingSeconds.value = Math.floor(diffMs / 1000)

    if (remainingSeconds.value <= 0) {
      if (isBreak.value) {
        workSessionCount.value++
      }
      bellSound.play()
      isBreak.value = !isBreak.value
      const nextDuration = getSessionDuration(isBreak.value, workSessionCount.value)
      remainingSeconds.value = nextDuration
      endTime = Date.now() + nextDuration * 1000
    }
  }

  function getSessionDuration(isBreakSession, sessionCount) {
    if (!isBreakSession) return workMinutes.value * SECONDS_IN_A_MINUTE
    return sessionCount % 4 === 0
      ? longBreakMinutes.value * SECONDS_IN_A_MINUTE
      : breakMinutes.value * SECONDS_IN_A_MINUTE
  }

  function resetSession() {
    remainingSeconds.value = workMinutes.value * SECONDS_IN_A_MINUTE
    endTime = 0
    workSessionCount.value = 1
    isBreak.value = false
    isRunning = false
    isPaused = false
    raf.stop()
  }

  function runTimer() {
    if (isRunning) return
    isRunning = true
    raf.start()
  }

  function start() {
    resetSession()
    remainingSeconds.value = workMinutes.value * SECONDS_IN_A_MINUTE
    endTime = Date.now() + remainingSeconds.value * 1000
    runTimer()
  }

  function pause() {
    if (!isRunning) return
    if (endTime) {
      const diffMs = Math.max(0, endTime - Date.now())
      remainingSeconds.value = Math.floor(diffMs / 1000)
    }
    raf.stop()
    isRunning = false
    isPaused = true
    endTime = 0
  }

  function resume() {
    if (!isPaused || isRunning || remainingSeconds.value <= 0) return
    endTime = Date.now() + remainingSeconds.value * 1000
    isPaused = false
    runTimer()
  }

  function stop() {
    resetSession()
  }

  function changeWorkMinutes(value) {
    workMinutes.value = value
    remainingSeconds.value = value * SECONDS_IN_A_MINUTE
  }

  return {
    minutes,
    seconds,
    workMinutes,
    breakMinutes,
    longBreakMinutes,
    start,
    pause,
    resume,
    stop,
    changeWorkMinutes,
  }
})
