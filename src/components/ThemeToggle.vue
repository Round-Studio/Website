<template>
  <button
    @click="toggleTheme"
    class="theme-toggle"
    :title="isDark ? '切换到浅色模式' : '切换到深色模式'"
  >
    <transition name="icon-fade" mode="out-in">
      <svg
        v-if="isDark"
        key="sun"
        class="icon"
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
        class="icon"
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
</script>

<style scoped>
.theme-toggle {
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 2px solid var(--border-color);
  background: var(--bg-secondary);
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.theme-toggle:hover {
  border-color: var(--primary-blue);
  background: var(--gradient-primary);
  color: white;
  transform: scale(1.05);
  box-shadow: var(--shadow-lg);
}

.icon {
  width: 20px;
  height: 20px;
  transition: all 0.3s ease;
}

.icon-fade-enter-active,
.icon-fade-leave-active {
  transition: all 0.3s ease;
}

.icon-fade-enter-from {
  opacity: 0;
  transform: rotate(180deg) scale(0.5);
}

.icon-fade-leave-to {
  opacity: 0;
  transform: rotate(-180deg) scale(0.5);
}

@media (max-width: 768px) {
  .theme-toggle {
    width: 40px;
    height: 40px;
  }
  
  .icon {
    width: 18px;
    height: 18px;
  }
}
</style>
