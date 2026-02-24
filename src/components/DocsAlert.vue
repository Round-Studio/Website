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
  justify-content: center;
  width: 100%;
}

.docs-alert {
  display: flex;
  gap: 12px;
  width: min(100%, 760px);
  padding: 14px 16px;
  border-radius: 12px;
  margin: 14px 0;
  border: 1px solid var(--alert-border);
  background-color: var(--alert-bg);
  color: var(--alert-text);
  box-shadow: var(--shadow-sm);
}

.docs-alert__icon {
  flex-shrink: 0;
  width: 18px;
  height: 18px;
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
  margin-bottom: 2px;
}

.docs-alert__message {
  color: color-mix(in srgb, var(--alert-text) 88%, transparent);
}

.docs-alert--info {
  --alert-bg: rgba(59, 130, 246, 0.1);
  --alert-border: rgba(59, 130, 246, 0.34);
  --alert-text: rgb(30, 64, 175);
}

.docs-alert--warning {
  --alert-bg: rgba(245, 158, 11, 0.1);
  --alert-border: rgba(245, 158, 11, 0.34);
  --alert-text: rgb(146, 64, 14);
}

.docs-alert--danger {
  --alert-bg: rgba(239, 68, 68, 0.1);
  --alert-border: rgba(239, 68, 68, 0.34);
  --alert-text: rgb(153, 27, 27);
}

.docs-alert--success {
  --alert-bg: rgba(34, 197, 94, 0.1);
  --alert-border: rgba(34, 197, 94, 0.34);
  --alert-text: rgb(21, 128, 61);
}

.dark .docs-alert--info {
  --alert-bg: rgba(59, 130, 246, 0.18);
  --alert-text: rgb(191, 219, 254);
}

.dark .docs-alert--warning {
  --alert-bg: rgba(245, 158, 11, 0.18);
  --alert-text: rgb(253, 230, 138);
}

.dark .docs-alert--danger {
  --alert-bg: rgba(239, 68, 68, 0.18);
  --alert-text: rgb(254, 202, 202);
}

.dark .docs-alert--success {
  --alert-bg: rgba(34, 197, 94, 0.18);
  --alert-text: rgb(187, 247, 208);
}
</style>
