<template>
  <div class="bb">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content animate-fade-in-up">
          <div class="content-left">
            <h1 class="hero-title">
              下载
              <br>
              <span class="gradient-text gradient-text-titletext">BedrockBoot</span>
            </h1>
            <p class="hero-subtitle">
              新一代 Minecraft BedrockBoot 启动器
            </p>
            <div v-if="latestRelease" class="version-info">
              <p>最新版本: <strong>{{ latestRelease.tag_name }}</strong></p>
              <p v-if="latestRelease.published_at">发布于: {{ formatDate(latestRelease.published_at) }}</p>
            </div>
            <div class="hero-actions">
              <a
                  v-if="latestRelease"
                  class="hero-btn hero-btn-solid"
                  :href="latestRelease.html_url"
                  target="_blank"
              >
                查看发布说明
              </a>
              <a class="hero-btn hero-btn-ghost" href="https://github.com/Round-Studio/BedrockBoot" target="_blank">
                GitHub 仓库
              </a>
            </div>
          </div>

          <div class="content-right" v-if="latestRelease">
            <DownloadRelease :release="latestRelease" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DownloadRelease from '@/components/DownloadRelease.vue' // 根据实际路径调整

const latestRelease = ref(null)
const loading = ref(true)
const error = ref(null)

// 在父组件中定义 formatDate 方法
const formatDate = (dateString) => {
  if (!dateString) return '未知日期'
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const fetchLatestRelease = async () => {
  try {
    loading.value = true
    error.value = null
    const response = await fetch('https://api.github.com/repos/Round-Studio/BedrockBoot/releases/latest')
    if (!response.ok) {
      throw new Error('获取版本信息失败')
    }
    latestRelease.value = await response.json()
  } catch (err) {
    error.value = err.message
    console.error('获取bb最新版本失败:', err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchLatestRelease()
})
</script>

<style scoped>
.bb {
  padding-top: 70px;
}

.hero {
  min-height: 90vh;
  display: flex;
  align-items: center;
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
  align-items: center;
  height: 100%;
}

.content-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

.hero-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 18px;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid var(--border-color);
}

.hero-btn-solid {
  background: var(--text-primary);
  color: var(--bg-primary);
  border-color: var(--text-primary);
}

.hero-btn-ghost {
  background: transparent;
  color: var(--text-primary);
}

.hero-btn:hover {
  border-color: var(--text-secondary);
  color: var(--text-secondary);
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
  .bb {
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
