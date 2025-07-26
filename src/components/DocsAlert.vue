<template>
  <div class="docs-alert-container">
    <div :class="['docs-alert', `docs-alert--${type}`]">
      <div class="docs-alert__icon">
        <component :is="iconComponent" />
      </div>
      <div class="docs-alert__content">
        <div v-if="title" class="docs-alert__title">{{ title }}</div>
        <div class="docs-alert__message"><slot /></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { 
  InformationCircleIcon,
  ExclamationTriangleIcon,
  ExclamationCircleIcon,
  CheckCircleIcon 
} from '@heroicons/vue/24/outline'

const props = defineProps({
  type: {
    type: String,
    default: 'info',
    validator: (value) => ['info', 'warning', 'danger', 'success'].includes(value)
  },
  title: {
    type: String,
    default: ''
  }
})

const iconComponent = computed(() => {
  switch (props.type) {
    case 'warning':
      return ExclamationTriangleIcon
    case 'danger':
      return ExclamationCircleIcon
    case 'success':
      return CheckCircleIcon
    default:
      return InformationCircleIcon
  }
})
</script>

<style scoped>
.docs-alert-container {
  display: flex;
  justify-content: center; /* 水平居中 */
  width: 100%;
}

.docs-alert {
  display: flex;
  gap: 12px;
  width: 500px;
  padding: 16px;
  border-radius: 6px;
  margin: 16px 0;
  border-left: 0px solid;
  background-color: var(--alert-bg);
  border-color: var(--alert-border);
  color: var(--alert-text);
}

.docs-alert__icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  margin-top: 2px;
}

.docs-alert__icon svg {
  width: 100%;
  height: 100%;
  stroke-width: 2;
}

.docs-alert__content {
  flex: 1;
}

.docs-alert__title {
  font-weight: 600;
  margin-bottom: 4px;
}

.docs-alert--info {
  --alert-bg: rgba(59, 130, 246, 0.1);
  --alert-border: rgb(59, 130, 246);
  --alert-text: rgb(29, 78, 216);
}

.docs-alert--warning {
  --alert-bg: rgba(234, 179, 8, 0.1);
  --alert-border: rgb(234, 179, 8);
  --alert-text: rgb(180, 83, 9);
}

.docs-alert--danger {
  --alert-bg: rgba(239, 68, 68, 0.1);
  --alert-border: rgb(239, 68, 68);
  --alert-text: rgb(185, 28, 28);
}

.docs-alert--success {
  --alert-bg: rgba(16, 185, 129, 0.1);
  --alert-border: rgb(16, 185, 129);
  --alert-text: rgb(5, 122, 85);
}

/* 暗色模式适配 */
.dark .docs-alert--info {
  --alert-bg: rgba(59, 130, 246, 0.2);
  --alert-text: rgb(147, 197, 253);
}

.dark .docs-alert--warning {
  --alert-bg: rgba(234, 179, 8, 0.2);
  --alert-text: rgb(253, 224, 71);
}

.dark .docs-alert--danger {
  --alert-bg: rgba(239, 68, 68, 0.2);
  --alert-text: rgb(252, 165, 165);
}

.dark .docs-alert--success {
  --alert-bg: rgba(16, 185, 129, 0.2);
  --alert-text: rgb(110, 231, 183);
}
</style>