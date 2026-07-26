<template>
  <footer class="footer-wrapper">
    <div class="container footer-content">
      
      <!-- Top Section -->
      <div class="footer-top">
        <!-- Logo -->
        <a href="#hero" class="footer-brand pixel-logo">
          <span class="nav-logo-icon">/</span>
          <span class="nav-logo-title">dev/karunathilaka</span>
        </a>

        <!-- CLI Command Center -->
        <div class="footer-cli-center">
          <div class="cli-command-box">
            <span class="cli-code">php artisan make:karunathilaka</span>
            <button class="cli-copy-btn" aria-label="Copy Command" title="Copy to clipboard">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>
          </div>
          <p class="cli-caption">Start building on the Laravel CLI or <a href="#" class="docs-link">read our docs</a></p>
        </div>

        <!-- Copyright -->
        <div class="footer-copyright">
          © {{ currentYear }} Karunathilaka.
        </div>
      </div>

      <!-- Links Section -->
      <div class="footer-links">
        <div class="lang-select">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          English (US) ▾
        </div>
        <a href="#">Do Not Sell or Share My Info</a>
        <a href="#">Cookie settings</a>
        <a href="#">Terms & privacy</a>
        <a href="#">Your privacy rights</a>
      </div>

      <!-- Retro Game Easter Egg Area -->
      <div class="footer-retro-game">
        <div class="clouds-bg">
          <pre class="pixel-cloud left-cloud">
  _  _
 ( `   )_
(    )    `)
(_   (_ .  _) _)
          </pre>
          <pre class="pixel-cloud right-cloud">
     .--.
  .-(    ).
 (___.__)__)
          </pre>
        </div>
        
        <div class="game-center">
          <div class="game-title">
            <span class="blink-cursor">></span> karuna3laka <span class="invert-text">run</span>
          </div>
          <div class="game-subtitle">PRESS SPACE TO CONTINUE _</div>
          <button class="share-score-btn">SHARE SCORE</button>
        </div>
        
        <div class="score-board">
          <div class="score-col">
            <span class="score-label">SCORE</span>
            <span class="score-value">00031</span>
          </div>
          <div class="score-col">
            <span class="score-label">BEST</span>
            <span class="score-value">00031</span>
          </div>
        </div>
      </div>

      <!-- Ground line -->
      <div class="ground-line"></div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.footer-wrapper {
  background: #0A1AC5; /* Match body blue */
  padding: 4rem 0 0 0;
  margin-top: 4rem;
  font-family: var(--font-mono); /* Geist Mono */
  color: #ffffff;
  overflow: hidden;
  position: relative;
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  position: relative;
  padding-bottom: 2rem;
}

/* Top Section */
.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
  background: #000000;
  color: #ffffff;
  padding: 0.25rem 0.6rem;
  border: 2px solid #ffffff;
  box-shadow: 2px 2px 0px #00e5ff;
}

.nav-logo-icon {
  color: var(--accent-cyan);
  font-weight: 800;
}

.nav-logo-title {
  color: #ffffff;
}

.footer-cli-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  margin-top: -0.5rem;
}

.cli-command-box {
  display: flex;
  align-items: center;
  background: #ffffff;
  color: #000000;
  padding: 0.5rem 1rem;
  border-radius: 2px;
  gap: 1.5rem;
  box-shadow: 2px 2px 0px rgba(0,0,0,0.2);
}

.cli-code {
  font-weight: 600;
  font-size: 0.85rem;
}

.cli-copy-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #64748b;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: color 0.15s;
}

.cli-copy-btn:hover {
  color: #000000;
}

.cli-caption {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
}

.docs-link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: underline;
}

.docs-link:hover {
  color: #ffffff;
}

.footer-copyright {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
  padding-top: 0.5rem;
}

/* Links Section */
.footer-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 0 1rem;
}

.footer-links a,
.lang-select {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.75rem;
  transition: color 0.15s;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.lang-select {
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.3rem 0.6rem;
  border-radius: 2px;
  cursor: pointer;
}

.lang-select:hover,
.footer-links a:hover {
  color: #ffffff;
}

/* Retro Game Area */
.footer-retro-game {
  position: relative;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}

.clouds-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.5;
}

.pixel-cloud {
  position: absolute;
  font-family: monospace;
  font-size: 10px;
  line-height: 10px;
  color: rgba(255, 255, 255, 0.6);
  white-space: pre;
}

.left-cloud {
  top: 40px;
  left: 10%;
}

.right-cloud {
  top: 60px;
  right: 15%;
}

.score-board {
  position: absolute;
  top: 20px;
  right: 5%;
  display: flex;
  gap: 2.5rem;
  text-align: center;
  opacity: 0.6;
}

.score-col {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.score-label {
  font-size: 0.75rem;
  letter-spacing: 0.1em;
}

.score-value {
  font-size: 0.95rem;
  font-weight: 600;
}

.game-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  z-index: 2;
}

.game-title {
  font-size: 3rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  text-shadow: 2px 2px 0px rgba(0,0,0,0.3);
}

.blink-cursor {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.invert-text {
  background: #ffffff;
  color: #0A1AC5;
  padding: 0 0.5rem;
  text-shadow: none;
}

.game-subtitle {
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.share-score-btn {
  background: transparent;
  border: 1px solid #ffffff;
  color: #ffffff;
  padding: 0.5rem 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
}

.share-score-btn:hover {
  background: #ffffff;
  color: #0A1AC5;
}

.ground-line {
  position: absolute;
  bottom: 20px;
  left: -10vw;
  width: 120vw;
  height: 2px;
  background: repeating-linear-gradient(
    to right,
    rgba(255,255,255,0.4) 0,
    rgba(255,255,255,0.4) 20px,
    transparent 20px,
    transparent 40px
  );
}

@media (max-width: 768px) {
  .footer-top {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .footer-links {
    flex-direction: column;
    gap: 1rem;
  }
  
  .score-board {
    display: none;
  }
}
</style>
