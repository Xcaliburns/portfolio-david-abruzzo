<template>
  <!-- Message de bienvenue avec animation -->
  <div class="welcome-section">
    <div class="welcome-content">
      <div class="welcome-animation">
        <h1 class="welcome-title">
          <span class="wave">👋</span>                    
          <span class="text-gradient">Bienvenue sur mon portfolio</span>
        </h1>
        <p class="welcome-subtitle">
          Découvrez mon univers de développement et mes créations
        </p>
        <div class="welcome-dots">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Composant de bienvenue avec animations
</script>

<style scoped>
/* Import du fichier CSS séparé */
@import '../styles/components/WelcomeSection.css';
</style>