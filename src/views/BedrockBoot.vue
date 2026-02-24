<template>
  <div class="bb">
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content animate-fade-in-up">
          <img src="./../assets/img/BedrockBootIcon.png" style="width: 120px; margin-bottom: 20px">
          <h1 class="hero-title">
            欢迎使用
            <br>
            <span class="gradient-text gradient-text-titletext">BedrockBoot</span>
          </h1>
          <p class="hero-subtitle">
            为 Windows 平台打造的 Minecraft Bedrock 启动器
            <br>
            <label class="gradient-text">BedrockBoot v2.x</label> 基于 OnePointUI，支持多版本、多实例并存启动。
            <div class="border-capsule">
              ✨ OnePointUI
            </div>
            <div class="border-capsule">
              🎉 多版本 多实例
            </div>
            <div class="border-capsule">
              🧩 支持 GDK 版本
            </div>
          </p>
          <div class="hero-actions">
            <RouterLink class="hero-btn hero-btn-solid" to="/download/bedrockboot">立即下载</RouterLink>
            <a class="hero-btn hero-btn-ghost" href="https://github.com/Round-Studio/BedrockBoot" target="_blank">前往 GitHub</a>
          </div>
        </div>
      </div>
    </section>

    <MarqueeSection :text-list="['BedrockBoot', 'Minecraft Bedrock', 'Windows']" />

    <DocsAlert type="success" style="margin-top: 30px;">
      BedrockBoot v2.x 已采用 OnePointUI，并在 v2 版本中引入了对 GDK 版本的支持。
    </DocsAlert>

    <section class="section" id="features">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title gradient-text-secondary">核心特性</h2>
          <p class="section-subtitle">对齐仓库 README 的能力描述，聚焦 v2 版本体验。</p>
        </div>

        <div class="feature-grid">
          <article v-for="item in features" :key="item.title" class="feature-card">
            <h3 class="feature-title">{{ item.title }}</h3>
            <p class="feature-desc">{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section-ecosystem" id="ecosystem">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title gradient-text-secondary">生态与入口</h2>
          <p class="section-subtitle">下载、文档、反馈与社区入口统一整理。</p>
        </div>

        <div class="link-grid">
          <a v-for="item in links" :key="item.title" :href="item.href" target="_blank" class="link-card">
            <h3 class="feature-title">{{ item.title }}</h3>
            <p class="feature-desc">{{ item.description }}</p>
          </a>
        </div>
      </div>
    </section>

    <section class="section" id="credits">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title gradient-text-secondary">项目信息</h2>
          <p class="section-subtitle">来自仓库说明的维护与技术栈信息。</p>
        </div>

        <div class="feature-grid">
          <article class="feature-card">
            <h3 class="feature-title">维护与交流</h3>
            <p class="feature-desc">主要开发者：Dime、YoumiHa。</p>
            <p class="feature-desc">GitHub Discussions 可用于功能建议与讨论。</p>
            <p class="feature-desc">QQ 社区群：245839607。</p>
          </article>
          <article class="feature-card">
            <h3 class="feature-title">开源基础</h3>
            <p class="feature-desc">Avalonia、OnePointUI.Avalonia、BedrockLauncher.Core。</p>
            <p class="feature-desc">项目许可证：GPL-3.0。</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import MarqueeSection from '../components/MarqueeSection.vue'
import DocsAlert from '../components/DocsAlert.vue'

const features = [
  {
    title: 'OnePointUI 驱动的 v2 界面',
    description: 'BedrockBoot v2.x 采用 OnePointUI 构建，强调现代化视觉与更统一的交互体验。'
  },
  {
    title: '多版本与多实例并存',
    description: '支持一次管理多个版本、多个实例，满足不同存档和服务器切换场景。'
  },
  {
    title: '引入 GDK 版本支持',
    description: '在 v2 版本中加入对 GDK 版本的支持，增强可用范围和兼容体验。'
  },
  {
    title: '面向 Windows 平台',
    description: '聚焦 Windows 平台的 Minecraft Bedrock 启动、管理与版本组织能力。'
  }
]

const links = [
  {
    title: '产品下载页',
    description: '前往 Round Studio 官方下载入口获取 BedrockBoot 构建。',
    href: 'https://roundstudio.top/bedrockboot'
  },
  {
    title: 'GitHub Releases',
    description: '查看历史版本与最新发布说明。',
    href: 'https://github.com/Round-Studio/BedrockBoot/releases'
  },
  {
    title: '产品文档',
    description: '查看 BedrockBoot 介绍与使用文档。',
    href: 'https://docs.roundstudio.top/docs/%E6%96%87%E6%A1%A3/%E4%BA%A7%E5%93%81%E6%96%87%E6%A1%A3/BedrockBoot/AboutBedrockBoot'
  },
  {
    title: 'GitHub Discussions',
    description: '参与功能建议、问题讨论和社区交流。',
    href: 'https://github.com/Round-Studio/BedrockBoot/discussions'
  }
]
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
  isolation: isolate;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    radial-gradient(44rem 26rem at 18% 18%, rgba(140, 140, 140, 0.2) 0%, rgba(140, 140, 140, 0) 72%),
    radial-gradient(36rem 22rem at 86% 24%, rgba(96, 96, 96, 0.15) 0%, rgba(96, 96, 96, 0) 74%),
    linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 70%);
}

.dark .hero::before {
  background:
    radial-gradient(44rem 26rem at 18% 18%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 72%),
    radial-gradient(36rem 22rem at 86% 24%, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 74%),
    linear-gradient(180deg, #171717 0%, var(--bg-primary) 72%);
}

.hero-container {
  width: 100%;
  padding: 0 180px;
  display: grid;
  gap: 60px;
  align-items: center;
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

.container {
  width: 100%;
  padding: 0 40px;
}

.section {
  padding: 56px 0 86px;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 640px;
  margin: 0 auto;
}

.section-ecosystem {
  background: color-mix(in srgb, var(--bg-secondary) 55%, transparent);
}

.feature-grid,
.link-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 18px;
}

.feature-card,
.link-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  padding: 22px;
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.link-card {
  text-decoration: none;
  display: block;
}

.feature-card:hover,
.link-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-color: var(--text-secondary);
}

.feature-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 10px;
}

.feature-desc {
  font-size: 0.97rem;
  line-height: 1.65;
  color: var(--text-secondary);
  margin-bottom: 6px;
}

@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .hero-title {
    font-size: 3rem;
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
    align-items: center;
  }

  .section-title {
    font-size: 2rem;
  }

  .container,
  .hero-container {
    padding: 0 20px;
  }
}
</style>
