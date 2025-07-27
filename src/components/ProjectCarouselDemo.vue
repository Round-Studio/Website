<template>
  <div class="demo-container">
    <h1 class="demo-title">ProjectCarousel 动画演示</h1>
    <p class="demo-description">
      这个演示展示了 ProjectCarousel 组件的所有动画效果，包括：
    </p>
    <ul class="demo-features">
      <li>✨ 入场动画 - 组件加载时的渐入效果</li>
      <li>🎭 3D 轮播切换 - 流畅的 3D 翻转和滑动效果</li>
      <li>🎯 悬停交互 - 丰富的鼠标悬停效果</li>
      <li>💫 按钮动画 - 脉冲、弹跳和涟漪效果</li>
      <li>🔄 指示器动画 - 动态指示器变化</li>
      <li>🌟 背景粒子 - 微妙的背景粒子动画</li>
      <li>⌨️ 文字动画 - 标题和描述的打字机效果</li>
      <li>🏷️ 标签动画 - 标签的弹性出现效果</li>
      <li>💀 骨架屏 - 图片加载时的骨架屏效果</li>
      <li>📊 进度环 - 动态进度显示</li>
    </ul>
    
    <div class="demo-carousel">
      <ProjectCarousel />
    </div>
    
    <div class="demo-controls">
      <h3>动画控制</h3>
      <button @click="toggleReducedMotion" class="control-btn">
        {{ reducedMotion ? '启用动画' : '减少动画' }}
      </button>
      <button @click="toggleDarkMode" class="control-btn">
        {{ isDark ? '浅色模式' : '深色模式' }}
      </button>
    </div>
    
    <div class="demo-info">
      <h3>技术特性</h3>
      <div class="tech-grid">
        <div class="tech-item">
          <h4>CSS 动画</h4>
          <p>使用 CSS3 关键帧动画和过渡效果</p>
        </div>
        <div class="tech-item">
          <h4>3D 变换</h4>
          <p>利用 CSS 3D 变换创建立体效果</p>
        </div>
        <div class="tech-item">
          <h4>性能优化</h4>
          <p>支持减少动画模式和响应式设计</p>
        </div>
        <div class="tech-item">
          <h4>交互反馈</h4>
          <p>丰富的用户交互动画反馈</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ProjectCarousel from './ProjectCarousel.vue'

const reducedMotion = ref(false)
const isDark = ref(false)

const toggleReducedMotion = () => {
  reducedMotion.value = !reducedMotion.value
  document.documentElement.style.setProperty(
    '--prefers-reduced-motion', 
    reducedMotion.value ? 'reduce' : 'no-preference'
  )
}

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}

onMounted(() => {
  // 检测系统偏好
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  reducedMotion.value = mediaQuery.matches
  
  const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  isDark.value = darkMediaQuery.matches
  document.documentElement.classList.toggle('dark', isDark.value)
})
</script>

<style scoped>
.demo-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Inter', sans-serif;
}

.demo-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.demo-description {
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 30px;
  color: var(--text-secondary);
}

.demo-features {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 10px;
  margin-bottom: 40px;
}

.demo-features li {
  padding: 10px;
  background: var(--bg-secondary);
  border-radius: 8px;
  border-left: 4px solid var(--primary-blue);
}

.demo-carousel {
  margin: 60px 0;
}

.demo-controls {
  text-align: center;
  margin: 40px 0;
  padding: 20px;
  background: var(--bg-secondary);
  border-radius: 12px;
}

.demo-controls h3 {
  margin-bottom: 20px;
  color: var(--text-primary);
}

.control-btn {
  margin: 0 10px;
  padding: 10px 20px;
  background: var(--gradient-primary);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.control-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.demo-info {
  margin-top: 60px;
}

.demo-info h3 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 1.5rem;
  color: var(--text-primary);
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.tech-item {
  padding: 20px;
  background: var(--bg-secondary);
  border-radius: 12px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.tech-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.tech-item h4 {
  margin-bottom: 10px;
  color: var(--primary-blue);
  font-size: 1.1rem;
}

.tech-item p {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* 深色模式 */
.dark .demo-features li {
  background: var(--bg-tertiary);
  border-left-color: var(--primary-purple);
}

.dark .tech-item h4 {
  color: var(--primary-purple);
}

/* 响应式 */
@media (max-width: 768px) {
  .demo-title {
    font-size: 2rem;
  }
  
  .demo-features {
    grid-template-columns: 1fr;
  }
  
  .tech-grid {
    grid-template-columns: 1fr;
  }
  
  .control-btn {
    display: block;
    margin: 10px auto;
    width: 200px;
  }
}
</style>
