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
          <span class="hero-tag success-badge">跨平台</span>
          <span class="hero-tag success-badge">Minecraft</span>
          <span class="hero-tag success-badge">dotNET C#</span>
          <span class="hero-tag success-badge">OnePointUI / Avalonia / WinUI</span>
        </div>
        <div class="hero-actions">
          <RouterLink to="/bedrockboot" class="hero-btn hero-btn-solid">查看 BedrockBoot</RouterLink>
          <RouterLink to="/rmcl" class="hero-btn hero-btn-ghost">查看 RMCL</RouterLink>
          <a href="https://github.com/Round-Studio" target="_blank" class="hero-btn hero-btn-ghost" rel="noreferrer">GitHub 组织</a>
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
            <a :href="project.page" target="_blank" class="project-link" rel="noreferrer">项目页</a>
            <a :href="project.download" target="_blank" class="project-link" rel="noreferrer">下载</a>
            <a :href="project.github" target="_blank" class="project-link" rel="noreferrer">GitHub</a>
          </div>
        </article>
      </div>
    </section>

    <section class="links-section">
      <div class="section-head">
        <h2>常用入口</h2>
        <p>文档、发布、反馈和社区入口</p>
      </div>

      <div class="links-grid">
        <a v-for="item in quickLinks" :key="item.title" :href="item.href" target="_blank" class="link-card" rel="noreferrer">
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
    name: 'BedrockBoot',
    stateLabel: '持续更新',
    stateClass: 'state-active',
    description: '面向 Windows 的 Bedrock 启动器，v2.x 使用 OnePointUI，并支持多版本多实例。',
    page: '/bedrockboot',
    download: '/download/bedrockboot',
    github: 'https://github.com/Round-Studio/BedrockBoot'
  },
  {
    name: 'BedrockLauncher.Core',
    stateLabel: '维护',
    stateClass: 'state-active',
    description: 'dotNET 平台的 Windows Bedrock 启动器核心库，提供启动器功能的核心实现，供 BedrockBoot 和其他项目使用。',
    page: 'https://docs.roundstudio.top/docs/product/blc',
    download: 'https://www.nuget.org/packages/BedrockLauncher.Core',
    github: 'https://github.com/Round-Studio/BedrockLauncher.Core'
  },
  {
    name: 'RMCL',
    stateLabel: '暂停更新',
    stateClass: 'state-paused',
    description: '跨平台 Minecraft 启动器，基于 Avalonia，强调一致体验与长期维护。',
    page: '/rmcl',
    download: '/download/rmcl',
    github: 'https://github.com/Round-Studio/RMCL'
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
  }
]
</script>

<style scoped>
.home-page {
  padding-top: 72px;
}

.hero-section {
  padding: 74px 40px 50px;
  position: relative;
  isolation: isolate;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 14px 40px 8px;
  min-height: 340px;
  border-radius: 18px;
  background:
    linear-gradient(to right, color-mix(in srgb, var(--border-color) 45%, transparent) 1px, transparent 1px),
    linear-gradient(to bottom, color-mix(in srgb, var(--border-color) 45%, transparent) 1px, transparent 1px),
    var(--gradient-hero);
  background-size: 26px 26px, 26px 26px, auto;
  border: 1px solid var(--border-color);
  -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 86%, transparent 100%);
  mask-image: linear-gradient(to bottom, #000 0%, #000 86%, transparent 100%);
}

.hero-inner {
  max-width: 980px;
  margin: 0 auto;
  padding: 34px 36px;
  position: relative;
}

.hero-kicker {
  margin: 0 0 14px;
  font-size: 0.84rem;
  color: var(--text-muted);
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.hero-title {
  margin: 0;
  color: var(--text-primary);
  font-size: clamp(2rem, 5vw, 3.3rem);
  line-height: 1.08;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.hero-desc {
  margin: 18px 0 0;
  max-width: 760px;
  font-size: 1.03rem;
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
  padding: 5px 11px;
}

.hero-actions {
  margin-top: 24px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.hero-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 128px;
  height: 40px;
  padding: 0 14px;
  border-radius: 10px;
  text-decoration: none;
  font-size: 0.92rem;
  font-weight: 600;
  border: 1px solid transparent;
  transition: border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
}

.hero-btn-solid {
  background: var(--text-primary);
  color: var(--bg-primary);
  border-color: var(--text-primary);
}

.hero-btn-solid:hover {
  background: color-mix(in srgb, var(--text-primary) 90%, transparent);
  box-shadow: var(--shadow-md);
}

.hero-btn-ghost {
  background: var(--bg-primary);
  color: var(--text-primary);
  border-color: var(--border-color);
}

.hero-btn-ghost:hover {
  border-color: color-mix(in srgb, var(--text-primary) 20%, var(--border-color));
  background: var(--bg-secondary);
}

.projects-section,
.links-section {
  padding: 18px 40px 68px;
}

.section-head {
  max-width: 1100px;
  margin: 0 auto 20px;
}

.section-head h2 {
  margin: 0;
  font-size: clamp(1.5rem, 2.4vw, 2.05rem);
  color: var(--text-primary);
  letter-spacing: -0.01em;
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
  gap: 14px;
}

.project-card,
.link-card {
  padding: 20px;
  border-radius: 14px;
  border: 1px solid var(--border-color);
  background: var(--bg-secondary);
  box-shadow: var(--shadow-sm);
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.project-card:hover,
.link-card:hover {
  transform: translateY(-1px);
  border-color: color-mix(in srgb, var(--text-primary) 12%, var(--border-color));
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
  font-size: 1.16rem;
  letter-spacing: -0.01em;
}

.project-state {
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 0.74rem;
  font-weight: 600;
  border: 1px solid transparent;
}

.state-active {
  background: rgba(34, 197, 94, 0.13);
  color: #166534;
  border-color: rgba(34, 197, 94, 0.32);
}

.state-paused {
  background: rgba(245, 158, 11, 0.14);
  color: #92400e;
  border-color: rgba(245, 158, 11, 0.34);
}

.dark .state-active {
  color: #bbf7d0;
}

.dark .state-paused {
  color: #fcd34d;
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
  border-radius: 9px;
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  background: var(--bg-primary);
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 500;
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.project-link:hover {
  border-color: color-mix(in srgb, var(--text-primary) 20%, var(--border-color));
  background: var(--bg-secondary);
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
    min-height: 350px;
    border-radius: 14px;
  }

  .hero-inner {
    padding: 20px 14px;
  }

  .hero-actions {
    gap: 8px;
  }
}
</style>
