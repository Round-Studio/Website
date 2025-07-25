<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content animate-fade-in-up">
          <h1 class="hero-title">
            Welcome To
            <br>
            <span class="gradient-text gradient-text-titletext">Round Studio</span>
          </h1>
          <p class="hero-subtitle">
            欢迎来到我们的官网！我们是一个由学生组成的团队，专注于 Minecraft 相关项目开发
          </p>
          <div class="hero-actions">
            <a class="btn-outline" style="color: var(--text-primary)" href="https://github.com/Round-Studio">前往 Github</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Scrolling Text -->
    <MarqueeSection
      :text-list="['Round Studio', '项目介绍']"
    />

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title"><span class="gradient-text section-title">活跃</span>的项目</h2>
          <p class="section-subtitle">我们正在开发的项目或已完成的项目</p>
        </div>

        <!-- 项目轮播 -->
        <ProjectCarousel />
      </div>
    </section>
    
    <!-- Scrolling Text -->
    <MarqueeSection
        :text-list="['Round Studio', '项目介绍']"
    />

    <!-- Services Section -->
    <section class="services">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title gradient-text-secondary">我们的服务</h2>
          <p class="section-subtitle">从设计到开发，提供一站式解决方案</p>
        </div>
        <div class="services-grid">
          <div class="service-card animate-fade-in-left">
            <h3>网站开发</h3>
            <p>响应式网站设计与开发，为您的品牌打造专业的线上形象</p>
            <ul>
              <li>响应式设计</li>
              <li>SEO 优化</li>
              <li>性能优化</li>
              <li>内容管理系统</li>
            </ul>
          </div>
          <div class="service-card animate-fade-in-up">
            <h3>移动应用</h3>
            <p>iOS 和 Android 原生应用开发，提供流畅的移动端体验</p>
            <ul>
              <li>原生应用开发</li>
              <li>跨平台解决方案</li>
              <li>用户体验设计</li>
              <li>应用商店发布</li>
            </ul>
          </div>
          <div class="service-card animate-fade-in-right">
            <h3>品牌设计</h3>
            <p>完整的品牌视觉识别系统，塑造独特的品牌形象</p>
            <ul>
              <li>Logo 设计</li>
              <li>品牌指南</li>
              <li>视觉识别系统</li>
              <li>营销物料设计</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">准备开始您的项目了吗？</h2>
          <p class="cta-subtitle">让我们一起创造令人惊艳的数字体验</p>
          <div class="cta-actions">
            <router-link to="/about" class="link-animated">了解更多</router-link>
            <a href="mailto:hello@roundstudio.com" class="link-animated">立即咨询</a>
          </div>

          <div class="link-group" style="margin-top: 24px; justify-content: center;">
            <a href="/web-development" class="link-animated">网站开发</a>
            <a href="/mobile-app" class="link-animated">移动应用</a>
            <a href="/brand-design" class="link-animated">品牌设计</a>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script setup>
import MarqueeSection from '../components/MarqueeSection.vue'
import ProjectCarousel from '../components/ProjectCarousel.vue'
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

.features {
  padding: 100px 0;
}

.features .container {
  width: 100%;
  padding: 0 40px;
}

.feature-card {
  text-align: center;
  padding: 40px 24px;
  border-radius: 16px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.feature-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 24px;
  background: var(--gradient-primary);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.feature-icon svg {
  width: 32px;
  height: 32px;
}

.feature-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--text-primary);
}

.feature-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.cta {
  padding: 100px 0;
  background: var(--gradient-secondary);
  color: white;
  text-align: center;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.cta-subtitle {
  font-size: 1.25rem;
  margin-bottom: 32px;
  opacity: 0.9;
}

.cta-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.cta-actions .btn-outline {
  border-color: rgba(255, 255, 255, 0.3);
  color: white;
}

.cta-actions .btn-outline:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: white;
}

.services {
  padding: 100px 0;
  background: var(--bg-secondary);
}

.services-grid {
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
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--text-primary);
}

.service-card.card-gradient h3 {
  color: white;
}

.service-card p {
  color: var(--text-secondary);
  margin-bottom: 24px;
  line-height: 1.6;
}

.service-card.card-gradient p {
  color: rgba(255, 255, 255, 0.9);
}

.service-card ul {
  list-style: none;
}

.service-card li {
  padding: 8px 0;
  color: var(--text-secondary);
  position: relative;
  padding-left: 20px;
}

.service-card.card-gradient li {
  color: rgba(255, 255, 255, 0.8);
}

.service-card li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary-blue);
  font-weight: bold;
}

.service-card.card-gradient li::before {
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

  .cta-title {
    font-size: 2rem;
  }

  .cta-actions {
    flex-direction: column;
    align-items: center;
  }

  .container,
  .hero-container {
    padding: 0 20px;
  }
}
</style>
