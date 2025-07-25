<template>
  <div class="top-loading-bar" :class="{ 'loading': isLoading, 'complete': isComplete }">
    <div class="loading-progress" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  isLoading: {
    type: Boolean,
    default: false
  }
})

const progress = ref(0)
const isComplete = ref(false)

let progressInterval = null

const startLoading = () => {
  progress.value = 0
  isComplete.value = false
  
  // 快速到达90%
  progressInterval = setInterval(() => {
    if (progress.value < 90) {
      progress.value += Math.random() * 10 + 5
    }
  }, 100)
}

const completeLoading = () => {
  if (progressInterval) {
    clearInterval(progressInterval)
    progressInterval = null
  }
  
  // 快速完成到100%
  progress.value = 100
  isComplete.value = true
  
  // 延迟隐藏
  setTimeout(() => {
    if (!props.isLoading) {
      progress.value = 0
      isComplete.value = false
    }
  }, 300)
}

watch(() => props.isLoading, (newVal) => {
  if (newVal) {
    startLoading()
  } else {
    completeLoading()
  }
}, { immediate: true })

onUnmounted(() => {
  if (progressInterval) {
    clearInterval(progressInterval)
  }
})
</script>

<style scoped>
.top-loading-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  z-index: 9999;
  background: transparent;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.top-loading-bar.loading {
  opacity: 1;
}

.top-loading-bar.complete {
  opacity: 0;
  transition: opacity 0.3s ease 0.2s;
}

.loading-progress {
  height: 100%;
  background: var(--gradient-primary);
  transition: width 0.2s ease;
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
  border-radius: 0 3px 3px 0;
}

/* 暗色主题适配 */
.dark .loading-progress {
  box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
}

/* 脉冲效果 */
@keyframes pulse {
  0% {
    box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.8);
  }
  100% {
    box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
  }
}

.loading .loading-progress {
  animation: pulse 1.5s ease-in-out infinite;
}
</style>
