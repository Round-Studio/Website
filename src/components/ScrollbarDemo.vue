<template>
  <div class="scrollbar-demo">
    <h3>滚动条样式演示</h3>
    
    <div class="demo-grid">
      <!-- 默认滚动条 -->
      <div class="demo-item">
        <h4>默认滚动条</h4>
        <div class="scroll-container default-scrollbar">
          <div class="scroll-content">
            <p v-for="i in 20" :key="i">
              这是第 {{ i }} 行内容，用于演示滚动条效果。滚动条会根据主题自动调整颜色。
            </p>
          </div>
        </div>
      </div>
      
      <!-- 细滚动条 -->
      <div class="demo-item">
        <h4>细滚动条</h4>
        <div class="scroll-container scrollbar-thin">
          <div class="scroll-content">
            <p v-for="i in 20" :key="i">
              这是第 {{ i }} 行内容，使用了更细的滚动条样式。
            </p>
          </div>
        </div>
      </div>
      
      <!-- 粗滚动条 -->
      <div class="demo-item">
        <h4>粗滚动条</h4>
        <div class="scroll-container scrollbar-thick">
          <div class="scroll-content">
            <p v-for="i in 20" :key="i">
              这是第 {{ i }} 行内容，使用了更粗的滚动条样式。
            </p>
          </div>
        </div>
      </div>
      
      <!-- 圆角滚动条 -->
      <div class="demo-item">
        <h4>圆角滚动条</h4>
        <div class="scroll-container scrollbar-rounded">
          <div class="scroll-content">
            <p v-for="i in 20" :key="i">
              这是第 {{ i }} 行内容，使用了圆角滚动条样式。
            </p>
          </div>
        </div>
      </div>
      
      <!-- 渐变滚动条 -->
      <div class="demo-item">
        <h4>渐变滚动条</h4>
        <div class="scroll-container scrollbar-gradient">
          <div class="scroll-content">
            <p v-for="i in 20" :key="i">
              这是第 {{ i }} 行内容，使用了渐变色滚动条样式。
            </p>
          </div>
        </div>
      </div>
      
      <!-- 隐藏滚动条 -->
      <div class="demo-item">
        <h4>隐藏滚动条</h4>
        <div class="scroll-container scrollbar-hidden">
          <div class="scroll-content">
            <p v-for="i in 20" :key="i">
              这是第 {{ i }} 行内容，滚动条被隐藏但仍可滚动。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 无需额外逻辑
</script>

<style scoped>
.scrollbar-demo {
  padding: 40px;
  background: var(--bg-secondary);
  border-radius: 16px;
  margin: 20px 0;
}

.scrollbar-demo h3 {
  color: var(--text-primary);
  margin-bottom: 24px;
  text-align: center;
  font-size: 1.5rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.demo-item {
  background: var(--bg-primary);
  border-radius: 12px;
  padding: 20px;
  border: 1px solid var(--border-color);
}

.demo-item h4 {
  color: var(--text-primary);
  margin-bottom: 16px;
  font-size: 1.1rem;
  font-weight: 600;
}

.scroll-container {
  height: 200px;
  overflow-y: auto;
  background: var(--bg-secondary);
  border-radius: 8px;
  padding: 16px;
  border: 1px solid var(--border-color);
}

.scroll-content p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 12px;
  font-size: 0.9rem;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .scrollbar-demo {
    padding: 20px;
  }
  
  .demo-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  .scroll-container {
    height: 150px;
    padding: 12px;
  }
}
</style>
