<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content animate-on-scroll">
          <h1 class="hero-title text-reveal">Welcome To
            <br>
            <span class="gradient-text gradient-text-titletext text-glow">Round Studio</span>
          </h1>
          <p class="hero-subtitle animate-slide-left" style="animation-delay: 0.3s">
            欢迎来到我们的官网！我们是一个由学生组成的团队，专注于 Minecraft 相关项目开发
          </p>
          <div class="hero-actions animate-scale-up" style="animation-delay: 0.6s">
            <a class="btn-outline btn-enhanced" style="color: var(--text-primary)" href="https://github.com/Round-Studio">前往 Github</a>
            <a class="btn-outline btn-enhanced" style="color: var(--text-primary)" href="#join">加入我们</a>
          </div>
        </div>
      </div>
    </section>

    <MarqueeSection
        :text-list="['Round Studio', '项目介绍']"
    />

    <!-- project Section -->
    <section class="project" id="project">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <h2 class="section-title gradient-text-secondary">我们的项目</h2>
          <p class="section-subtitle animate-slide-left text-reveal" style="animation-delay: 0.2s">我们 正在开发 或 已完成 的项目</p>
        </div>
        <div class="project-grid">
          <div class="service-card card-enhanced animate-slide-left" style="animation-delay: 0.1s">
            <h3>RMCL</h3>
            <p>RMCL 是 Round Studio 新开发的一个 Minecraft 启动器。新一代 RMCL 启动器，更快，更帅</p>
            <RouterLink to="/rmcl" class="link-enhanced">Website</RouterLink>
            <a href="https://github.com/Round-Studio/RMCL" class="link-enhanced">Github</a>
            <a href="https://docs.roundstudio.top" class="link-enhanced">Docs</a>
            <a href="https://qm.qq.com/q/cjM8UoD3YA" class="link-enhanced">QQ Group</a>
          </div>
          <div class="service-card card-enhanced animate-scale-up" style="animation-delay: 0.3s">
            <h3>OverrideLauncher.Core</h3>
            <p>全新的一代 Minecraft 启动核心，快速，简单，自由</p>
            <RouterLink to="/olc" class="link-enhanced">Website</RouterLink>
            <a href="https://github.com/Round-Studio/OverrideLauncher.Core" class="link-enhanced">Github</a>
            <a href="https://docs.roundstudio.top" class="link-enhanced">Docs</a>
          </div>
          <div class="service-card card-enhanced animate-slide-right" style="animation-delay: 0.5s">
            <h3>SmartTerminals</h3>
            <p>一个带有翻译功能的 Shell 程序</p>
            <a href="https://github.com/Round-Studio/Round.NET.SmartTerminals" class="link-enhanced">Github</a>
            <a href="https://docs.roundstudio.top" class="link-enhanced">Docs</a>
          </div>
        </div>
      </div>
    </section>

    <MarqueeSection
        :text-list="['Round Studio', '加入我们']"
    />

    <!-- join Section -->
    <section class="join" id="join">
      <div class="container">
        <div class="join-content animate-on-scroll">
          <h2 class="join-title text-reveal">加入我们</h2>
          <p class="join-subtitle animate-slide-left" style="animation-delay: 0.2s">让我们一起创造令人惊艳的数字体验</p>
          <div class="join-actions animate-scale-up" style="animation-delay: 0.4s">
            <router-link to="/join" class="link-animated btn-enhanced" style="width: 320px;">了解更多</router-link>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script setup>
import MarqueeSection from '../components/MarqueeSection.vue'
</script>

<style scoped>
.home {
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

.join {
  padding: 100px 0;
  background: var(--gradient-secondary);
  color: white;
  text-align: center;
  margin-bottom: -80px;
}

.join-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.join-subtitle {
  font-size: 1.25rem;
  margin-bottom: 32px;
  opacity: 0.9;
}

.join-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.join-actions .btn-outline {
  border-color: rgba(255, 255, 255, 0.3);
  color: white;
}

.join-actions .btn-outline:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: white;
}

.project {
  padding: 100px 0;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
}

.service-card {
  padding: 40px;
  border-radius: 20px;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
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
