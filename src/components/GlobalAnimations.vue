<template>
  <!-- 全局动画容器 -->
  <div class="global-animations">

    <!-- 全局背景效果 -->
    <div class="global-background">
      <!-- 动态渐变背景 -->
      <div class="gradient-background"></div>
      <!-- 几何图形背景 -->
      <div class="geometric-shapes">
        <div v-for="i in 24" :key="i" class="geometric-shape" :style="getShapeStyle(i)"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useGlobalAnimations } from '../composables/useGlobalAnimations'

const router = useRouter()
const { reinitAnimations } = useGlobalAnimations()

// 几何图形样式生成
const getShapeStyle = (index) => {
  const size = 12 + Math.random() * 20
  const left = Math.random() * 100
  const top = Math.random() * 100
  const delay = Math.random() * 8
  const duration = 28 + Math.random() * 20
  const opacity = 0.01 + Math.random() * 0.02

  return {
    left: `${left}%`,
    top: `${top}%`,
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    opacity: opacity
  }
}

router.afterEach(() => {
  setTimeout(() => {
    reinitAnimations()
  }, 0)
})

onUnmounted(() => {
  // No-op: keep lifecycle hook for future cleanup extensions.
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
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  animation: geometricFloat 42s infinite ease-in-out;
}

.geometric-shape:nth-child(odd) {
  background: rgba(180, 180, 180, 0.05);
}

@keyframes geometricFloat {
  0% {
    transform: translateY(100vh);
  }
  100% {
    transform: translateY(-120px);
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
  border: 2px solid rgba(255, 255, 255, 0.12);
  border-top: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  animation: spin 1s linear infinite;
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
  transform: scale(1.03);
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
