<script setup lang="ts">
import { computed } from 'vue'

const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(v: boolean) {
    colorMode.preference = v ? 'dark' : 'light'
  }
})

const applyTheme = (value: boolean) => {
  isDark.value = value
}

const startViewTransition = (event: MouseEvent) => {
  const target = event.target as HTMLInputElement
  const nextValue = target.checked

  if (!document.startViewTransition) {
    applyTheme(nextValue)
    return
  }

  const x = event.clientX
  const y = event.clientY

  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  )

  const transition = document.startViewTransition(() => {
    applyTheme(nextValue)
  })

  transition.ready.then(() => {
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`
        ]
      },
      {
        duration: 600,
        easing: 'cubic-bezier(.76,.32,.29,.99)',
        pseudoElement: '::view-transition-new(root)'
      }
    )
  })
}
</script>

<template>
  <div>
    <label class="switch">
      <input
        type="checkbox"
        :checked="isDark"
        @click="startViewTransition"
      />
      <span>Modo oscuro</span>
    </label>
  </div>
</template>

<style scoped>
.switch {
  cursor: pointer;
}
</style>