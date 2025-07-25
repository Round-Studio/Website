<template>
  <div class="product-page">
    <!-- Hero Section -->
    <section class="product-hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            <span class="gradient-text">移动应用</span>开发
          </h1>
          <p class="hero-subtitle">
            专业的iOS和Android应用开发服务，从原生应用到跨平台解决方案，
            为您打造流畅、美观、功能强大的移动应用。
          </p>
          <div class="hero-features">
            <span class="feature-tag">原生开发</span>
            <span class="feature-tag">跨平台</span>
            <span class="feature-tag">用户体验</span>
            <span class="feature-tag">性能优化</span>
          </div>
          <button class="btn-gradient">开始项目</button>
        </div>
        <div class="hero-visual">
          <div class="phone-mockups">
            <div class="phone-mockup ios">
              <div class="phone-screen">
                <div class="status-bar"></div>
                <div class="app-content">
                  <div class="app-header"></div>
                  <div class="app-body">
                    <div class="app-card"></div>
                    <div class="app-card"></div>
                    <div class="app-card"></div>
                  </div>
                  <div class="app-nav"></div>
                </div>
              </div>
            </div>
            <div class="phone-mockup android">
              <div class="phone-screen">
                <div class="status-bar"></div>
                <div class="app-content">
                  <div class="app-header"></div>
                  <div class="app-body">
                    <div class="app-list">
                      <div class="list-item"></div>
                      <div class="list-item"></div>
                      <div class="list-item"></div>
                      <div class="list-item"></div>
                    </div>
                  </div>
                  <div class="app-nav"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Scrolling Text -->
    <MarqueeSection
      :text-list="['RoundStudio', '移动应用', 'iOS开发', 'Android开发', '跨平台开发', '用户体验', '原生应用', '移动优先']"
    />

    <!-- Platforms Section -->
    <section class="platforms-section">
      <h2 class="section-title gradient-text-secondary">支持的平台</h2>
      <div class="platforms-grid">
        <div class="platform-card">
          <div class="platform-icon ios-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
          </div>
          <h3>iOS 开发</h3>
          <p>使用Swift和Objective-C开发原生iOS应用，完美适配iPhone和iPad</p>
          <ul>
            <li>原生性能</li>
            <li>App Store优化</li>
            <li>iOS设计规范</li>
            <li>最新iOS特性</li>
          </ul>
        </div>

        <div class="platform-card">
          <div class="platform-icon android-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1518-.5972.416.416 0 00-.5972.1518l-2.0223 3.5046C15.5902 8.2231 13.8533 7.8098 12.0001 7.8098c-1.8532 0-3.5901.4133-5.2197 1.1334L4.757 5.4386a.4161.4161 0 00-.5972-.1518.416.416 0 00-.1518.5972L6.0026 9.321C3.8915 10.8866 2.5 13.2482 2.5 15.9999h19c0-2.7517-1.3915-5.1133-3.5026-6.6785"/>
            </svg>
          </div>
          <h3>Android 开发</h3>
          <p>使用Kotlin和Java开发Android应用，支持各种Android设备</p>
          <ul>
            <li>Material Design</li>
            <li>Google Play优化</li>
            <li>多设备适配</li>
            <li>Android Jetpack</li>
          </ul>
        </div>

        <div class="platform-card">
          <div class="platform-icon cross-platform-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
            </svg>
          </div>
          <h3>跨平台开发</h3>
          <p>使用React Native和Flutter开发跨平台应用，一套代码多端运行</p>
          <ul>
            <li>代码复用</li>
            <li>快速开发</li>
            <li>统一体验</li>
            <li>成本效益</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- App Types Section -->
    <section class="app-types-section">
      <h2 class="section-title gradient-text">应用类型</h2>
      <div class="types-grid">
        <div class="type-card">
          <div class="type-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z"/>
            </svg>
          </div>
          <h3>电商应用</h3>
          <p>功能完整的移动购物应用，支持商品浏览、购买、支付等功能</p>
        </div>

        <div class="type-card">
          <div class="type-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
          </div>
          <h3>社交应用</h3>
          <p>社交网络和通讯应用，支持聊天、分享、社区等社交功能</p>
        </div>

        <div class="type-card">
          <div class="type-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
          </div>
          <h3>教育应用</h3>
          <p>在线学习和教育应用，支持课程学习、考试、进度跟踪等功能</p>
        </div>

        <div class="type-card">
          <div class="type-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
          </div>
          <h3>企业应用</h3>
          <p>企业内部管理应用，支持办公协作、数据管理、业务流程等</p>
        </div>

        <div class="type-card">
          <div class="type-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </div>
          <h3>健康应用</h3>
          <p>健康和健身应用，支持健康数据跟踪、运动记录、健康建议等</p>
        </div>

        <div class="type-card">
          <div class="type-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3>娱乐应用</h3>
          <p>游戏和娱乐应用，支持多媒体内容、互动游戏、娱乐功能等</p>
        </div>
      </div>
    </section>

    <!-- Case Study -->
    <section class="case-study">
      <div class="case-content">
        <div class="case-text">
          <h2 class="section-title gradient-text-accent">成功案例</h2>
          <h3 class="case-title">智能健身助手App</h3>
          <p class="case-description">
            为健身爱好者打造的智能健身应用，集成了运动计划、健康数据跟踪、
            社交分享等功能。应用采用现代化的设计风格，提供流畅的用户体验，
            已在App Store和Google Play获得4.8分的高评分。
          </p>
          
          <div class="case-stats">
            <div class="stat-item">
              <div class="stat-number">50K+</div>
              <div class="stat-label">下载量</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">4.8</div>
              <div class="stat-label">应用评分</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">85%</div>
              <div class="stat-label">用户留存率</div>
            </div>
          </div>
          
          <div class="case-features">
            <div class="feature-item">
              <h4>技术栈</h4>
              <p>React Native, Node.js, MongoDB</p>
            </div>
            <div class="feature-item">
              <h4>开发周期</h4>
              <p>8周</p>
            </div>
            <div class="feature-item">
              <h4>平台支持</h4>
              <p>iOS, Android</p>
            </div>
          </div>
          
          <button class="btn-outline">查看详情</button>
        </div>
        
        <div class="case-visual">
          <div class="app-showcase">
            <div class="showcase-phone">
              <div class="phone-frame">
                <div class="phone-screen">
                  <div class="app-interface">
                    <div class="interface-header">
                      <div class="header-title"></div>
                      <div class="header-actions"></div>
                    </div>
                    <div class="interface-content">
                      <div class="content-chart"></div>
                      <div class="content-stats">
                        <div class="stat-box"></div>
                        <div class="stat-box"></div>
                        <div class="stat-box"></div>
                      </div>
                      <div class="content-list">
                        <div class="list-row"></div>
                        <div class="list-row"></div>
                        <div class="list-row"></div>
                      </div>
                    </div>
                    <div class="interface-nav">
                      <div class="nav-item active"></div>
                      <div class="nav-item"></div>
                      <div class="nav-item"></div>
                      <div class="nav-item"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2 class="cta-title">准备开发您的移动应用？</h2>
        <p class="cta-subtitle">联系我们，获取专业的移动应用开发解决方案</p>
        <div class="cta-actions">
          <button class="btn-gradient">开始咨询</button>
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
  background: var(--gradient-secondary);
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

.phone-mockups {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.phone-mockup {
  width: 160px;
  height: 320px;
  background: #333;
  border-radius: 25px;
  padding: 8px;
  box-shadow: var(--shadow-xl);
  position: relative;
}

.phone-mockup.ios {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transform: rotate(-5deg);
}

.phone-mockup.android {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  transform: rotate(5deg);
}

.phone-screen {
  width: 100%;
  height: 100%;
  background: var(--bg-primary);
  border-radius: 18px;
  overflow: hidden;
  position: relative;
}

.status-bar {
  height: 24px;
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
}

.app-content {
  height: calc(100% - 24px);
  display: flex;
  flex-direction: column;
}

.app-header {
  height: 50px;
  background: var(--gradient-primary);
  flex-shrink: 0;
}

.app-body {
  flex: 1;
  padding: 12px;
  overflow: hidden;
}

.app-card {
  height: 40px;
  background: var(--bg-tertiary);
  border-radius: 8px;
  margin-bottom: 8px;
}

.app-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.list-item {
  height: 30px;
  background: var(--bg-tertiary);
  border-radius: 6px;
}

.app-nav {
  height: 50px;
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  flex-shrink: 0;
}

.platforms-section {
  padding: 100px 0;
  width: 100%;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;
}

.platforms-grid {
  width: 100%;
  padding: 0 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
}

.platform-card {
  background: var(--bg-secondary);
  padding: 40px 24px;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  text-align: left;
}

.platform-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.platform-icon {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 24px;
}

.ios-icon {
  background: linear-gradient(135deg, #007AFF 0%, #5856D6 100%);
}

.android-icon {
  background: linear-gradient(135deg, #3DDC84 0%, #4285F4 100%);
}

.cross-platform-icon {
  background: var(--gradient-accent);
}

.platform-icon svg {
  width: 32px;
  height: 32px;
}

.platform-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.platform-card p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
}

.platform-card ul {
  list-style: none;
}

.platform-card li {
  color: var(--text-secondary);
  padding: 6px 0;
  position: relative;
  padding-left: 20px;
}

.platform-card li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary-blue);
  font-weight: bold;
}

.app-types-section {
  padding: 100px 0;
  background: var(--bg-secondary);
  width: 100%;
}

.types-grid {
  width: 100%;
  padding: 0 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
}

.type-card {
  background: var(--bg-primary);
  padding: 32px 24px;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  text-align: center;
}

.type-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.type-icon {
  width: 56px;
  height: 56px;
  background: var(--gradient-primary);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 0 auto 20px;
}

.type-icon svg {
  width: 28px;
  height: 28px;
}

.type-card h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.type-card p {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
}

.case-study {
  padding: 100px 0;
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

.case-stats {
  display: flex;
  gap: 32px;
  margin-bottom: 32px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  color: var(--primary-blue);
  margin-bottom: 4px;
}

.stat-label {
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.case-features {
  display: flex;
  flex-direction: column;
  gap: 16px;
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

.app-showcase {
  display: flex;
  justify-content: center;
}

.showcase-phone {
  width: 280px;
  height: 560px;
  background: var(--gradient-accent);
  border-radius: 40px;
  padding: 12px;
  box-shadow: var(--shadow-xl);
  transform: perspective(1000px) rotateY(-10deg) rotateX(5deg);
}

.phone-frame {
  width: 100%;
  height: 100%;
  background: #000;
  border-radius: 28px;
  padding: 4px;
}

.phone-screen {
  width: 100%;
  height: 100%;
  background: var(--bg-primary);
  border-radius: 24px;
  overflow: hidden;
}

.app-interface {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.interface-header {
  height: 60px;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.header-title {
  width: 120px;
  height: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
}

.header-actions {
  width: 40px;
  height: 20px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
}

.interface-content {
  flex: 1;
  padding: 20px;
}

.content-chart {
  height: 120px;
  background: var(--gradient-secondary);
  border-radius: 12px;
  margin-bottom: 20px;
}

.content-stats {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
}

.stat-box {
  flex: 1;
  height: 60px;
  background: var(--bg-tertiary);
  border-radius: 8px;
}

.content-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.list-row {
  height: 40px;
  background: var(--bg-secondary);
  border-radius: 8px;
}

.interface-nav {
  height: 70px;
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
}

.nav-item {
  width: 40px;
  height: 40px;
  background: var(--bg-tertiary);
  border-radius: 20px;
}

.nav-item.active {
  background: var(--gradient-primary);
}

.cta-section {
  padding: 100px 0;
  background: var(--gradient-accent);
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

  .case-stats {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .product-page {
    padding-top: 60px;
  }

  .hero-content,
  .platforms-grid,
  .types-grid,
  .case-content,
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

  .platforms-grid,
  .types-grid {
    grid-template-columns: 1fr;
  }

  .phone-mockups {
    gap: 10px;
  }

  .phone-mockup {
    width: 120px;
    height: 240px;
  }

  .showcase-phone {
    width: 220px;
    height: 440px;
  }

  .case-stats {
    flex-direction: column;
    gap: 16px;
  }
}
</style>
