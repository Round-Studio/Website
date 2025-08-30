<template>
  <div class="not-found">
    <div class="not-found-container">
      <!-- 404动画 -->
      <div class="error-animation">
        <div class="error-number">
          <span class="digit">4</span>
          <div class="circle-container">
            <div class="circle">
              <div class="circle-inner"></div>
            </div>
          </div>
          <span class="digit">4</span>
        </div>
      </div>
      
      <!-- 错误信息 -->
      <div class="error-content">
        <h1 class="error-title">正在加...诶？</h1>
        <p class="error-description">
          您请求的电波是一个不存在的电波，
          <br>
          导致掉进了宇宙间隙...
        </p>
        
        <!-- 操作按钮 -->
        <div class="error-actions">
          <router-link to="/" class="btn-gradient">返回首页</router-link>
          <button @click="goBack" class="btn-outline">返回上页</button>
        </div>
        
        <!-- 联系信息 -->
        <div class="contact-help">
          <p>如果问题持续存在，请联系我们</p>
          <a href="https://qm.qq.com/q/yh1Lztq6as">开发交流 & 审核群</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  if (window.history.length > 1) {
    router.go(-1)
  } else {
    router.push('/')
  }
}
</script>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 20px 20px;
  position: relative;
  overflow: hidden;
}

.btn-outline{
  color: var(--text-primary);
}

.not-found-container {
  max-width: 800px;
  text-align: center;
  position: relative;
  z-index: 2;
}

.error-animation {
  margin-bottom: 40px;
}

.error-number {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

.digit {
  font-size: 8rem;
  font-weight: 800;
  color: var(--text-primary);
  animation: bounce 2s ease-in-out infinite;
}

.digit:first-child {
  animation-delay: 0s;
}

.digit:last-child {
  animation-delay: 0.2s;
}

.circle-container {
  position: relative;
}

.circle {
  width: 120px;
  height: 120px;
  border: 4px solid var(--primary-blue);
  border-radius: 50%;
  position: relative;
  animation: rotate 3s linear infinite;
}

.circle-inner {
  width: 60px;
  height: 60px;
  background: var(--gradient-primary);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: pulse 2s ease-in-out infinite;
}

.error-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.error-description {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 40px;
}

.suggestions {
  margin-bottom: 40px;
  text-align: left;
}

.suggestions h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 20px;
  text-align: center;
}

.suggestion-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

.suggestion-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.suggestion-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary-blue);
}

.suggestion-icon {
  width: 48px;
  height: 48px;
  background: var(--gradient-primary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.suggestion-icon svg {
  width: 24px;
  height: 24px;
}

.suggestion-text h4 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.suggestion-text p {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin: 0;
}

.error-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 40px;
}

.contact-help {
  padding: 20px;
  background: var(--bg-secondary);
  border-radius: 12px;
  border: 1px solid var(--border-color);
}

.contact-help p {
  color: var(--text-secondary);
  margin-bottom: 8px;
}

.contact-link {
  color: var(--primary-blue);
  font-weight: 600;
  text-decoration: none;
}

.contact-link:hover {
  text-decoration: underline;
}

.background-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.floating-circle {
  position: absolute;
  border-radius: 50%;
  background: var(--gradient-primary);
  opacity: 0.1;
  animation: float 6s ease-in-out infinite;
}

.circle-1 {
  width: 200px;
  height: 200px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.circle-2 {
  width: 150px;
  height: 150px;
  top: 60%;
  right: 10%;
  animation-delay: 2s;
}

.circle-3 {
  width: 100px;
  height: 100px;
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}

/* 动画定义 */
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes pulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); }
  50% { transform: translate(-50%, -50%) scale(1.1); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-20px) rotate(120deg); }
  66% { transform: translateY(10px) rotate(240deg); }
}

/* 响应式调整 */
@media (max-width: 768px) {
  .not-found {
    padding: 60px 16px 16px;
  }
  
  .digit {
    font-size: 4rem;
  }
  
  .circle {
    width: 80px;
    height: 80px;
  }
  
  .circle-inner {
    width: 40px;
    height: 40px;
  }
  
  .error-title {
    font-size: 2rem;
  }
  
  .error-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .suggestion-links {
    grid-template-columns: 1fr;
  }
  
  .suggestion-item {
    padding: 16px;
  }
}
</style>
