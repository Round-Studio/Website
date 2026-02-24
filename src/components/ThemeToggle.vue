<template>
  <button
    @click="onToggle"
    class="theme-toggle"
    :title="isDark ? '切换到浅色模式' : '切换到深色模式'"
    :aria-label="isDark ? '当前深色模式，点击切换到浅色模式' : '当前浅色模式，点击切换到深色模式'"
    :aria-pressed="isDark ? 'true' : 'false'"
    type="button"
  >
    <transition name="icon-fade" mode="out-in">
      <svg
        v-if="isDark"
        key="sun"
        class="theme-icon"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
      <svg
        v-else
        key="moon"
        class="theme-icon"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </transition>
  </button>
</template>

<script setup>
import { useTheme } from '../composables/useTheme'

const { isDark, toggleTheme } = useTheme()

const onToggle = (event) => {
  toggleTheme(event)
}
</script>

<style scoped>
.theme-toggle {
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: 1px solid var(--border-color);
  background: var(--bg-secondary);
  color: var(--text-primary);
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-sm);
}

.theme-toggle:hover {
  transform: translateY(-1px);
  border-color: color-mix(in srgb, var(--text-primary) 22%, var(--border-color));
  background: var(--bg-tertiary);
  box-shadow: var(--shadow-md);
}

.theme-toggle:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px var(--ring-color);
}

.theme-icon {
  width: 19px;
  height: 19px;
}

.icon-fade-enter-active,
.icon-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.icon-fade-enter-from {
  opacity: 0;
  transform: rotate(24deg) scale(0.72);
}

.icon-fade-leave-to {
  opacity: 0;
  transform: rotate(-24deg) scale(0.72);
}

@media (max-width: 768px) {
  .theme-toggle {
    width: 38px;
    height: 38px;
  }

  .theme-icon {
    width: 18px;
    height: 18px;
  }
}
</style>
