<template>
  <section class="projects">
    <h1>Mes Projets</h1>

    <div class="project-card">
      <h2>🎮 Jeu Unity 2D – Game Jam</h2>
      <p>Petit jeu développé avec Unity et C# dans le cadre d'une Game Jam. Animation, logique de gameplay et publication sur itch.io.</p>
      <a href="https://www.youtube.com/watch?v=KUJCyjT9TX4" target="_blank">Voir la vidéo</a>
    </div>

    <div class="project-card">
      <h2>🧠 API sécurisée en .NET</h2>
      <p>Projet OpenClassrooms : API REST avec authentification JWT, tests unitaires (xUnit, MOQ), CI/CD avec GitHub Actions.</p>
      <a href="https://github.com/ton-utilisateur/nom-du-repo" target="_blank">Voir sur GitHub</a>
    </div>

    <div class="project-card">
      <h2>🌐 Application React / Node.js</h2>
      <p>Projet final Wild Code School : application web complète avec React, Express, MongoDB, gestion d’utilisateurs et documentation technique.</p>
      <a href="https://github.com/ton-utilisateur/nom-du-repo" target="_blank">Voir sur GitHub</a>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: var(--spacing-3xl) var(--spacing-xl);
  max-width: 1000px;
  margin: 0 auto;
}

.projects h1 {
  text-align: center;
  font-size: var(--font-size-3xl);
  margin-bottom: var(--spacing-2xl);
  color: var(--color-text-primary);
}

.project-card {
  background: var(--color-background-secondary);
  padding: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  border-left: 4px solid var(--color-primary);
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.project-card h2 {
  margin-bottom: var(--spacing-md);
  color: var(--color-text-primary);
  font-size: var(--font-size-xl);
}

.project-card p {
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-md);
}

.project-card a {
  display: inline-block;
  margin-top: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  color: var(--color-primary);
  text-decoration: none;
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-sm);
  font-weight: var(--font-weight-medium);
  transition: all var(--transition-normal);
}

.project-card a:hover {
  background: var(--color-primary);
  color: var(--color-text-inverse);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .projects {
    padding: var(--spacing-2xl) var(--spacing-md);
  }
  
  .project-card {
    padding: var(--spacing-lg);
  }
  
  .projects h1 {
    font-size: var(--font-size-2xl);
  }
}
</style>
