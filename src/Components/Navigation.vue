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
.navigation {
  background: var(--gradient-secondary);
  box-shadow: var(--shadow-md);
  position: sticky;
  top: 0;
  z-index: var(--z-navigation);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-md) var(--spacing-xl);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand a {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-inverse);
  text-decoration: none;
  transition: color var(--transition-normal);
}

.nav-brand a:hover {
  color: var(--color-primary-light);
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: var(--spacing-xl);
}

.nav-links a {
  color: var(--color-text-inverse);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-sm);
  transition: all var(--transition-normal);
  border: 2px solid transparent;
}

.nav-links a:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.nav-links a.active {
  background-color: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    gap: var(--spacing-md);
    padding: var(--spacing-md);
  }
  
  .nav-links {
    gap: var(--spacing-md);
  }
  
  .nav-links a {
    padding: var(--spacing-xs) var(--spacing-sm);
    font-size: var(--font-size-sm);
  }
}
</style>