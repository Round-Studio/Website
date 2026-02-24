<template>
  <div class="downloads-container">
    <div class="downloads-header">
      <h3 class="downloads-title">构建文件下载</h3>
      <div class="downloads-meta">
        <span v-if="release" class="version-tag success-badge">{{ release.tag_name }}</span>
        <span v-if="release" class="release-date">{{ formatDate(release.published_at) }}</span>
      </div>
    </div>

    <div class="downloads-content">
      <div v-if="loading" class="loading-state">
        <div class="loading-spinner"></div>
        <span>正在加载构建文件...</span>
      </div>

      <div v-else-if="error" class="error-state">
        <div class="state-icon">⚠️</div>
        <span>{{ error }}</span>
        <button @click="retryFetch" class="retry-btn">重试</button>
      </div>

      <div v-else-if="!assets || assets.length === 0" class="empty-state">
        <div class="state-icon">📦</div>
        <span>暂无构建文件</span>
      </div>

      <div v-else class="downloads-list">
        <div v-for="asset in assets" :key="asset.id" class="download-item">
          <div class="file-info">
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
            rel="noreferrer"
          >
            下载
          </a>
        </div>
      </div>
    </div>

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

const assets = ref([])
const loading = ref(false)
const error = ref(null)

const totalSize = computed(() => {
  return assets.value.reduce((total, asset) => total + asset.size, 0)
})

const fetchAssets = async () => {
  if (!props.release) {
    assets.value = []
    return
  }

  try {
    loading.value = true
    error.value = null

    if (props.release.assets && props.release.assets.length > 0) {
      assets.value = props.release.assets
    } else {
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
  console.log(`下载文件: ${fileName}`)
}

watch(() => props.release, (newRelease) => {
  if (newRelease) {
    fetchAssets()
  }
})

onMounted(() => {
  if (props.release) {
    fetchAssets()
  }
})
</script>

<style scoped>
.downloads-container {
  background: var(--bg-secondary);
  border-radius: 14px;
  padding: 22px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);
}

.downloads-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
}

.downloads-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.downloads-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
}

.version-tag {
  padding: 3px 8px;
  font-size: 0.75rem;
  font-weight: 600;
}

.release-date {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.downloads-content {
  min-height: 110px;
}

.loading-state,
.error-state,
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 18px;
  text-align: center;
  color: var(--text-secondary);
}

.loading-spinner {
  width: 22px;
  height: 22px;
  border: 2px solid var(--border-color);
  border-top-color: var(--text-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 10px;
}

.state-icon {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.retry-btn {
  margin-top: 10px;
  padding: 8px 14px;
  background: var(--text-primary);
  color: var(--bg-primary);
  border: 1px solid var(--text-primary);
  border-radius: 9px;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.retry-btn:hover {
  background: color-mix(in srgb, var(--text-primary) 90%, transparent);
}

.downloads-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.download-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
  background: var(--bg-primary);
  border-radius: 10px;
  border: 1px solid var(--border-color);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.download-item:hover {
  box-shadow: var(--shadow-sm);
  border-color: color-mix(in srgb, var(--text-primary) 16%, var(--border-color));
}

.file-info {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
}

.file-details {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
}

.file-name {
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.file-meta {
  display: flex;
  gap: 10px;
  font-size: 0.78rem;
  color: var(--text-muted);
}

.download-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 14px;
  background: var(--text-primary);
  color: var(--bg-primary);
  border: 1px solid var(--text-primary);
  border-radius: 9px;
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 600;
  transition: background-color 0.2s ease;
  white-space: nowrap;
}

.download-btn:hover {
  background: color-mix(in srgb, var(--text-primary) 90%, transparent);
}

.downloads-footer {
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px solid var(--border-color);
}

.total-info {
  font-size: 0.86rem;
  color: var(--text-muted);
  text-align: center;
  margin: 0;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@media (max-width: 768px) {
  .downloads-container {
    padding: 16px;
  }

  .downloads-header {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }

  .downloads-meta {
    align-items: flex-start;
  }

  .download-item {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }

  .file-meta {
    flex-direction: column;
    gap: 4px;
  }

  .download-btn {
    width: 100%;
  }
}
</style>
