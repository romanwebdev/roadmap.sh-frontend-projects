import { ref } from 'vue'

export function useRafLoop(callback) {
  const rafId = ref(null)
  function start() {
    function loop() {
      callback()
      rafId.value = requestAnimationFrame(loop)
    }
    rafId.value = requestAnimationFrame(loop)
  }
  function stop() {
    if (rafId.value != null) {
      cancelAnimationFrame(rafId.value)
      rafId.value = null
    }
  }
  return { start, stop, rafId }
}
