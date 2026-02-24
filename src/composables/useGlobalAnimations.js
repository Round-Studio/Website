import { ref, onMounted, onUnmounted, nextTick } from 'vue'

export function useGlobalAnimations() {
  const isLoading = ref(true)
  const scrollProgress = ref(0)
  const mousePosition = ref({ x: 0, y: 0 })
  
  let animationFrame = null
  let scrollObserver = null

  // 初始化全局背景粒子
  const initBackgroundParticles = () => {
    const container = document.querySelector('.global-particles')
    if (!container) return

    // 清除现有粒子
    container.innerHTML = ''

    // 创建更少的粒子，保持轻量动效
    for (let i = 0; i < 16; i++) {
      const particle = document.createElement('div')
      particle.className = 'global-particle'
      
      // 随机属性
      const size = Math.random() * 3 + 2
      const left = Math.random() * 100
      const delay = Math.random() * 12
      const duration = 24 + Math.random() * 10
      const opacity = 0.04 + Math.random() * 0.05
      
      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${left}%;
        animation-delay: ${delay}s;
        animation-duration: ${duration}s;
        opacity: ${opacity};
      `
      
      container.appendChild(particle)
    }
  }

  // 初始化滚动动画观察器
  const initScrollAnimations = () => {
    scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            // 为文字添加逐字符动画
            if (entry.target.classList.contains('text-reveal')) {
              animateTextReveal(entry.target)
            }
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -20px 0px'
      }
    )

    // 观察所有动画元素
    const animateElements = document.querySelectorAll(
      '.animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-scale-up, .animate-rotate-in, .text-reveal'
    )
    
    animateElements.forEach((el) => {
      scrollObserver.observe(el)
    })
  }

  // 文字逐字符显示动画
  const animateTextReveal = (element) => {
    const text = element.textContent
    element.innerHTML = ''
    
    text.split('').forEach((char, index) => {
      const span = document.createElement('span')
      span.className = 'char'
      span.textContent = char === ' ' ? '\u00A0' : char
      span.style.animationDelay = `${index * 0.05}s`
      element.appendChild(span)
    })
  }

  // 更新滚动进度
  const updateScrollProgress = () => {
    const scrollTop = window.pageYOffset
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = (scrollTop / docHeight) * 100
    scrollProgress.value = Math.min(progress, 100)
    
    // 更新滚动指示器
    const progressBar = document.querySelector('.scroll-progress')
    if (progressBar) {
      progressBar.style.width = `${scrollProgress.value}%`
    }
  }

  // 添加增强的交互效果
  const enhanceInteractiveElements = () => {
    // 为所有卡片添加增强效果
    const cards = document.querySelectorAll('.card, .service-card, .person-card, .project-card')
    cards.forEach(card => {
      if (!card.classList.contains('card-enhanced')) {
        card.classList.add('card-enhanced')
      }
    })

      // 为所有按钮和链接添加增强效果
      const buttons = document.querySelectorAll('button, .btn-outline, .btn-gradient')
    buttons.forEach(btn => {
      if (!btn.classList.contains('btn-enhanced')) {
        btn.classList.add('btn-enhanced')
      }
    })
  }

  // 页面加载完成
  const finishLoading = () => {
    setTimeout(() => {
      isLoading.value = false
      const loadingOverlay = document.querySelector('.loading-overlay')
      if (loadingOverlay) {
        loadingOverlay.classList.add('fade-out')
        setTimeout(() => {
          loadingOverlay.remove()
        }, 500)
      }
    }, 700)
  }

  // 初始化所有动画
  const initAllAnimations = () => {
    nextTick(() => {
      initBackgroundParticles()
      initScrollAnimations()
      enhanceInteractiveElements()
      
      // 滚动事件监听
      window.addEventListener('scroll', updateScrollProgress)
      
      // 页面加载完成
      finishLoading()
    })
  }

  // 清理函数
  const cleanup = () => {
    if (scrollObserver) {
      scrollObserver.disconnect()
    }

    window.removeEventListener('scroll', updateScrollProgress)
    
    if (animationFrame) {
      cancelAnimationFrame(animationFrame)
    }
  }

  // 重新初始化动画（用于路由切换）
  const reinitAnimations = () => {
    setTimeout(() => {
      initScrollAnimations()
      enhanceInteractiveElements()
    }, 100)
  }

  onMounted(() => {
    initAllAnimations()
  })

  onUnmounted(() => {
    cleanup()
  })

  return {
    isLoading,
    scrollProgress,
    mousePosition,
    initAllAnimations,
    reinitAnimations,
    cleanup,
    finishLoading
  }
}
