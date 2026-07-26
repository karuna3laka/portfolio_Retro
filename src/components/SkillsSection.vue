<template>
  <section id="skills" class="skills-section">
    <div class="container">
      <div class="section-header">
        <div class="eyebrow">
          <span class="dev-shortcut"><span class="bracket">[</span><span class="char">S</span><span class="bracket">]</span></span>
          <span>TECH MATRIX</span>
        </div>
        <h2>Technologies & competency levels.</h2>
        <p>A breakdown of frontend frameworks, UI design systems, and build pipeline tooling I work with daily.</p>
      </div>

      <!-- Tab Buttons (Notion Dev Style Tab Plates) -->
      <div class="skills-tabs-row">
        <button 
          v-for="(cat, idx) in skills" 
          :key="idx" 
          class="skill-tab-btn" 
          :class="{ 'active': activeTab === idx }"
          @click="activeTab = idx"
        >
          <span class="tab-icon">{{ cat.icon }}</span>
          <span class="tab-label">{{ cat.category }}</span>
        </button>
      </div>

      <!-- Active Skill Category Panel -->
      <div class="bento-card active-skill-panel">
        <div class="panel-header">
          <div>
            <div class="card-badge">{{ skills[activeTab].category }}</div>
            <p class="panel-desc">{{ skills[activeTab].description }}</p>
          </div>
          <span class="dev-shortcut"><span class="bracket">[</span><span class="char">{{ skills[activeTab].skills.length }} TECHS</span><span class="bracket">]</span></span>
        </div>

        <div class="skills-grid">
          <div v-for="(skill, sIdx) in skills[activeTab].skills" :key="sIdx" class="skill-item-card">
            <div class="skill-info">
              <div class="skill-name-row">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-tag">{{ skill.tag }}</span>
              </div>
              <span class="skill-percentage">{{ skill.level }}%</span>
            </div>
            
            <div class="progress-bar-bg">
              <div 
                class="progress-bar-fill" 
                :style="{ width: skill.level + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { skillsData } from '../data/portfolioData.js';

const skills = skillsData;
const activeTab = ref(0);
</script>

<style scoped>
.skills-section {
  padding: 5rem 0;
}

.skills-tabs-row {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
}

.skill-tab-btn {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  padding: 0.85rem 1.5rem;
  border-radius: var(--radius-md);
  font-size: 0.95rem;
  font-weight: 600;
  transition: all var(--transition-fast);
  white-space: nowrap;
}

.skill-tab-btn:hover {
  background: var(--bg-surface-hover);
  border-color: var(--border-medium);
  color: #ffffff;
}

.skill-tab-btn.active {
  background: #151928;
  border-color: var(--accent-cyan);
  color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 229, 255, 0.15);
}

.active-skill-panel {
  padding: 2.25rem;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--border-subtle);
  padding-bottom: 1.25rem;
}

.panel-desc {
  color: var(--text-secondary);
  font-size: 1.05rem;
  margin-top: 0.3rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.75rem;
}

.skill-item-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-subtle);
  padding: 1.25rem;
  border-radius: var(--radius-md);
  transition: border-color var(--transition-fast);
}

.skill-item-card:hover {
  border-color: var(--border-medium);
}

.skill-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.skill-name-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.skill-name {
  font-weight: 600;
  color: #ffffff;
  font-size: 0.95rem;
}

.skill-tag {
  font-size: 0.7rem;
  font-family: var(--font-mono);
  color: var(--accent-cyan);
  background: rgba(0, 229, 255, 0.1);
  padding: 0.1rem 0.5rem;
  border-radius: 4px;
}

.skill-percentage {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--text-muted);
}

.progress-bar-bg {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 3px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent-cyan), var(--accent-purple));
  border-radius: 3px;
  transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
