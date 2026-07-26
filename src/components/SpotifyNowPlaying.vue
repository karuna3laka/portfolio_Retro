<template>
  <div class="fixed-bottom-right-container">
    <!-- Retro White Command Console Log Box -->
    <div v-if="logs.length > 0" class="terminal-log-box">
      <div class="terminal-log-header">
        <span class="header-title">PROXIMITY_PRELOAD.LOG</span>
        <button class="log-close-btn" @click="logs = []">✕</button>
      </div>
      <div class="terminal-log-body">
        <div v-for="(log, i) in logs" :key="i" class="terminal-log-line">
          <span class="log-prompt">></span> {{ log }}
        </div>
      </div>
    </div>

    <!-- Spotify Widget -->
    <a href="https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b" target="_blank" class="spotify-widget">
      <div class="album-art">
        <img src="https://i.scdn.co/image/ab67616d000048518863bc11d2aa12b54f5aeb36" alt="Album Art" />
        <div class="spotify-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
        </div>
      </div>
      <div class="song-info">
        <div class="status">
          <div class="equalizer">
            <span></span><span></span><span></span>
          </div>
          <span class="status-text">LISTENING TO SPOTIFY</span>
        </div>
        <div class="song-title">Blinding Lights</div>
        <div class="song-artist">The Weeknd</div>
      </div>
    </a>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const logs = ref([]);

const handlePreloadLog = (e) => {
  if (e.detail) {
    logs.value.unshift(e.detail);
    if (logs.value.length > 3) {
      logs.value.pop();
    }
  }
};

onMounted(() => {
  window.addEventListener('preload-log', handlePreloadLog);
});

onUnmounted(() => {
  window.removeEventListener('preload-log', handlePreloadLog);
});
</script>

<style scoped>
.fixed-bottom-right-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.6rem;
}

.terminal-log-box {
  background: #ffffff;
  border: 2px solid #000000;
  box-shadow: 4px 4px 0px #000000;
  padding: 0.5rem 0.75rem;
  font-family: var(--font-mono);
  max-width: 320px;
  animation: slideUp 0.2s ease;
  image-rendering: pixelated;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.terminal-log-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #000000;
  padding-bottom: 0.3rem;
  margin-bottom: 0.4rem;
  gap: 1rem;
}

.header-title {
  font-size: 0.65rem;
  font-weight: 700;
  color: #000000;
  letter-spacing: 0.05em;
}

.log-close-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.7rem;
  color: #000000;
  padding: 0;
  font-weight: 700;
}

.terminal-log-body {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.terminal-log-line {
  font-size: 0.68rem;
  color: #000000;
  font-weight: 500;
  line-height: 1.2;
}

.log-prompt {
  color: #0B1BC6;
  font-weight: 700;
}

.spotify-widget {
  position: relative;
  bottom: auto;
  right: auto;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: #ffffff;
  border: 2px solid #000000;
  padding: 0.5rem;
  box-shadow: 4px 4px 0px #1DB954;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  image-rendering: pixelated;
}

.spotify-widget:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px #1DB954;
}

.album-art {
  position: relative;
  width: 48px;
  height: 48px;
  border: 2px solid #000000;
}

.album-art img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.spotify-icon {
  position: absolute;
  bottom: -6px;
  right: -6px;
  width: 20px;
  height: 20px;
  background: #000000;
  border-radius: 0px;
  color: #1DB954;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spotify-icon svg {
  width: 16px;
  height: 16px;
}

.song-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.status {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 2px;
}

.equalizer {
  display: flex;
  align-items: flex-end;
  gap: 2px;
  height: 10px;
}

.equalizer span {
  display: block;
  width: 3px;
  background: #1DB954;
  animation: equalize 1s infinite alternate;
}

.equalizer span:nth-child(1) { height: 4px; animation-delay: 0.1s; }
.equalizer span:nth-child(2) { height: 8px; animation-delay: 0.3s; }
.equalizer span:nth-child(3) { height: 6px; animation-delay: 0.5s; }

@keyframes equalize {
  0% { height: 2px; }
  100% { height: 10px; }
}

.status-text {
  font-family: var(--font-mono);
  font-size: 0.55rem;
  font-weight: 700;
  color: #1DB954;
  letter-spacing: 0.05em;
}

.song-title {
  font-size: 0.8rem;
  font-weight: 700;
  color: #000000;
  line-height: 1.2;
}

.song-artist {
  font-size: 0.65rem;
  color: #475569;
  font-weight: 600;
}

@media (max-width: 768px) {
  .fixed-bottom-right-container {
    bottom: 10px;
    right: 10px;
  }
}
</style>
