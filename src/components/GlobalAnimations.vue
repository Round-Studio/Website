<template>
  <!-- 全局动画容器 -->
  <div class="global-animations">

    <!-- 全局背景效果 -->
    <div class="global-background">
      <!-- 动态渐变背景 -->
      <div class="gradient-background"></div>
      <!-- 几何图形背景 -->
      <div class="geometric-shapes">
        <div v-for="i in 100" :key="i" class="geometric-shape" :style="getShapeStyle(i)"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useGlobalAnimations } from '../composables/useGlobalAnimations'

const router = useRouter()
const { reinitAnimations } = useGlobalAnimations()

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

router.afterEach(() => {
  setTimeout(() => {
    isPageTransitioning.value = false
    reinitAnimations()
  }, 0)
})

// 键盘快捷键
const handleKeyPress = (e) => {
  // Ctrl + Shift + P: 切换性能监控
  if (e.ctrlKey && e.shiftKey && e.key === 'P') {
    showPerformanceMonitor.value = !showPerformanceMonitor.value
  }
}

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyPress)
})
</script>

<style scoped>
.global-animations {
  position: relative;
  z-index: 0;
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
