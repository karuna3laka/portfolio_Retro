<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="section-header">
        <div class="eyebrow">
          <span class="dev-shortcut"><span class="bracket">[</span><span class="char">A</span><span class="bracket">]</span></span>
          <span>SYSTEM ARCHITECTURE</span>
        </div>
        <h2>Engineering background & philosophy.</h2>
        <p>Building high-speed frontend applications with clean code standards, micro-animations, and scalable Vue 3 reactivity.</p>
      </div>

      <!-- Bento Box Layout -->
      <div class="bento-grid">
        <!-- Card 1: Bio Overview (8 cols) -->
        <div class="bento-card col-8 glowing">
          <div class="card-badge">PROFILE SUMMARY</div>
          <h3 class="card-title">Crafting human-centric interfaces with Vue 3</h3>
          <p class="card-desc">
            {{ profile.bio }}
          </p>
          <div class="tags-row">
            <span class="tech-tag">Vue 3 SFC</span>
            <span class="tech-tag">TypeScript</span>
            <span class="tech-tag">Vite</span>
            <span class="tech-tag">State Synchronization</span>
            <span class="tech-tag">Design Systems</span>
          </div>
        </div>

        <!-- Card 2: Quick Spec / Location (4 cols) -->
        <div class="bento-card col-4">
          <div class="card-badge">LOCATION & SPEC</div>
          <div class="spec-list">
            <div class="spec-item">
              <span class="spec-label">Location:</span>
              <span class="spec-val">{{ profile.location }}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Timezone:</span>
              <span class="spec-val">PST / EST / UTC+0</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Preference:</span>
              <span class="spec-val">Remote / Hybrid</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Availability:</span>
              <span class="spec-val status-green">Full-time / Contract</span>
            </div>
          </div>
        </div>

        <!-- Card 3: Experience Timeline (12 cols) -->
        <div id="experience" class="bento-card col-12">
          <div class="card-header-flex">
            <div>
              <div class="card-badge">CAREER TIMELINE</div>
              <h3 class="card-title">Professional Experience</h3>
            </div>
            <span class="dev-shortcut"><span class="bracket">[</span><span class="char">E</span><span class="bracket">]</span></span>
          </div>

          <div class="timeline-container">
            <div v-for="(exp, idx) in timeline" :key="idx" class="timeline-item">
              <div class="timeline-meta">
                <span class="timeline-period">{{ exp.period }}</span>
                <span class="timeline-location">{{ exp.location }}</span>
              </div>
              <div class="timeline-content">
                <div class="role-header">
                  <h4 class="role-title">{{ exp.role }}</h4>
                  <span class="company-name">@ {{ exp.company }}</span>
                </div>
                <p class="role-desc">{{ exp.description }}</p>
                <ul class="role-highlights">
                  <li v-for="(hl, hIdx) in exp.highlights" :key="hIdx">
                    <span class="bullet">⚡</span>
                    <span>{{ hl }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { developerProfile, experienceTimeline } from '../data/portfolioData.js';

const profile = developerProfile;
const timeline = experienceTimeline;
</script>

<style scoped>
.about-section {
  padding: 6rem 0;
}

.col-8 { grid-column: span 8; }
.col-4 { grid-column: span 4; }
.col-12 { grid-column: span 12; }

.card-badge {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--accent-cyan);
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
}

.card-desc {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1.05rem;
}

.tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  font-family: var(--font-mono);
  font-size: 0.8rem;
  padding: 0.3rem 0.7rem;
  border-radius: var(--radius-sm);
}

.spec-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.spec-item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-subtle);
  padding-bottom: 0.6rem;
  font-size: 0.9rem;
}

.spec-label {
  color: var(--text-muted);
}

.spec-val {
  color: #ffffff;
  font-weight: 500;
}

.spec-val.status-green {
  color: var(--accent-green);
}

/* Timeline */
.card-header-flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.timeline-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  padding-left: 1.5rem;
  border-left: 1px solid var(--border-medium);
}

.timeline-item {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 2rem;
  position: relative;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -1.85rem;
  top: 0.35rem;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent-cyan);
  box-shadow: 0 0 10px var(--accent-cyan);
}

.timeline-meta {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.timeline-period {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--accent-cyan);
  font-weight: 600;
}

.timeline-location {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.role-header {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.role-title {
  font-size: 1.25rem;
}

.company-name {
  color: var(--accent-purple);
  font-family: var(--font-mono);
  font-size: 0.95rem;
}

.role-desc {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 0.75rem;
}

.role-highlights {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.role-highlights li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.bullet {
  font-size: 0.8rem;
}

@media (max-width: 880px) {
  .col-8, .col-4 {
    grid-column: span 12;
  }

  .timeline-item {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
}
</style>
