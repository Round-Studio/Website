<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="hero-content">
        <h1 class="hero-title">
          关于<span class="gradient-text">Round Studio</span>
        </h1>
        <p class="hero-subtitle">
          我们是一个专注于创新设计与技术开发的团队，以"圆满"为核心理念，
          致力于为客户提供完整的数字化解决方案。
        </p>
      </div>
    </section>

    <!-- Scrolling Text -->
    <MarqueeSection
      :text-list="['Round Studio', '关于我们']"
    />

    <!-- Company Info -->
    <section class="company-info">
      <div class="info-content">
        <div class="info-text">
          <h2 class="section-title gradient-text">我们的故事</h2>
          <p class="info-description">
            Round Studio 成立于2020年，由一群充满激情的设计师和开发者组成。
            我们相信，每一个项目都应该是完美的圆形——没有缺陷，没有遗漏，
            从概念到实现都应该是完整而和谐的。了解更多关于我们的
            <a href="#" class="link-primary">设计理念</a>。
          </p>
          <p class="info-description">
            在过去的几年里，我们已经为50多个客户提供了服务，涵盖了
            <a href="/web-development">网站开发</a>、
            <a href="/mobile-app">移动应用</a>、
            <a href="/brand-design">品牌设计</a>等多个领域。
            我们的团队始终坚持创新、质量和客户满意度的原则。
            查看我们的<a href="https://github.com/roundstudio" class="link-accent">开源项目</a>。
          </p>
          
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-number gradient-text">50+</div>
              <div class="stat-label">成功项目</div>
            </div>
            <div class="stat-card">
              <div class="stat-number gradient-text">30+</div>
              <div class="stat-label">合作客户</div>
            </div>
            <div class="stat-card">
              <div class="stat-number gradient-text">5+</div>
              <div class="stat-label">团队成员</div>
            </div>
            <div class="stat-card">
              <div class="stat-number gradient-text">4</div>
              <div class="stat-label">年经验</div>
            </div>
          </div>
        </div>
        
        <div class="info-visual">
          <div class="visual-card">
            <h3>我们的使命</h3>
            <p>通过创新的设计和技术，帮助客户在数字化时代中脱颖而出</p>
          </div>
          <div class="visual-card">
            <h3>我们的愿景</h3>
            <p>成为最受信赖的数字化解决方案提供商</p>
          </div>
          <div class="visual-card">
            <h3>我们的价值观</h3>
            <p>创新、质量、诚信、合作</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team-section">
      <h2 class="section-title gradient-text-secondary">我们的团队</h2>
      <div class="team-grid">
        <div class="team-member">
          <div class="member-avatar">
            <div class="avatar-placeholder">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
          </div>
          <h3>张三</h3>
          <p class="member-role">创始人 & CEO</p>
          <p class="member-desc">拥有10年互联网行业经验，专注于产品策略和团队管理</p>
          <div class="member-links">
            <a href="https://linkedin.com/in/zhangsan" class="link-with-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <div class="team-member">
          <div class="member-avatar">
            <div class="avatar-placeholder">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
          </div>
          <h3>李四</h3>
          <p class="member-role">技术总监</p>
          <p class="member-desc">全栈开发专家，精通前端和后端技术栈</p>
          <div class="member-links">
            <a href="https://github.com/lisi" class="link-with-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>

        <div class="team-member">
          <div class="member-avatar">
            <div class="avatar-placeholder">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
          </div>
          <h3>王五</h3>
          <p class="member-role">设计总监</p>
          <p class="member-desc">资深UI/UX设计师，擅长品牌视觉和用户体验设计</p>
          <div class="member-links">
            <a href="https://dribbble.com/wangwu" class="link-with-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
              </svg>
              Dribbble
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section">
      <h2 class="section-title gradient-text-accent">联系我们</h2>
      <div class="contact-content">
        <div class="contact-info">
          <div class="contact-item">
            <div class="contact-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <div class="contact-details">
              <h5>邮箱</h5>
              <p><a href="mailto:hello@roundstudio.com">hello@roundstudio.com</a></p>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </div>
            <div class="contact-details">
              <h5>电话</h5>
              <p><a href="tel:+8613800000000">+86 138 0000 0000</a></p>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <div class="contact-details">
              <h5>地址</h5>
              <p>中国，上海市浦东新区</p>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="contact-details">
              <h5>工作时间</h5>
              <p>周一至周五 9:00-18:00</p>
            </div>
          </div>
        </div>
        
        <div class="contact-form">
          <h3>发送消息</h3>
          <form>
            <div class="form-row">
              <div class="form-group">
                <label>姓名</label>
                <input type="text" placeholder="请输入您的姓名" class="form-input">
              </div>
              <div class="form-group">
                <label>邮箱</label>
                <input type="email" placeholder="请输入您的邮箱" class="form-input">
              </div>
            </div>
            <div class="form-group">
              <label>主题</label>
              <input type="text" placeholder="请输入消息主题" class="form-input">
            </div>
            <div class="form-group">
              <label>消息内容</label>
              <textarea placeholder="请输入您的消息内容" class="form-textarea" rows="6"></textarea>
            </div>
            <button type="submit" class="btn-gradient">发送消息</button>
          </form>
        </div>
      </div>
    </section>

    <!-- 滚动条演示 -->
    <section class="demo-section">
      <div class="container">
        <ScrollbarDemo />
      </div>
    </section>
  </div>
</template>

<script setup>
import MarqueeSection from '../components/MarqueeSection.vue'
import ScrollbarDemo from '../components/ScrollbarDemo.vue'
</script>

<style scoped>
.about-page {
  padding-top: 70px;
}

.about-hero {
  padding: 80px 0;
  background: var(--gradient-primary);
  color: white;
  width: 100%;
}

.hero-content {
  width: 100%;
  padding: 0 40px;
  text-align: left;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 24px;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  line-height: 1.6;
  max-width: 800px;
}

.company-info {
  padding: 100px 0;
  width: 100%;
}

.info-content {
  width: 100%;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 80px;
  align-items: start;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 32px;
}

.info-description {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 24px;
  font-size: 1.125rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 48px;
}

.stat-card {
  background: var(--bg-secondary);
  padding: 24px;
  border-radius: 16px;
  text-align: center;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 8px;
}

.stat-label {
  color: var(--text-secondary);
  font-weight: 500;
}

.visual-card {
  background: var(--bg-secondary);
  padding: 32px;
  border-radius: 16px;
  margin-bottom: 24px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.visual-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.visual-card h3 {
  color: var(--text-primary);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 12px;
}

.visual-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.team-section {
  padding: 100px 0;
  background: var(--bg-secondary);
  width: 100%;
}

.team-section .section-title {
  text-align: center;
  margin-bottom: 60px;
}

.team-grid {
  width: 100%;
  padding: 0 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.team-member {
  background: var(--bg-primary);
  padding: 40px 24px;
  border-radius: 20px;
  text-align: center;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.team-member:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.member-avatar {
  width: 100px;
  height: 100px;
  margin: 0 auto 24px;
  border-radius: 50%;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.avatar-placeholder svg {
  width: 50px;
  height: 50px;
}

.team-member h3 {
  color: var(--text-primary);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.member-role {
  color: var(--primary-blue);
  font-weight: 600;
  margin-bottom: 16px;
}

.member-desc {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 16px;
}

.member-links {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.member-links a {
  padding: 8px 12px;
  background: var(--bg-secondary);
  border-radius: 8px;
  font-size: 0.875rem;
  transition: all 0.3s ease;
}

.member-links a:hover {
  background: var(--primary-blue);
  color: white;
  transform: translateY(-2px);
}

.member-links a svg {
  width: 14px;
  height: 14px;
}

.demo-section {
  padding: 80px 0;
  background: var(--bg-primary);
}

.demo-section .container {
  width: 100%;
  padding: 0 40px;
}

.contact-section {
  padding: 100px 0;
  width: 100%;
}

.contact-section .section-title {
  text-align: center;
  margin-bottom: 60px;
}

.contact-content {
  width: 100%;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.contact-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.contact-icon {
  width: 56px;
  height: 56px;
  background: var(--gradient-secondary);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.contact-icon svg {
  width: 28px;
  height: 28px;
}

.contact-details h5 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.contact-details p {
  color: var(--text-secondary);
  font-size: 1rem;
}

.contact-form h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 32px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  margin-bottom: 24px;
}

.form-group label {
  display: block;
  color: var(--text-primary);
  font-weight: 500;
  margin-bottom: 8px;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 14px 16px;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  background: var(--bg-primary);
  color: var(--text-primary);
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--primary-blue);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

@media (max-width: 1024px) {
  .info-content {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .about-page {
    padding-top: 60px;
  }

  .hero-content,
  .info-content,
  .team-grid,
  .contact-content {
    padding: 0 20px;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .team-grid {
    grid-template-columns: 1fr;
  }
}
</style>
