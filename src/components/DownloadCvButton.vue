<template>
  <a 
    :href="cvUrl" 
    :download="downloadFilename" 
    target="_blank" 
    class="pixel-btn"
  >
    <span class="pixel-text">DOWNLOAD CV</span>
    <span class="pixel-arrow-wrapper">
      <svg class="pixel-arrow-svg" viewBox="0 0 16 16" fill="currentColor">
        <!-- 8-Bit Pixelated Down Arrow Path -->
        <path d="M6 0h4v6h4v2h-2v2h-2v2h-2v2H6v-2H4v-2H2V8h4V0z"/>
      </svg>
    </span>
  </a>
</template>

<script setup>
defineProps({
  cvUrl: {
    type: String,
    default: '#'
  },
  downloadFilename: {
    type: String,
    default: 'Karunalaka_CV.pdf'
  }
});
</script>

<style scoped>
.pixel-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  background: #ffffff;
  color: #000000;
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.55rem 1rem;
  border-radius: 0px;
  border: 2px solid #000000;
  outline: 2px solid #ffffff;
  outline-offset: -4px;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 4px 4px 0px #000000, 6px 6px 0px rgba(0, 229, 255, 0.8);
  transition: all 0.1s step-end;
  user-select: none;
  image-rendering: pixelated;
}

.pixel-btn:hover {
  background: #00e5ff;
  color: #000000;
  outline-color: #000000;
  box-shadow: 5px 5px 0px #000000, 7px 7px 0px #ffffff;
  transform: translate(-1px, -1px);
}

.pixel-btn:active {
  transform: translate(3px, 3px);
  box-shadow: 1px 1px 0px #000000;
}

.pixel-text {
  line-height: 1;
}

.pixel-arrow-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
}

.pixel-arrow-svg {
  width: 14px;
  height: 14px;
  fill: currentColor;
  image-rendering: pixelated;
  transition: transform 0.15s ease;
}

.pixel-btn:hover .pixel-arrow-svg {
  transform: translateY(2px);
}
</style>
