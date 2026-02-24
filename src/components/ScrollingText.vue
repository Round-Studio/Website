<template>
  <div class="scrolling-text-container" ref="containerRef">
    <div
      class="scrolling-content"
      :style="{
        '--set-width': `${setWidth}px`,
        '--marquee-duration': `${durationSeconds}s`
      }"
    >
      <div class="scrolling-track" :class="{ ready: isReady }">
        <span v-for="copyIndex in copyCount" :key="`copy-${copyIndex}`" class="track-set" aria-hidden="true">
          <span v-for="(text, index) in normalizedTextList" :key="`${copyIndex}-${index}-${text}`" class="text-item">
            {{ text }}
          </span>
        </span>
      </div>

      <span ref="rulerRef" class="track-set ruler" aria-hidden="true">
        <span v-for="(text, index) in normalizedTextList" :key="`ruler-${index}-${text}`" class="text-item">
          {{ text }}
        </span>
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'

const props = defineProps({
  textList: {
    type: Array,
    required: true
  }
})

const containerRef = ref(null)
const rulerRef = ref(null)
const containerWidth = ref(0)
const setWidth = ref(0)
const isReady = ref(false)
let resizeObserver = null

const normalizedTextList = computed(() => {
  const list = Array.isArray(props.textList)
    ? props.textList.map((item) => String(item).trim()).filter(Boolean)
    : []

  return list.length > 0 ? list : ['Round Studio']
})

const speedPxPerSecond = computed(() => {
  const minSpeed = 30
  const maxSpeed = 85
  const viewportFactor = containerWidth.value / 24
  const textDensityFactor = Math.min(normalizedTextList.value.length, 12) * 2.8
  const speed = viewportFactor + textDensityFactor
  return Math.min(maxSpeed, Math.max(minSpeed, speed))
})

const durationSeconds = computed(() => {
  if (setWidth.value <= 0) {
    return 18
  }

  return Number((setWidth.value / speedPxPerSecond.value).toFixed(2))
})

const copyCount = computed(() => {
  if (setWidth.value <= 0 || containerWidth.value <= 0) {
    return 3
  }

  return Math.max(3, Math.ceil(containerWidth.value / setWidth.value) + 2)
})

const measure = async () => {
  await nextTick()

  if (containerRef.value) {
    containerWidth.value = Math.ceil(containerRef.value.offsetWidth)
  }

  if (rulerRef.value) {
    setWidth.value = Math.ceil(rulerRef.value.offsetWidth)
  }

  isReady.value = setWidth.value > 0
}

watch(
  () => props.textList,
  async () => {
    isReady.value = false
    await measure()
  },
  { deep: true }
)

onMounted(async () => {
  await measure()

  if (window.ResizeObserver) {
    resizeObserver = new ResizeObserver(async () => {
      isReady.value = false
      await measure()
    })

    if (containerRef.value) {
      resizeObserver.observe(containerRef.value)
    }
  } else {
    window.addEventListener('resize', measure)
  }
})

onUnmounted(() => {
  if (resizeObserver) {
    resizeObserver.disconnect()
  } else {
    window.removeEventListener('resize', measure)
  }
})
</script>

<style scoped>
.scrolling-text-container {
  --item-gap: clamp(2.8rem, 5.5vw, 7.5rem);
  width: 100%;
  overflow: hidden;
  background: transparent;
  padding: 24px 0;
  position: relative;
  opacity: 0.72;
}

.scrolling-content {
  position: relative;
  height: 3rem;
  font-size: clamp(1.25rem, 2.4vw, 2rem);
  letter-spacing: 0.1em;
  overflow: hidden;
  white-space: nowrap;
}

.scrolling-track {
  display: inline-flex;
  width: max-content;
  transform: translate3d(0, 0, 0);
  will-change: transform;
}

.scrolling-track.ready {
  animation: marquee-scroll var(--marquee-duration) linear infinite;
}

.track-set {
  display: inline-flex;
  white-space: nowrap;
}

.text-item {
  display: inline-block;
  margin-right: var(--item-gap);
  color: var(--text-secondary);
  font-weight: 500;
  opacity: 0.68;
  flex-shrink: 0;
}

.ruler {
  position: absolute;
  visibility: hidden;
  pointer-events: none;
  left: -9999px;
  top: -9999px;
}

@keyframes marquee-scroll {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(calc(-1 * var(--set-width)), 0, 0);
  }
}

@media (max-width: 768px) {
  .scrolling-text-container {
    padding: 18px 0;
  }

  .scrolling-content {
    height: 2.4rem;
  }
}

@media (max-width: 480px) {
  .scrolling-content {
    height: 2rem;
  }
}
</style>
