<template>
  <div class="app-layout">
    <Navbar />
    <main>
      <HeroSection />
    </main>
    <Footer />
    <SpotifyNowPlaying />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import Footer from './components/Footer.vue';
import SpotifyNowPlaying from './components/SpotifyNowPlaying.vue';
</script>

<style>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
