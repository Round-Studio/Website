<template>
  <div class="rmcl">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content animate-fade-in-up">
          <div class="content-left">
            <h1 class="hero-title">
              下载
              <br>
              <span class="gradient-text gradient-text-titletext">RMCL</span>
            </h1>
            <p class="hero-subtitle">
              你的下一代 Minecraft 启动器
            </p>
            <div v-if="latestRelease" class="version-info">
              <p>最新版本: <strong>{{ latestRelease.tag_name }}</strong></p>
              <p v-if="latestRelease.published_at">发布于: {{ formatDate(latestRelease.published_at) }}</p>
            </div>
            <div class="hero-actions">
              <a 
                v-if="latestRelease" 
                class="btn-gradient" 
                style="color: var(--text-primary)" 
                :href="latestRelease.html_url"
                target="_blank"
              >
                查看发布说明
              </a>
              <a class="btn-outline" style="color: var(--text-primary)" href="https://github.com/Round-Studio/RMCL" target="_blank">
                GitHub 仓库
              </a>
            </div>
          </div>

          <div class="content-right" v-if="latestRelease">
            <div class="downloads-container">
              <h3 class="downloads-title">构建文件下载</h3>
              <div class="downloads-list">
                <div v-for="asset in latestRelease.assets" :key="asset.id" class="download-item">
                  <div class="file-info">
                    <span class="file-name">{{ asset.name }}</span>
                    <span class="file-size">{{ formatFileSize(asset.size) }}</span>
                  </div>
                  <a 
                    :href="asset.browser_download_url" 
                    class="download-btn"
                    target="_blank"
                  >
                    下载
                  </a>
                </div>
              </div>
              <div v-if="latestRelease.assets.length === 0" class="no-assets">
                此版本暂无构建文件
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const latestRelease = ref(null)
const loading = ref(true)
const error = ref(null)

const fetchLatestRelease = async () => {
  try {
    loading.value = true
    error.value = null
    const response = await fetch('https://api.github.com/repos/Round-Studio/RMCL/releases/latest')
    if (!response.ok) {
      throw new Error('获取版本信息失败')
    }
    latestRelease.value = await response.json()
  } catch (err) {
    error.value = err.message
    console.error('获取RMCL最新版本失败:', err)
  } finally {
    loading.value = false
  }
}

const formatDate = (dateString) => {
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

onMounted(() => {
  fetchLatestRelease()
})
</script>

<style scoped>
.rmcl {
  padding-top: 70px;
}

.hero {
  min-height: 90vh;
  display: flex;
  align-items: center;
  color: white;
  position: relative;
  overflow: hidden;
}

.hero-container {
  width: 100%;
  padding: 0 180px;
}

.hero-content {
  display: flex;
  gap: 60px;
  align-items: center; /* 添加这行使子元素垂直居中 */
  height: 100%; /* 确保父容器有高度 */
}

.content-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center; /* 使内容在容器内垂直居中 */
}

.content-right {
  flex: 1;
  min-width: 0;
}

.hero-title {
  color: var(--text-primary);
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 24px;
}

.hero-subtitle {
  color: var(--text-primary);
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 32px;
  opacity: 0.9;
}

.hero-actions {
  display: flex;
  gap: 16px;
  margin-top: 20px;
}

.version-info {
  margin: 0px 0;
  color: var(--text-secondary);
}

.version-info p {
  margin: 5px 0;
}

.downloads-container {
  background: var(--bg-secondary);
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-md);
}

.downloads-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--text-primary);
}

.downloads-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.download-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: var(--bg-primary);
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.file-info {
  display: flex;
  flex-direction: column;
}

.file-name {
  font-weight: 500;
  color: var(--text-primary);
}

.file-size {
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-top: 4px;
}

.download-btn {
  padding: 8px 16px;
  background: var(--gradient-primary);
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: transform 0.2s ease;
}

.download-btn:hover {
  transform: translateY(-2px);
}

.no-assets {
  color: var(--text-secondary);
  text-align: center;
  padding: 20px;
}

.border-capsule {
  display: inline-block;
  background: var(--gradient-hero);
  padding: 4px 12px;
  border-radius: 16px;
  margin: 4px;
  font-size: 0.9rem;
  color: white;
}

.btn-gradient {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 8px;
  background: var(--gradient-primary);
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s ease;
}

.btn-gradient:hover {
  transform: translateY(-2px);
}

.btn-outline {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;
}

.btn-outline:hover {
  background: var(--bg-secondary);
}

@media (max-width: 1024px) {
  .hero-content {
    flex-direction: column;
    gap: 40px;
  }
  
  .hero-container {
    padding: 0 40px;
  }
}

@media (max-width: 768px) {
  .rmcl {
    padding-top: 60px;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.125rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: flex-start;
  }

  .hero-container {
    padding: 0 20px;
  }
}
</style>