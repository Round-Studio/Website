<template>
  <div class="project-carousel" ref="carouselRef">
    <!-- 背景动画粒子 -->
    <div class="background-particles">
      <div v-for="i in 20" :key="i" class="particle" :style="getParticleStyle(i)"></div>
    </div>

    <div class="carousel-container" :class="{ 'animate-in': isVisible }">
      <!-- 图片显示区域 -->
      <div class="carousel-wrapper">
        <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="carousel-slide"
            :class="{
              'active': index === currentIndex,
              'prev': index === currentIndex - 1,
              'next': index === currentIndex + 1
            }"
          >
            <div class="project-image">
              <!-- 图片加载骨架屏 -->
              <div v-if="!imageLoaded[index]" class="image-skeleton">
                <div class="skeleton-shimmer"></div>
              </div>
              <img
                :src="project.image"
                :alt="project.title"
                @load="onImageLoad(index)"
                :class="{ 'loaded': imageLoaded[index] }"
              />
              <div class="project-overlay" :class="{ 'show': index === currentIndex }">
                <div class="project-info">
                  <h3 class="project-title">
                    <span
                      v-for="(char, charIndex) in project.title"
                      :key="charIndex"
                      class="title-char"
                      :style="{ animationDelay: `${charIndex * 0.05}s` }"
                    >
                      {{ char === ' ' ? '\u00A0' : char }}
                    </span>
                  </h3>
                  <p class="project-description">
                    <span
                      v-for="(char, charIndex) in project.description"
                      :key="charIndex"
                      class="desc-char"
                      :style="{ animationDelay: `${(project.title.length * 0.05) + (charIndex * 0.02)}s` }"
                    >
                      {{ char === ' ' ? '\u00A0' : char }}
                    </span>
                  </p>
                  <div class="project-tags">
                    <span
                      v-for="(tag, tagIndex) in project.tags"
                      :key="tag"
                      class="project-tag"
                      :style="{ animationDelay: `${0.5 + (tagIndex * 0.1)}s` }"
                    >
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
          @mouseenter="onButtonHover"
          class="carousel-btn carousel-btn-prev"
          :disabled="currentIndex === 0"
        >
          <div class="btn-ripple" ref="prevRipple"></div>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
          <div class="btn-pulse"></div>
        </button>

        <button
          @click="nextSlide"
          @mouseenter="onButtonHover"
          class="carousel-btn carousel-btn-next"
          :disabled="currentIndex === projects.length - 1"
        >
          <div class="btn-ripple" ref="nextRipple"></div>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
          <div class="btn-pulse"></div>
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
          <div class="indicator-progress" :class="{ active: currentIndex === index }"></div>
          <span class="sr-only">切换到第 {{ index + 1 }} 个项目</span>
        </button>
      </div>

      <!-- 项目计数 -->
      <div class="carousel-counter">
        <div class="counter-wrapper">
          <span class="current" :key="currentIndex">{{ currentIndex + 1 }}</span>
          <span class="separator">/</span>
          <span class="total">{{ projects.length }}</span>
        </div>
        <div class="progress-ring">
          <svg class="progress-ring-svg" width="40" height="40">
            <circle
              class="progress-ring-circle-bg"
              stroke="rgba(255,255,255,0.2)"
              stroke-width="2"
              fill="transparent"
              r="18"
              cx="20"
              cy="20"
            />
            <circle
              class="progress-ring-circle"
              stroke="var(--primary-blue)"
              stroke-width="2"
              fill="transparent"
              r="18"
              cx="20"
              cy="20"
              :stroke-dasharray="circumference"
              :stroke-dashoffset="progressOffset"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue'

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
const isVisible = ref(false)
const imageLoaded = ref({})
const carouselRef = ref(null)
const prevRipple = ref(null)
const nextRipple = ref(null)
let autoPlayInterval = null

// 进度环计算
const circumference = computed(() => 2 * Math.PI * 18)
const progressOffset = computed(() => {
  const progress = (currentIndex.value + 1) / projects.value.length
  return circumference.value - (progress * circumference.value)
})

// 粒子样式生成
const getParticleStyle = (index) => {
  const delay = Math.random() * 20
  const duration = 15 + Math.random() * 10
  const size = 2 + Math.random() * 4
  const left = Math.random() * 100
  const opacity = 0.1 + Math.random() * 0.3

  return {
    left: `${left}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    width: `${size}px`,
    height: `${size}px`,
    opacity: opacity
  }
}

// 图片加载处理
const onImageLoad = (index) => {
  imageLoaded.value[index] = true
}

// 按钮悬停效果
const onButtonHover = () => {
  // 触发按钮脉冲动画
}

// 切换到上一张
const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
    triggerSlideAnimation()
  }
}

// 切换到下一张
const nextSlide = () => {
  if (currentIndex.value < projects.value.length - 1) {
    currentIndex.value++
    triggerSlideAnimation()
  }
}

// 切换到指定幻灯片
const goToSlide = (index) => {
  if (index !== currentIndex.value) {
    currentIndex.value = index
    triggerSlideAnimation()
  }
}

// 触发切换动画
const triggerSlideAnimation = () => {
  // 重置文字动画
  nextTick(() => {
    const titleChars = document.querySelectorAll('.title-char')
    const descChars = document.querySelectorAll('.desc-char')
    const tags = document.querySelectorAll('.project-tag')

    titleChars.forEach(char => {
      char.style.animation = 'none'
      char.offsetHeight // 触发重排
      char.style.animation = null
    })

    descChars.forEach(char => {
      char.style.animation = 'none'
      char.offsetHeight
      char.style.animation = null
    })

    tags.forEach(tag => {
      tag.style.animation = 'none'
      tag.offsetHeight
      tag.style.animation = null
    })
  })
}

// 自动播放
const startAutoPlay = () => {
  autoPlayInterval = setInterval(() => {
    if (currentIndex.value < projects.value.length - 1) {
      nextSlide()
    } else {
      currentIndex.value = 0
      triggerSlideAnimation()
    }
  }, 5000)
}

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
    autoPlayInterval = null
  }
}

// 交叉观察器用于入场动画
const setupIntersectionObserver = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )

  if (carouselRef.value) {
    observer.observe(carouselRef.value)
  }
}

onMounted(() => {
  startAutoPlay()
  setupIntersectionObserver()

  // 初始化图片加载状态
  projects.value.forEach((_, index) => {
    imageLoaded.value[index] = false
  })
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
  position: relative;
}

/* 背景粒子动画 */
.background-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
  border-radius: 20px;
}

.particle {
  position: absolute;
  background: var(--primary-blue);
  border-radius: 50%;
  animation: float 20s infinite linear;
}

@keyframes float {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
}

.carousel-container {
  position: relative;
  background: var(--bg-secondary);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-xl);
  border: 1px solid var(--border-color);
  z-index: 2;
  opacity: 0;
  transform: translateY(50px) scale(0.95);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.carousel-container.animate-in {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* 深色模式下的容器样式 */
.dark .carousel-container {
  background: var(--bg-tertiary);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.dark .particle {
  background: var(--primary-purple);
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  perspective: 1000px;
}

.carousel-track {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform-style: preserve-3d;
}

.carousel-slide {
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform-origin: center center;
}

.carousel-slide.active {
  transform: scale(1) rotateY(0deg);
  z-index: 3;
}

.carousel-slide.prev {
  transform: scale(0.85) rotateY(-15deg) translateX(-20%);
  z-index: 1;
  opacity: 0.7;
}

.carousel-slide.next {
  transform: scale(0.85) rotateY(15deg) translateX(20%);
  z-index: 1;
  opacity: 0.7;
}

.project-image {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 16px;
}

/* 图片加载骨架屏 */
.image-skeleton {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  z-index: 1;
}

.dark .image-skeleton {
  background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
  background-size: 200% 100%;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  opacity: 0;
  transform: scale(1.1);
  z-index: 2;
  position: relative;
}

.project-image img.loaded {
  opacity: 1;
  transform: scale(1);
}

.project-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 60px 40px 40px;
  color: white;
  transform: translateY(100%);
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backdrop-filter: blur(20px);
}

.project-overlay.show {
  transform: translateY(0);
  opacity: 1;
}

/* 深色模式下的覆盖层 */
.dark .project-overlay {
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
}

.carousel-slide:hover .project-image img.loaded {
  transform: scale(1.05);
}

.project-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 8px;
  overflow: hidden;
}

.title-char {
  display: inline-block;
  opacity: 0;
  transform: translateY(20px) rotateX(90deg);
  animation: charFadeIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

@keyframes charFadeIn {
  to {
    opacity: 1;
    transform: translateY(0) rotateX(0deg);
  }
}

.project-description {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 16px;
  opacity: 0.9;
  overflow: hidden;
}

.desc-char {
  display: inline-block;
  opacity: 0;
  transform: translateY(10px);
  animation: charSlideIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

@keyframes charSlideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
  opacity: 0;
  transform: scale(0) rotate(180deg);
  animation: tagBounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
}

@keyframes tagBounceIn {
  0% {
    opacity: 0;
    transform: scale(0) rotate(180deg);
  }
  50% {
    opacity: 1;
    transform: scale(1.2) rotate(0deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
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
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: 10;
  backdrop-filter: blur(10px);
  overflow: hidden;
  position: relative;
}

.carousel-btn:hover {
  background: rgba(255, 255, 255, 0.95);
  transform: translateY(-50%) scale(1.15) rotate(5deg);
  box-shadow: var(--shadow-xl);
}

.carousel-btn:active {
  transform: translateY(-50%) scale(0.95);
}

.carousel-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: translateY(-50%) scale(0.9);
}

/* 按钮涟漪效果 */
.btn-ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(59, 130, 246, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: ripple 0.6s ease-out;
  pointer-events: none;
}

@keyframes ripple {
  to {
    width: 100px;
    height: 100px;
    opacity: 0;
  }
}

/* 按钮脉冲效果 */
.btn-pulse {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--primary-blue);
  opacity: 0;
  animation: pulse 2s infinite;
  pointer-events: none;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.3;
  }
  100% {
    transform: scale(1.4);
    opacity: 0;
  }
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

.dark .btn-pulse {
  background: var(--primary-purple);
}

.carousel-btn svg {
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
  z-index: 1;
  position: relative;
}

.carousel-btn:hover svg {
  transform: scale(1.1);
}

.carousel-btn-prev {
  left: 20px;
  animation: slideInLeft 0.6s ease-out 0.3s both;
}

.carousel-btn-next {
  right: 20px;
  animation: slideInRight 0.6s ease-out 0.4s both;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateY(-50%) translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateY(-50%) translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateY(-50%) translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateY(-50%) translateX(0);
  }
}

/* 指示器 */
.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 10;
  animation: fadeInUp 0.6s ease-out 0.5s both;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background: transparent;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
}

.indicator-progress {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--primary-blue);
  border-radius: 50%;
  transform: scale(0);
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.indicator-progress.active {
  transform: scale(1);
  animation: indicatorPulse 2s infinite;
}

@keyframes indicatorPulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(59, 130, 246, 0);
  }
}

.indicator.active {
  border-color: var(--primary-blue);
  transform: scale(1.3);
}

.indicator:hover {
  border-color: white;
  transform: scale(1.4);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

/* 深色模式下的指示器 */
.dark .indicator {
  border-color: rgba(255, 255, 255, 0.4);
}

.dark .indicator.active {
  border-color: var(--primary-purple);
}

.dark .indicator-progress {
  background: var(--primary-purple);
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
  display: flex;
  align-items: center;
  gap: 10px;
  animation: slideInDown 0.6s ease-out 0.2s both;
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.counter-wrapper {
  display: flex;
  align-items: center;
}

.current {
  color: var(--primary-blue);
  font-weight: 700;
  animation: numberFlip 0.6s ease-out;
  display: inline-block;
}

@keyframes numberFlip {
  0% {
    transform: rotateY(90deg);
    opacity: 0;
  }
  50% {
    transform: rotateY(0deg);
    opacity: 1;
  }
  100% {
    transform: rotateY(0deg);
    opacity: 1;
  }
}

.separator {
  margin: 0 4px;
  opacity: 0.7;
  animation: pulse 2s infinite;
}

/* 进度环 */
.progress-ring {
  position: relative;
  width: 40px;
  height: 40px;
}

.progress-ring-svg {
  transform: rotate(-90deg);
  width: 40px;
  height: 40px;
}

.progress-ring-circle {
  transition: stroke-dashoffset 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  stroke-linecap: round;
}

.progress-ring-circle-bg {
  opacity: 0.3;
}

/* 深色模式下的计数器 */
.dark .carousel-counter {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.dark .current {
  color: var(--primary-purple);
}

.dark .progress-ring-circle {
  stroke: var(--primary-purple);
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

/* 额外的动画效果 */
@keyframes breathe {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}

.carousel-container:hover {
  animation: breathe 4s ease-in-out infinite;
}

/* 鼠标悬停时的整体效果 */
.project-carousel:hover .particle {
  animation-duration: 10s;
}

.project-carousel:hover .carousel-container {
  box-shadow:
    var(--shadow-xl),
    0 0 50px rgba(59, 130, 246, 0.2);
}

.dark .project-carousel:hover .carousel-container {
  box-shadow:
    0 25px 50px -12px rgba(0, 0, 0, 0.5),
    0 0 50px rgba(139, 92, 246, 0.3);
}

/* 加载状态动画 */
.carousel-container:not(.animate-in) {
  animation: loadingPulse 1.5s ease-in-out infinite;
}

@keyframes loadingPulse {
  0%, 100% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.9;
  }
}

/* 响应式调整 */
@media (max-width: 768px) {
  .carousel-wrapper {
    height: 400px;
    perspective: 800px;
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

  .carousel-slide.prev,
  .carousel-slide.next {
    transform: scale(0.9) rotateY(-10deg) translateX(-10%);
  }

  .carousel-slide.next {
    transform: scale(0.9) rotateY(10deg) translateX(10%);
  }

  .particle {
    animation-duration: 15s;
  }
}

@media (max-width: 480px) {
  .carousel-wrapper {
    height: 300px;
    perspective: 600px;
  }

  .project-tags {
    gap: 4px;
  }

  .project-tag {
    padding: 2px 8px;
    font-size: 0.75rem;
  }

  .carousel-slide.prev,
  .carousel-slide.next {
    transform: scale(0.95) translateX(-5%);
  }

  .carousel-slide.next {
    transform: scale(0.95) translateX(5%);
  }

  .background-particles {
    display: none; /* 在小屏幕上隐藏粒子以提高性能 */
  }

  .progress-ring {
    width: 30px;
    height: 30px;
  }

  .progress-ring-svg {
    width: 30px;
    height: 30px;
  }
}

/* 高性能模式 - 减少动画 */
@media (prefers-reduced-motion: reduce) {
  .carousel-track,
  .carousel-slide,
  .project-image img,
  .project-overlay,
  .carousel-btn,
  .indicator,
  .title-char,
  .desc-char,
  .project-tag {
    transition: none;
    animation: none;
  }

  .background-particles {
    display: none;
  }

  .carousel-container {
    opacity: 1;
    transform: none;
  }
}

/* 打印样式 */
@media print {
  .background-particles,
  .carousel-btn,
  .carousel-indicators,
  .carousel-counter {
    display: none;
  }

  .carousel-track {
    transform: none !important;
  }

  .carousel-slide {
    position: static;
    transform: none !important;
    opacity: 1 !important;
  }

  .project-overlay {
    position: static;
    background: none;
    color: black;
    transform: none !important;
    opacity: 1 !important;
  }
}
</style>
