<template>
  <div class="product-page">
    <!-- Hero Section -->
    <section class="product-hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            <span class="gradient-text">网站开发</span>服务
          </h1>
          <p class="hero-subtitle">
            专业的网站开发解决方案，从企业官网到复杂的Web应用，
            我们为您打造高性能、响应式的现代化网站。
          </p>
          <div class="hero-features">
            <span class="feature-tag">响应式设计</span>
            <span class="feature-tag">SEO优化</span>
            <span class="feature-tag">高性能</span>
            <span class="feature-tag">安全可靠</span>
          </div>
          <button class="btn-gradient">立即咨询</button>
        </div>
        <div class="hero-visual">
          <div class="mockup-browser">
            <div class="browser-header">
              <div class="browser-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div class="browser-url">www.example.com</div>
            </div>
            <div class="browser-content">
              <div class="content-header"></div>
              <div class="content-body">
                <div class="content-sidebar"></div>
                <div class="content-main">
                  <div class="content-card"></div>
                  <div class="content-card"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Scrolling Text -->
    <MarqueeSection
      :text-list="['RoundStudio', '网站开发', '企业官网', '电商平台', '响应式设计', 'SEO优化', 'CMS系统', '高性能网站']"
    />

    <!-- Services Section -->
    <section class="services-section">
      <h2 class="section-title gradient-text-secondary">我们的网站开发服务</h2>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
            </svg>
          </div>
          <h3>企业官网</h3>
          <p>专业的企业形象展示网站，提升品牌价值和客户信任度</p>
          <ul>
            <li>品牌形象设计</li>
            <li>产品展示系统</li>
            <li>新闻发布系统</li>
            <li>联系表单</li>
          </ul>
        </div>

        <div class="service-card">
          <div class="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z"/>
            </svg>
          </div>
          <h3>电商平台</h3>
          <p>功能完整的在线商城，支持多种支付方式和订单管理</p>
          <ul>
            <li>商品管理系统</li>
            <li>购物车功能</li>
            <li>支付集成</li>
            <li>订单跟踪</li>
          </ul>
        </div>

        <div class="service-card">
          <div class="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </div>
          <h3>内容管理系统</h3>
          <p>易于使用的CMS系统，让您轻松管理网站内容</p>
          <ul>
            <li>可视化编辑器</li>
            <li>多媒体管理</li>
            <li>用户权限管理</li>
            <li>SEO工具</li>
          </ul>
        </div>

        <div class="service-card">
          <div class="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h3>高性能优化</h3>
          <p>专业的网站性能优化，提升用户体验和搜索排名</p>
          <ul>
            <li>页面加载优化</li>
            <li>图片压缩</li>
            <li>CDN配置</li>
            <li>缓存策略</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Case Study -->
    <section class="case-study">
      <div class="case-content">
        <div class="case-text">
          <h2 class="section-title gradient-text-accent">案例展示</h2>
          <h3 class="case-title">某科技公司企业官网</h3>
          <p class="case-description">
            为一家创新科技公司设计开发的企业官网，采用现代化的设计风格，
            完美展示了公司的技术实力和创新能力。网站具有响应式设计，
            在各种设备上都能提供优秀的用户体验。
          </p>
          
          <div class="case-features">
            <div class="feature-item">
              <h4>技术栈</h4>
              <p>Vue.js, Node.js, MongoDB</p>
            </div>
            <div class="feature-item">
              <h4>开发周期</h4>
              <p>4周</p>
            </div>
            <div class="feature-item">
              <h4>性能提升</h4>
              <p>页面加载速度提升60%</p>
            </div>
          </div>
          
          <button class="btn-outline">查看详情</button>
        </div>
        
        <div class="case-visual">
          <div class="case-mockup">
            <div class="mockup-desktop">
              <div class="desktop-screen">
                <div class="screen-header"></div>
                <div class="screen-content">
                  <div class="content-hero"></div>
                  <div class="content-sections">
                    <div class="section-block"></div>
                    <div class="section-block"></div>
                    <div class="section-block"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mockup-mobile">
              <div class="mobile-screen">
                <div class="mobile-header"></div>
                <div class="mobile-content">
                  <div class="mobile-hero"></div>
                  <div class="mobile-sections">
                    <div class="mobile-block"></div>
                    <div class="mobile-block"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="process-section">
      <h2 class="section-title gradient-text">开发流程</h2>
      <div class="process-steps">
        <div class="step-item">
          <div class="step-number">01</div>
          <h3>需求分析</h3>
          <p>深入了解客户需求，制定详细的项目方案</p>
        </div>
        <div class="step-item">
          <div class="step-number">02</div>
          <h3>设计阶段</h3>
          <p>创建原型设计和视觉设计，确保用户体验</p>
        </div>
        <div class="step-item">
          <div class="step-number">03</div>
          <h3>开发实现</h3>
          <p>使用最新技术栈进行开发，确保代码质量</p>
        </div>
        <div class="step-item">
          <div class="step-number">04</div>
          <h3>测试上线</h3>
          <p>全面测试后部署上线，提供持续维护</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2 class="cta-title">准备开始您的网站项目？</h2>
        <p class="cta-subtitle">联系我们，获取专业的网站开发解决方案</p>
        <div class="cta-actions">
          <button class="btn-gradient">立即咨询</button>
          <button class="btn-outline">查看更多案例</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import MarqueeSection from '../components/MarqueeSection.vue'
</script>

<style scoped>
.product-page {
  padding-top: 70px;
}

.product-hero {
  padding: 80px 0;
  background: var(--gradient-primary);
  color: white;
  width: 100%;
}

.hero-content {
  width: 100%;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
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
  margin-bottom: 32px;
}

.hero-features {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 32px;
}

.feature-tag {
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

.mockup-browser {
  background: var(--bg-primary);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-xl);
  transform: perspective(1000px) rotateY(-5deg) rotateX(5deg);
}

.browser-header {
  background: var(--bg-secondary);
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid var(--border-color);
}

.browser-dots {
  display: flex;
  gap: 6px;
}

.browser-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--text-muted);
}

.browser-url {
  background: var(--bg-tertiary);
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.875rem;
  color: var(--text-secondary);
  flex: 1;
}

.browser-content {
  height: 300px;
  padding: 20px;
}

.content-header {
  height: 60px;
  background: var(--gradient-secondary);
  border-radius: 8px;
  margin-bottom: 20px;
}

.content-body {
  display: flex;
  gap: 20px;
  height: 200px;
}

.content-sidebar {
  width: 80px;
  background: var(--bg-tertiary);
  border-radius: 8px;
}

.content-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.content-card {
  height: 90px;
  background: var(--gradient-accent);
  border-radius: 8px;
  opacity: 0.8;
}

.services-section {
  padding: 100px 0;
  width: 100%;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;
}

.services-grid {
  width: 100%;
  padding: 0 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
}

.service-card {
  background: var(--bg-secondary);
  padding: 40px 24px;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  text-align: left;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.service-icon {
  width: 64px;
  height: 64px;
  background: var(--gradient-primary);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 24px;
}

.service-icon svg {
  width: 32px;
  height: 32px;
}

.service-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.service-card p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
}

.service-card ul {
  list-style: none;
}

.service-card li {
  color: var(--text-secondary);
  padding: 6px 0;
  position: relative;
  padding-left: 20px;
}

.service-card li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary-blue);
  font-weight: bold;
}

.case-study {
  padding: 100px 0;
  background: var(--bg-secondary);
  width: 100%;
}

.case-content {
  width: 100%;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.case-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 24px;
}

.case-description {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 32px;
  font-size: 1.125rem;
}

.case-features {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 32px;
}

.feature-item h4 {
  color: var(--text-primary);
  font-weight: 600;
  margin-bottom: 4px;
}

.feature-item p {
  color: var(--text-secondary);
}

.case-mockup {
  position: relative;
}

.mockup-desktop {
  background: var(--gradient-accent);
  padding: 20px;
  border-radius: 16px;
  box-shadow: var(--shadow-xl);
}

.desktop-screen {
  background: var(--bg-primary);
  border-radius: 8px;
  overflow: hidden;
}

.screen-header {
  height: 40px;
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
}

.screen-content {
  padding: 20px;
  height: 200px;
}

.content-hero {
  height: 60px;
  background: var(--gradient-primary);
  border-radius: 8px;
  margin-bottom: 16px;
}

.content-sections {
  display: flex;
  gap: 12px;
  height: 100px;
}

.section-block {
  flex: 1;
  background: var(--bg-tertiary);
  border-radius: 6px;
}

.mockup-mobile {
  position: absolute;
  bottom: -20px;
  right: -20px;
  width: 120px;
  background: var(--gradient-secondary);
  padding: 12px;
  border-radius: 20px;
  box-shadow: var(--shadow-lg);
}

.mobile-screen {
  background: var(--bg-primary);
  border-radius: 12px;
  overflow: hidden;
}

.mobile-header {
  height: 20px;
  background: var(--bg-secondary);
}

.mobile-content {
  padding: 12px;
  height: 160px;
}

.mobile-hero {
  height: 40px;
  background: var(--gradient-primary);
  border-radius: 4px;
  margin-bottom: 8px;
}

.mobile-sections {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.mobile-block {
  height: 30px;
  background: var(--bg-tertiary);
  border-radius: 4px;
}

.process-section {
  padding: 100px 0;
  width: 100%;
}

.process-steps {
  width: 100%;
  padding: 0 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.step-item {
  text-align: center;
  position: relative;
}

.step-number {
  width: 80px;
  height: 80px;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 auto 24px;
}

.step-item h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.step-item p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.cta-section {
  padding: 100px 0;
  background: var(--gradient-secondary);
  color: white;
  text-align: center;
  width: 100%;
}

.cta-content {
  width: 100%;
  padding: 0 40px;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.cta-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  margin-bottom: 32px;
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

@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .case-content {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .mockup-mobile {
    position: static;
    margin-top: 20px;
    width: 150px;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 768px) {
  .product-page {
    padding-top: 60px;
  }

  .hero-content,
  .services-grid,
  .case-content,
  .process-steps,
  .cta-content {
    padding: 0 20px;
  }

  .hero-title {
    font-size: 2.5rem;
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

  .services-grid {
    grid-template-columns: 1fr;
  }

  .process-steps {
    grid-template-columns: 1fr;
  }
}
</style>
