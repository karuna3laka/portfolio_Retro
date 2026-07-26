<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <div class="section-header">
        <div class="eyebrow">
          <span class="dev-shortcut"><span class="bracket">[</span><span class="char">C</span><span class="bracket">]</span></span>
          <span>INITIATE CONNECTION</span>
        </div>
        <h2>Start a conversation or project sync.</h2>
        <p>Whether you're looking for a Vue 3 architect, frontend consultant, or full-time engineer, drop me a message below.</p>
      </div>

      <div class="bento-grid">
        <!-- Contact Direct Info (5 Cols) -->
        <div class="bento-card col-5 glowing">
          <div class="card-badge">DIRECT CONTACT</div>
          <h3 class="contact-title">Let's build something remarkable.</h3>
          <p class="contact-desc">
            Currently accepting new opportunities, technical consultations, and open-source collaborations.
          </p>

          <div class="contact-details">
            <a :href="'mailto:' + profile.socials.email" class="detail-row">
              <span class="detail-icon">✉</span>
              <div class="detail-text">
                <span class="label">Email Address</span>
                <span class="value">{{ profile.socials.email }}</span>
              </div>
            </a>

            <div class="detail-row">
              <span class="detail-icon">📍</span>
              <div class="detail-text">
                <span class="label">Primary Location</span>
                <span class="value">{{ profile.location }}</span>
              </div>
            </div>

            <div class="detail-row">
              <span class="detail-icon">⚡</span>
              <div class="detail-text">
                <span class="label">Response Time</span>
                <span class="value">Under 24 hours</span>
              </div>
            </div>
          </div>

          <div class="socials-bar">
            <a :href="profile.socials.github" target="_blank" class="social-btn">GitHub</a>
            <a :href="profile.socials.linkedin" target="_blank" class="social-btn">LinkedIn</a>
            <a :href="profile.socials.twitter" target="_blank" class="social-btn">Twitter</a>
          </div>
        </div>

        <!-- Terminal Form (7 Cols) -->
        <div class="col-7">
          <div class="dev-terminal">
            <div class="dev-terminal-bar">
              <div class="dev-terminal-dots">
                <span class="dev-terminal-dot red"></span>
                <span class="dev-terminal-dot yellow"></span>
                <span class="dev-terminal-dot green"></span>
              </div>
              <span class="dev-terminal-title">contactForm.sync.ts</span>
              <span class="dev-shortcut"><span class="bracket">[</span><span class="char">POST</span><span class="bracket">]</span></span>
            </div>

            <form class="dev-terminal-body contact-form" @submit.prevent="handleSubmit">
              <div class="form-group">
                <label class="form-label">
                  <span class="keyword">const</span> <span class="property">senderName</span> =
                </label>
                <input 
                  type="text" 
                  v-model="form.name" 
                  required 
                  placeholder="'Your Name or Company'"
                  class="form-input"
                />
              </div>

              <div class="form-group">
                <label class="form-label">
                  <span class="keyword">const</span> <span class="property">senderEmail</span> =
                </label>
                <input 
                  type="email" 
                  v-model="form.email" 
                  required 
                  placeholder="'your.email@domain.com'"
                  class="form-input"
                />
              </div>

              <div class="form-group">
                <label class="form-label">
                  <span class="keyword">const</span> <span class="property">messageBody</span> =
                </label>
                <textarea 
                  v-model="form.message" 
                  required 
                  rows="4"
                  placeholder="'Describe project scope, timeline, or inquiry...'"
                  class="form-input form-textarea"
                ></textarea>
              </div>

              <!-- Submit Status Stream -->
              <div v-if="submitState !== 'idle'" class="submit-status-line">
                <span v-if="submitState === 'submitting'" class="status-sending">
                  ⚡ POSTing payload to backend worker...
                </span>
                <span v-else-if="submitState === 'success'" class="status-success">
                  ✓ Message transmitted successfully! I will reply shortly.
                </span>
              </div>

              <div class="form-actions">
                <button type="submit" class="btn-primary full-width" :disabled="submitState === 'submitting'">
                  <span v-if="submitState === 'submitting'">Transmitting...</span>
                  <span v-else>Execute SendMessage()</span>
                  <span>↗</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { developerProfile } from '../data/portfolioData.js';

const profile = developerProfile;
const submitState = ref('idle'); // idle, submitting, success

const form = ref({
  name: '',
  email: '',
  message: ''
});

const handleSubmit = () => {
  submitState.value = 'submitting';
  setTimeout(() => {
    submitState.value = 'success';
    form.value.name = '';
    form.value.email = '';
    form.value.message = '';
    setTimeout(() => {
      submitState.value = 'idle';
    }, 4000);
  }, 1200);
};
</script>

<style scoped>
.contact-section {
  padding: 6rem 0;
}

.col-5 { grid-column: span 5; }
.col-7 { grid-column: span 7; }

.contact-title {
  font-size: 1.6rem;
  margin-bottom: 0.75rem;
}

.contact-desc {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.detail-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: border-color var(--transition-fast);
}

.detail-row:hover {
  border-color: var(--border-medium);
}

.detail-icon {
  width: 38px;
  height: 38px;
  background: rgba(0, 229, 255, 0.1);
  color: var(--accent-cyan);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
}

.detail-text {
  display: flex;
  flex-direction: column;
}

.detail-text .label {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
}

.detail-text .value {
  color: #ffffff;
  font-weight: 600;
  font-size: 0.95rem;
}

.socials-bar {
  display: flex;
  gap: 0.75rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-subtle);
}

.social-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  padding: 0.5rem 1rem;
  border-radius: var(--radius-sm);
  font-family: var(--font-mono);
  font-size: 0.85rem;
  transition: all var(--transition-fast);
}

.social-btn:hover {
  color: #ffffff;
  border-color: var(--border-medium);
}

/* Form Styles */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-label {
  font-family: var(--font-mono);
  font-size: 0.85rem;
}

.form-input {
  background: #06070b;
  border: 1px solid var(--border-medium);
  border-radius: var(--radius-sm);
  color: #ffffff;
  padding: 0.75rem 1rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  outline: none;
  transition: border-color var(--transition-fast);
}

.form-input:focus {
  border-color: var(--accent-cyan);
  box-shadow: 0 0 15px rgba(0, 229, 255, 0.15);
}

.form-textarea {
  resize: vertical;
}

.submit-status-line {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  padding: 0.5rem 0;
}

.status-sending {
  color: var(--accent-amber);
}

.status-success {
  color: var(--accent-green);
  font-weight: 600;
}

@media (max-width: 880px) {
  .col-5, .col-7 {
    grid-column: span 12;
  }
}
</style>
