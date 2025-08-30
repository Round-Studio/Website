<script setup>
import { useTheme } from './composables/useTheme'
import { useGlobalAnimations } from './composables/useGlobalAnimations'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import ErrorBoundary from './components/ErrorBoundary.vue'
import GlobalAnimations from './components/GlobalAnimations.vue'

// Initialize theme
const { initTheme } = useTheme()
initTheme()


// Initialize global animations
const { initAllAnimations } = useGlobalAnimations()
</script>

<template>
  <div id="app">
    <!-- 全局动画系统 -->
    <GlobalAnimations />

    <!-- 主要内容 -->
    <div class="app-content">
      <ErrorBoundary>
        <Navbar />
        <main>
          <transition name="page" mode="out-in">
            <RouterView />
          </transition>
        </main>
        <Footer />
      </ErrorBoundary>
    </div>
  </div>
</template>

<style>
#app {
  min-height: 100vh;
  position: relative;
}

.app-content {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

/* 页面切换动画 */
.router-view {
  transition: all 0.3s ease;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.v-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.v-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>

<style>
@import './assets/styles/theme.css';
@import './assets/styles/global-animations.css';

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
}

main {
  flex: 1;
  position: relative;
  z-index: 1;
}

/* 增强的页面切换动画 */
.page-enter-active {
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.page-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.98);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(1.02);
}
</style>
