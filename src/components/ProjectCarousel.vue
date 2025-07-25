<template>
  <div class="project-carousel">
    <div class="carousel-container">
      <!-- 图片显示区域 -->
      <div class="carousel-wrapper">
        <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <div 
            v-for="(project, index) in projects" 
            :key="index" 
            class="carousel-slide"
          >
            <div class="project-image">
              <img :src="project.image" :alt="project.title" />
              <div class="project-overlay">
                <div class="project-info">
                  <h3 class="project-title">{{ project.title }}</h3>
                  <p class="project-description">{{ project.description }}</p>
                  <div class="project-tags">
                    <span v-for="tag in project.tags" :key="tag" class="project-tag">
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 左右切换按钮 -->
        <button 
          @click="prevSlide" 
          class="carousel-btn carousel-btn-prev"
          :disabled="currentIndex === 0"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        
        <button 
          @click="nextSlide" 
          class="carousel-btn carousel-btn-next"
          :disabled="currentIndex === projects.length - 1"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
      
      <!-- 指示器 -->
      <div class="carousel-indicators">
        <button 
          v-for="(project, index) in projects" 
          :key="index"
          @click="goToSlide(index)"
          class="indicator"
          :class="{ active: currentIndex === index }"
        >
          <span class="sr-only">切换到第 {{ index + 1 }} 个项目</span>
        </button>
      </div>
      
      <!-- 项目计数 -->
      <div class="carousel-counter">
        <span class="current">{{ currentIndex + 1 }}</span>
        <span class="separator">/</span>
        <span class="total">{{ projects.length }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 项目数据 - 在代码中自定义
const projects = ref([
  {
    title: 'RMCL',
    description: '新一代跨平台，Fluent Design 风格的 Minecraft 启动器',
    image: '/src/assets/img/rmcl/rmcl-heard.png',
    tags: ['C#', 'Avalonia', 'Minecraft']
  }
])

const currentIndex = ref(0)
let autoPlayInterval = null

// 切换到上一张
const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

// 切换到下一张
const nextSlide = () => {
  if (currentIndex.value < projects.value.length - 1) {
    currentIndex.value++
  }
}

// 切换到指定幻灯片
const goToSlide = (index) => {
  currentIndex.value = index
}

// 自动播放
const startAutoPlay = () => {
  autoPlayInterval = setInterval(() => {
    if (currentIndex.value < projects.value.length - 1) {
      nextSlide()
    } else {
      currentIndex.value = 0
    }
  }, 5000)
}

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
    autoPlayInterval = null
  }
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<style scoped>
.project-carousel {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

.carousel-container {
  position: relative;
  background: var(--bg-secondary);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-xl);
  border: 1px solid var(--border-color);
}

/* 深色模式下的容器样式 */
.dark .carousel-container {
  background: var(--bg-tertiary);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.carousel-slide {
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
}

.project-image {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 60px 40px 40px;
  color: white;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.3s ease;
}

/* 深色模式下的覆盖层 */
.dark .project-overlay {
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
}

.carousel-slide:hover .project-overlay {
  transform: translateY(0);
  opacity: 1;
}

.carousel-slide:hover .project-image img {
  transform: scale(1.05);
}

.project-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.project-description {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 16px;
  opacity: 0.9;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.project-tag {
  padding: 4px 12px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* 深色模式下的标签样式 */
.dark .project-tag {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.2);
}

/* 切换按钮 */
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  color: var(--text-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
  backdrop-filter: blur(10px);
}

.carousel-btn:hover {
  background: rgba(255, 255, 255, 0.95);
  transform: translateY(-50%) scale(1.1);
  box-shadow: var(--shadow-lg);
}

.carousel-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: translateY(-50%) scale(0.9);
}

/* 深色模式下的按钮样式 */
.dark .carousel-btn {
  background: rgba(30, 30, 30, 0.9);
  color: var(--text-primary);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.dark .carousel-btn:hover {
  background: rgba(40, 40, 40, 0.95);
  border-color: rgba(255, 255, 255, 0.2);
}

.carousel-btn svg {
  width: 24px;
  height: 24px;
}

.carousel-btn-prev {
  left: 20px;
}

.carousel-btn-next {
  right: 20px;
}

/* 指示器 */
.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: white;
  border-color: white;
}

.indicator:hover {
  border-color: white;
  transform: scale(1.2);
}

/* 深色模式下的指示器 */
.dark .indicator {
  border-color: rgba(255, 255, 255, 0.4);
}

.dark .indicator.active {
  background: rgba(255, 255, 255, 0.9);
  border-color: rgba(255, 255, 255, 0.9);
}

.dark .indicator:hover {
  border-color: rgba(255, 255, 255, 0.7);
}

/* 计数器 */
.carousel-counter {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
  z-index: 10;
}

.current {
  color: var(--primary-blue);
}

.separator {
  margin: 0 4px;
  opacity: 0.7;
}

/* 深色模式下的计数器 */
.dark .carousel-counter {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.dark .current {
  color: var(--primary-purple);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .carousel-wrapper {
    height: 400px;
  }
  
  .project-overlay {
    padding: 40px 20px 20px;
  }
  
  .project-title {
    font-size: 1.25rem;
  }
  
  .project-description {
    font-size: 0.9rem;
  }
  
  .carousel-btn {
    width: 40px;
    height: 40px;
  }
  
  .carousel-btn svg {
    width: 20px;
    height: 20px;
  }
  
  .carousel-btn-prev {
    left: 10px;
  }
  
  .carousel-btn-next {
    right: 10px;
  }
}

@media (max-width: 480px) {
  .carousel-wrapper {
    height: 300px;
  }
  
  .project-tags {
    gap: 4px;
  }
  
  .project-tag {
    padding: 2px 8px;
    font-size: 0.75rem;
  }
}
</style>
