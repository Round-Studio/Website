import { createRouter, createWebHistory } from 'vue-router'
import { useLoading } from '../composables/useLoading'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import RMCL from '../views/RMCL.vue'
import DownloadRMCL from '../views/download/DownloadRMCL.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: '官方网站' }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { title: '关于我们' }
  },
  {
    path: '/rmcl',
    name: 'RMCL',
    component: RMCL,
    meta: { title: 'RMCL - 新一代 Minecraft 启动器' }
  },
  {
    path: '/download/rmcl',
    name: 'DownloadRMCL',
    component: DownloadRMCL,
    meta: { title: 'RMCL - 新一代 Minecraft 启动器' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: { title: '页面未找到' }
  },
  {
    path : 'tencent1123294867725941868.txt',
    name : 'tx',
    component : '10631208614971004669'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 路由守卫
router.beforeEach((to, from, next) => {
  const { showRouteLoading } = useLoading()

  // 如果不是初始加载，显示路由切换加载
  if (from.name) {
    showRouteLoading()
  }

  // 更新页面标题
  if (to.meta.title) {
    document.title = "Round Studio | " + to.meta.title
  }

  next()
})

router.afterEach((to, from) => {
  const { hideRouteLoading } = useLoading()

  // 隐藏路由切换加载（快速显示加载效果）
  setTimeout(() => {
    hideRouteLoading()
  }, 150)
})

export default router
