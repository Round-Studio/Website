<template>
  <div class="product-page">
    <!-- Hero Section -->
    <section class="product-hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            <span class="gradient-text">品牌设计</span>服务
          </h1>
          <p class="hero-subtitle">
            专业的品牌视觉识别系统设计，从Logo到完整的品牌指南，
            为您的品牌打造独特而有影响力的视觉形象。
          </p>
          <div class="hero-features">
            <span class="feature-tag">Logo设计</span>
            <span class="feature-tag">VI系统</span>
            <span class="feature-tag">品牌指南</span>
            <span class="feature-tag">视觉识别</span>
          </div>
          <button class="btn-gradient">开始设计</button>
        </div>
        <div class="hero-visual">
          <div class="design-showcase">
            <div class="showcase-item logo-showcase">
              <div class="logo-circle">
                <div class="logo-symbol"></div>
              </div>
            </div>
            <div class="showcase-item color-palette">
              <div class="color-swatch color-1"></div>
              <div class="color-swatch color-2"></div>
              <div class="color-swatch color-3"></div>
              <div class="color-swatch color-4"></div>
            </div>
            <div class="showcase-item typography">
              <div class="type-sample large"></div>
              <div class="type-sample medium"></div>
              <div class="type-sample small"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Scrolling Text -->
    <MarqueeSection
      :text-list="['RoundStudio', '品牌设计', 'Logo设计', 'VI系统', '视觉识别', '营销物料', '品牌策略', '视觉传达']"
    />

    <!-- Services Section -->
    <section class="services-section">
      <h2 class="section-title gradient-text-secondary">品牌设计服务</h2>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3V1m0 18v2m8-10a4 4 0 00-4-4H9m8 4a4 4 0 014 4v4a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4z"/>
            </svg>
          </div>
          <h3>Logo设计</h3>
          <p>独特而富有创意的Logo设计，完美体现品牌核心价值</p>
          <ul>
            <li>概念开发</li>
            <li>多版本设计</li>
            <li>矢量格式</li>
            <li>使用指南</li>
          </ul>
        </div>

        <div class="service-card">
          <div class="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
            </svg>
          </div>
          <h3>视觉识别系统</h3>
          <p>完整的VI系统设计，确保品牌形象的一致性和专业性</p>
          <ul>
            <li>色彩系统</li>
            <li>字体规范</li>
            <li>图形元素</li>
            <li>应用规范</li>
          </ul>
        </div>

        <div class="service-card">
          <div class="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
            </svg>
          </div>
          <h3>营销物料设计</h3>
          <p>各类营销物料和宣传品设计，提升品牌传播效果</p>
          <ul>
            <li>名片设计</li>
            <li>宣传册</li>
            <li>海报设计</li>
            <li>包装设计</li>
          </ul>
        </div>

        <div class="service-card">
          <div class="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364-.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>
          </div>
          <h3>品牌策略</h3>
          <p>深入的品牌策略分析，为设计提供坚实的理论基础</p>
          <ul>
            <li>市场分析</li>
            <li>竞品研究</li>
            <li>定位策略</li>
            <li>传播策略</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section class="portfolio-section">
      <h2 class="section-title gradient-text">设计作品</h2>
      <div class="portfolio-grid">
        <div class="portfolio-item">
          <div class="portfolio-image tech-brand">
            <div class="brand-logo">
              <div class="logo-shape"></div>
            </div>
          </div>
          <div class="portfolio-info">
            <h3>科技公司品牌</h3>
            <p>现代简约风格的科技品牌设计</p>
          </div>
        </div>

        <div class="portfolio-item">
          <div class="portfolio-image food-brand">
            <div class="brand-logo">
              <div class="logo-shape"></div>
            </div>
          </div>
          <div class="portfolio-info">
            <h3>餐饮品牌</h3>
            <p>温馨亲和的餐饮品牌视觉设计</p>
          </div>
        </div>

        <div class="portfolio-item">
          <div class="portfolio-image fashion-brand">
            <div class="brand-logo">
              <div class="logo-shape"></div>
            </div>
          </div>
          <div class="portfolio-info">
            <h3>时尚品牌</h3>
            <p>优雅时尚的品牌形象设计</p>
          </div>
        </div>

        <div class="portfolio-item">
          <div class="portfolio-image education-brand">
            <div class="brand-logo">
              <div class="logo-shape"></div>
            </div>
          </div>
          <div class="portfolio-info">
            <h3>教育品牌</h3>
            <p>专业可信的教育机构品牌设计</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="process-section">
      <h2 class="section-title gradient-text-accent">设计流程</h2>
      <div class="process-steps">
        <div class="step-item">
          <div class="step-number">01</div>
          <h3>品牌调研</h3>
          <p>深入了解品牌背景、目标受众和市场环境</p>
        </div>
        <div class="step-item">
          <div class="step-number">02</div>
          <h3>概念设计</h3>
          <p>基于调研结果，开发多个创意概念方案</p>
        </div>
        <div class="step-item">
          <div class="step-number">03</div>
          <h3>设计执行</h3>
          <p>精细化设计执行，完善每个视觉元素</p>
        </div>
        <div class="step-item">
          <div class="step-number">04</div>
          <h3>系统整合</h3>
          <p>建立完整的品牌视觉系统和使用规范</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2 class="cta-title">准备打造您的品牌形象？</h2>
        <p class="cta-subtitle">联系我们，获取专业的品牌设计解决方案</p>
        <div class="cta-actions">
          <button class="btn-gradient">开始设计</button>
          <button class="btn-outline">查看更多作品</button>
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
  background: var(--gradient-accent);
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

.design-showcase {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.showcase-item {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 20px;
  backdrop-filter: blur(10px);
}

.logo-showcase {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
}

.logo-circle {
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-symbol {
  width: 40px;
  height: 40px;
  background: var(--gradient-primary);
  border-radius: 8px;
}

.color-palette {
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  height: 60px;
}

.color-swatch {
  width: 40px;
  height: 40px;
  border-radius: 8px;
}

.color-1 { background: #3b82f6; }
.color-2 { background: #8b5cf6; }
.color-3 { background: #06b6d4; }
.color-4 { background: #a855f7; }

.typography {
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 80px;
}

.type-sample {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
}

.type-sample.large { height: 24px; }
.type-sample.medium { height: 16px; width: 80%; }
.type-sample.small { height: 12px; width: 60%; }

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
  background: var(--gradient-accent);
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

.portfolio-section {
  padding: 100px 0;
  background: var(--bg-secondary);
  width: 100%;
}

.portfolio-grid {
  width: 100%;
  padding: 0 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
}

.portfolio-item {
  background: var(--bg-primary);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.portfolio-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.portfolio-image {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.tech-brand { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
.food-brand { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
.fashion-brand { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }
.education-brand { background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); }

.brand-logo {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-shape {
  width: 40px;
  height: 40px;
  background: var(--gradient-primary);
  border-radius: 8px;
}

.portfolio-info {
  padding: 24px;
  text-align: center;
}

.portfolio-info h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.portfolio-info p {
  color: var(--text-secondary);
  font-size: 0.95rem;
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
}

.step-number {
  width: 80px;
  height: 80px;
  background: var(--gradient-accent);
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
  background: var(--gradient-primary);
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
}

@media (max-width: 768px) {
  .product-page {
    padding-top: 60px;
  }

  .hero-content,
  .services-grid,
  .portfolio-grid,
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

  .services-grid,
  .portfolio-grid {
    grid-template-columns: 1fr;
  }

  .process-steps {
    grid-template-columns: 1fr;
  }
}
</style>
