<template>
  <nav class="navigation">
    <div class="nav-container">
      <div class="nav-brand">
        <router-link to="/">David Abruzzo</router-link>
      </div>
      <ul class="nav-links">
        <li>
          <router-link to="/" :class="{ active: $route.path === '/' }">Accueil</router-link>
        </li>
        <li>
          <router-link to="/about" :class="{ active: $route.path === '/about' }">Contact</router-link>
        </li>
        <li>
          <router-link to="/projects" :class="{ active: $route.path === '/projects' }">Projets</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
// Navigation du portfolio
</script>

<style scoped>
/* Import du fichier CSS séparé */
@import '../styles/components/Navigation.css';
</style>