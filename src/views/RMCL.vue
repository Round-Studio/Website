<template>
  <div class="rmcl">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content animate-fade-in-up">
          <h1 class="hero-title">
            隆重介绍
            <br>
            <span class="gradient-text gradient-text-titletext">Round Minecraft Launcher</span>
          </h1>
          <p class="hero-subtitle">
            你的下一个启动器，不仅仅只是启动器
            <div class="border-capsule">
                ✨ Fluent
            </div>
            <div class="border-capsule">
                😺 Avalonia
            </div>
          </p>
          <div class="hero-actions">
            <RouterLink class="hero-btn hero-btn-solid" to="/download/rmcl">立即下载</RouterLink>
            <a class="hero-btn hero-btn-ghost" href="https://github.com/Round-Studio/RMCL">前往 Github</a>
          </div>
        </div>
      </div>
    </section>

    <MarqueeSection
        :text-list="['Round Studio', 'RMCL']"
    />

    <DocsAlert type="danger" style="margin-top: 30px;">
      目前 RMCL 尚处于不完善状态，仅做初代测试。
    </DocsAlert>
    
    <!-- system Section -->
    <section class="system" id="system">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title gradient-text-secondary">拥有超强兼容性</h2>
          <p class="section-subtitle">使用 <label class="gradient-text-secondary">Avalonia</label> 框架。使得 RMCL 得已在不同平台稳定运行</p>
          <p class="section-subtitle">系统差异性详情参见 <a href="https://docs.roundstudio.top/docs/category/%E7%B3%BB%E7%BB%9F%E5%B7%AE%E5%BC%82%E6%80%A7">RMCL 系统差异性</a></p>
        </div>
        <div class="system-grid">
          <div class="service-card animate-fade-in-up">
            <svg viewBox="0 0 1024 1024" fill="currentColor" width="52" height="64"><path d="M0 147.157333L416 89.6v403.242667H0m467.157333-409.685334L1024 0v486.4H467.157333M0 537.6h416v403.242667L0 883.157333M467.157333 537.6H1024V1024l-550.4-76.842667" fill="" p-id="3263"></path></svg>
            <h3>Windows <label style="font-size: 11px;color: var(--border-color);">8.x~11+</label></h3>
          </div>
          <div class="service-card animate-fade-in-up">
            <svg t="1753515848982" viewBox="0 0 1024 1024"width="64" height="64"><path d="M796.928 652.032c24.576 34.56 52.48 56.832 84.224 66.816-13.824 42.24-35.584 86.016-65.28 131.84-46.08 68.864-91.392 103.424-136.192 103.424-16.64 0-41.472-5.632-74.24-16.896-30.464-11.264-57.088-16.896-79.616-16.896-22.784 0-47.872 5.888-75.264 17.92-28.672 11.264-52.224 16.896-70.656 16.896-53.76 0-106.496-45.568-158.464-136.448-51.968-89.6-77.824-177.92-77.824-264.704 0-80.128 19.712-145.92 59.136-196.864 40.704-51.2 90.88-76.544 150.528-76.544 13.056 0 27.648 1.536 43.776 4.864 16.128 3.328 32.768 9.472 50.176 18.176 18.432 9.984 33.792 17.152 45.568 20.992 12.032 3.84 21.248 5.888 27.648 5.888 7.68 0 19.712-1.792 35.84-5.376 16.128-3.584 32.256-9.984 48.384-19.712 17.408-9.472 32.256-16.64 44.8-21.504 12.544-4.864 25.344-7.168 38.4-7.168 41.728 0 79.36 11.264 112.896 33.792 17.92 11.776 36.096 29.44 54.528 52.48-27.392 23.808-47.36 44.544-59.904 62.464-23.296 33.28-34.816 69.632-34.816 108.8-0.512 43.264 11.776 82.688 36.352 117.76zM616.704 235.776c-20.992 19.712-39.936 32.256-57.344 38.4-5.888 1.792-13.568 3.328-22.784 4.864-9.216 1.536-19.968 2.816-31.744 4.096 0.512-52.224 14.336-97.536 41.216-135.424 26.88-38.144 71.168-64.256 132.608-78.336 1.28 5.888 2.048 9.984 2.56 12.544v9.728c0 21.504-5.12 45.568-15.104 72.192-10.752 25.856-27.136 49.92-49.408 71.936z" fill="currentColor"></path></svg>
            <h3>macOS</h3>
          </div>
          <div class="service-card animate-fade-in-up">
            <svg viewBox="0 0 1024 1024" width="64" height="64" fill="currentColor"><path d="M896 837.12c0 20.48-24.746667 37.546667-82.986667 55.68-46.72 14.72-74.88 78.506667-133.546666 70.186667-45.866667-6.4-44.373333-33.28-72.96-43.733334-26.453333-9.6-157.44-12.16-192 21.76-43.093333 42.666667-134.826667 0.426667-166.613334-7.68-42.88-11.093333-108.8-19.2-117.546666-39.68-9.173333-21.333333 7.68-33.493333 14.293333-61.44 3.626667-15.573333-19.2-50.56-11.306667-68.053333 11.093333-24.32 48.853333-7.893333 67.2-18.346667 17.28-6.4 27.733333-24.106667 25.386667-42.24 7.893333 25.813333 3.626667 41.6-16 52.906667-24.32 13.866667-56.533333-1.706667-62.72 12.8-7.04 16.426667 17.706667 42.453333 12.8 67.2-5.76 29.226667-20.053333 36.053333-13.226667 50.346667 5.333333 11.52 73.813333 20.266667 111.146667 29.013333 30.933333 7.253333 110.506667 44.373333 140.8 3.413333 20.906667-28.586667-13.866667-84.693333-17.066667-90.453333a1027.413333 1027.413333 0 0 0-84.266666-120.746667c-43.306667-45.226667-53.333333-16-60.16-19.2-6.826667-3.2-9.6-43.733333 12.373333-76.586666 16.853333-25.173333 33.28-87.893333 53.973333-126.293334 9.173333-17.066667 81.28-105.813333 81.28-124.16-0.213333-69.76-57.813333-286.72 108.8-292.906666 142.933333-5.333333 157.653333 126.72 157.653334 161.706666-1.92 36.266667 3.2 72.533333 14.933333 106.666667 42.453333 110.293333 92.16 106.453333 131.2 229.12 35.413333 110.933333 10.026667 138.453333-1.706667 138.24-27.733333-0.64-27.733333 58.453333-80 49.28-34.346667-5.973333-34.346667-55.893333-57.173333-48.426667-17.28 5.76-17.706667 45.013333-10.24 69.546667 20.266667 66.133333-30.293333 136.746667 24.106667 160 49.066667 20.906667 78.506667-39.68 125.013333-54.826667 69.12-22.613333 83.84-33.493333 83.626667-46.08-0.213333-16.213333-29.44-17.706667-48-33.28a60.949333 60.949333 0 0 1-23.253334-51.2c0.213333-9.813333 2.773333-19.413333 7.893334-27.946666-0.213333 24.32 8.32 48 24.533333 66.133333 23.68 20.693333 53.76 18.56 53.76 49.28z m-221.226667-189.44c-3.413333-13.866667-2.773333-70.4-7.466666-90.453333-16.426667-68.693333-38.826667-81.92-38.826667-82.346667-11.733333-76.373333-49.706667-90.453333-49.706667-122.666667 0-15.36 6.613333-21.333333 6.613334-41.6 0-12.8-21.12-12.8-35.2-19.413333-9.813333-4.48-19.626667-8.746667-29.653334-13.013333-2.986667-5.973333-4.48-12.586667-4.266666-19.413334 0-2.773333 1.066667-32.64 24.533333-32.64 27.52 0 27.306667 33.066667 27.306667 33.066667 0 11.733333-5.12 13.226667-5.12 20.266667 0 3.84 4.693333 5.973333 8.533333 5.973333 7.466667 0 14.08-8.106667 15.146667-19.626667 2.773333-30.72-8.106667-66.986667-42.453334-69.76-48.213333-4.053333-47.573333 49.706667-44.8 74.24-11.733333-6.613333-25.813333-8.32-38.826666-4.48 0-33.28-6.826667-66.346667-30.506667-64.853333-23.68 1.706667-29.226667 28.8-29.226667 44.16 0 28.586667 11.946667 40.106667 14.72 41.386667 2.986667 1.28 7.466667-1.493333 9.386667-5.12 1.28-2.773333-1.28-4.053333-3.413333-4.053334-3.413333 0-12.373333-10.88-12.373334-23.893333 0-10.24 4.693333-25.386667 20.266667-25.386667 12.373333 0 18.986667 16.853333 19.413333 28.586667 0.213333 4.693333-0.213333 9.386667-1.066666 14.08-8.96 8.96-18.56 17.28-29.013334 24.32-6.613333 3.626667-18.346667 12.16-18.346666 21.333333-0.213333 2.986667 1.493333 5.973333 4.053333 7.253334 10.24 4.48 20.906667 29.013333 47.36 29.013333 36.693333 0 72.533333-10.24 103.68-29.653333 4.266667-6.186667 10.24-8.106667 13.226667-4.266667 4.266667 5.333333-2.346667 12.16-8.533334 13.44-30.933333 13.44-62.72 24.533333-95.36 33.066667-24.96 2.133333-33.706667-7.893333-34.346666-1.706667 10.24 12.8 25.386667 20.48 41.813333 21.12 31.146667-2.133333 59.733333-26.24 80-33.706667 8.106667-2.773333 11.093333-0.426667 11.946667 1.493334 0.853333 1.92 1.706667 7.253333-9.813334 11.52-31.573333 11.733333-73.173333 54.4-92.373333 54.4-27.733333 0-46.293333-53.12-55.253333-51.2-2.133333 0.426667 0 11.52-4.906667 25.386666-4.48 12.16-20.693333 37.973333-26.666667 55.253334-5.333333 13.653333-4.266667 28.8 2.773334 41.6a207.637333 207.637333 0 0 0-55.893334 146.773333c3.413333 46.293333-11.52 38.186667-11.52 38.186667 13.44 26.453333 33.066667 49.066667 57.173334 66.346666 27.946667 22.4 54.186667 46.933333 54.826666 60.8-1.28 8.32-4.693333 16-10.24 22.4 6.186667 9.173333 13.44 17.493333 21.76 24.96 23.253333 18.773333 53.973333 25.6 82.986667 17.92 34.346667-0.64 66.773333-16.426667 88.32-43.306666 8.746667-11.946667 33.706667-31.146667 28.373333-49.066667-7.253333-24.746667-8.106667-91.093333 34.986667-81.493333 0.213333-11.946667 7.04-22.826667 17.706667-28.16 0.213333-0.64-8.106667-2.133333-11.733334-17.066667z" p-id="5367"></path><path d="M500.693333 262.4c-1.28 0-2.986667-1.493333-4.693333-4.693333a8.064 8.064 0 0 0-7.893333-4.48c8.746667-1.493333 13.653333 0.426667 15.146666 5.12 0.64 1.493333 0 3.2-1.493333 3.626666-0.426667 0.426667-0.64 0.426667-1.066667 0.426667z m-38.826666-9.386667c-3.413333 0-6.4 1.92-7.893334 4.906667-4.266667 7.893333-6.826667 4.053333-6.826666 1.92 0.213333-8.746667 13.013333-6.826667 14.72-6.826667z"></path></svg>
            <h3>Linux <label style="font-size: 11px;color: var(--border-color);">发行版</label></h3>
          </div>
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
.rmcl {
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
