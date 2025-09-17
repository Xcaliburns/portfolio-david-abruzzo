<template>
  <div id="app">
    <ConstructionBanner />
    
  
    
    <Navigation />
    <WelcomeSection />
    <main class="main-content">
      <Home />
      
    </main>
  </div>
</template>

<script setup lang="ts">
import Navigation from './Components/Navigation.vue'
import ConstructionBanner from './Components/ConstructionBanner.vue'
import WelcomeSection from './Components/WelcomeSection.vue'
import Home from './Components/Home.vue'
// App principal Vue 3
</script>

<style>
/* Import du système de design global */
@import './styles/global.css';

/* Styles spécifiques à l'App */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}
</style>
