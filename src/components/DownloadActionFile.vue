<template>
  <div class="downloads-container">
    <div class="downloads-header">
      <h3 class="downloads-title">最新构建文件</h3>
      <div class="downloads-meta">
        <span v-if="repoConfig" class="repo-info">{{ repoConfig.owner }}/{{ repoConfig.repo }}</span>
        <span v-if="latestRun" class="run-status" :class="getStatusClass(latestRun.status)">
          {{ getStatusText(latestRun.status, latestRun.conclusion) }}
        </span>
        <span v-if="latestRun" class="run-date">{{ formatDate(latestRun.created_at) }}</span>
      </div>
    </div>
    
    <div class="downloads-content">
      <!-- 加载状态 -->
      <div v-if="loading" class="loading-state">
        <div class="loading-spinner"></div>
        <span>{{ loadingText }}</span>
      </div>
      
      <!-- 错误状态 -->
      <div v-else-if="error" class="error-state">
        <div class="error-icon">⚠️</div>
        <span>{{ error }}</span>
        <button @click="retryFetch" class="retry-btn">重试</button>
      </div>
      
      <!-- 空状态 -->
      <div v-else-if="!artifacts || artifacts.length === 0" class="empty-state">
        <div class="empty-icon">📦</div>
        <span v-if="latestRun">此运行暂无构建产物</span>
        <span v-else>暂无构建文件</span>
      </div>
      
      <!-- 文件列表 -->
      <div v-else class="downloads-list">
        <div v-for="artifact in artifacts" :key="artifact.id" class="download-item">
          <div class="file-info">
            <div class="file-icon">
              📄
            </div>
            <div class="file-details">
              <span class="file-name">{{ artifact.name }}</span>
              <div class="file-meta">
                <span class="file-size">{{ formatFileSize(artifact.size_in_bytes) }}</span>
                <span class="file-updated">更新于: {{ formatDate(artifact.updated_at) }}</span>
              </div>
            </div>
          </div>
          <a
            :href="artifact.archive_download_url"
            class="download-btn"
            target="_blank"
            @click="trackDownload(artifact.name)"
          >
            <span class="btn-icon">⬇️</span>
            下载
          </a>
        </div>
      </div>
    </div>
    
    <!-- 运行信息 -->
    <div v-if="latestRun" class="run-info">
      <p class="run-meta">
        工作流: <strong>{{ latestRun.name }}</strong> • 
        触发者: <strong>{{ latestRun.actor?.login || '未知' }}</strong> • 
        分支: <strong>{{ latestRun.head_branch }}</strong>
      </p>
    </div>
    
    <!-- 底部信息 -->
    <div v-if="artifacts && artifacts.length > 0" class="downloads-footer">
      <p class="total-info">
        共 {{ artifacts.length }} 个构建产物 • 
        总大小: {{ formatFileSize(totalSize) }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'

// Props - 支持多种配置方式
const props = defineProps({
  // 方式1: 分别传递 owner 和 repo
  owner: {
    type: String,
    default: 'Round-Studio'
  },
  repo: {
    type: String,
    default: 'BedrockBoot'
  },
  // 方式2: 直接传递完整的仓库路径
  repository: {
    type: String,
    default: ''
  },
  // 方式3: 传递配置对象
  config: {
    type: Object,
    default: null
  },
  // 分支筛选
  branch: {
    type: String,
    default: ''
  },
  // 工作流筛选
  workflow: {
    type: String,
    default: ''
  },
  // 是否自动加载
  autoLoad: {
    type: Boolean,
    default: true
  }
})

// Reactive data
const latestRun = ref(null)
const artifacts = ref([])
const loading = ref(false)
const error = ref(null)

// 计算仓库配置
const repoConfig = computed(() => {
  // 优先级: config > repository > owner + repo
  if (props.config) {
    return {
      owner: props.config.owner || 'Round-Studio',
      repo: props.config.repo || 'BedrockBoot'
    }
  }
  
  if (props.repository) {
    const [owner, repo] = props.repository.split('/')
    return {
      owner: owner || 'Round-Studio',
      repo: repo || 'BedrockBoot'
    }
  }
  
  return {
    owner: props.owner,
    repo: props.repo
  }
})

// Computed properties
const totalSize = computed(() => {
  return artifacts.value.reduce((total, artifact) => total + artifact.size_in_bytes, 0)
})

const loadingText = computed(() => {
  if (!latestRun.value && loading.value) return '正在获取最新构建...'
  if (latestRun.value && loading.value) return '正在获取构建产物...'
  return '正在加载...'
})

// 构建 API URL
const buildRunsUrl = computed(() => {
  let url = `https://api.github.com/repos/${repoConfig.value.owner}/${repoConfig.value.repo}/actions/runs?per_page=1`
  
  // 添加分支筛选
  if (props.branch) {
    url += `&branch=${props.branch}`
  }
  
  return url
})

// Methods
const fetchLatestActionRun = async () => {
  try {
    loading.value = true
    error.value = null
    
    // 第一步：获取最新的 action run
    const runsResponse = await fetch(buildRunsUrl.value)
    
    if (!runsResponse.ok) {
      throw new Error(`获取构建运行记录失败: ${runsResponse.status}`)
    }
    
    const runsData = await runsResponse.json()
    
    if (!runsData.workflow_runs || runsData.workflow_runs.length === 0) {
      throw new Error('暂无构建运行记录')
    }
    
    // 如果有工作流筛选，过滤结果
    let targetRun = runsData.workflow_runs[0]
    if (props.workflow) {
      const filteredRuns = runsData.workflow_runs.filter(run => 
        run.name.toLowerCase().includes(props.workflow.toLowerCase())
      )
      targetRun = filteredRuns[0] || runsData.workflow_runs[0]
    }
    
    latestRun.value = targetRun
    
    // 第二步：获取该运行的 artifacts
    await fetchArtifacts(latestRun.value.id)
    
  } catch (err) {
    error.value = err.message
    console.error('获取构建信息失败:', err)
  } finally {
    loading.value = false
  }
}

const fetchArtifacts = async (runId) => {
  try {
    const artifactsResponse = await fetch(
      `https://api.github.com/repos/${repoConfig.value.owner}/${repoConfig.value.repo}/actions/runs/${runId}/artifacts`
    )
    
    if (!artifactsResponse.ok) {
      throw new Error(`获取构建产物失败: ${artifactsResponse.status}`)
    }
    
    const artifactsData = await artifactsResponse.json()
    artifacts.value = artifactsData.artifacts || []
    
  } catch (err) {
    error.value = err.message
    console.error('获取构建产物失败:', err)
  }
}

const retryFetch = () => {
  fetchLatestActionRun()
}

const formatDate = (dateString) => {
  if (!dateString) return '未知日期'
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const formatFileSize = (bytes) => {
  if (!bytes || bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

const getStatusClass = (status) => {
  switch (status) {
    case 'completed': return 'status-completed'
    case 'in_progress': return 'status-in-progress'
    case 'queued': return 'status-queued'
    case 'action_required': return 'status-action-required'
    default: return 'status-unknown'
  }
}

const getStatusText = (status, conclusion) => {
  if (status === 'completed') {
    switch (conclusion) {
      case 'success': return '构建成功'
      case 'failure': return '构建失败'
      case 'cancelled': return '已取消'
      case 'skipped': return '已跳过'
      default: return '已完成'
    }
  }
  
  switch (status) {
    case 'in_progress': return '构建中'
    case 'queued': return '排队中'
    case 'action_required': return '需要操作'
    default: return '未知状态'
  }
}

const trackDownload = (fileName) => {
  console.log(`下载构建产物: ${fileName} from ${repoConfig.value.owner}/${repoConfig.value.repo}`)
  // 这里可以添加下载跟踪逻辑
}

// 暴露方法给父组件
defineExpose({
  refresh: fetchLatestActionRun,
  getConfig: () => repoConfig.value,
  getLatestRun: () => latestRun.value,
  getArtifacts: () => artifacts.value
})

// Watchers
watch(repoConfig, (newConfig) => {
  if (newConfig && props.autoLoad) {
    fetchLatestActionRun()
  }
})

// Lifecycle
onMounted(() => {
  if (props.autoLoad) {
    fetchLatestActionRun()
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
  gap: 6px;
}

.repo-info {
  font-size: 0.8rem;
  color: var(--text-secondary);
  background: var(--bg-primary);
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid var(--border-color);
}

.run-status {
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  text-align: center;
}

.status-completed {
  background: #198754;
  color: white;
}

.status-in-progress {
  background: #0dcaf0;
  color: black;
}

.status-queued {
  background: #6c757d;
  color: white;
}

.status-action-required {
  background: #ffc107;
  color: black;
}

.status-unknown {
  background: #6c757d;
  color: white;
}

.run-date {
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

/* 运行信息 */
.run-info {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--border-color);
}

.run-meta {
  font-size: 0.9rem;
  color: var(--text-secondary);
  text-align: center;
  margin: 0;
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
  
  .file-meta {
    flex-direction: column;
    gap: 4px;
  }
}
</style>
