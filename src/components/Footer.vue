<template>
  <footer class="footer-wrapper">
    <div class="container footer-content">
      <!-- Left Info -->
      <div class="footer-brand">
        <a href="#hero" class="footer-logo">
          <span class="logo-slash">/</span>dev/karunalaka
        </a>
        <p class="footer-copy">
          © {{ currentYear }} Karunalaka. Inspired by Notion Dev platform aesthetics. Built with Vue 3 & Vite.
        </p>
      </div>

      <!-- Center Keyboard Shortcuts Guide -->
      <div class="footer-shortcuts desktop-only">
        <span class="shortcuts-title">SHORTCUTS:</span>
        <a href="#about" class="dev-shortcut"><span class="bracket">[</span><span class="char">A</span><span class="bracket">]</span> About</a>
        <a href="#skills" class="dev-shortcut"><span class="bracket">[</span><span class="char">S</span><span class="bracket">]</span> Skills</a>
        <a href="#projects" class="dev-shortcut"><span class="bracket">[</span><span class="char">P</span><span class="bracket">]</span> Projects</a>
        <a href="#contact" class="dev-shortcut"><span class="bracket">[</span><span class="char">C</span><span class="bracket">]</span> Contact</a>
      </div>

      <!-- Right Back to Top -->
      <button class="back-to-top" @click="scrollToTop" title="Back to top">
        <span>TOP</span>
        <span>↑</span>
      </button>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style scoped>
.footer-wrapper {
  background: #06070a;
  border-top: 1px solid var(--border-subtle);
  padding: 2.5rem 0;
  margin-top: 4rem;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.footer-logo {
  font-family: var(--font-mono);
  font-weight: 700;
  color: #ffffff;
  font-size: 1.1rem;
}

.logo-slash {
  color: var(--accent-cyan);
}

.footer-copy {
  color: var(--text-muted);
  font-size: 0.85rem;
}

.footer-shortcuts {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.shortcuts-title {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
}

.back-to-top {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-medium);
  color: var(--text-secondary);
  padding: 0.5rem 0.9rem;
  border-radius: var(--radius-sm);
  font-family: var(--font-mono);
  font-size: 0.8rem;
  transition: all var(--transition-fast);
}

.back-to-top:hover {
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 1.5rem;
    align-items: flex-start;
  }
}
</style>
