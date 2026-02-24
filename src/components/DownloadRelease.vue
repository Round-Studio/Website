<template>
  <div class="downloads-container">
    <div class="downloads-header">
      <h3 class="downloads-title">构建文件下载</h3>
      <div class="downloads-meta">
        <span v-if="release" class="version-tag">{{ release.tag_name }}</span>
        <span v-if="release" class="release-date">{{ formatDate(release.published_at) }}</span>
      </div>
    </div>
    
    <div class="downloads-content">
      <!-- 加载状态 -->
      <div v-if="loading" class="loading-state">
        <div class="loading-spinner"></div>
        <span>正在加载构建文件...</span>
      </div>
      
      <!-- 错误状态 -->
      <div v-else-if="error" class="error-state">
        <div class="error-icon">⚠️</div>
        <span>{{ error }}</span>
        <button @click="retryFetch" class="retry-btn">重试</button>
      </div>
      
      <!-- 空状态 -->
      <div v-else-if="!assets || assets.length === 0" class="empty-state">
        <div class="empty-icon">📦</div>
        <span>暂无构建文件</span>
      </div>
      
      <!-- 文件列表 -->
      <div v-else class="downloads-list">
        <div v-for="asset in assets" :key="asset.id" class="download-item">
          <div class="file-info">
            <div class="file-icon">
              📄
            </div>
            <div class="file-details">
              <span class="file-name">{{ asset.name }}</span>
              <div class="file-meta">
                <span class="file-size">{{ formatFileSize(asset.size) }}</span>
                <span class="file-downloads">下载次数: {{ asset.download_count }}</span>
              </div>
            </div>
          </div>
          <a
            :href="asset.browser_download_url"
            class="download-btn"
            target="_blank"
            @click="trackDownload(asset.name)"
          >
            <span class="btn-icon">⬇️</span>
            下载
          </a>
        </div>
      </div>
    </div>
    
    <!-- 底部信息 -->
    <div v-if="assets && assets.length > 0" class="downloads-footer">
      <p class="total-info">
        共 {{ assets.length }} 个文件 • 
        总大小: {{ formatFileSize(totalSize) }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'

// Props
const props = defineProps({
  release: {
    type: Object,
    default: null
  },
  repoOwner: {
    type: String,
    default: 'Round-Studio'
  },
  repoName: {
    type: String,
    default: 'BedrockBoot'
  }
})

// Reactive data
const assets = ref([])
const loading = ref(false)
const error = ref(null)

// Computed properties
const totalSize = computed(() => {
  return assets.value.reduce((total, asset) => total + asset.size, 0)
})

// Methods
const fetchAssets = async () => {
  if (!props.release) {
    assets.value = []
    return
  }

  try {
    loading.value = true
    error.value = null
    
    // 如果 release 数据中已经包含 assets，直接使用
    if (props.release.assets && props.release.assets.length > 0) {
      assets.value = props.release.assets
    } else {
      // 否则调用 API 获取 assets
      const response = await fetch(props.release.assets_url)
      if (!response.ok) {
        throw new Error('获取构建文件失败')
      }
      assets.value = await response.json()
    }
  } catch (err) {
    error.value = err.message
    console.error('获取构建文件失败:', err)
  } finally {
    loading.value = false
  }
}

const retryFetch = () => {
  fetchAssets()
}

const formatDate = (dateString) => {
  if (!dateString) return '未知日期'
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

const trackDownload = (fileName) => {
  // 这里可以添加下载跟踪逻辑，比如发送到分析服务
  console.log(`下载文件: ${fileName}`)
  // 示例: analytics.track('asset_download', { file: fileName })
}

// Watchers
watch(() => props.release, (newRelease) => {
  if (newRelease) {
    fetchAssets()
  }
})

// Lifecycle
onMounted(() => {
  if (props.release) {
    fetchAssets()
  }
})
</script>

<style scoped>
.downloads-container {
  background: var(--bg-secondary);
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);
}

.downloads-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}

.downloads-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.downloads-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
}

.version-tag {
  background: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
}

.release-date {
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.downloads-content {
  min-height: 120px;
}

/* 状态样式 */
.loading-state,
.error-state,
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
  color: var(--text-secondary);
}

.loading-spinner {
  width: 24px;
  height: 24px;
  border: 2px solid var(--border-color);
  border-top: 2px solid var(--gradient-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 12px;
}

.error-icon,
.empty-icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

.retry-btn {
  margin-top: 12px;
  padding: 8px 16px;
  background: var(--text-primary);
  color: var(--bg-primary);
  border: 1px solid var(--text-primary);
  border-radius: 6px;
  cursor: pointer;
  transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
}

.retry-btn:hover {
  background: transparent;
  color: var(--text-primary);
}

/* 文件列表样式 */
.downloads-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.download-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: var(--bg-primary);
  border-radius: 8px;
  border: 1px solid var(--border-color);
  transition: all 0.2s ease;
}

.download-item:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-color: var(--text-secondary);
}

.file-info {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.file-icon {
  font-size: 1.5rem;
}

.file-details {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.file-name {
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.file-meta {
  display: flex;
  gap: 12px;
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.download-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: var(--text-primary);
  color: var(--bg-primary);
  border: 1px solid var(--text-primary);
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
  white-space: nowrap;
}

.download-btn:hover {
  background: transparent;
  color: var(--text-primary);
  border-color: var(--text-secondary);
}

.btn-icon {
  font-size: 0.9rem;
}

/* 底部信息 */
.downloads-footer {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--border-color);
}

.total-info {
  font-size: 0.9rem;
  color: var(--text-secondary);
  text-align: center;
  margin: 0;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .downloads-container {
    padding: 16px;
  }
  
  .downloads-header {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
  
  .downloads-meta {
    align-items: flex-start;
  }
  
  .download-item {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
  
  .file-info {
    width: 100%;
  }
  
  .download-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
