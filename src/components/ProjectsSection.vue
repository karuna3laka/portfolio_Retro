<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <div class="section-header">
        <div class="eyebrow">
          <span class="dev-shortcut"><span class="bracket">[</span><span class="char">P</span><span class="bracket">]</span></span>
          <span>FEATURED WORK</span>
        </div>
        <h2>Production applications & side projects.</h2>
        <p>Explore real-world Vue 3 web applications, design systems, and frontend toolings built for high-scale environments.</p>
      </div>

      <!-- Filter Controls -->
      <div class="filter-controls">
        <button 
          v-for="cat in categories" 
          :key="cat.key" 
          class="filter-btn" 
          :class="{ 'active': activeCategory === cat.key }"
          @click="activeCategory = cat.key"
        >
          <span>{{ cat.label }}</span>
        </button>
      </div>

      <!-- Projects Bento Grid -->
      <div class="projects-grid bento-grid">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id" 
          class="bento-card project-card glowing"
        >
          <!-- Project Banner Header -->
          <div class="project-card-header" :style="{ background: project.bannerColor }">
            <div class="header-overlay">
              <span class="project-cat-badge">{{ project.category }}</span>
              <div class="project-links">
                <a :href="project.githubUrl" target="_blank" title="GitHub Source" class="card-icon-link">⚙</a>
                <a :href="project.liveUrl" target="_blank" title="Live Preview" class="card-icon-link">↗</a>
              </div>
            </div>
          </div>

          <!-- Card Content -->
          <div class="project-card-body">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-tagline">{{ project.tagline }}</p>
            <p class="project-summary">{{ project.summary }}</p>

            <!-- Tech Badges -->
            <div class="project-tech-row">
              <span v-for="(tech, tIdx) in project.techStack" :key="tIdx" class="tech-tag">
                {{ tech }}
              </span>
            </div>

            <!-- Modal Trigger Button -->
            <button class="btn-secondary case-study-btn" @click="selectedProject = project">
              <span>View Case Study</span>
              <span>[DETAILS]</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Case Study Modal -->
    <ProjectModal 
      v-if="selectedProject" 
      :project="selectedProject" 
      @close="selectedProject = null" 
    />
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { projectsData } from '../data/portfolioData.js';
import ProjectModal from './ProjectModal.vue';

const projects = projectsData;
const activeCategory = ref('all');
const selectedProject = ref(null);

const categories = [
  { label: 'All Work', key: 'all' },
  { label: 'Vue.js Apps', key: 'vue' },
  { label: 'UI/UX & Systems', key: 'ui' },
  { label: 'Full Stack', key: 'fullstack' }
];

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') return projects;
  return projects.filter(p => p.categoryKey === activeCategory.value);
});
</script>

<style scoped>
.projects-section {
  padding: 6rem 0;
}

.filter-controls {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.filter-btn {
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  padding: 0.6rem 1.2rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all var(--transition-fast);
}

.filter-btn:hover {
  background: var(--bg-surface-hover);
  color: #ffffff;
}

.filter-btn.active {
  background: rgba(0, 229, 255, 0.1);
  border-color: var(--accent-cyan);
  color: var(--accent-cyan);
  font-weight: 600;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.project-card {
  padding: 0;
  display: flex;
  flex-direction: column;
}

.project-card-header {
  height: 140px;
  padding: 1.25rem;
  position: relative;
}

.header-overlay {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.project-cat-badge {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  color: #ffffff;
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-sm);
}

.project-links {
  display: flex;
  gap: 0.5rem;
}

.card-icon-link {
  width: 32px;
  height: 32px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 0.85rem;
  transition: background var(--transition-fast);
}

.card-icon-link:hover {
  background: #ffffff;
  color: #000000;
}

.project-card-body {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.project-title {
  font-size: 1.35rem;
  margin-bottom: 0.4rem;
}

.project-tagline {
  color: var(--accent-cyan);
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
}

.project-summary {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
  flex: 1;
}

.project-tech-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.5rem;
}

.case-study-btn {
  width: 100%;
  justify-content: space-between;
  padding: 0.65rem 1.25rem;
  font-size: 0.875rem;
}

@media (max-width: 880px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
