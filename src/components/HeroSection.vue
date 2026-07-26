<template>
  <section id="hero" class="notion-dev-hero">
    <div class="container hero-centered-container">
      
      <!-- Main Title Block -->
      <h1 class="hero-brand-title">/dev/karunathilaka</h1>
      <p class="hero-subtitle">Crafting fast web apps & digital experiences.</p>

      <!-- Command CLI Bar (White Floating Pill) -->
      <div class="pill-command-box" @click="isTerminalOpen = true" title="Click to run interactive CLI terminal">
        <span class="command-text">{{ profile.cliCommand }}</span>
        <button class="bw-thunder-btn" @click.stop="isTerminalOpen = true" title="Run command">
          <svg class="thunder-svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 2L3 14h7v8l10-12h-7z"/>
          </svg>
        </button>
      </div>

      <!-- Subtitle Link -->
      <p class="hero-docs-link">
        Explore Vue 3 architecture or <a href="#projects" class="underlined-link">view featured projects</a>
      </p>

      <!-- Lightweight Github Activity Heatmap Grid -->
      <GithubActivityGrid />

    </div>

    <!-- Interactive Terminal Modal -->
    <InteractiveCliTerminal 
      :isOpen="isTerminalOpen" 
      @close="isTerminalOpen = false" 
    />
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { developerProfile } from '../data/portfolioData.js';
import InteractiveCliTerminal from './InteractiveCliTerminal.vue';
import GithubActivityGrid from './GithubActivityGrid.vue';

const profile = developerProfile;
const copied = ref(false);
const isTerminalOpen = ref(false);

const copyCommand = () => {
  navigator.clipboard.writeText(profile.cliCommand);
  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 2000);
};
</script>

<style scoped>
/* Full Hero Section with Notion Dev Electric Blue Theme */
.notion-dev-hero {
  background: #0917c9;
  background: radial-gradient(circle at 50% 30%, #0d22e6 0%, #0814ad 70%, #060e87 100%);
  color: #ffffff;
  padding: 8rem 0 6rem;
  position: relative;
  overflow: hidden;
}

.hero-centered-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.hero-brand-title {
  font-size: clamp(2.4rem, 5.5vw, 3.8rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 0.6rem;
  color: #ffffff;
}

.hero-subtitle {
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
  margin-bottom: 2rem;
}

/* Squared CLI Bar */
.pill-command-box {
  display: inline-flex;
  align-items: center;
  gap: 1.25rem;
  background: #ffffff;
  color: #000000;
  padding: 0.65rem 1.25rem;
  border-radius: 0px;
  border: 2px solid #000000;
  box-shadow: 4px 4px 0px #000000;
  margin-bottom: 1.25rem;
  cursor: pointer;
  transition: all 0.1s step-end;
  image-rendering: pixelated;
}

.pill-command-box:hover {
  background: #ffffff;
  border-color: #00e5ff;
  box-shadow: 5px 5px 0px #00e5ff;
  transform: translate(-1px, -1px);
}

.bw-thunder-btn {
  background: #000000;
  color: #ffffff;
  width: 24px;
  height: 24px;
  border-radius: 0px;
  border: 1px solid #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.4);
  transition: all 0.15s ease;
}

.bw-thunder-btn:hover {
  background: #000000;
  color: #00e5ff;
  border-color: #000000;
  transform: scale(1.1);
  box-shadow: 2px 2px 0px #000000;
}

.bw-thunder-btn:active {
  transform: scale(0.95);
}

.thunder-svg {
  width: 12px;
  height: 12px;
  fill: currentColor;
}

.command-text {
  font-family: var(--font-mono);
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: -0.01em;
}

.copied-indicator {
  color: #10b981;
  font-weight: 700;
}

.hero-docs-link {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 4rem;
}

.underlined-link {
  color: #ffffff;
  text-decoration: underline;
  text-underline-offset: 3px;
  font-weight: 500;
}

.underlined-link:hover {
  color: #e2e8f0;
}

/* High-Tech Blueprint Canvas */
.blueprint-canvas-wrapper {
  position: relative;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}

/* Central Blueprint Window */
.blueprint-window {
  display: grid;
  grid-template-columns: 240px 1fr;
  background: rgba(4, 12, 90, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 12px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(16px);
  overflow: hidden;
  text-align: left;
}

/* Sidebar */
.blueprint-sidebar {
  background: rgba(2, 8, 65, 0.6);
  border-right: 1px dashed rgba(255, 255, 255, 0.2);
  padding: 1rem;
}

.sidebar-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.window-dots {
  display: flex;
  gap: 5px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.dot.red { background: #ff5f56; }
.dot.yellow { background: #ffbd2e; }
.dot.green { background: #27c93f; }

.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 700;
  font-size: 0.9rem;
}

.nav-arrows {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  display: flex;
  gap: 0.4rem;
}

.sidebar-menu {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.4rem 0.6rem;
  border-radius: 6px;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  transition: background 0.15s ease;
}

.menu-item:hover, .menu-item.active {
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
}

.database-active {
  background: rgba(255, 255, 255, 0.2) !important;
  font-weight: 600;
}

.menu-section-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 0.05em;
  margin-top: 1rem;
  margin-bottom: 0.2rem;
  padding-left: 0.6rem;
}

.highlighted-agent {
  color: #ffffff;
  border: 1px dashed rgba(255, 255, 255, 0.4);
}

/* Main Area */
.blueprint-main {
  padding: 1.5rem;
  background: rgba(6, 17, 115, 0.4);
}

.db-title-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1rem;
}

.db-head-icon {
  font-size: 1.5rem;
}

.db-head-title {
  font-size: 1.6rem;
  font-weight: 700;
}

.db-toolbar {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1.25rem;
  font-size: 0.85rem;
}

.db-filter-tab {
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.05);
  cursor: pointer;
}

.db-filter-tab.active {
  background: rgba(255, 255, 255, 0.2);
  border-color: #ffffff;
}

.db-filter-add {
  padding: 0.35rem 0.6rem;
  border: 1px dashed rgba(255, 255, 255, 0.3);
  border-radius: 6px;
}

.db-sync-status {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.75rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.15);
  font-size: 0.75rem;
}

/* Blueprint Table */
.blueprint-table {
  border: 1px dashed rgba(255, 255, 255, 0.25);
  border-radius: 8px;
  overflow: hidden;
  font-size: 0.85rem;
}

.table-head {
  display: grid;
  grid-template-columns: 2.2fr 1fr 1.1fr 1.3fr;
  padding: 0.6rem 1rem;
  background: rgba(0, 0, 0, 0.25);
  border-bottom: 1px dashed rgba(255, 255, 255, 0.25);
  color: rgba(255, 255, 255, 0.6);
  font-family: var(--font-mono);
  font-size: 0.75rem;
}

.table-body {
  display: flex;
  flex-direction: column;
}

.table-row {
  display: grid;
  grid-template-columns: 2.2fr 1fr 1.1fr 1.3fr;
  padding: 0.65rem 1rem;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.15);
  align-items: center;
  transition: background 0.15s ease;
}

.table-row:hover {
  background: rgba(255, 255, 255, 0.08);
}

.table-row:last-child {
  border-bottom: none;
}

.doc-icon {
  margin-right: 0.4rem;
  opacity: 0.7;
}

.col-id {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
}

/* Status Badges */
.badge {
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  display: inline-block;
}

.badge-untriaged {
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
}

.badge-triaged {
  background: rgba(255, 255, 255, 0.25);
  color: #ffffff;
}

.badge-progress {
  background: rgba(59, 130, 246, 0.5);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.badge-review {
  background: rgba(234, 179, 8, 0.4);
  color: #ffffff;
}

.avatar {
  margin-right: 0.3rem;
}

/* Floating Callout Cards & Dotted Lines */
.floating-callout {
  position: absolute;
  z-index: 10;
  display: flex;
  align-items: center;
}

.callout-card {
  background: #ffffff;
  color: #000000;
  padding: 0.65rem 1rem;
  border-radius: 8px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--font-mono);
  text-align: left;
  white-space: nowrap;
}

.callout-icon-box {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cyan-chip {
  background: #00e5ff;
  color: #000;
}

.purple-sparkle {
  background: #8b5cf6;
  color: #fff;
}

.sparkle {
  font-size: 1.2rem;
}

.callout-title {
  font-size: 0.8rem;
  font-weight: 700;
  color: #000000;
}

.callout-subtitle {
  font-size: 0.75rem;
  color: #64748b;
}

/* Positions & Connector Dotted Lines */
.callout-top-right {
  top: 60px;
  right: -40px;
}

.line-top-right {
  width: 90px;
  height: 2px;
  border-top: 2px dashed rgba(255, 255, 255, 0.6);
  position: absolute;
  left: -90px;
  top: 50%;
}

.callout-bottom-left {
  bottom: 80px;
  left: -50px;
}

.line-bottom-left {
  width: 80px;
  height: 2px;
  border-top: 2px dashed rgba(255, 255, 255, 0.6);
  position: absolute;
  right: -80px;
  top: 50%;
}

.callout-bottom-right {
  bottom: 40px;
  right: -50px;
}

.line-bottom-right {
  width: 80px;
  height: 2px;
  border-top: 2px dashed rgba(255, 255, 255, 0.6);
  position: absolute;
  left: -80px;
  top: 50%;
}

@media (max-width: 1024px) {
  .floating-callout {
    display: none;
  }
  
  .blueprint-window {
    grid-template-columns: 1fr;
  }

  .blueprint-sidebar {
    display: none;
  }
}
</style>
