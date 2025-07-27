﻿<template>
  <div class="global-animation-demo">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content animate-on-scroll">
          <h1 class="hero-title text-reveal">
            🌟 全局动画系统演示
          </h1>
          <p class="hero-subtitle animate-slide-left" style="animation-delay: 0.3s">
            体验网站的极致动画效果
          </p>
          <div class="hero-actions animate-scale-up" style="animation-delay: 0.6s">
            <button @click="triggerAnimations" class="btn-enhanced demo-btn">
              🎭 触发动画
            </button>
            <button @click="toggleAnimations" class="btn-enhanced demo-btn">
              {{ animationsEnabled ? '🚫 禁用动画' : '✨ 启用动画' }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 动画特性展示 -->
    <section class="features-section">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <h2 class="section-title text-reveal">动画特性</h2>
          <p class="section-subtitle animate-slide-left" style="animation-delay: 0.2s">
            全方位的动画体验
          </p>
        </div>

        <div class="features-grid">
          <div class="feature-card card-enhanced animate-slide-left" style="animation-delay: 0.1s">
            <div class="feature-icon">🎭</div>
            <h3>入场动画</h3>
            <p>元素进入视口时的优雅动画效果</p>
            <button @click="demoScrollAnimation" class="demo-feature-btn btn-enhanced">演示</button>
          </div>

          <div class="feature-card card-enhanced animate-scale-up" style="animation-delay: 0.2s">
            <div class="feature-icon">🌟</div>
            <h3>背景粒子</h3>
            <p>动态浮动的背景粒子系统</p>
            <button @click="demoParticles" class="demo-feature-btn btn-enhanced">演示</button>
          </div>

          <div class="feature-card card-enhanced animate-slide-right" style="animation-delay: 0.3s">
            <div class="feature-icon">🎯</div>
            <h3>交互反馈</h3>
            <p>按钮和链接的增强交互效果</p>
            <button @click="demoInteraction" class="demo-feature-btn btn-enhanced">演示</button>
          </div>

          <div class="feature-card card-enhanced animate-rotate-in" style="animation-delay: 0.4s">
            <div class="feature-icon">📱</div>
            <h3>页面切换</h3>
            <p>路由切换时的平滑过渡动画</p>
            <button @click="demoPageTransition" class="demo-feature-btn btn-enhanced">演示</button>
          </div>

          <div class="feature-card card-enhanced animate-slide-left" style="animation-delay: 0.5s">
            <div class="feature-icon">⌨️</div>
            <h3>文字动画</h3>
            <p>逐字符显示的文字动画效果</p>
            <button @click="demoTextAnimation" class="demo-feature-btn btn-enhanced">演示</button>
          </div>

          <div class="feature-card card-enhanced animate-scale-up" style="animation-delay: 0.6s">
            <div class="feature-icon">🎨</div>
            <h3>主题切换</h3>
            <p>深色和浅色模式的平滑切换</p>
            <button @click="demoThemeSwitch" class="demo-feature-btn btn-enhanced">演示</button>
          </div>
        </div>
      </div>
    </section>

    <!-- 实时演示区域 -->
    <section class="demo-section">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <h2 class="section-title text-reveal">实时演示</h2>
        </div>

        <div class="demo-playground">
          <!-- 动画测试卡片 -->
          <div class="demo-cards">
            <div v-for="i in 6" :key="i" 
                 class="demo-card card-enhanced animate-on-scroll" 
                 :style="{ animationDelay: `${i * 0.1}s` }"
                 @click="animateCard(i)">
              <div class="demo-card-content">
                <div class="demo-card-icon">{{ getCardIcon(i) }}</div>
                <h4>演示卡片 {{ i }}</h4>
                <p>点击我查看动画效果</p>
              </div>
            </div>
          </div>

          <!-- 文字动画演示 -->
          <div class="text-demo animate-on-scroll">
            <h3 class="demo-text" ref="demoText">这是一段演示文字</h3>
            <button @click="animateText" class="btn-enhanced">重新播放文字动画</button>
          </div>

          <!-- 粒子演示 -->
          <div class="particle-demo animate-on-scroll">
            <div class="particle-container" ref="particleContainer">
              <div v-for="i in particleCount" :key="i" class="demo-particle" :style="getParticleStyle(i)"></div>
            </div>
            <div class="particle-controls">
              <button @click="addParticles" class="btn-enhanced">增加粒子</button>
              <button @click="removeParticles" class="btn-enhanced">减少粒子</button>
              <button @click="resetParticles" class="btn-enhanced">重置</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 性能监控 -->
    <section class="performance-section">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <h2 class="section-title text-reveal">性能监控</h2>
        </div>
        
        <div class="performance-stats animate-scale-up">
          <div class="stat-item">
            <div class="stat-value">{{ fps }}</div>
            <div class="stat-label">FPS</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">{{ memoryUsage }}</div>
            <div class="stat-label">内存 (MB)</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">{{ animationCount }}</div>
            <div class="stat-label">活跃动画</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 响应式数据
const animationsEnabled = ref(true)
const particleCount = ref(20)
const fps = ref(60)
const memoryUsage = ref(0)
const animationCount = ref(0)
const demoText = ref(null)
const particleContainer = ref(null)

// 卡片图标
const getCardIcon = (index) => {
  const icons = ['🎨', '🚀', '⭐', '🎯', '💫', '🌟']
  return icons[index - 1]
}

// 粒子样式
const getParticleStyle = (index) => {
  const size = 4 + Math.random() * 8
  const left = Math.random() * 100
  const delay = Math.random() * 5
  const duration = 3 + Math.random() * 4
  
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`
  }
}

// 动画演示函数
const triggerAnimations = () => {
  // 重新触发所有入场动画
  const elements = document.querySelectorAll('.animate-on-scroll')
  elements.forEach(el => {
    el.classList.remove('in-view')
    setTimeout(() => {
      el.classList.add('in-view')
    }, 100)
  })
}

const toggleAnimations = () => {
  animationsEnabled.value = !animationsEnabled.value
  document.documentElement.style.setProperty(
    '--animation-duration', 
    animationsEnabled.value ? '0.6s' : '0s'
  )
}

const demoScrollAnimation = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  setTimeout(triggerAnimations, 500)
}

const demoParticles = () => {
  particleCount.value = 50
  setTimeout(() => {
    particleCount.value = 20
  }, 3000)
}

const demoInteraction = () => {
  const buttons = document.querySelectorAll('.btn-enhanced')
  buttons.forEach((btn, index) => {
    setTimeout(() => {
      btn.style.transform = 'scale(1.1)'
      setTimeout(() => {
        btn.style.transform = ''
      }, 200)
    }, index * 100)
  })
}

const demoPageTransition = () => {
  router.push('/about')
}

const demoTextAnimation = () => {
  animateText()
}

const demoThemeSwitch = () => {
  document.documentElement.classList.toggle('dark')
}

const animateCard = (index) => {
  const card = document.querySelector(`.demo-card:nth-child(${index})`)
  if (card) {
    card.style.transform = 'scale(1.1) rotate(5deg)'
    setTimeout(() => {
      card.style.transform = ''
    }, 300)
  }
}

const animateText = () => {
  if (!demoText.value) return
  
  const text = demoText.value.textContent
  demoText.value.innerHTML = ''
  
  text.split('').forEach((char, index) => {
    const span = document.createElement('span')
    span.textContent = char === ' ' ? '\u00A0' : char
    span.style.opacity = '0'
    span.style.transform = 'translateY(20px)'
    span.style.transition = 'all 0.3s ease'
    span.style.animationDelay = `${index * 0.05}s`
    demoText.value.appendChild(span)
    
    setTimeout(() => {
      span.style.opacity = '1'
      span.style.transform = 'translateY(0)'
    }, index * 50)
  })
}

const addParticles = () => {
  particleCount.value = Math.min(particleCount.value + 10, 100)
}

const removeParticles = () => {
  particleCount.value = Math.max(particleCount.value - 10, 5)
}

const resetParticles = () => {
  particleCount.value = 20
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
      
      if (performance.memory) {
        memoryUsage.value = Math.round(performance.memory.usedJSHeapSize / 1024 / 1024)
      }
      
      animationCount.value = document.querySelectorAll('[style*="animation"]').length
    }
    
    requestAnimationFrame(updatePerformance)
  }
  
  updatePerformance()
}

onMounted(() => {
  startPerformanceMonitoring()
  
  // 初始化滚动动画
  setTimeout(() => {
    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach(el => {
      el.classList.add('in-view')
    })
  }, 100)
})
</script>

<style scoped>
.global-animation-demo {
  padding-top: 70px;
}

.hero {
  min-height: 60vh;
  display: flex;
  align-items: center;
  background: var(--gradient-hero);
  color: white;
  position: relative;
  overflow: hidden;
}

.hero-container {
  width: 100%;
  padding: 0 40px;
  text-align: center;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

.hero-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.demo-btn {
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  backdrop-filter: blur(10px);
}

.features-section,
.demo-section,
.performance-section {
  padding: 80px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--text-secondary);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.feature-card {
  background: var(--bg-secondary);
  padding: 30px;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  text-align: center;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.feature-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.feature-card p {
  color: var(--text-secondary);
  margin-bottom: 20px;
  line-height: 1.6;
}

.demo-feature-btn {
  padding: 8px 16px;
  background: var(--gradient-primary);
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
}

.demo-playground {
  display: grid;
  gap: 40px;
}

.demo-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.demo-card {
  background: var(--bg-secondary);
  padding: 20px;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.demo-card-icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

.demo-card h4 {
  color: var(--text-primary);
  margin-bottom: 8px;
}

.demo-card p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.text-demo,
.particle-demo {
  background: var(--bg-secondary);
  padding: 30px;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  text-align: center;
}

.demo-text {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 20px;
}

.particle-container {
  position: relative;
  height: 200px;
  background: var(--bg-tertiary);
  border-radius: 12px;
  margin-bottom: 20px;
  overflow: hidden;
}

.demo-particle {
  position: absolute;
  background: var(--primary-blue);
  border-radius: 50%;
  animation: particleFloat 4s infinite ease-in-out;
}

@keyframes particleFloat {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

.particle-controls {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

.performance-stats {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
  background: var(--bg-secondary);
  padding: 20px;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  min-width: 120px;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-blue);
  margin-bottom: 8px;
}

.stat-label {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

/* 响应式 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .demo-cards {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  
  .performance-stats {
    gap: 20px;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .demo-btn {
    width: 200px;
  }
}
</style>
