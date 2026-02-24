<template>
  <div class="home-page">
    <section class="hero-section">
      <div class="hero-bg" aria-hidden="true"></div>
      <div class="hero-inner">
        <p class="hero-kicker">Round Studio</p>
        <h1 class="hero-title">为 Minecraft 玩家打造稳定、清晰、可持续迭代的启动体验</h1>
        <p class="hero-desc">
          当前主线产品聚焦 <span class="gradient-text">RMCL</span> 与 <span class="gradient-text">BedrockBoot</span>。
          我们强调工程质量、长期维护和开源协作。
        </p>
        <div class="hero-tags">
          <span class="hero-tag">跨平台</span>
          <span class="hero-tag">Windows Bedrock</span>
          <span class="hero-tag">OnePointUI / Avalonia</span>
        </div>
        <div class="hero-actions">
          <RouterLink to="/rmcl" class="hero-btn hero-btn-solid">查看 RMCL</RouterLink>
          <RouterLink to="/bedrockboot" class="hero-btn hero-btn-ghost">查看 BedrockBoot</RouterLink>
          <a href="https://github.com/Round-Studio" target="_blank" class="hero-btn hero-btn-ghost">GitHub 组织</a>
        </div>
      </div>
    </section>

    <section id="projects" class="projects-section">
      <div class="section-head">
        <h2>核心项目</h2>
        <p>首页入口只保留当前可访问、持续维护中的产品页面。</p>
      </div>

      <div class="projects-grid">
        <article v-for="project in projects" :key="project.name" class="project-card">
          <div class="project-top">
            <h3>{{ project.name }}</h3>
            <span class="project-state" :class="project.stateClass">{{ project.stateLabel }}</span>
          </div>
          <p>{{ project.description }}</p>
          <div class="project-links">
            <RouterLink :to="project.page" class="project-link">项目页</RouterLink>
            <RouterLink :to="project.download" class="project-link">下载页</RouterLink>
            <a :href="project.github" target="_blank" class="project-link">GitHub</a>
          </div>
        </article>
      </div>
    </section>

    <section class="links-section">
      <div class="section-head">
        <h2>常用入口</h2>
        <p>文档、发布、反馈和社区入口统一整理。</p>
      </div>

      <div class="links-grid">
        <a v-for="item in quickLinks" :key="item.title" :href="item.href" target="_blank" class="link-card">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
const projects = [
  {
    name: 'RMCL',
    stateLabel: '持续更新',
    stateClass: 'state-active',
    description: '跨平台 Minecraft 启动器，基于 Avalonia，强调一致体验与长期维护。',
    page: '/rmcl',
    download: '/download/rmcl',
    github: 'https://github.com/Round-Studio/RMCL'
  },
  {
    name: 'BedrockBoot',
    stateLabel: 'v2 主线',
    stateClass: 'state-active',
    description: '面向 Windows 的 Bedrock 启动器，v2.x 使用 OnePointUI，并支持多版本多实例。',
    page: '/bedrockboot',
    download: '/download/bedrockboot',
    github: 'https://github.com/Round-Studio/BedrockBoot'
  }
]

const quickLinks = [
  {
    title: 'Round Studio Docs',
    description: '查看产品文档、差异性说明和使用指南。',
    href: 'https://docs.roundstudio.top/'
  },
  {
    title: 'BedrockBoot Releases',
    description: '查看 BedrockBoot 最新发布说明和历史版本。',
    href: 'https://github.com/Round-Studio/BedrockBoot/releases'
  },
  {
    title: 'RMCL Releases',
    description: '查看 RMCL 的发布节奏与可下载构建。',
    href: 'https://github.com/Round-Studio/RMCL/releases'
  },
  {
    title: 'BedrockBoot Discussions',
    description: '反馈问题、提出建议并参与社区讨论。',
    href: 'https://github.com/Round-Studio/BedrockBoot/discussions'
  }
]
</script>

<style scoped>
.home-page {
  padding-top: 72px;
}

.hero-section {
  padding: 84px 40px 56px;
  position: relative;
  isolation: isolate;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 14px 40px 10px;
  min-height: 320px;
  border-radius: 24px;
  background:
    radial-gradient(40rem 22rem at 15% 12%, rgba(16, 185, 129, 0.14) 0%, rgba(16, 185, 129, 0) 72%),
    radial-gradient(32rem 18rem at 86% 10%, rgba(66, 133, 244, 0.12) 0%, rgba(66, 133, 244, 0) 74%),
    linear-gradient(160deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  border: 1px solid var(--border-color);
  -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 84%, transparent 100%);
  mask-image: linear-gradient(to bottom, #000 0%, #000 84%, transparent 100%);
}

.hero-inner {
  max-width: 980px;
  margin: 0 auto;
  padding: 36px 42px;
  position: relative;
}

.hero-kicker {
  margin: 0 0 14px;
  font-size: 0.9rem;
  color: var(--text-secondary);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-title {
  margin: 0;
  color: var(--text-primary);
  font-size: clamp(2rem, 5vw, 3.3rem);
  line-height: 1.08;
  font-weight: 800;
}

.hero-desc {
  margin: 18px 0 0;
  max-width: 760px;
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--text-secondary);
}

.hero-tags {
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.hero-tag {
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgb(5, 150, 105);
  color: rgb(6, 95, 70);
  padding: 5px 12px;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 600;
}

.dark .hero-tag {
  background: rgba(16, 185, 129, 0.22);
  border-color: rgb(16, 185, 129);
  color: rgb(167, 243, 208);
}

.hero-actions {
  margin-top: 24px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.hero-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 128px;
  height: 44px;
  padding: 0 16px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.24s ease, color 0.24s ease, border-color 0.24s ease;
}

.hero-btn-solid {
  background: var(--text-primary);
  color: var(--bg-primary);
  border: 1px solid var(--text-primary);
}

.hero-btn-solid:hover {
  background: transparent;
  color: var(--text-primary);
}

.hero-btn-ghost {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.hero-btn-ghost:hover {
  border-color: var(--text-secondary);
  color: var(--text-secondary);
}

.projects-section,
.links-section {
  padding: 20px 40px 70px;
}

.section-head {
  max-width: 1100px;
  margin: 0 auto 24px;
}

.section-head h2 {
  margin: 0;
  font-size: clamp(1.6rem, 2.5vw, 2.2rem);
  color: var(--text-primary);
}

.section-head p {
  margin: 8px 0 0;
  color: var(--text-secondary);
}

.projects-grid,
.links-grid {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.project-card,
.link-card {
  padding: 20px;
  border-radius: 14px;
  border: 1px solid var(--border-color);
  background: var(--bg-secondary);
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.project-card:hover,
.link-card:hover {
  transform: translateY(-2px);
  border-color: var(--text-secondary);
  box-shadow: var(--shadow-md);
}

.project-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.project-top h3,
.link-card h3 {
  margin: 0;
  color: var(--text-primary);
  font-size: 1.2rem;
}

.project-state {
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  border: 1px solid transparent;
}

.state-active {
  background: rgba(34, 197, 94, 0.15);
  color: #166534;
  border-color: rgba(34, 197, 94, 0.35);
}

.dark .state-active {
  color: #86efac;
}

.project-card p,
.link-card p {
  margin: 12px 0 0;
  color: var(--text-secondary);
  line-height: 1.7;
}

.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

.project-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 7px 11px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
}

.project-link:hover {
  border-color: var(--text-secondary);
  color: var(--text-secondary);
}

.link-card {
  text-decoration: none;
}

@media (max-width: 900px) {
  .projects-grid,
  .links-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .home-page {
    padding-top: 62px;
  }

  .hero-section,
  .projects-section,
  .links-section {
    padding-left: 20px;
    padding-right: 20px;
  }

  .hero-bg {
    inset: 10px 20px 8px;
    min-height: 340px;
    border-radius: 14px;
  }

  .hero-inner {
    padding: 22px 16px;
  }
}
</style>
