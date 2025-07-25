<template>
  <div class="scrolling-text-container" ref="containerRef">
    <div class="scrolling-text">
      <div class="scrolling-content" ref="contentRef">
        <span
          v-for="(group, groupIndex) in textGroups"
          :key="group.id"
          class="text-group"
          :style="{ transform: `translateX(${group.position}px)` }"
        >
          <span v-for="(text, index) in textList" :key="`${group.id}-${index}`" class="text-item">
            {{ text }}
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, computed } from 'vue'

const props = defineProps({
  textList: {
    type: Array,
    required: true
  }
})

const containerRef = ref(null)
const contentRef = ref(null)
const containerWidth = ref(0)
const groupWidth = ref(0)
const textGroups = ref([])
const animationId = ref(null)
const speed = ref(50) // 像素/秒

// 计算需要的组数
const groupCount = computed(() => {
  if (containerWidth.value === 0 || groupWidth.value === 0) return 3
  // 至少需要能填满屏幕宽度 + 一个额外组用于无缝循环
  return Math.ceil(containerWidth.value / groupWidth.value) + 2
})

// 初始化文字组
const initTextGroups = () => {
  textGroups.value = []
  const groupSpacing = groupWidth.value // 组之间的间距就是组的宽度
  for (let i = 0; i < groupCount.value; i++) {
    textGroups.value.push({
      id: `group-${i}-${Date.now()}`,
      position: i * groupSpacing
    })
  }
}

// 测量单组文字的宽度
const measureGroupWidth = async () => {
  // 估算宽度：每个字符约1.2rem，间距8rem
  const avgCharWidth = 1.5 // rem
  const itemSpacing = 8 // rem
  const remInPx = 16 // 1rem = 16px

  let totalWidth = 0
  props.textList.forEach(text => {
    totalWidth += (text.length * avgCharWidth + itemSpacing) * remInPx
  })

  groupWidth.value = totalWidth
}

// 更新容器宽度
const updateContainerWidth = () => {
  if (containerRef.value) {
    containerWidth.value = containerRef.value.offsetWidth
  }
}

// 动画循环
const animate = () => {
  const groupSpacing = groupWidth.value

  textGroups.value.forEach(group => {
    group.position -= speed.value / 60 // 60fps

    // 如果组完全移出左侧，将其移动到最右侧
    if (group.position + groupWidth.value < 0) {
      const maxPosition = Math.max(...textGroups.value.map(g => g.position))
      group.position = maxPosition + groupSpacing
      // 更新ID以触发重新渲染
      group.id = `group-${Date.now()}-${Math.random()}`
    }
  })

  animationId.value = requestAnimationFrame(animate)
}

// 重新初始化
const reinitialize = async () => {
  if (animationId.value) {
    cancelAnimationFrame(animationId.value)
  }

  await nextTick()
  updateContainerWidth()
  await measureGroupWidth()
  initTextGroups()
  animate()
}

// 窗口大小变化处理
const handleResize = () => {
  reinitialize()
}

onMounted(async () => {
  await nextTick()
  await reinitialize()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  if (animationId.value) {
    cancelAnimationFrame(animationId.value)
  }
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.scrolling-text-container {
  width: 100%;
  overflow: hidden;
  background: transparent;
  padding: 24px 0;
  position: relative;
  opacity: 0.7;
}

.scrolling-text {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
}

.scrolling-content {
  position: relative;
  height: 3rem;
  font-size: 2rem;
  letter-spacing: 0.15em;
}

.text-group {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-flex;
  white-space: nowrap;
  will-change: transform;
}

.text-item {
  display: inline-block;
  margin-right: 8rem;
  color: var(--text-secondary);
  font-weight: 500;
  opacity: 0.6;
  flex-shrink: 0;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .scrolling-text-container {
    padding: 20px 0;
  }

  .scrolling-content {
    font-size: 1.5rem;
    height: 2.5rem;
  }

  .text-item {
    margin-right: 6rem;
  }
}

@media (max-width: 480px) {
  .scrolling-content {
    font-size: 1.25rem;
    height: 2rem;
  }

  .text-item {
    margin-right: 4rem;
  }
}
</style>
