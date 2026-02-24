<template>
  <nav class="navbar" :class="{ 'menu-open': isMobileMenuOpen }">
    <div class="nav-container">
      <router-link to="/" class="logo" @click="closeMobileMenu">
        <img src="../assets/logo.ico" class="logo-icon" alt="Round Studio" />
        <span class="logo-text">Round Studio</span>
      </router-link>

      <div class="nav-links desktop-nav">
        <router-link
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="nav-link"
        >
          {{ item.label }}
        </router-link>
      </div>

      <div class="nav-right">
        <ThemeToggle />
        <button
          @click="toggleMobileMenu"
          class="mobile-menu-btn"
          type="button"
          aria-controls="mobile-nav"
          :aria-expanded="isMobileMenuOpen ? 'true' : 'false'"
          :aria-label="isMobileMenuOpen ? '关闭导航菜单' : '打开导航菜单'"
        >
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

    <transition name="mobile-menu">
      <div v-if="isMobileMenuOpen" id="mobile-nav" class="mobile-nav">
        <div class="mobile-nav-links">
          <router-link
            v-for="item in navItems"
            :key="`mobile-${item.to}`"
            :to="item.to"
            class="mobile-nav-link"
            @click="closeMobileMenu"
          >
            {{ item.mobileLabel || item.label }}
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'

const route = useRoute()
const isMobileMenuOpen = ref(false)

const navItems = [
  { to: '/', label: '首页' },
  { to: '/rmcl', label: 'RMCL' },
  { to: '/bedrockboot', label: 'BedrockBoot', mobileLabel: 'BedrockBoot 启动器' },
  { to: '/about', label: '关于我们' }
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

watch(
  () => route.fullPath,
  () => {
    closeMobileMenu()
  }
)

watch(isMobileMenuOpen, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped>
.navbar {
  --nav-height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.84);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid color-mix(in srgb, var(--border-color) 80%, transparent);
  transition: background 0.25s ease, border-color 0.25s ease;
}

.dark .navbar {
  background: rgba(18, 18, 18, 0.9);
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

.nav-container {
  width: 100%;
  height: var(--nav-height);
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  flex-shrink: 0;
  padding: 6px 10px;
  border-radius: 10px;
  transition: background 0.2s ease;
}

.logo:hover {
  background: color-mix(in srgb, var(--bg-secondary) 70%, transparent);
}

.logo-icon {
  width: 34px;
  height: 34px;
}

.logo-text {
  font-size: 21px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 20px;
  margin-right: auto;
}

.nav-link {
  color: var(--text-primary);
  text-decoration: none;
  padding: 8px 14px;
  border-radius: 9px;
  font-size: 0.96rem;
  font-weight: 500;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
  border: 1px solid transparent;
}

.nav-link:hover {
  background: var(--bg-secondary);
}

.nav-link.router-link-active {
  background: var(--bg-secondary);
  border-color: var(--border-color);
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.mobile-menu-btn {
  display: none;
  width: 40px;
  height: 40px;
  border: 1px solid transparent;
  background: transparent;
  color: var(--text-primary);
  cursor: pointer;
  border-radius: 10px;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.mobile-menu-btn:hover {
  background: var(--bg-secondary);
  border-color: var(--border-color);
}

.menu-icon {
  width: 22px;
  height: 22px;
}

.mobile-nav {
  display: none;
}

@media (max-width: 900px) {
  .navbar {
    --nav-height: 60px;
  }

  .nav-container {
    padding: 0 16px;
  }

  .desktop-nav {
    display: none;
  }

  .mobile-menu-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .logo-text {
    font-size: 18px;
  }

  .logo {
    padding: 4px 8px;
  }

  .logo-icon {
    width: 30px;
    height: 30px;
  }

  .mobile-nav {
    display: block;
    border-top: 1px solid color-mix(in srgb, var(--border-color) 80%, transparent);
    background: color-mix(in srgb, var(--bg-primary) 93%, transparent);
    backdrop-filter: blur(18px);
    padding: 12px 16px 16px;
  }

  .mobile-nav-links {
    display: grid;
    gap: 8px;
  }

  .mobile-nav-link {
    color: var(--text-primary);
    text-decoration: none;
    font-weight: 500;
    padding: 12px 14px;
    border-radius: 10px;
    border: 1px solid transparent;
    background: color-mix(in srgb, var(--bg-secondary) 60%, transparent);
    transition: background 0.2s ease, border-color 0.2s ease;
  }

  .mobile-nav-link.router-link-active,
  .mobile-nav-link:hover {
    background: var(--bg-secondary);
    border-color: var(--border-color);
  }

  .mobile-menu-enter-active,
  .mobile-menu-leave-active {
    transition: all 0.24s ease;
  }

  .mobile-menu-enter-from,
  .mobile-menu-leave-to {
    opacity: 0;
    transform: translateY(-8px);
  }
}

@media (max-width: 420px) {
  .logo-text {
    display: none;
  }
}
</style>
