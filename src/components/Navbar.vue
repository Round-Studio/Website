<template>
  <nav class="navbar">
    <div class="nav-container">
      <!-- Logo -->
      <router-link to="/" class="logo">
        <img src="../assets/logo.ico" class="logo-icon"/>
        <span class="logo-text gradient-text">Round Studio</span>
      </router-link>

      <!-- Desktop Navigation -->
      <div class="nav-links desktop-nav">
        <router-link to="/" class="nav-link">首页</router-link>
        <router-link to="/rmcl" class="nav-link">RMCL</router-link>
        <router-link to="/about" class="nav-link">关于我们</router-link>
      </div>

      <!-- Right side -->
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
const isProductsDropdownOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const toggleProductsDropdown = () => {
  isProductsDropdownOpen.value = !isProductsDropdownOpen.value
}

const closeProductsDropdown = () => {
  isProductsDropdownOpen.value = false
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

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  background: transparent;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.logo-icon {
  width: 40px;
  height: 40px;
}

.logo-svg {
  width: 100%;
  height: 100%;
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

.nav-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
}

.dropdown-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}

.dropdown-icon.rotated {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  box-shadow: var(--shadow-lg);
  padding: 8px 0;
  z-index: 1000;
  margin-top: 8px;
}

.dropdown-item {
  display: block;
  padding: 12px 20px;
  color: var(--text-primary);
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;
}

.dropdown-item:hover {
  background: var(--bg-secondary);
  color: var(--primary-blue);
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
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

.mobile-products {
  margin: 8px 0;
}

.mobile-products-title {
  color: var(--text-primary);
  font-weight: 600;
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 8px;
}

.mobile-nav-link.product-link {
  padding-left: 32px;
  font-size: 14px;
  color: var(--text-secondary);
}

.mobile-nav-link.product-link:hover {
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
}
</style>
