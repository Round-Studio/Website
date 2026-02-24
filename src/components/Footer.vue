<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <section class="footer-section brand">
          <div class="footer-logo">
            <img src="../assets/logo.ico" class="logo-icon" alt="Round Studio" />
            <span class="logo-text gradient-text">Round Studio</span>
          </div>
          <p class="footer-description">一群专注于 Minecraft 相关产品开发的学生团队。</p>

          <div class="social-links">
            <a href="https://github.com/Round-Studio" class="social-link" title="GitHub" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="https://qm.qq.com/q/HDP0vpxcCS" class="social-link" title="QQ 社区群" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 1024 1024" fill="currentColor" aria-hidden="true">
                <path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z" />
              </svg>
            </a>
            <a href="https://afdian.com/a/yjq666" class="support-link" target="_blank" rel="noreferrer">爱发电支持</a>
          </div>
        </section>

        <section class="footer-section">
          <h3 class="section-title">快速链接</h3>
          <ul class="footer-links">
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/about">关于我们</router-link></li>
          </ul>
        </section>

        <section class="footer-section">
          <h3 class="section-title">产品</h3>
          <ul class="footer-links">
            <li><router-link to="/rmcl">RMCL</router-link></li>
            <li><router-link to="/bedrockboot">BedrockBoot</router-link></li>
            <li><router-link to="/download/bedrockboot">BedrockBoot 下载</router-link></li>
          </ul>
        </section>

        <section class="footer-section">
          <h3 class="section-title">联系方式</h3>
          <div class="contact-info">
            <a class="contact-item" href="https://qm.qq.com/q/yh1Lztq6as" target="_blank" rel="noreferrer">开发交流 & 审核群</a>
            <span class="contact-item">地区: China</span>
          </div>
        </section>
      </div>

      <div class="footer-bottom">
        <p class="copyright">{{ currentYear }} | Round Studio.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: color-mix(in srgb, var(--bg-secondary) 92%, transparent);
  border-top: 1px solid var(--border-color);
  margin-top: 72px;
}

.footer-container {
  width: 100%;
  padding: 52px 40px 22px;
}

.footer-content {
  display: grid;
  grid-template-columns: minmax(240px, 2fr) repeat(3, minmax(160px, 1fr));
  gap: 34px;
  margin-bottom: 28px;
}

.footer-section {
  min-width: 0;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
}

.logo-icon {
  width: 32px;
  height: 32px;
}

.logo-text {
  font-size: 20px;
  font-weight: 700;
}

.footer-description {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 20px;
}

.section-title {
  color: var(--text-primary);
  font-size: 16px;
  font-weight: 650;
  margin-bottom: 14px;
}

.footer-links {
  list-style: none;
  display: grid;
  gap: 10px;
}

.footer-links a,
.contact-item {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-links a:hover,
.contact-item:hover {
  color: var(--text-primary);
}

.social-links {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.social-link {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  background: color-mix(in srgb, var(--bg-tertiary) 70%, transparent);
  color: var(--text-secondary);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}

.social-link:hover {
  background: var(--bg-tertiary);
  border-color: var(--text-secondary);
  color: var(--text-primary);
}

.social-link svg {
  width: 18px;
  height: 18px;
}

.support-link {
  height: 38px;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  padding: 0 12px;
  display: inline-flex;
  align-items: center;
  color: var(--text-primary);
  text-decoration: none;
  background: color-mix(in srgb, var(--bg-tertiary) 70%, transparent);
}

.contact-info {
  display: grid;
  gap: 10px;
}

.footer-bottom {
  border-top: 1px solid var(--border-color);
  padding-top: 18px;
}

.copyright {
  color: var(--text-muted);
  font-size: 14px;
}

@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .footer {
    margin-top: 56px;
  }

  .footer-container {
    padding: 38px 20px 16px;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 26px;
    margin-bottom: 20px;
  }

  .section-title {
    margin-bottom: 10px;
  }

  .footer-links {
    gap: 8px;
  }

  .footer-bottom {
    padding-top: 14px;
  }
}
</style>
