<template>
  <div v-if="hasError" class="error-boundary">
    <div class="error-container">
      <div class="error-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
      </div>
      
      <h2 class="error-title">出现了一些问题</h2>
      <p class="error-message">{{ errorMessage }}</p>
      
      <div class="error-actions">
        <button @click="retry" class="btn-gradient">重试</button>
        <router-link to="/" class="btn-outline">返回首页</router-link>
      </div>
      
      <details v-if="errorDetails" class="error-details">
        <summary>错误详情</summary>
        <pre>{{ errorDetails }}</pre>
      </details>
    </div>
  </div>
  
  <slot v-else />
</template>

<script setup>
import { ref, onErrorCaptured } from 'vue'

const hasError = ref(false)
const errorMessage = ref('')
const errorDetails = ref('')

onErrorCaptured((error, instance, info) => {
  hasError.value = true
  errorMessage.value = error.message || '未知错误'
  errorDetails.value = `${error.stack}\n\n组件信息: ${info}`
  
  console.error('Error captured by ErrorBoundary:', error)
  console.error('Component info:', info)
  
  return false // 阻止错误继续传播
})

const retry = () => {
  hasError.value = false
  errorMessage.value = ''
  errorDetails.value = ''
  
  // 重新加载页面
  window.location.reload()
}
</script>

<style scoped>
.error-boundary {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: var(--bg-primary);
}

.error-container {
  max-width: 500px;
  text-align: center;
  padding: 40px;
  background: var(--bg-secondary);
  border-radius: 16px;
  border: 1px solid var(--border-color);
}

.error-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 24px;
  color: #ef4444;
}

.error-icon svg {
  width: 100%;
  height: 100%;
}

.error-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.error-message {
  color: var(--text-secondary);
  margin-bottom: 32px;
  line-height: 1.6;
}

.error-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 24px;
}

.error-details {
  text-align: left;
  margin-top: 24px;
  padding: 16px;
  background: var(--bg-tertiary);
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.error-details summary {
  cursor: pointer;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.error-details pre {
  font-size: 0.875rem;
  color: var(--text-secondary);
  white-space: pre-wrap;
  word-break: break-word;
  margin: 0;
}

@media (max-width: 768px) {
  .error-container {
    padding: 24px;
  }
  
  .error-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>
