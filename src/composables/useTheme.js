import { ref, onMounted, watch } from 'vue'

const isDark = ref(false)
let isThemeAnimating = false

const getTransitionCenter = (event) => {
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight

  if (event?.clientX != null && event?.clientY != null) {
    return { x: event.clientX, y: event.clientY }
  }

  const target = event?.currentTarget
  if (target?.getBoundingClientRect) {
    const rect = target.getBoundingClientRect()
    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    }
  }

  return {
    x: viewportWidth / 2,
    y: viewportHeight / 2
  }
}

export function useTheme() {
  const updateTheme = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const toggleTheme = async (event) => {
    if (isThemeAnimating) return

    isThemeAnimating = true
    const nextIsDark = !isDark.value
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (typeof document.startViewTransition !== 'function' || reduceMotion) {
      isDark.value = nextIsDark
      updateTheme()
      isThemeAnimating = false
      return
    }

    const { x, y } = getTransitionCenter(event)
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )

    const transition = document.startViewTransition(() => {
      isDark.value = nextIsDark
      updateTheme()
    })

    try {
      await transition.ready
      await document.documentElement
        .animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`
            ]
          },
          {
            duration: 760,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            pseudoElement: '::view-transition-new(root)'
          }
        )
        .finished
    } catch {
      // Fallback: theme already applied in startViewTransition callback.
    }

    isThemeAnimating = false
  }

  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    isDark.value = savedTheme === 'dark' || (!savedTheme && prefersDark)
    updateTheme()
  }

  onMounted(() => {
    initTheme()
  })

  watch(isDark, updateTheme)

  return {
    isDark,
    toggleTheme,
    initTheme
  }
}
