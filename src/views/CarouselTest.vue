﻿<template>
  <div class="carousel-test-page">
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title gradient-text">
          🎨 ProjectCarousel 极致动画演示
        </h1>
        <p class="hero-subtitle">
          体验令人惊叹的轮播动画效果
        </p>
      </div>
    </div>
    
    <div class="demo-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">动画特性展示</h2>
          <p class="section-description">
            以下是为 ProjectCarousel 组件添加的所有动画效果
          </p>
        </div>
        
        <div class="features-grid">
          <div class="feature-card" v-for="(feature, index) in features" :key="index">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        </div>
        
        <div class="carousel-demo">
          <h3 class="demo-title">实时演示</h3>
          <ProjectCarousel />
        </div>
        
        <div class="controls-section">
          <h3 class="controls-title">动画控制</h3>
          <div class="controls-grid">
            <button @click="toggleTheme" class="control-btn">
              {{ isDark ? '🌞 浅色模式' : '🌙 深色模式' }}
            </button>
            <button @click="toggleReducedMotion" class="control-btn">
              {{ reducedMotion ? '✨ 启用动画' : '🚫 减少动画' }}
            </button>
            <button @click="reloadCarousel" class="control-btn">
              🔄 重新加载
            </button>
          </div>
        </div>
        
        <div class="tech-info">
          <h3 class="tech-title">技术实现</h3>
          <div class="tech-grid">
            <div class="tech-item">
              <h4>CSS3 动画</h4>
              <p>使用关键帧动画和过渡效果</p>
            </div>
            <div class="tech-item">
              <h4>3D 变换</h4>
              <p>利用 perspective 和 transform3d</p>
            </div>
            <div class="tech-item">
              <h4>性能优化</h4>
              <p>GPU 加速和减少重排重绘</p>
            </div>
            <div class="tech-item">
              <h4>响应式设计</h4>
              <p>适配不同屏幕尺寸</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ProjectCarousel from '../components/ProjectCarousel.vue'

const isDark = ref(false)
const reducedMotion = ref(false)

const features = ref([
  {
    icon: '✨',
    title: '入场动画',
    description: '组件加载时的优雅渐入效果，包含缩放和透明度变化'
  },
  {
    icon: '🎭',
    title: '3D 轮播',
    description: '流畅的 3D 翻转和滑动效果，支持前后幻灯片的透视变换'
  },
  {
    icon: '🎯',
    title: '悬停交互',
    description: '丰富的鼠标悬停效果，包含图片缩放和信息显示'
  },
  {
    icon: '💫',
    title: '按钮动画',
    description: '按钮的脉冲、弹跳和涟漪效果，提供即时的视觉反馈'
  },
  {
    icon: '🔄',
    title: '指示器动画',
    description: '动态指示器变化，包含进度环和脉冲效果'
  },
  {
    icon: '🌟',
    title: '背景粒子',
    description: '微妙的背景粒子动画，增加视觉层次感'
  },
  {
    icon: '⌨️',
    title: '文字动画',
    description: '标题和描述的逐字符打字机效果'
  },
  {
    icon: '🏷️',
    title: '标签动画',
    description: '标签的弹性出现效果，带有旋转和缩放'
  },
  {
    icon: '💀',
    title: '骨架屏',
    description: '图片加载时的优雅骨架屏效果'
  },
  {
    icon: '📊',
    title: '进度环',
    description: '动态进度显示，实时反映当前位置'
  }
])

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}

const toggleReducedMotion = () => {
  reducedMotion.value = !reducedMotion.value
  if (reducedMotion.value) {
    document.documentElement.style.setProperty('--animation-duration', '0s')
    document.documentElement.style.setProperty('--transition-duration', '0s')
  } else {
    document.documentElement.style.removeProperty('--animation-duration')
    document.documentElement.style.removeProperty('--transition-duration')
  }
}

const reloadCarousel = () => {
  // 触发重新加载动画
  const carousel = document.querySelector('.project-carousel')
  if (carousel) {
    carousel.style.opacity = '0'
    setTimeout(() => {
      carousel.style.opacity = '1'
    }, 100)
  }
}

onMounted(() => {
  // 检测系统偏好
  const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  isDark.value = darkMediaQuery.matches
  document.documentElement.classList.toggle('dark', isDark.value)
  
  const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  reducedMotion.value = motionMediaQuery.matches
})
</script>

<style scoped>
.carousel-test-page {
  min-height: 100vh;
  background: var(--bg-primary);
}

.hero-section {
  background: var(--gradient-hero);
  padding: 80px 0;
  text-align: center;
  color: white;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
  animation: fadeInUp 0.8s ease-out;
}

.hero-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.demo-section {
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

.section-description {
  font-size: 1.1rem;
  color: var(--text-secondary);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 80px;
}

.feature-card {
  background: var(--bg-secondary);
  padding: 24px;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 16px;
}

.feature-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.feature-description {
  color: var(--text-secondary);
  line-height: 1.6;
}

.carousel-demo {
  margin: 80px 0;
}

.demo-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 40px;
}

.controls-section {
  margin: 60px 0;
  text-align: center;
}

.controls-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 24px;
}

.controls-grid {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.control-btn {
  padding: 12px 24px;
  background: var(--gradient-primary);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.control-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.tech-info {
  margin-top: 80px;
}

.tech-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 40px;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.tech-item {
  background: var(--bg-secondary);
  padding: 24px;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.tech-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.tech-item h4 {
  color: var(--primary-blue);
  font-size: 1.1rem;
  margin-bottom: 8px;
}

.tech-item p {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* 深色模式 */
.dark .tech-item h4 {
  color: var(--primary-purple);
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
  
  .controls-grid {
    flex-direction: column;
    align-items: center;
  }
  
  .control-btn {
    width: 200px;
  }
  
  .tech-grid {
    grid-template-columns: 1fr;
  }
}
</style>
