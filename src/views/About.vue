<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content animate-fade-in-up">
          <h1 class="hero-title">
            <span class="gradient-text gradient-text-titletext">Round Studio</span>
            <br>
            开发团队介绍
          </h1>
        </div>
      </div>
    </section>

    <MarqueeSection
        :text-list="['Round Studio', '成员介绍']"
    />

    <!-- people Section -->
    <section class="people" id="people">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title gradient-text-secondary">开发组成员</h2>
          <p class="section-subtitle">Round Studio 团队成员</p>
        </div>
        <div class="people-grid">
          <div v-for="member in members" :key="member.id" class="person-card animate-fade-in-up">
            <img :src="member.avatar_url" :alt="member.login" class="member-avatar">
            <h3>{{ member.login }}</h3>
            <p v-if="member.bio">{{ member.bio }}</p>
            <p v-else>Round Studio 开发团队成员</p>
            <div class="member-links">
              <a :href="member.html_url" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MarqueeSection from '../components/MarqueeSection.vue'

const members = ref([])

// 获取 GitHub 组织成员
const fetchMembers = async () => {
  try {
    const response = await fetch('https://api.github.com/orgs/Round-Studio/members')
    if (!response.ok) {
      throw new Error('Failed to fetch members')
    }
    const data = await response.json()
    
    // 获取每个成员的详细信息（包括 bio 等信息）
    const membersWithDetails = await Promise.all(
      data.map(async member => {
        const userResponse = await fetch(member.url)
        if (!userResponse.ok) {
          return member
        }
        const userData = await userResponse.json()
        return {
          ...member,
          bio: userData.bio,
          blog: userData.blog
        }
      })
    )
    
    members.value = membersWithDetails
  } catch (error) {
    console.error('Error fetching GitHub members:', error)
  }
}

onMounted(() => {
  fetchMembers()
})
</script>

<style scoped>
.home {
  padding-top: 70px;
}

.hero {
  min-height: 40vh;
  display: flex;
  align-items: center;
  color: white;
  position: relative;
  overflow: hidden;
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

.member-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 16px;
  object-fit: cover;
  border: 3px solid var(--border-color);
}

.member-links {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.member-links a {
  padding: 6px 12px;
  background-color: var(--bg-secondary);
  border-radius: 6px;
  color: var(--text-primary);
  text-decoration: none;
  transition: all 0.2s ease;
}

.member-links a:hover {
  background-color: var(--bg-tertiary);
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

.join {
  padding: 100px 0;
  background: var(--gradient-secondary);
  color: white;
  text-align: center;
  margin-bottom: -80px;
}

.join-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.join-subtitle {
  font-size: 1.25rem;
  margin-bottom: 32px;
  opacity: 0.9;
}

.join-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.join-actions .btn-outline {
  border-color: rgba(255, 255, 255, 0.3);
  color: white;
}

.join-actions .btn-outline:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: white;
}

.people, .projects {
  padding: 100px 0;
}

.people-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}

.person-card {
  padding: 40px;
  border-radius: 20px;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.person-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.person-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  word-wrap: break-word;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.person-card a {
  margin-right: 8px;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  text-decoration: none;
  color: var(--text-primary);
  background: var(--bg-secondary);
}

.person-card a:hover {
  background: var(--bg-tertiary);
}

.person-card p {
  color: var(--text-secondary);
  margin-bottom: 20px;
  line-height: 1.6;
  flex-grow: 1;
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
  
  .people-grid {
    grid-template-columns: 1fr;
  }
}
</style>