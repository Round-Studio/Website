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
  --alert-bg: rgba(245, 158, 11, 0.12);
  --alert-border: rgb(217, 119, 6);
  --alert-text: rgb(146, 64, 14);
}

.docs-alert--danger {
  --alert-bg: rgba(239, 68, 68, 0.12);
  --alert-border: rgb(220, 38, 38);
  --alert-text: rgb(153, 27, 27);
}

.docs-alert--success {
  --alert-bg: rgba(16, 185, 129, 0.12);
  --alert-border: rgb(5, 150, 105);
  --alert-text: rgb(6, 95, 70);
}

/* 暗色模式适配 */
.dark .docs-alert--info {
  --alert-bg: rgba(59, 130, 246, 0.22);
  --alert-text: rgb(191, 219, 254);
}

.dark .docs-alert--warning {
  --alert-bg: rgba(245, 158, 11, 0.2);
  --alert-text: rgb(253, 230, 138);
}

.dark .docs-alert--danger {
  --alert-bg: rgba(239, 68, 68, 0.2);
  --alert-text: rgb(254, 202, 202);
}

.dark .docs-alert--success {
  --alert-bg: rgba(16, 185, 129, 0.2);
  --alert-text: rgb(167, 243, 208);
}
</style>
