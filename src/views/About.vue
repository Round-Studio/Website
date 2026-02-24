<template>
  <div class="about-page">
    <section class="hero">
      <div class="hero-bg" aria-hidden="true"></div>
      <div class="hero-container">
        <div class="hero-content animate-fade-in-up">
          <h1 class="hero-title">
            <span class="gradient-text gradient-text-titletext">Round Studio</span>
            <br>
            开发团队介绍
          </h1>
          <p class="hero-subtitle">
            我们专注 Minecraft 启动器与相关基础能力，强调长期维护、工程质量与开源协作。
          </p>
          <div class="hero-actions">
            <a class="hero-btn hero-btn-solid" href="https://github.com/Round-Studio" target="_blank" rel="noopener noreferrer">GitHub 组织</a>
            <a class="hero-btn hero-btn-ghost" href="https://docs.roundstudio.top" target="_blank" rel="noopener noreferrer">产品文档</a>
          </div>
        </div>
      </div>
    </section>

    <MarqueeSection :text-list="['Round Studio', 'Open Source', 'Minecraft']" />

    <section class="people" id="people">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title gradient-text-secondary">开发组成员</h2>
          <p class="section-subtitle">Round Studio 团队成员</p>
        </div>

        <div v-if="loading" class="people-grid">
          <article v-for="n in 6" :key="n" class="person-card skeleton-card">
            <div class="skeleton-avatar"></div>
            <div class="skeleton-line skeleton-line-lg"></div>
            <div class="skeleton-line"></div>
            <div class="skeleton-line"></div>
          </article>
        </div>

        <div v-else-if="error" class="state-card">
          <h3>成员信息加载失败</h3>
          <p>{{ error }}</p>
          <button class="retry-btn" @click="fetchMembers">重试</button>
        </div>

        <div v-else-if="members.length === 0" class="state-card">
          <h3>暂无成员信息</h3>
          <p>当前未获取到公开成员，请稍后再试。</p>
        </div>

        <div v-else class="people-grid">
          <article v-for="member in members" :key="member.id" class="person-card animate-fade-in-up">
            <img :src="member.avatar_url" :alt="member.login" class="member-avatar">
            <h3>{{ member.name || member.login }}</h3>
            <p class="member-login">@{{ member.login }}</p>
            <p class="member-bio">{{ member.bio || '这个成员还没有填写个人简介。' }}</p>
            <div class="member-links">
              <a :href="member.html_url" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a v-if="member.blog" :href="normalizeBlogUrl(member.blog)" target="_blank" rel="noopener noreferrer">主页</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MarqueeSection from '../components/MarqueeSection.vue'

const members = ref([])
const loading = ref(false)
const error = ref('')

const normalizeBlogUrl = (url) => {
  if (!url) return ''
  if (url.startsWith('http://') || url.startsWith('https://')) return url
  return `https://${url}`
}

const fetchMembers = async () => {
  loading.value = true
  error.value = ''

  try {
    const response = await fetch('https://api.github.com/orgs/Round-Studio/members?per_page=100')

    if (!response.ok) {
      throw new Error(`请求失败 (${response.status})`) }

    const baseMembers = await response.json()

    const membersWithDetails = await Promise.all(
      baseMembers.map(async (member) => {
        try {
          const userResponse = await fetch(member.url)
          if (!userResponse.ok) return member
          const userData = await userResponse.json()
          return {
            ...member,
            name: userData.name,
            bio: userData.bio,
            blog: userData.blog
          }
        } catch {
          return member
        }
      })
    )

    members.value = membersWithDetails.sort((a, b) => (a.login || '').localeCompare(b.login || ''))
  } catch (err) {
    error.value = '无法从 GitHub 拉取成员信息，请稍后再试。'
    console.error('Error fetching GitHub members:', err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchMembers()
})
</script>

<style scoped>
.about-page {
  padding-top: 70px;
}

.hero {
  min-height: 42vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  isolation: isolate;
}

.hero-bg {
  position: absolute;
  inset: 12px 40px 0;
  min-height: 270px;
  border-radius: 20px;
  z-index: -1;
  background:
    radial-gradient(30rem 16rem at 12% 12%, rgba(16, 185, 129, 0.14) 0%, rgba(16, 185, 129, 0) 72%),
    radial-gradient(24rem 14rem at 88% 18%, rgba(66, 133, 244, 0.12) 0%, rgba(66, 133, 244, 0) 74%),
    linear-gradient(160deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  border: 1px solid var(--border-color);
}

.hero-container {
  width: 100%;
  padding: 0 180px;
}

.hero-content {
  max-width: 940px;
}

.hero-title {
  color: var(--text-primary);
  font-size: 3.2rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 20px;
}

.hero-subtitle {
  color: var(--text-secondary);
  font-size: 1.08rem;
  line-height: 1.8;
  max-width: 720px;
}

.hero-actions {
  margin-top: 22px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
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

.hero-btn-solid:hover {
  background: transparent;
  color: var(--text-primary);
}

.hero-btn-ghost {
  background: transparent;
  color: var(--text-primary);
}

.hero-btn-ghost:hover {
  border-color: var(--text-secondary);
  color: var(--text-secondary);
}

.container {
  width: 100%;
  padding: 0 40px;
}

.people {
  padding: 68px 0 84px;
}

.section-header {
  text-align: center;
  margin-bottom: 34px;
}

.section-title {
  font-size: 2.3rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.section-subtitle {
  font-size: 1.05rem;
  color: var(--text-secondary);
  max-width: 620px;
  margin: 0 auto;
}

.people-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}

.person-card {
  padding: 24px;
  border-radius: 16px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.person-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-color: var(--text-secondary);
}

.member-avatar {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  margin-bottom: 14px;
  object-fit: cover;
  border: 2px solid var(--border-color);
}

.person-card h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
}

.member-login {
  margin-top: 4px;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.member-bio {
  color: var(--text-secondary);
  margin: 12px 0 18px;
  line-height: 1.65;
  flex-grow: 1;
}

.member-links {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
}

.member-links a {
  padding: 7px 12px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  color: var(--text-primary);
  text-decoration: none;
  font-size: 0.9rem;
}

.member-links a:hover {
  border-color: var(--text-secondary);
  color: var(--text-secondary);
}

.state-card {
  max-width: 620px;
  margin: 0 auto;
  border: 1px solid var(--border-color);
  border-radius: 14px;
  background: var(--bg-secondary);
  padding: 24px;
  text-align: center;
}

.state-card h3 {
  color: var(--text-primary);
  margin-bottom: 8px;
}

.state-card p {
  color: var(--text-secondary);
}

.retry-btn {
  margin-top: 12px;
  padding: 8px 14px;
  border-radius: 8px;
  border: 1px solid var(--text-primary);
  background: var(--text-primary);
  color: var(--bg-primary);
  cursor: pointer;
}

.retry-btn:hover {
  background: transparent;
  color: var(--text-primary);
}

.skeleton-card {
  pointer-events: none;
}

.skeleton-avatar,
.skeleton-line {
  background: linear-gradient(90deg, var(--bg-primary) 0%, var(--bg-tertiary) 50%, var(--bg-primary) 100%);
  background-size: 200% 100%;
  animation: shimmer 1.2s linear infinite;
}

.skeleton-avatar {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  margin-bottom: 14px;
}

.skeleton-line {
  width: 80%;
  height: 12px;
  border-radius: 8px;
  margin-top: 10px;
}

.skeleton-line-lg {
  width: 56%;
  height: 16px;
}

@keyframes shimmer {
  from {
    background-position: 200% 0;
  }
  to {
    background-position: -200% 0;
  }
}

@media (max-width: 1024px) {
  .hero-container {
    padding: 0 40px;
  }

  .hero-title {
    font-size: 2.8rem;
  }
}

@media (max-width: 768px) {
  .about-page {
    padding-top: 60px;
  }

  .hero-container,
  .container {
    padding: 0 20px;
  }

  .hero-bg {
    inset: 8px 20px 0;
    border-radius: 14px;
  }

  .hero-title {
    font-size: 2.3rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .people-grid {
    grid-template-columns: 1fr;
  }
}
</style>
