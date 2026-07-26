<template>
  <div class="gitlab-activity-wrapper">
    <!-- Top Header Outside Card -->
    <div class="activity-top-bar">
      <div class="activity-title-group">
        <h2 class="activity-title">Activity</h2>
        <span class="internship-badge">Software Engineering Internship (Jul 2023 – Jul 2024)</span>
      </div>
      <a href="https://github.com" target="_blank" class="activity-view-all">View all</a>
    </div>

    <!-- Main GitLab Heatmap Card -->
    <div class="gitlab-card">
      
      <!-- Month Labels Bar (Accurately Positioned over Exact Week Columns) -->
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
              v-for="(cell, dIdx) in week" 
              :key="dIdx" 
              class="heat-cell"
              :class="['level-' + cell.level, { 'highlighted-box': cell.highlighted }]"
              :title="`${cell.formattedDate}: ${cell.count} contributions ${cell.meta ? '(' + cell.meta + ')' : ''}`"
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
  </div>
</template>

<script setup>
import { computed } from 'vue';

// Exact Month start column offsets (1-indexed CSS grid columns) matching Jul 2023 - Jul 2024
const monthHeaderConfig = [
  { name: 'Jul', col: 1 },
  { name: 'Aug', col: 4 },
  { name: 'Sep', col: 8 },
  { name: 'Oct', col: 12 },
  { name: 'Nov', col: 17 },
  { name: 'Dec', col: 21 },
  { name: 'Jan', col: 25 },
  { name: 'Feb', col: 30 },
  { name: 'Mar', col: 34 },
  { name: 'Apr', col: 38 },
  { name: 'May', col: 43 },
  { name: 'Jun', col: 47 },
  { name: 'Jul', col: 51 }
];

// Accurate date generator for the Internship Period: July 16, 2023 to July 21, 2024
const startDate = new Date(2023, 6, 16); // Jul 16, 2023

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

      // Internship Timeline Activity Mapping
      if (w < 7) {
        // Jul - Aug 2023: Onboarding & Orientation
        if (w === 6 && d === 2) {
          level = 2;
          count = 4;
          meta = 'Internship Onboarding & Setup';
        }
      } else if (w >= 7 && w < 11) {
        // Sep 2023: Architecture & Initial Pull Requests
        if (d >= 1 && d <= 5) {
          level = (w === 9 && d === 2) ? 3 : Math.random() > 0.4 ? 2 : 1;
          count = level * 3;
          meta = 'Vue 3 Feature Migration';
        }
        if (w === 9 && d === 2) {
          highlighted = true;
          meta = 'PR #104 Merged to Staging';
        }
      } else if (w >= 11 && w < 24) {
        // Oct - Dec 2023: Heavy Component Development
        if (d >= 1 && d <= 5) {
          level = Math.random() > 0.65 ? 2 : 1;
          count = level * 4;
          meta = 'Sprint Deliverables & API Integration';
        }
      } else {
        // Jan - Jul 2024: Full Production Development & Code Reviews
        if (d >= 1 && d <= 5) {
          const r = Math.random();
          level = r > 0.85 ? 4 : r > 0.5 ? 3 : r > 0.2 ? 2 : 1;
          count = level * 4;
          meta = 'Core System Refactoring & Code Reviews';
        } else if (Math.random() > 0.5) {
          level = 1;
          count = 2;
          meta = 'Documentation & Unit Testing';
        }
      }

      days.push({
        level,
        count,
        formattedDate,
        meta,
        highlighted
      });

      // Move to next day
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
}

/* Outer Header Outside Card */
.activity-top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
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
  font-weight: 600;
  letter-spacing: 0.02em;
}

.activity-view-all {
  color: #00e5ff;
  font-size: 0.85rem;
  text-decoration: none;
  font-weight: 600;
  transition: opacity 0.15s ease, text-decoration 0.15s ease;
}

.activity-view-all:hover {
  text-decoration: underline;
  opacity: 0.9;
}

/* Main GitLab Dark Card (Black, Blue, and White Sharp Direct Line Theme) */
.gitlab-card {
  background: #000000;
  border: 2px solid #0B1BC6;
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
  color: #93c5fd;
  font-weight: 600;
  white-space: nowrap;
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
  color: #93c5fd;
  height: 12px;
  line-height: 12px;
  text-align: center;
  font-weight: 600;
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
  outline: 1px solid #ffffff;
  outline-offset: 1px;
  z-index: 10;
}

.highlighted-box {
  outline: 1px solid #ffffff;
  outline-offset: 1px;
}

/* Black, Blue, and White Heatmap Variants */
.level-0 {
  background: #090c1a;
  border: 1px solid rgba(11, 27, 198, 0.25);
}

.level-1 {
  background: #0B1BC6; /* Project Deep Blue */
}

.level-2 {
  background: #2563eb; /* Royal Blue */
  box-shadow: 0 0 3px rgba(37, 99, 235, 0.5);
}

.level-3 {
  background: #00e5ff; /* Electric Cyan Blue */
  box-shadow: 0 0 5px rgba(0, 229, 255, 0.7);
}

.level-4 {
  background: #ffffff; /* Crisp White */
  box-shadow: 0 0 7px #ffffff;
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
  color: #93c5fd;
}
</style>
