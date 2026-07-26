<template>
  <Teleport to="body">
    <div v-if="project" class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-card dev-terminal">
        <!-- Terminal Bar Header -->
        <div class="dev-terminal-bar">
          <div class="dev-terminal-dots">
            <span class="dev-terminal-dot red" @click="$emit('close')"></span>
            <span class="dev-terminal-dot yellow"></span>
            <span class="dev-terminal-dot green"></span>
          </div>
          <span class="dev-terminal-title">{{ project.id }}.case-study.md</span>
          <button class="modal-close-btn" @click="$emit('close')">✕ ESC</button>
        </div>

        <!-- Modal Scrollable Content -->
        <div class="modal-body">
          <div class="modal-header-banner" :style="{ background: project.bannerColor }">
            <div class="banner-overlay">
              <span class="modal-category">{{ project.category }}</span>
              <h2 class="modal-title">{{ project.title }}</h2>
              <p class="modal-tagline">{{ project.tagline }}</p>
            </div>
          </div>

          <div class="modal-content-grid">
            <!-- Left Info -->
            <div class="main-info">
              <h3 class="section-subtitle">Overview & Architecture</h3>
              <p class="overview-text">{{ project.details.overview }}</p>

              <h3 class="section-subtitle">Key Features</h3>
              <ul class="features-list">
                <li v-for="(feat, fIdx) in project.details.keyFeatures" :key="fIdx">
                  <span class="feat-icon">⚡</span>
                  <span>{{ feat }}</span>
                </li>
              </ul>

              <!-- Code Snippet Box -->
              <h3 class="section-subtitle">Code Highlight</h3>
              <div class="modal-code-box">
                <pre><code>{{ project.codeSnippet }}</code></pre>
              </div>
            </div>

            <!-- Right Meta & Actions -->
            <div class="side-info">
              <div class="meta-box">
                <span class="meta-label">Performance Metric</span>
                <span class="meta-val highlight">{{ project.details.metrics }}</span>
              </div>

              <div class="meta-box">
                <span class="meta-label">Tech Stack</span>
                <div class="stack-tags">
                  <span v-for="(tech, tIdx) in project.techStack" :key="tIdx" class="tech-tag">
                    {{ tech }}
                  </span>
                </div>
              </div>

              <div class="modal-actions">
                <a :href="project.liveUrl" target="_blank" class="btn-primary full-width">
                  <span>Live Preview</span>
                  <span>↗</span>
                </a>
                <a :href="project.githubUrl" target="_blank" class="btn-secondary full-width">
                  <span>GitHub Repository</span>
                  <span>⚙</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

const props = defineProps({
  project: {
    type: Object,
    default: null
  }
});

const emit = defineEmits(['close']);

const handleKeyDown = (e) => {
  if (e.key === 'Escape') {
    emit('close');
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.modal-card {
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
}

.modal-close-btn {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
  transition: color var(--transition-fast);
}

.modal-close-btn:hover {
  color: #ffffff;
}

.modal-body {
  overflow-y: auto;
  padding: 0;
}

.modal-header-banner {
  padding: 2.5rem 2rem;
  position: relative;
}

.banner-overlay {
  position: relative;
  z-index: 1;
}

.modal-category {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.9);
  background: rgba(0, 0, 0, 0.4);
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-sm);
}

.modal-title {
  font-size: 2rem;
  margin: 0.5rem 0;
  color: #ffffff;
}

.modal-tagline {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.05rem;
}

.modal-content-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 2rem;
  padding: 2rem;
  background: #0d0f17;
}

.section-subtitle {
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
  margin-top: 1.5rem;
  color: var(--accent-cyan);
}

.section-subtitle:first-child {
  margin-top: 0;
}

.overview-text {
  color: var(--text-secondary);
  line-height: 1.6;
}

.features-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.features-list li {
  display: flex;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.modal-code-box {
  background: #06070a;
  border: 1px solid var(--border-medium);
  padding: 1rem;
  border-radius: var(--radius-sm);
  font-family: var(--font-mono);
  font-size: 0.825rem;
  color: #34d399;
  overflow-x: auto;
}

.side-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.meta-box {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-subtle);
  padding: 1.25rem;
  border-radius: var(--radius-md);
}

.meta-label {
  display: block;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

.meta-val.highlight {
  color: var(--accent-green);
  font-weight: 600;
  font-size: 0.95rem;
}

.stack-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.modal-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.full-width {
  width: 100%;
}

@media (max-width: 768px) {
  .modal-content-grid {
    grid-template-columns: 1fr;
  }
}
</style>
