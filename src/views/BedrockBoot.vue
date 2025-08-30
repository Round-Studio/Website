<template>
  <div class="bb">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content animate-fade-in-up">
          <img src="./../assets/img/BedrockBootIcon.png" style="width: 120px;margin-bottom: 20px">
          <h1 class="hero-title">
            欢迎使用
            <br>
            <span class="gradient-text gradient-text-titletext">BedrockBoot</span>
          </h1>
          <p class="hero-subtitle">
            新一代 
            <label class="gradient-text">Minecraft Bedrock for Windows</label>
            启动器
            <div class="border-capsule">
              ✨ Fluent Design
            </div>
            <div class="border-capsule">
              😺 WinUI 3
            </div>
            <div class="border-capsule">
              🎉 多版本 多实例
            </div>
          </p>
          <div class="hero-actions">
            <RouterLink class="btn-gradient" style="color: var(--text-primary)" to="/download/bedrockboot">立即下载</RouterLink>
            <a class="btn-outline" style="color: var(--text-primary)" href="https://github.com/Round-Studio/BedrockBoot">前往 Github</a>
          </div>
        </div>
      </div>
    </section>

    <MarqueeSection
        :text-list="['BedorckBoot', 'Minecraft']"
    />

    <DocsAlert type="danger" style="margin-top: 30px;">
      当前 BedrockBoot 处于测试阶段，尚不稳定
    </DocsAlert>

    <!-- system Section -->
    <section class="system" id="system">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title gradient-text-secondary">华丽 UI</h2>
          <p class="section-subtitle">使用 <label class="gradient-text-secondary">WinUI 3</label> 框架。使得 BedrockBoot 在原生 Windows 平台完美契合</p>
        </div>

        <div class="section-header">
          <h2 class="section-title gradient-text-secondary">高速下载</h2>
          <p class="section-subtitle">多任务，多线程下载，一次安装多版本无需顾虑</p>
        </div>

        <div class="section-header">
          <h2 class="section-title gradient-text-secondary">高效率管理资源</h2>
          <p class="section-subtitle">一个页面，搞定全部的存档，资源包管理</p>
          <p class="section-subtitle">甚至还能管理实例的 Mods</p>
        </div>

        <div class="section-header">
          <h2 class="section-title gradient-text-secondary">多版本 多实例 高度自定义</h2>
          <p class="section-subtitle">自定义版本实例名称，启动画面</p>
          <p class="section-subtitle">甚至还能多实例同时启动！</p>
        </div>

        <div class="section-header">
          <h2 class="section-title gradient-text-secondary">高效率团队</h2>
          <p class="section-subtitle">效率极高的维护团队，提出问题后快速得以解决</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import MarqueeSection from '../components/MarqueeSection.vue'
import DocsAlert from '../components/DocsAlert.vue'
</script>

<style scoped>
.bb {
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

.hero-visual {
  position: relative;
  height: 400px;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

.container {
  width: 100%;
  padding: 0 40px;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.system {
  padding: 50px 0 100px 0;
}

.system-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
}

.service-card {
  padding: 40px;
  border-radius: 20px;
  background: var(--bg-primary);
  /* border: 1px solid var(--border-color); */
  transition: all 0.3s ease;
  text-align: center;
}

.service-card:hover {
  transform: translateY(-8px);
  /* box-shadow: var(--shadow-xl); */
}

.service-card h3 {
  font-size: 2rem;
  font-weight: 600;
  word-wrap: break-word;
  color: var(--text-primary);
}

.service-card a {
  margin-right: 8px;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
}

.service-card.card-gradient h3 {
  color: white;
}

.service-card p {
  color: var(--text-secondary);
  margin-bottom: 10px;
  line-height: 1.6;
  height: 48px;
}

.service-card.card-gradient p {
  color: rgba(255, 255, 255, 0.9);
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
  .home {
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

  .join-title {
    font-size: 2rem;
  }

  .join-actions {
    flex-direction: column;
    align-items: center;
  }

  .container,
  .hero-container {
    padding: 0 20px;
  }
}
</style>
