<script setup>
import { useTheme } from './composables/useTheme'
import { useLoading } from './composables/useLoading'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import TopLoadingBar from './components/TopLoadingBar.vue'
import ErrorBoundary from './components/ErrorBoundary.vue'

// Initialize theme
const { initTheme } = useTheme()
initTheme()

// Get loading state
const { shouldShowLoading } = useLoading()
</script>

<template>
  <div id="app">
    <!-- 顶部加载条 -->
    <TopLoadingBar :is-loading="shouldShowLoading()" />

    <!-- 主要内容 -->
    <div class="app-content">
      <ErrorBoundary>
        <Navbar />
        <main>
          <RouterView />
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

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
