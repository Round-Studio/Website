﻿<template>
  <!-- 全局动画容器 -->
  <div class="global-animations">
    <!-- 加载覆盖层 -->
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-content">
        <div class="loading-spinner"></div>
        <div class="loading-text">
          <span class="loading-char" v-for="(char, index) in loadingText" :key="index" :style="{ animationDelay: `${index * 0.1}s` }">
            {{ char }}
          </span>
        </div>
        <div class="loading-progress">
          <div class="loading-progress-bar" :style="{ width: `${loadingProgress}%` }"></div>
        </div>
      </div>
    </div>

    <!-- 滚动进度指示器 -->
    <div class="scroll-indicator">
      <div class="scroll-progress" :style="{ width: `${scrollProgress}%` }"></div>
    </div>

    <!-- 全局背景效果 -->
    <div class="global-background">
      <!-- 动态渐变背景 -->
      <div class="gradient-background"></div>
      
      <!-- 粒子系统 -->
      <div class="global-particles"></div>
      
      <!-- 几何图形背景 -->
      <div class="geometric-shapes">
        <div v-for="i in 10" :key="i" class="geometric-shape" :style="getShapeStyle(i)"></div>
      </div>
    </div>

    <!-- 页面切换动画遮罩 -->
    <transition name="page-transition">
      <div v-if="isPageTransitioning" class="page-transition-overlay">
        <div class="transition-content">
          <div class="transition-logo">
            <img src="../assets/logo.ico" alt="Logo" />
            <span class="gradient-text">Round Studio</span>
          </div>
          <div class="transition-spinner"></div>
        </div>
      </div>
    </transition>

    <!-- 音效控制器 -->
    <div class="sound-controller" v-if="soundEnabled">
      <button @click="toggleSound" class="sound-btn" :class="{ muted: !soundEnabled }">
        <svg v-if="soundEnabled" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
        </svg>
        <svg v-else viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
        </svg>
      </button>
    </div>

    <!-- 性能监控器 -->
    <div v-if="showPerformanceMonitor" class="performance-monitor">
      <div class="fps-counter">FPS: {{ fps }}</div>
      <div class="memory-usage">Memory: {{ memoryUsage }}MB</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useGlobalAnimations } from '../composables/useGlobalAnimations'

const router = useRouter()
const { isLoading, scrollProgress, initAllAnimations, reinitAnimations } = useGlobalAnimations()

// 响应式数据
const loadingProgress = ref(0)
const loadingText = ref('Round Studio')
const isPageTransitioning = ref(false)
const soundEnabled = ref(true)
const showPerformanceMonitor = ref(false)
const fps = ref(60)
const memoryUsage = ref(0)

// 几何图形样式生成
const getShapeStyle = (index) => {
  const shapes = ['circle', 'triangle', 'square', 'hexagon']
  const shape = shapes[index % shapes.length]
  const size = 20 + Math.random() * 40
  const left = Math.random() * 100
  const top = Math.random() * 100
  const delay = Math.random() * 10
  const duration = 20 + Math.random() * 20
  const opacity = 0.02 + Math.random() * 0.05

  return {
    left: `${left}%`,
    top: `${top}%`,
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    opacity: opacity,
    '--shape': shape
  }
}

// 模拟加载进度
const simulateLoading = () => {
  const interval = setInterval(() => {
    loadingProgress.value += Math.random() * 15
    if (loadingProgress.value >= 100) {
      loadingProgress.value = 100
      clearInterval(interval)
    }
  }, 1)
}

// 音效控制
const toggleSound = () => {
  soundEnabled.value = !soundEnabled.value
}

// 性能监控
const startPerformanceMonitoring = () => {
  let lastTime = performance.now()
  let frameCount = 0

  const updatePerformance = () => {
    frameCount++
    const currentTime = performance.now()
    
    if (currentTime - lastTime >= 1000) {
      fps.value = Math.round((frameCount * 1000) / (currentTime - lastTime))
      frameCount = 0
      lastTime = currentTime
      
      // 内存使用情况（如果支持）
      if (performance.memory) {
        memoryUsage.value = Math.round(performance.memory.usedJSHeapSize / 1024 / 1024)
      }
    }
    
    requestAnimationFrame(updatePerformance)
  }
  
  updatePerformance()
}

// 路由切换动画
router.beforeEach((to, from, next) => {
  if (from.name) {
    isPageTransitioning.value = true
  }
  next()
})

router.afterEach(() => {
  setTimeout(() => {
    isPageTransitioning.value = false
    reinitAnimations()
  }, 300)
})

// 键盘快捷键
const handleKeyPress = (e) => {
  // Ctrl + Shift + P: 切换性能监控
  if (e.ctrlKey && e.shiftKey && e.key === 'P') {
    showPerformanceMonitor.value = !showPerformanceMonitor.value
  }
  
  // Ctrl + Shift + S: 切换音效
  if (e.ctrlKey && e.shiftKey && e.key === 'S') {
    toggleSound()
  }
}

onMounted(() => {
  simulateLoading()
  startPerformanceMonitoring()
  document.addEventListener('keydown', handleKeyPress)
  
  // 检测用户偏好
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) {
    document.documentElement.style.setProperty('--animation-duration', '0.1s')
  }
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyPress)
})
</script>

<style scoped>
.global-animations {
  position: relative;
  z-index: 0;
}

/* 加载覆盖层 */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-content {
  text-align: center;
  max-width: 300px;
}

.loading-spinner {
  width: 60px;
  height: 60px;
  border: 3px solid rgba(59, 130, 246, 0.1);
  border-top: 3px solid var(--primary-blue);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

.loading-text {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--text-primary);
}

.loading-char {
  display: inline-block;
  opacity: 0;
  animation: charFadeIn 0.6s ease forwards;
}

.loading-progress {
  width: 100%;
  height: 4px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 2px;
  overflow: hidden;
}

.loading-progress-bar {
  height: 100%;
  background: var(--gradient-primary);
  transition: width 0.3s ease;
  border-radius: 2px;
}

/* 几何图形 */
.geometric-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.geometric-shape {
  position: absolute;
  background: var(--primary-blue);
  animation: geometricFloat 30s infinite linear;
}

.geometric-shape:nth-child(odd) {
  background: var(--primary-purple);
}

@keyframes geometricFloat {
  0% {
    transform: translateY(100vh) rotate(0deg);
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
  }
}

/* 页面切换动画 */
.page-transition-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--bg-primary);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.transition-content {
  text-align: center;
}

.transition-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;
}

.transition-logo img {
  width: 40px;
  height: 40px;
}

.transition-logo span {
  font-size: 1.5rem;
  font-weight: 700;
}

.transition-spinner {
  width: 40px;
  height: 40px;
  border: 2px solid rgba(59, 130, 246, 0.1);
  border-top: 2px solid var(--primary-blue);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto;
}

.page-transition-enter-active,
.page-transition-leave-active {
  transition: all 0.3s ease;
}

.page-transition-enter-from,
.page-transition-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* 音效控制器 */
.sound-controller {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.sound-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sound-btn:hover {
  transform: scale(1.1);
  box-shadow: var(--shadow-lg);
}

.sound-btn svg {
  width: 24px;
  height: 24px;
}

.sound-btn.muted {
  opacity: 0.5;
}

/* 性能监控器 */
.performance-monitor {
  position: fixed;
  top: 80px;
  right: 20px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px;
  border-radius: 8px;
  font-family: monospace;
  font-size: 12px;
  z-index: 1000;
}

.fps-counter,
.memory-usage {
  margin-bottom: 5px;
}

/* 动画关键帧 */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes charFadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式 */
@media (max-width: 768px) {
  .sound-controller {
    bottom: 80px;
    right: 15px;
  }
  
  .sound-btn {
    width: 40px;
    height: 40px;
  }
  
  .sound-btn svg {
    width: 20px;
    height: 20px;
  }
  
  .performance-monitor {
    top: 70px;
    right: 15px;
    font-size: 10px;
    padding: 8px;
  }
}
</style>
