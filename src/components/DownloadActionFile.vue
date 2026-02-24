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
      <div v-if="loading" class="loading-state">
        <div class="loading-spinner"></div>
        <span>{{ loadingText }}</span>
      </div>

      <div v-else-if="error" class="error-state">
        <div class="state-icon">⚠️</div>
        <span>{{ error }}</span>
        <button @click="retryFetch" class="retry-btn">重试</button>
      </div>

      <div v-else-if="!artifacts || artifacts.length === 0" class="empty-state">
        <div class="state-icon">📦</div>
        <span v-if="latestRun">此运行暂无构建产物</span>
        <span v-else>暂无构建文件</span>
      </div>

      <div v-else class="downloads-list">
        <div v-for="artifact in artifacts" :key="artifact.id" class="download-item">
          <div class="file-info">
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
            rel="noreferrer"
          >
            下载
          </a>
        </div>
      </div>
    </div>

    <div v-if="latestRun" class="run-info">
      <p class="run-meta">
        工作流: <strong>{{ latestRun.name }}</strong> •
        触发者: <strong>{{ latestRun.actor?.login || '未知' }}</strong> •
        分支: <strong>{{ latestRun.head_branch }}</strong>
      </p>
    </div>

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

const props = defineProps({
  owner: {
    type: String,
    default: 'Round-Studio'
  },
  repo: {
    type: String,
    default: 'BedrockBoot'
  },
  repository: {
    type: String,
    default: ''
  },
  config: {
    type: Object,
    default: null
  },
  branch: {
    type: String,
    default: ''
  },
  workflow: {
    type: String,
    default: ''
  },
  autoLoad: {
    type: Boolean,
    default: true
  }
})

const latestRun = ref(null)
const artifacts = ref([])
const loading = ref(false)
const error = ref(null)

const repoConfig = computed(() => {
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

const totalSize = computed(() => {
  return artifacts.value.reduce((total, artifact) => total + artifact.size_in_bytes, 0)
})

const loadingText = computed(() => {
  if (!latestRun.value && loading.value) return '正在获取最新构建...'
  if (latestRun.value && loading.value) return '正在获取构建产物...'
  return '正在加载...'
})

const buildRunsUrl = computed(() => {
  let url = `https://api.github.com/repos/${repoConfig.value.owner}/${repoConfig.value.repo}/actions/runs?per_page=1`

  if (props.branch) {
    url += `&branch=${props.branch}`
  }

  return url
})

const fetchLatestActionRun = async () => {
  try {
    loading.value = true
    error.value = null

    const runsResponse = await fetch(buildRunsUrl.value)

    if (!runsResponse.ok) {
      throw new Error(`获取构建运行记录失败: ${runsResponse.status}`)
    }

    const runsData = await runsResponse.json()

    if (!runsData.workflow_runs || runsData.workflow_runs.length === 0) {
      throw new Error('暂无构建运行记录')
    }

    let targetRun = runsData.workflow_runs[0]
    if (props.workflow) {
      const filteredRuns = runsData.workflow_runs.filter((run) =>
        run.name.toLowerCase().includes(props.workflow.toLowerCase())
      )
      targetRun = filteredRuns[0] || runsData.workflow_runs[0]
    }

    latestRun.value = targetRun

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
    case 'completed':
      return 'status-completed'
    case 'in_progress':
      return 'status-in-progress'
    case 'queued':
      return 'status-queued'
    case 'action_required':
      return 'status-action-required'
    default:
      return 'status-unknown'
  }
}

const getStatusText = (status, conclusion) => {
  if (status === 'completed') {
    switch (conclusion) {
      case 'success':
        return '构建成功'
      case 'failure':
        return '构建失败'
      case 'cancelled':
        return '已取消'
      case 'skipped':
        return '已跳过'
      default:
        return '已完成'
    }
  }

  switch (status) {
    case 'in_progress':
      return '构建中'
    case 'queued':
      return '排队中'
    case 'action_required':
      return '需要操作'
    default:
      return '未知状态'
  }
}

const trackDownload = (fileName) => {
  console.log(`下载构建产物: ${fileName} from ${repoConfig.value.owner}/${repoConfig.value.repo}`)
}

defineExpose({
  refresh: fetchLatestActionRun,
  getConfig: () => repoConfig.value,
  getLatestRun: () => latestRun.value,
  getArtifacts: () => artifacts.value
})

watch(repoConfig, (newConfig) => {
  if (newConfig && props.autoLoad) {
    fetchLatestActionRun()
  }
})

onMounted(() => {
  if (props.autoLoad) {
    fetchLatestActionRun()
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

.repo-info {
  font-size: 0.75rem;
  color: var(--text-muted);
  background: var(--bg-primary);
  padding: 3px 8px;
  border-radius: 999px;
  border: 1px solid var(--border-color);
}

.run-status {
  padding: 3px 8px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-align: center;
  border: 1px solid transparent;
}

.status-completed {
  background: rgba(34, 197, 94, 0.14);
  color: #166534;
  border-color: rgba(34, 197, 94, 0.34);
}

.status-in-progress {
  background: rgba(59, 130, 246, 0.14);
  color: #1d4ed8;
  border-color: rgba(59, 130, 246, 0.34);
}

.status-queued {
  background: rgba(161, 161, 170, 0.2);
  color: #3f3f46;
  border-color: rgba(113, 113, 122, 0.36);
}

.status-action-required {
  background: rgba(245, 158, 11, 0.16);
  color: #92400e;
  border-color: rgba(245, 158, 11, 0.34);
}

.status-unknown {
  background: rgba(161, 161, 170, 0.2);
  color: #3f3f46;
  border-color: rgba(113, 113, 122, 0.36);
}

.dark .status-completed {
  color: #bbf7d0;
}

.dark .status-in-progress {
  color: #bfdbfe;
}

.dark .status-queued,
.dark .status-unknown {
  color: #d4d4d8;
}

.dark .status-action-required {
  color: #fcd34d;
}

.run-date {
  font-size: 0.78rem;
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
  transition: background-color 0.2s ease;
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

.run-info {
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px solid var(--border-color);
}

.run-meta {
  font-size: 0.84rem;
  color: var(--text-muted);
  text-align: center;
  margin: 0;
  line-height: 1.7;
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
