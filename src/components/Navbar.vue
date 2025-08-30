﻿<template>
  <nav class="navbar">
    <div class="nav-container">
      <!-- Logo -->
      <router-link to="/" class="logo" style="border-radius: 6px;padding: 8px;height: 48px">
        <img src="../assets/logo.ico" class="logo-icon"/>
        <span class="logo-text gradient-text">Round Studio</span>
      </router-link>

      <!-- Desktop Navigation - 移动到左边 -->
      <div class="nav-links desktop-nav">
        <router-link to="/" class="nav-link">首页</router-link>
        <router-link to="/rmcl" class="nav-link">RMCL</router-link>
        <router-link to="/bedrockboot" class="nav-link">BedrockBoot</router-link>
        <router-link to="/about" class="nav-link">关于我们</router-link>
      </div>

      <!-- Right side - 只保留主题切换和移动菜单按钮 -->
      <div class="nav-right">
        <ThemeToggle />
        <button @click="toggleMobileMenu" class="mobile-menu-btn">
          <svg class="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                :d="isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <transition name="mobile-menu">
      <div v-if="isMobileMenuOpen" class="mobile-nav">
        <div class="mobile-nav-links">
          <router-link to="/" class="mobile-nav-link" @click="closeMobileMenu">首页</router-link>
          <router-link to="/rmcl" class="mobile-nav-link" @click="closeMobileMenu">RMCL 启动器</router-link>
          <router-link to="/about" class="mobile-nav-link" @click="closeMobileMenu">关于我们</router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import ThemeToggle from './ThemeToggle.vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 0px solid var(--border-color);
  transition: all 0.3s ease;
}

.dark .navbar {
  background: rgba(15, 23, 42, 0.8);
}

.nav-container {
  width: 100%;
  padding: 0 40px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* 调整布局结构 */
.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  background: transparent;
  transition: transform 0.3s ease;
  order: 1; /* Logo 在第一位 */
}

.nav-links {
  order: 2; /* 导航链接在第二位 */
  margin-right: auto; /* 将导航链接推到左边 */
  margin-left: 40px; /* 与Logo保持间距 */
}

.nav-right {
  order: 3; /* 右侧内容在第三位 */
  display: flex;
  align-items: center;
  gap: 16px;
}

.logo:hover {
  transform: scale(1.05);
}

.logo-icon {
  width: 40px;
  height: 40px;
}

.logo-text {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-link {
  color: var(--text-primary);
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 8px;
  margin-right: -20px;
  transition: all 0.3s ease;
  position: relative;
  height: 42px;
}

.nav-link:hover {
  color: var(--primary-blue);
  background: var(--bg-secondary);
}

.nav-link.router-link-active {
  color: var(--primary-blue);
  background: var(--bg-secondary);
}

.mobile-menu-btn {
  display: none;
  width: 44px;
  height: 44px;
  border: none;
  background: transparent;
  color: var(--text-primary);
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.mobile-menu-btn:hover {
  background: var(--bg-secondary);
}

.menu-icon {
  width: 24px;
  height: 24px;
}

.mobile-nav {
  background: var(--bg-primary);
  border-top: 1px solid var(--border-color);
  padding: 20px 40px;
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.mobile-nav-link {
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  padding: 12px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.mobile-nav-link:hover,
.mobile-nav-link.router-link-active {
  color: var(--primary-blue);
  background: var(--bg-secondary);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

@media (max-width: 768px) {
  .nav-container {
    padding: 0 20px;
    height: 60px;
  }

  .desktop-nav {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo-text {
    font-size: 20px;
  }

  .logo-icon {
    width: 32px;
    height: 32px;
  }

  /* 移动端调整布局 */
  .nav-links {
    margin-left: 20px;
  }
}
</style>