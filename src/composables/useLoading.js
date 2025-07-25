import { ref, reactive } from 'vue'

// 全局加载状态
const isLoading = ref(false)
const loadingProgress = ref(0)
const loadingMessage = ref('正在加载...')

// 加载状态管理
const loadingState = reactive({
  isRouteChanging: false,
  isResourceLoading: false
})

// 加载任务队列
const loadingTasks = reactive(new Map())

export function useLoading() {
  // 显示加载屏幕
  const showLoading = (message = '正在加载...') => {
    isLoading.value = true
    loadingMessage.value = message
    loadingProgress.value = 0
  }

  // 隐藏加载
  const hideLoading = () => {
    isLoading.value = false
    loadingProgress.value = 0
  }

  // 更新加载进度
  const updateProgress = (progress, message) => {
    loadingProgress.value = Math.min(100, Math.max(0, progress))
    if (message) {
      loadingMessage.value = message
    }
  }

  // 添加加载任务
  const addLoadingTask = (taskId, weight = 1) => {
    loadingTasks.set(taskId, { completed: false, weight })
    updateOverallProgress()
  }

  // 完成加载任务
  const completeLoadingTask = (taskId) => {
    if (loadingTasks.has(taskId)) {
      loadingTasks.get(taskId).completed = true
      updateOverallProgress()
    }
  }

  // 更新总体进度
  const updateOverallProgress = () => {
    if (loadingTasks.size === 0) return

    let totalWeight = 0
    let completedWeight = 0

    loadingTasks.forEach(task => {
      totalWeight += task.weight
      if (task.completed) {
        completedWeight += task.weight
      }
    })

    const progress = (completedWeight / totalWeight) * 100
    updateProgress(progress)

    // 如果所有任务完成，自动隐藏加载屏幕
    if (progress >= 100) {
      setTimeout(hideLoading, 300)
    }
  }

  // 路由变化时的加载
  const showRouteLoading = () => {
    loadingState.isRouteChanging = true
    showLoading('正在切换页面...')
  }

  const hideRouteLoading = () => {
    loadingState.isRouteChanging = false
    hideLoading()
  }

  // 资源加载
  const showResourceLoading = (message = '正在加载资源...') => {
    loadingState.isResourceLoading = true
    showLoading(message)
  }

  const hideResourceLoading = () => {
    loadingState.isResourceLoading = false
    hideLoading()
  }

  // 模拟初始加载过程（已移除）
  const simulateInitialLoad = () => {
    // 不再需要初始加载
  }

  // 清理加载任务
  const clearLoadingTasks = () => {
    loadingTasks.clear()
    loadingProgress.value = 0
  }

  // 检查是否应该显示加载条
  const shouldShowLoading = () => {
    return isLoading.value || loadingState.isRouteChanging || loadingState.isResourceLoading
  }

  return {
    // 状态
    isLoading,
    loadingProgress,
    loadingMessage,
    loadingState,
    
    // 方法
    showLoading,
    hideLoading,
    updateProgress,
    addLoadingTask,
    completeLoadingTask,
    showRouteLoading,
    hideRouteLoading,
    showResourceLoading,
    hideResourceLoading,
    simulateInitialLoad,
    clearLoadingTasks,
    shouldShowLoading
  }
}
