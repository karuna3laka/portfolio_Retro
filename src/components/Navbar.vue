<template>
  <header class="navbar-wrapper" :class="{ 'scrolled': isScrolled }">
    <div class="container navbar-content">
      <!-- Logo / Brand (Pixelated Badge) -->
      <a href="#hero" class="nav-logo pixel-logo">
        <span class="nav-logo-icon">/</span>
        <span class="nav-logo-title">dev/karunathilaka</span>
      </a>

      <!-- Desktop Nav Links with Pixelated Keyboard Shortcuts -->
      <nav class="nav-links desktop-nav">
        <a href="#about" class="nav-link pixel-nav-link">
          <span class="dev-shortcut pixel-shortcut"><span class="bracket">[</span><span class="char">A</span><span class="bracket">]</span></span>
          <span class="label">About</span>
        </a>
        <a href="#skills" class="nav-link pixel-nav-link">
          <span class="dev-shortcut pixel-shortcut"><span class="bracket">[</span><span class="char">S</span><span class="bracket">]</span></span>
          <span class="label">Skills</span>
        </a>
        <a href="#projects" class="nav-link pixel-nav-link">
          <span class="dev-shortcut pixel-shortcut"><span class="bracket">[</span><span class="char">P</span><span class="bracket">]</span></span>
          <span class="label">Projects</span>
        </a>
        <a href="#experience" class="nav-link pixel-nav-link">
          <span class="dev-shortcut pixel-shortcut"><span class="bracket">[</span><span class="char">E</span><span class="bracket">]</span></span>
          <span class="label">Experience</span>
        </a>
        <a href="#contact" class="nav-link pixel-nav-link">
          <span class="dev-shortcut pixel-shortcut"><span class="bracket">[</span><span class="char">C</span><span class="bracket">]</span></span>
          <span class="label">Contact</span>
        </a>
      </nav>

      <!-- Pixelated Download CV CTA Button -->
      <div class="nav-actions">
        <DownloadCvButton />

        <!-- Mobile Toggle Button -->
        <button class="mobile-toggle pixel-mobile-toggle" @click="mobileMenuOpen = !mobileMenuOpen" aria-label="Toggle Navigation">
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div class="mobile-drawer" :class="{ 'open': mobileMenuOpen }">
      <nav class="mobile-links">
        <a href="#about" @click="mobileMenuOpen = false">About</a>
        <a href="#skills" @click="mobileMenuOpen = false">Skills</a>
        <a href="#projects" @click="mobileMenuOpen = false">Projects</a>
        <a href="#experience" @click="mobileMenuOpen = false">Experience</a>
        <a href="#contact" @click="mobileMenuOpen = false">Contact</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import DownloadCvButton from './DownloadCvButton.vue';

const isScrolled = ref(false);
const mobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.navbar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1rem 0;
  transition: all var(--transition-normal);
  background: #0A1AC5;
  border-bottom: 2px solid #000000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
  image-rendering: pixelated;
}

.navbar-wrapper.scrolled {
  padding: 0.75rem 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(16px);
  border-bottom: 2px solid #000000;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.navbar-wrapper.scrolled .pixel-nav-link {
  color: #000000;
}

.navbar-wrapper.scrolled .pixel-mobile-toggle {
  border-color: #000000;
}

.navbar-wrapper.scrolled .pixel-mobile-toggle .bar {
  background: #000000;
}

.navbar-wrapper.scrolled .pixel-logo {
  border-color: #000000;
  box-shadow: 2px 2px 0px #000000;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Pixelated Logo Badge */
.pixel-logo {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  text-decoration: none;
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 0.9rem;
  background: #000000;
  color: #ffffff;
  padding: 0.25rem 0.6rem;
  border-radius: 0px;
  border: 2px solid #ffffff;
  box-shadow: 2px 2px 0px #00e5ff;
  transition: transform 0.1s ease;
}

.pixel-logo:hover {
  transform: translate(-1px, -1px);
  box-shadow: 4px 4px 0px #00e5ff;
}

.nav-logo-icon {
  color: var(--accent-cyan);
  font-weight: 800;
}

.nav-logo-title {
  color: #ffffff;
  letter-spacing: -0.01em;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.pixel-nav-link {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  color: #e2e8f0;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.35rem 0.65rem;
  border-radius: 0px;
  border: 1px solid transparent;
  transition: all 0.1s step-end;
}

.pixel-nav-link:hover {
  background: rgba(0, 0, 0, 0.4);
  color: #00e5ff;
  border-color: #00e5ff;
  box-shadow: 2px 2px 0px #000000;
}

.pixel-shortcut {
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 0.8rem;
}

.pixel-shortcut .char {
  color: var(--accent-cyan);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Mobile Toggle Button */
.pixel-mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 0.5rem;
  background: #000000;
  border: 2px solid #ffffff;
  border-radius: 0px;
  box-shadow: 2px 2px 0px #00e5ff;
}

.pixel-mobile-toggle .bar {
  width: 20px;
  height: 2px;
  background: #ffffff;
}

.mobile-drawer {
  display: none;
}

@media (max-width: 880px) {
  .desktop-nav {
    display: none;
  }
  
  .pixel-mobile-toggle {
    display: flex;
  }

  .mobile-drawer {
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #000000;
    border-bottom: 2px solid #000000;
    padding: 1.5rem;
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: all 0.15s step-end;
  }

  .mobile-drawer.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .mobile-links {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .mobile-links a {
    color: #ffffff;
    font-family: var(--font-mono);
    font-size: 1rem;
    font-weight: 700;
  }
}
</style>
