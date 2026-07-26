<template>
  <div class="gitlab-activity-wrapper">
    <!-- Top Header Outside Card -->
    <div class="activity-top-bar">
      <div class="activity-title-group">
        <h2 class="activity-title">Activity</h2>
        <span class="internship-badge">[Intern] Full Stack Developer</span>
      </div>
      <a href="https://github.com" target="_blank" class="activity-view-all">[View all]</a>
    </div>

    <!-- Surrounding Layout Container (3 Top, 3 Bottom with staggered heights & dotted connectors) -->
    <div class="surround-layout-container">

      <!-- TOP CARDS ROW (3) -->
      <div class="callouts-row top-row">
        
        <!-- 1: saasbeds (Staggered lowest) -->
        <div class="callout-wrapper" style="padding-top: 60px;">
          <div
            class="project-callout-card"
            :class="{ 'active-highlight': activeProject === 'saasbeds' }"
            @mouseenter="logCardHover('saasbeds')"
            @mouseleave="activeProject = null"
          >
            <div class="callout-chip chip-blue">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="4" y="4" width="16" height="16" rx="0"/><rect x="9" y="9" width="6" height="6"/>
              </svg>
            </div>
            <div class="callout-info">
              <div class="callout-project-title">saasbeds</div>
              <div class="callout-project-sub">Weblook International • 348 commits</div>
            </div>
          </div>
          <div class="dashed-line"></div>
        </div>

        <!-- 2: bewaxed (Staggered highest) -->
        <div class="callout-wrapper" style="padding-top: 0px;">
          <div
            class="project-callout-card"
            :class="{ 'active-highlight': activeProject === 'bewaxed' }"
            @mouseenter="logCardHover('bewaxed')"
            @mouseleave="activeProject = null"
          >
            <div class="callout-chip chip-white">
              <span class="chip-sparkle">✦</span>
            </div>
            <div class="callout-info">
              <div class="callout-project-title">bewaxed</div>
              <div class="callout-project-sub">Weblook International • 215 commits</div>
            </div>
          </div>
          <div class="dashed-line"></div>
        </div>

        <!-- 3: marketplace (Staggered middle) -->
        <div class="callout-wrapper" style="padding-top: 30px;">
          <div
            class="project-callout-card"
            :class="{ 'active-highlight': activeProject === 'marketplace' }"
            @mouseenter="logCardHover('marketplace')"
            @mouseleave="activeProject = null"
          >
            <div class="callout-chip chip-blue">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              </svg>
            </div>
            <div class="callout-info">
              <div class="callout-project-title">marketplace</div>
              <div class="callout-project-sub">Shavinka Nilesh • 184 commits</div>
            </div>
          </div>
          <div class="dashed-line"></div>
        </div>
      </div>

      <!-- MIDDLE ROW: GITLAB HEATMAP CARD + RIGHT SIDE UNI PROJECTS -->
      <div class="middle-chart-wrapper">
        <!-- MAIN GITLAB HEATMAP CARD -->
        <div class="gitlab-card">
        <!-- Month Labels Bar (Accurately Positioned over Exact Week Columns) -->
        <div class="months-bar">
          <span class="day-spacer"></span>
          <div class="months-labels-grid">
            <span 
              v-for="(m, i) in monthHeaderConfig" 
              :key="i" 
              class="month-item"
              :class="{ 'month-highlight': activeProject === 'saasbeds' && (m.name === 'Sep' || m.name === 'Oct' || m.name === 'Nov') }"
              :style="{ gridColumnStart: m.col }"
            >
              {{ m.name }}
            </span>
          </div>
        </div>

        <!-- Matrix Body -->
        <div class="matrix-container">
          <!-- Day Labels (M, W, F) -->
          <div class="day-labels-col">
            <span class="day-code"></span>
            <span class="day-code">M</span>
            <span class="day-code"></span>
            <span class="day-code">W</span>
            <span class="day-code"></span>
            <span class="day-code">F</span>
            <span class="day-code"></span>
          </div>

          <!-- Heatmap Grid (53 Weeks x 7 Days = 371 Days) -->
          <div class="weeks-grid">
            <div v-for="(week, wIdx) in heatmapWeeks" :key="wIdx" class="week-column">
              <div
                v-for="(cell, dIndex) in week"
                :key="dIndex"
                class="heat-cell"
                :class="[
                  `level-${cell.level}`,
                  { 
                    'highlighted-box': cell.highlighted,
                    'project-highlight-active': activeProject === cell.project
                  }
                ]"
                :title="`${cell.formattedDate}: ${cell.count} contributions (${cell.meta})`"
              ></div>
            </div>
          </div>
        </div>

        <!-- Bottom Footer Info -->
        <div class="gitlab-footer">
          <div class="legend-box">
            <div class="heat-cell level-0"></div>
            <div class="heat-cell level-1"></div>
            <div class="heat-cell level-2"></div>
            <div class="heat-cell level-3"></div>
            <div class="heat-cell level-4"></div>
          </div>
          <span class="footer-caption">Issues, merge requests, pushes, and comments.</span>
        </div>
      </div>

      <!-- RIGHT SIDE OUTSIDE THE CHART: JUST ARROW > AND UNI PROJECTS LABEL -->
      <div v-if="uniProjectsLoaded" class="chart-right-side" ref="triggerRef">
        <div 
          class="uni-arrow-trigger" 
          :class="{ 'active-trigger': showUniChart, 'preloaded-glow': isProximityPreloaded }"
          @click="showUniChart = !showUniChart"
          title="Click to view University Projects chart"
        >
          <span class="big-pixel-arrow">></span>
          <span class="uni-trigger-label">Uni Projects</span>
        </div>
      </div>
    </div>

    <!-- SECOND CHART: UNIVERSITY PROJECTS HEATMAP (Toggled via > Uni Projects) -->
    <div v-if="showUniChart" class="uni-chart-section">
      <div class="uni-chart-header">
        <h3 class="uni-chart-title">🎓 University Projects Activity</h3>
        <span class="uni-chart-sub">Academic & Research Repositories</span>
      </div>

      <div class="gitlab-card uni-gitlab-card">
        <!-- Month Labels Bar -->
        <div class="months-bar">
          <span class="day-spacer"></span>
          <div class="months-labels-grid">
            <span 
              v-for="(m, i) in monthHeaderConfig" 
              :key="i" 
              class="month-item"
              :style="{ gridColumnStart: m.col }"
            >
              {{ m.name }}
            </span>
          </div>
        </div>

        <!-- Matrix Body -->
        <div class="matrix-container">
          <div class="day-labels-col">
            <span class="day-code"></span>
            <span class="day-code">M</span>
            <span class="day-code"></span>
            <span class="day-code">W</span>
            <span class="day-code"></span>
            <span class="day-code">F</span>
            <span class="day-code"></span>
          </div>

          <div class="weeks-grid">
            <div v-for="(week, wIdx) in uniHeatmapWeeks" :key="wIdx" class="week-column">
              <div
                v-for="(cell, dIndex) in week"
                :key="dIndex"
                class="heat-cell"
                :class="`level-${cell.level}`"
                :title="`${cell.formattedDate}: ${cell.count} Uni contributions`"
              ></div>
            </div>
          </div>
        </div>

        <!-- Bottom Footer Info -->
        <div class="gitlab-footer">
          <div class="legend-box">
            <div class="heat-cell level-0"></div>
            <div class="heat-cell level-1"></div>
            <div class="heat-cell level-2"></div>
            <div class="heat-cell level-3"></div>
            <div class="heat-cell level-4"></div>
          </div>
          <span class="footer-caption">Academic coursework, research prototypes, and machine learning models.</span>
        </div>
      </div>
    </div>

      <!-- BOTTOM CARDS ROW (3) -->
      <div class="callouts-row bottom-row">
        
        <!-- 4: saptify (Staggered highest) -->
        <div class="callout-wrapper" style="padding-bottom: 60px;">
          <div
            class="project-callout-card"
            :class="{ 'active-highlight': activeProject === 'appointment' }"
            @mouseenter="logCardHover('saptify')"
            @mouseleave="activeProject = null"
          >
            <div class="callout-chip chip-blue">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="0"/><path d="M16 2v4M8 2v4M3 10h18"/>
              </svg>
            </div>
            <div class="callout-info">
              <div class="callout-project-title">saptify</div>
              <div class="callout-project-sub">Weblook International • 260 commits</div>
            </div>
          </div>
          <div class="dashed-line"></div>
        </div>

        <!-- 5: autosale.lk (Staggered middle) -->
        <div class="callout-wrapper" style="padding-bottom: 20px;">
          <div
            class="project-callout-card"
            :class="{ 'active-highlight': activeProject === 'veyogo' }"
            @mouseenter="logCardHover('autosale.lk')"
            @mouseleave="activeProject = null"
          >
            <div class="callout-chip chip-white">
              <span class="chip-sparkle">⚡</span>
            </div>
            <div class="callout-info">
              <div class="callout-project-title">autosale.lk</div>
              <div class="callout-project-sub">Oshada Viduranga • 290 commits</div>
            </div>
          </div>
          <div class="dashed-line"></div>
        </div>

        <!-- 6: HouseofSincerity (Staggered lowest) -->
        <div class="callout-wrapper" style="padding-bottom: 0px;">
          <div
            class="project-callout-card"
            :class="{ 'active-highlight': activeProject === 'houseofsincerity' }"
            @mouseenter="logCardHover('HouseofSincerity')"
            @mouseleave="activeProject = null"
          >
            <div class="callout-chip chip-white">
              <span class="chip-sparkle">✦</span>
            </div>
            <div class="callout-info">
              <div class="callout-project-title">HouseofSincerity</div>
              <div class="callout-project-sub">Oshada Viduranga • 142 commits</div>
            </div>
          </div>
          <div class="dashed-line"></div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const activeProject = ref(null);
const uniProjectsLoaded = ref(false);
const showUniChart = ref(false);

// Proximity & Caching States
const triggerRef = ref(null);
const isProximityPreloaded = ref(false);
const showProximityBadge = ref(false);
const cursorPos = ref({ x: 0, y: 0 });

const logCardHover = (projName) => {
  activeProject.value = projName === 'saptify' ? 'appointment' : projName === 'autosale.lk' ? 'veyogo' : projName === 'HouseofSincerity' ? 'houseofsincerity' : projName;
  window.dispatchEvent(new CustomEvent('preload-log', {
    detail: `Proximity detected [${projName}] -> Preloaded & Cached`
  }));
};

const handleMouseMove = (e) => {
  cursorPos.value = { x: e.clientX, y: e.clientY };
  if (!triggerRef.value || isProximityPreloaded.value) return;

  const rect = triggerRef.value.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);

  // Trigger preloading when cursor is within 220px of the button
  if (distance < 220) {
    isProximityPreloaded.value = true;
    
    window.dispatchEvent(new CustomEvent('preload-log', {
      detail: `Proximity detected [Uni Projects] -> Preloaded & Cached`
    }));

    // Store in browser LocalStorage cache
    localStorage.setItem('uni_projects_cache', JSON.stringify({
      preloaded: true,
      timestamp: new Date().toISOString()
    }));
  }
};

onMounted(() => {
  // Check if already cached in browser
  const cached = localStorage.getItem('uni_projects_cache');
  if (cached) {
    isProximityPreloaded.value = true;
  }

  // Deferred non-blocking activation
  const loadUniData = () => {
    uniProjectsLoaded.value = true;
  };

  if ('requestIdleCallback' in window) {
    requestIdleCallback(loadUniData);
  } else {
    setTimeout(loadUniData, 300);
  }

  window.addEventListener('mousemove', handleMouseMove);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
});

// Second Heatmap Data Generator for University Projects
const uniHeatmapWeeks = computed(() => {
  const weeks = [];
  const totalWeeks = 53;
  let currDate = new Date(2024, 8, 1);

  for (let w = 0; w < totalWeeks; w++) {
    const days = [];
    for (let d = 0; d < 7; d++) {
      const formattedDate = currDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });

      let level = 0;
      let count = 0;

      if (d >= 1 && d <= 5) {
        const r = Math.random();
        if (r > 0.35) {
          level = r > 0.85 ? 4 : r > 0.65 ? 3 : r > 0.45 ? 2 : 1;
          count = level * 3;
        }
      }

      days.push({ level, count, formattedDate });
      currDate.setDate(currDate.getDate() + 1);
    }
    weeks.push(days);
  }
  return weeks;
});

// Exact Month start column offsets matching Sep 2025 - Sep 2026
const monthHeaderConfig = [
  { name: 'Sep', col: 1 },
  { name: 'Oct', col: 5 },
  { name: 'Nov', col: 9 },
  { name: 'Dec', col: 14 },
  { name: 'Jan', col: 18 },
  { name: 'Feb', col: 23 },
  { name: 'Mar', col: 27 },
  { name: 'Apr', col: 31 },
  { name: 'May', col: 36 },
  { name: 'Jun', col: 40 },
  { name: 'Jul', col: 44 },
  { name: 'Aug', col: 49 },
  { name: 'Sep', col: 53 }
];

// Accurate date generator for the Internship Period: Sep 1, 2025 to Sep 2026
const startDate = new Date(2025, 8, 1); // Sep 1, 2025

const heatmapWeeks = computed(() => {
  const weeks = [];
  const totalWeeks = 53;
  let currDate = new Date(startDate);

  for (let w = 0; w < totalWeeks; w++) {
    const days = [];
    for (let d = 0; d < 7; d++) {
      const formattedDate = currDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });

      let level = 0;
      let count = 0;
      let highlighted = false;
      let meta = '';
      let project = null;

      // Project 1: saasbeds (Weeks 0 to 8)
      if (w >= 0 && w <= 8) {
        project = 'saasbeds';
        if (d >= 1 && d <= 5) {
          level = (w === 4 && d === 2) ? 4 : Math.random() > 0.35 ? 3 : 2;
          count = level * 4;
          meta = 'saasbeds • Weblook International';
        }
      } 
      // Project 2: bewaxed (Weeks 9 to 17)
      else if (w >= 9 && w <= 17) {
        project = 'bewaxed';
        if (d >= 1 && d <= 5) {
          level = Math.random() > 0.4 ? 3 : 2;
          count = level * 4;
          meta = 'bewaxed • Weblook International';
        }
      } 
      // Project 3: marketplace (Weeks 18 to 26)
      else if (w >= 18 && w <= 26) {
        project = 'marketplace';
        if (d >= 1 && d <= 5) {
          level = Math.random() > 0.35 ? 4 : 3;
          count = level * 5;
          meta = 'marketplace • Shavinka Nilesh';
        }
      }
      // Project 4: saptify (Weeks 27 to 35)
      else if (w >= 27 && w <= 35) {
        project = 'appointment';
        if (d >= 1 && d <= 5) {
          level = Math.random() > 0.3 ? 3 : 2;
          count = level * 4;
          meta = 'saptify • Weblook International';
        }
      }
      // Project 5: autosale.lk (Weeks 36 to 44)
      else if (w >= 36 && w <= 44) {
        project = 'veyogo';
        if (d >= 1 && d <= 5) {
          const r = Math.random();
          level = r > 0.8 ? 4 : r > 0.35 ? 3 : 2;
          count = level * 5;
          meta = 'autosale.lk • Oshada Viduranga';
        }
      }
      // Project 6: HouseofSincerity (Weeks 45 to 52)
      else if (w >= 45) {
        project = 'houseofsincerity';
        if (d >= 1 && d <= 5) {
          level = Math.random() > 0.4 ? 4 : 2;
          count = level * 4;
          meta = 'HouseofSincerity • Oshada Viduranga';
        }
      }

      days.push({
        level,
        count,
        formattedDate,
        meta,
        project,
        highlighted
      });

      currDate.setDate(currDate.getDate() + 1);
    }
    weeks.push(days);
  }
  return weeks;
});
</script>

<style scoped>
.gitlab-activity-wrapper {
  width: 100%;
  margin-top: 2rem;
  font-family: var(--font-mono);
  color: #ffffff;
  image-rendering: pixelated;
  position: relative;
}

/* Outer Header Outside Card */
.activity-top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  padding: 0 0.2rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.activity-title-group {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.activity-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.02em;
}

.internship-badge {
  font-size: 0.72rem;
  color: #ffffff;
  background: #0B1BC6;
  border: 1px solid #ffffff;
  padding: 0.2rem 0.6rem;
  border-radius: 0px; /* Sharp 0px direct line */
  font-weight: 400;
  letter-spacing: 0.02em;
}

.activity-view-all {
  color: #ffffff;
  font-size: 0.85rem;
  text-decoration: none;
  font-weight: 400;
  transition: opacity 0.15s ease, text-decoration 0.15s ease;
}

.activity-view-all:hover {
  text-decoration: underline;
  opacity: 0.9;
}

/* Surrounding Layout Container */
.surround-layout-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.callouts-row {
  display: flex;
  gap: 1.25rem;
  justify-content: space-around;
  width: 100%;
}

.callouts-row.top-row {
  align-items: flex-end;
  height: 140px;
  margin-bottom: -15px; /* Pull closer to heatmap */
}

.callouts-row.bottom-row {
  align-items: flex-start;
  height: 140px;
  margin-top: -5px;
}

.callout-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  position: relative;
  z-index: 10;
}

.bottom-row .callout-wrapper {
  flex-direction: column-reverse;
}

.dashed-line {
  flex-grow: 1;
  width: 0;
  border-left: 2px dashed rgba(255, 255, 255, 0.6);
}

.top-row .dashed-line {
  margin-top: 8px;
}

.bottom-row .dashed-line {
  margin-bottom: 8px;
}

.project-callout-card {
  position: relative;
  z-index: 10;
  background: #ffffff;
  border: 1px solid #000000;
  padding: 0.6rem 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
  box-shadow: 4px 4px 0px #0B1BC6;
  transition: border-color 0.15s, box-shadow 0.15s, background 0.15s, transform 0.15s;
  white-space: nowrap;
}

.project-callout-card:hover,
.project-callout-card.active-highlight {
  border-color: #0B1BC6;
  background: #f1f5f9;
  box-shadow: 4px 4px 0px #00e5ff;
  transform: translateY(-2px);
}

.callout-chip {
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px;
  flex-shrink: 0;
}

.callout-chip.chip-blue {
  background: #0B1BC6;
  color: #00e5ff;
  border: 1px solid #00e5ff;
}

.callout-chip.chip-white {
  background: #ffffff;
  color: #000000;
  border: 1px solid #000000;
  font-weight: 400;
}

.callout-info {
  display: flex;
  flex-direction: column;
}

.callout-project-title {
  font-size: 0.82rem;
  font-weight: 500;
  color: #000000;
  letter-spacing: 0.01em;
}

.callout-project-sub {
  font-size: 0.7rem;
  color: #475569;
  margin-top: 1px;
}

/* Main GitLab Card (Muted Off-White Background, Black & Blue Sharp Retro Theme) */
.gitlab-card {
  background: #e8ecf2; /* Reduced luminosity off-white */
  border: 2px solid #000000;
  border-radius: 0px; /* Sharp 0px direct line corners */
  padding: 1.25rem 1.5rem;
  box-shadow: 4px 4px 0px #000000;
  overflow-x: auto;
}

/* Months Bar (Precise CSS Grid Column Alignment) */
.months-bar {
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
}

.day-spacer {
  width: 22px;
}

.months-labels-grid {
  display: grid;
  grid-template-columns: repeat(53, minmax(12px, 1fr));
  column-gap: 3px;
  flex: 1;
}

.month-item {
  font-size: 0.72rem;
  color: #000000;
  font-weight: 500;
  white-space: nowrap;
  transition: color 0.15s ease;
}

.month-item.month-highlight {
  color: #0B1BC6;
  font-weight: 600;
  text-decoration: underline;
}

/* Matrix Body */
.matrix-container {
  display: flex;
  gap: 0.4rem;
}

.day-labels-col {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 18px;
  padding-top: 1px;
}

.day-code {
  font-size: 0.7rem;
  color: #000000;
  height: 12px;
  line-height: 12px;
  text-align: center;
  font-weight: 500;
}

.weeks-grid {
  display: grid;
  grid-template-columns: repeat(53, minmax(12px, 1fr));
  column-gap: 3px;
  flex: 1;
}

.week-column {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

/* Heatmap Cells (Pixel Perfect Colors & 0px Sharp Line Corners) */
.heat-cell {
  width: 12px;
  height: 12px;
  border-radius: 0px; /* Sharp 0px direct line corners */
  cursor: pointer;
  transition: outline 0.1s step-end, transform 0.1s step-end;
}

.heat-cell:hover {
  outline: 2px solid #000000;
  outline-offset: 1px;
  z-index: 10;
}

.highlighted-box {
  outline: 2px solid #000000;
  outline-offset: 1px;
}

.project-highlight-active {
  outline: 2px solid #0B1BC6;
  outline-offset: 1px;
  z-index: 5;
}

/* White Card Heatmap Cell Levels */
.level-0 {
  background: #c5d1e0; /* Muted slate gray for inactive days */
  border: 1px solid #a0b2ce;
}

.level-1 {
  background: #93c5fd; /* Soft Blue */
}

.level-2 {
  background: #2563eb; /* Royal Blue */
}

.level-3 {
  background: #0B1BC6; /* Deep Electric Blue */
}

.level-4 {
  background: #000000; /* Sharp Black */
}

/* Footer Info Row */
.gitlab-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.25rem;
  padding-top: 0.2rem;
}

.legend-box {
  display: flex;
  gap: 4px;
  align-items: center;
}

.footer-caption {
  font-size: 0.78rem;
  color: #000000;
  font-weight: 400;
}

/* Middle Chart Wrapper (Outside Right Side Trigger - Absolutely Positioned to avoid chart shrinkage) */
.middle-chart-wrapper {
  position: relative;
  width: 100%;
}

.middle-chart-wrapper .gitlab-card {
  width: 100%;
}

.chart-right-side {
  position: absolute;
  left: calc(100% + 1.25rem);
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  z-index: 20;
}

.uni-arrow-trigger {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 0.1rem;
  user-select: none;
  padding: 0.4rem 0.6rem;
  transition: transform 0.15s ease;
}

.uni-arrow-trigger:hover {
  transform: translateX(4px);
}

.uni-arrow-trigger.active-trigger .big-pixel-arrow {
  color: #00e5ff;
  transform: rotate(90deg);
}

.big-pixel-arrow {
  font-size: 2.2rem;
  font-weight: 800;
  color: #ffffff;
  line-height: 1;
  font-family: var(--font-mono);
  transition: color 0.15s ease, transform 0.2s ease;
}

.uni-arrow-trigger:hover .big-pixel-arrow {
  color: #00e5ff;
}

.uni-trigger-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: #ffffff;
  white-space: nowrap;
  font-family: var(--font-mono);
}

/* Second Uni Projects Chart Container */
.uni-chart-section {
  margin-top: 2rem;
  width: 100%;
  animation: fadeInChart 0.3s ease-in-out;
}

@keyframes fadeInChart {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.uni-chart-header {
  display: flex;
  align-items: baseline;
  gap: 0.8rem;
  margin-bottom: 0.75rem;
}

.uni-chart-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #00e5ff;
}

.uni-chart-sub {
  font-size: 0.75rem;
  color: #93c5fd;
}

.uni-gitlab-card {
  border-color: #00e5ff;
}

/* Proximity Cursor Floating Indicator & Cache Tags */
.cursor-floating-box {
  position: fixed;
  z-index: 9999;
  background: #000000;
  color: #00e5ff;
  border: 1px solid #00e5ff;
  padding: 0.2rem 0.5rem;
  font-size: 0.65rem;
  font-weight: 700;
  font-family: var(--font-mono);
  box-shadow: 2px 2px 0px #00e5ff;
  pointer-events: none;
  animation: pulseGlow 0.3s ease;
}

@keyframes pulseGlow {
  0% { transform: scale(0.8); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

.preload-status-tag {
  font-size: 0.6rem;
  color: #00e5ff;
  background: rgba(0, 229, 255, 0.15);
  border: 1px solid #00e5ff;
  padding: 0.1rem 0.3rem;
  margin-top: 0.2rem;
  font-family: var(--font-mono);
}

.preloaded-glow .big-pixel-arrow {
  text-shadow: 0 0 8px #00e5ff;
}
</style>
