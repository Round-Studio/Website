<template>
  <div class="bb">
    <section class="hero">
      <canvas ref="heroShaderCanvas" class="hero-shader" aria-hidden="true"></canvas>
      <div class="hero-container">
        <div class="hero-content animate-fade-in-up">
          <img src="./../assets/img/BedrockBootIcon.png" style="width: 120px; margin-bottom: 20px">
          <h1 class="hero-title">
            欢迎使用
            <br>
            <span class="gradient-text gradient-text-titletext">BedrockBoot</span>
          </h1>
          <p class="hero-subtitle">
            为 Windows 平台打造的 Minecraft Bedrock 启动器
            <br>
            <label class="gradient-text">BedrockBoot v2.x</label> 基于 OnePointUI，支持多版本、多实例并存启动。
            <div class="border-capsule">
              ✨ OnePointUI
            </div>
            <div class="border-capsule">
              🎉 多版本 多实例
            </div>
            <div class="border-capsule">
              🧩 支持 GDK 版本
            </div>
          </p>
          <div class="hero-actions">
            <RouterLink class="hero-btn hero-btn-solid" to="/download/bedrockboot">立即下载</RouterLink>
            <a class="hero-btn hero-btn-ghost" href="https://github.com/Round-Studio/BedrockBoot" target="_blank">前往 GitHub</a>
          </div>
        </div>
      </div>
    </section>

    <MarqueeSection :text-list="['BedrockBoot', 'Minecraft Bedrock', 'Windows']" />

    <DocsAlert type="success" style="margin-top: 30px;">
      BedrockBoot v2.x 已采用 OnePointUI，并在 v2 版本中引入了对 GDK 版本的支持。
    </DocsAlert>

    <section class="section" id="features">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title gradient-text-secondary">核心特性</h2>
          <p class="section-subtitle">优秀的 UI / UX，注重用户体验与交互细节。</p>
        </div>

        <div class="feature-grid">
          <article v-for="item in features" :key="item.title" class="feature-card">
            <h3 class="feature-title">{{ item.title }}</h3>
            <p class="feature-desc">{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section-ecosystem" id="ecosystem">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title gradient-text-secondary">生态与入口</h2>
          <p class="section-subtitle">BedrockBoot 相关页面</p>
        </div>

        <div class="link-grid">
          <a v-for="item in links" :key="item.title" :href="item.href" target="_blank" class="link-card">
            <h3 class="feature-title">{{ item.title }}</h3>
            <p class="feature-desc">{{ item.description }}</p>
          </a>
        </div>
      </div>
    </section>  
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import MarqueeSection from '../components/MarqueeSection.vue'
import DocsAlert from '../components/DocsAlert.vue'

const heroShaderCanvas = ref(null)
const renderScale = 0.72
const shaderSize = 8
const shaderAlpha = 0.88
let rafId = 0
let startTime = 0
let observer = null
let gl = null
let shaderProgram = null
let positionBuffer = null
let frameWidth = 0
let frameHeight = 0
let frameCount = 0
let uniforms = null
let baseColor = [0.08, 0.08, 0.09]
let primaryColor = [0.32, 0.58, 0.98]
let accentColor = [0.18, 0.9, 0.62]

const clamp01 = (value) => Math.min(1, Math.max(0, value))

function parseColor(cssValue, fallback) {
  if (!cssValue) return fallback
  const color = cssValue.trim()
  if (!color) return fallback

  if (color.startsWith('#')) {
    const hex = color.slice(1)
    const validHex = hex.length === 3 || hex.length === 6
    if (!validHex) return fallback
    const expand = (value) => (value.length === 1 ? value + value : value)
    const r = parseInt(expand(hex.slice(0, hex.length === 3 ? 1 : 2)), 16)
    const g = parseInt(expand(hex.slice(hex.length === 3 ? 1 : 2, hex.length === 3 ? 2 : 4)), 16)
    const b = parseInt(expand(hex.slice(hex.length === 3 ? 2 : 4, hex.length === 3 ? 3 : 6)), 16)
    if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b)) return fallback
    return [r / 255, g / 255, b / 255]
  }

  const match = color.match(/rgba?\(([^)]+)\)/i)
  if (!match) return fallback
  const parts = match[1].split(',').map((item) => Number.parseFloat(item.trim()))
  if (parts.length < 3 || parts.some((value) => Number.isNaN(value))) return fallback
  return [clamp01(parts[0] / 255), clamp01(parts[1] / 255), clamp01(parts[2] / 255)]
}

function refreshThemeColors() {
  const rootStyle = getComputedStyle(document.documentElement)
  const isDark = document.documentElement.classList.contains('dark') || document.body.classList.contains('dark')
  baseColor = parseColor(rootStyle.getPropertyValue('--bg-secondary'), baseColor)
  primaryColor = isDark ? [0.45, 0.68, 0.98] : [0.28, 0.54, 0.96]
  accentColor = isDark ? [0.2, 0.84, 0.66] : [0.14, 0.8, 0.55]
}

function createShader(context, type, source) {
  const shader = context.createShader(type)
  if (!shader) return null
  context.shaderSource(shader, source)
  context.compileShader(shader)
  if (!context.getShaderParameter(shader, context.COMPILE_STATUS)) {
    context.deleteShader(shader)
    return null
  }
  return shader
}

function createProgram(context, vertexSource, fragmentSource) {
  const vertexShader = createShader(context, context.VERTEX_SHADER, vertexSource)
  const fragmentShader = createShader(context, context.FRAGMENT_SHADER, fragmentSource)
  if (!vertexShader || !fragmentShader) return null

  const program = context.createProgram()
  if (!program) return null
  context.attachShader(program, vertexShader)
  context.attachShader(program, fragmentShader)
  context.linkProgram(program)

  context.deleteShader(vertexShader)
  context.deleteShader(fragmentShader)
  if (!context.getProgramParameter(program, context.LINK_STATUS)) {
    context.deleteProgram(program)
    return null
  }

  return program
}

function initWebgl() {
  const canvas = heroShaderCanvas.value
  if (!canvas || gl) return

  gl = canvas.getContext('webgl', {
    alpha: true,
    antialias: false,
    desynchronized: true,
    preserveDrawingBuffer: false,
    powerPreference: 'high-performance'
  })
  if (!gl) return

  const vertexSource = `
    attribute vec2 aPosition;
    void main() {
      gl_Position = vec4(aPosition, 0.0, 1.0);
    }
  `

  const fragmentSource = `
    precision highp float;
    uniform vec2 uResolution;
    uniform float uTime;
    uniform vec3 uBase;
    uniform vec3 uPrimary;
    uniform vec3 uAccent;
    uniform float uAlpha;
    uniform float uSize;

    vec3 blendOverlay(vec3 base, vec3 blend) {
      return vec3(
        base.r < 0.5 ? (2.0 * base.r * blend.r) : (1.0 - 2.0 * (1.0 - base.r) * (1.0 - blend.r)),
        base.g < 0.5 ? (2.0 * base.g * blend.g) : (1.0 - 2.0 * (1.0 - base.g) * (1.0 - blend.g)),
        base.b < 0.5 ? (2.0 * base.b * blend.b) : (1.0 - 2.0 * (1.0 - base.b) * (1.0 - blend.b))
      );
    }

    vec2 ran(vec2 uv) {
      uv *= vec2(dot(uv, vec2(127.1, 311.7)), dot(uv, vec2(227.1, 521.7)));
      vec2 r = fract(tan(cos(uv) * 123.6) * 3533.3);
      return 1.0 - r * r;
    }

    vec2 pt(vec2 id) {
      return sin(uTime * 0.5 * (ran(id + 0.5) - 0.5) + ran(id - 20.1) * 8.0) * 0.5;
    }

    void main() {
      vec2 fragCoord = gl_FragCoord.xy;
      vec2 uv = (fragCoord - 0.5 * uResolution.xy) / uResolution.x;
      vec2 off = uTime / vec2(200.0, 120.0);
      uv += off;
      uv *= uSize;

      vec2 gv = fract(uv) - 0.5;
      vec2 id = floor(uv);

      float minDist = 1e9;
      float secondDist = 1e9;
      vec2 vorv = vec2(0.0);

      for (int i = -1; i <= 1; i++) {
        for (int j = -1; j <= 1; j++) {
          vec2 offv = vec2(float(i), float(j));
          vec2 mov = pt(id + offv);
          float dist = length(gv + mov - offv);
          if (dist < minDist) {
            secondDist = minDist;
            minDist = dist;
            vorv = (id + mov + offv) / uSize - off;
          } else if (dist < secondDist) {
            secondDist = dist;
          }
        }
      }

      vec3 col = mix(uPrimary, uAccent, clamp(vorv.x * 2.2 + vorv.y, -1.0, 1.0) * 0.5 + 0.5);
      vec3 comp = blendOverlay(uBase, col);
      float edge = clamp(1.0 - (secondDist - minDist) * 20.0, 0.0, 1.0);
      vec3 edgeCol = mix(vec3(1.0), col, 0.3);
      vec3 outCol = mix(comp, edgeCol, edge * 0.62);
      gl_FragColor = vec4(outCol, uAlpha);
    }
  `

  shaderProgram = createProgram(gl, vertexSource, fragmentSource)
  if (!shaderProgram) return

  const position = gl.getAttribLocation(shaderProgram, 'aPosition')
  uniforms = {
    resolution: gl.getUniformLocation(shaderProgram, 'uResolution'),
    time: gl.getUniformLocation(shaderProgram, 'uTime'),
    base: gl.getUniformLocation(shaderProgram, 'uBase'),
    primary: gl.getUniformLocation(shaderProgram, 'uPrimary'),
    accent: gl.getUniformLocation(shaderProgram, 'uAccent'),
    alpha: gl.getUniformLocation(shaderProgram, 'uAlpha'),
    size: gl.getUniformLocation(shaderProgram, 'uSize')
  }

  positionBuffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
    gl.STATIC_DRAW
  )
  gl.useProgram(shaderProgram)
  gl.enableVertexAttribArray(position)
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)
}

function resizeWebgl() {
  const canvas = heroShaderCanvas.value
  if (!canvas || !gl) return

  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const rect = canvas.getBoundingClientRect()
  const nextWidth = Math.max(320, Math.floor(rect.width * dpr * renderScale))
  const nextHeight = Math.max(200, Math.floor(rect.height * dpr * renderScale))
  if (nextWidth === frameWidth && nextHeight === frameHeight) return

  frameWidth = nextWidth
  frameHeight = nextHeight
  canvas.width = frameWidth
  canvas.height = frameHeight
  gl.viewport(0, 0, frameWidth, frameHeight)
}

function renderHeroShader(ts) {
  if (!gl || !shaderProgram || !uniforms) return
  if (!startTime) startTime = ts

  frameCount += 1
  if (frameCount % 24 === 0) {
    refreshThemeColors()
  }

  const time = (ts - startTime) / 1000
  gl.useProgram(shaderProgram)
  gl.uniform2f(uniforms.resolution, frameWidth, frameHeight)
  gl.uniform1f(uniforms.time, time)
  gl.uniform3f(uniforms.base, baseColor[0], baseColor[1], baseColor[2])
  gl.uniform3f(uniforms.primary, primaryColor[0], primaryColor[1], primaryColor[2])
  gl.uniform3f(uniforms.accent, accentColor[0], accentColor[1], accentColor[2])
  gl.uniform1f(uniforms.alpha, clamp01(shaderAlpha))
  gl.uniform1f(uniforms.size, shaderSize)
  gl.drawArrays(gl.TRIANGLES, 0, 6)

  rafId = window.requestAnimationFrame(renderHeroShader)
}

onMounted(() => {
  refreshThemeColors()
  initWebgl()
  resizeWebgl()
  const canvas = heroShaderCanvas.value
  if (!canvas || !canvas.parentElement || !gl) return

  observer = new ResizeObserver(() => resizeWebgl())
  observer.observe(canvas.parentElement)
  rafId = window.requestAnimationFrame(renderHeroShader)
})

onBeforeUnmount(() => {
  if (rafId) window.cancelAnimationFrame(rafId)
  if (observer) observer.disconnect()
  if (gl && positionBuffer) gl.deleteBuffer(positionBuffer)
  if (gl && shaderProgram) gl.deleteProgram(shaderProgram)
  gl = null
})

const features = [
  {
    title: 'OnePointUI 驱动的 v2 界面',
    description: 'BedrockBoot v2.x 采用 OnePointUI 构建，强调现代化视觉与更统一的交互体验。'
  },
  {
    title: '多版本与多实例并存',
    description: '支持一次管理多个版本、多个实例，满足不同存档和服务器切换场景。'
  },
  {
    title: '引入 GDK 版本支持',
    description: '在 v2 版本中加入对 GDK 版本的支持，增强可用范围和兼容体验。'
  },
  {
    title: '面向 Windows 平台',
    description: '聚焦 Windows 平台的 Minecraft Bedrock 启动、管理与版本组织能力。'
  }
]

const links = [
  {
    title: '产品下载页',
    description: '前往 Round Studio 官方下载入口获取 BedrockBoot 构建。',
    href: '/download/bedrockboot'
  },
  {
    title: 'GitHub Releases',
    description: '查看历史版本与最新发布说明。',
    href: 'https://github.com/Round-Studio/BedrockBoot/releases'
  },
  {
    title: '产品文档',
    description: '查看 BedrockBoot 介绍与使用文档。',
    href: 'https://docs.roundstudio.top/docs/product/bb'
  }
]
</script>

<style scoped>
.bb {
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

.hero-shader {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  filter: saturate(1.22) contrast(1.08);
  filter: blur(20px);
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  opacity: 0.5;
  background:
    radial-gradient(44rem 26rem at 18% 18%, rgba(140, 140, 140, 0.26) 0%, rgba(140, 140, 140, 0) 72%),
    radial-gradient(36rem 22rem at 86% 24%, rgba(96, 96, 96, 0.22) 0%, rgba(96, 96, 96, 0) 74%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.02) 72%);
}

.dark .hero::before {
  background:
    radial-gradient(44rem 26rem at 18% 18%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 72%),
    radial-gradient(36rem 22rem at 86% 24%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 74%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.24) 0%, rgba(0, 0, 0, 0.06) 72%);
}

.hero-container {
  position: relative;
  z-index: 1;
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

.container {
  width: 100%;
  padding: 0 40px;
}

.section {
  padding: 56px 0 86px;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 640px;
  margin: 0 auto;
}

.section-ecosystem {
  background: color-mix(in srgb, var(--bg-secondary) 55%, transparent);
}

.feature-grid,
.link-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 18px;
}

.feature-card,
.link-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  padding: 22px;
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.link-card {
  text-decoration: none;
  display: block;
}

.feature-card:hover,
.link-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-color: var(--text-secondary);
}

.feature-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 10px;
}

.feature-desc {
  font-size: 0.97rem;
  line-height: 1.65;
  color: var(--text-secondary);
  margin-bottom: 6px;
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
  .bb {
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

  .container,
  .hero-container {
    padding: 0 20px;
  }
}
</style>
