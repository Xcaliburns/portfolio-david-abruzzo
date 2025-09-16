<template>
  <div class="cv-container">
    <div class="cv-header">
      <button @click="goBack" class="back-btn">← Retour au portfolio</button>
      <button @click="printCV" class="print-btn">🖨️ Imprimer</button>
    </div>
    
    <div class="cv-content">
      <header class="cv-header-content">
        <h1>David Abruzzo</h1>
        <p class="cv-subtitle">Développeur Web & Logiciel</p>
        <div class="contact-info">
          <span>📧 davidabruzzogames@gmail.com</span>
          <span>💼 LinkedIn: david-abruzzo-39a145101</span>
          <span>🎥 YouTube: @davidabruzzo7327</span>
        </div>
      </header>

      <section class="cv-section">
        <h2>🎓 Formation</h2>
        <div class="formation-item">
          <h3>Concepteur Développeur Logiciel (Bac +3/4)</h3>
          <p class="institution">OpenClassrooms</p>
          <p class="description">Formation approfondie en développement logiciel, architecture et conception d'applications.</p>
        </div>
        <div class="formation-item">
          <h3>Développeur Web et Web Mobile (Bac +2)</h3>
          <p class="institution">Wild Code School</p>
          <p class="description">Formation intensive en développement web full-stack et technologies modernes.</p>
        </div>
      </section>

      <section class="cv-section">
        <h2>💼 Compétences Techniques</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <h3>Frontend</h3>
            <ul>
              <li>React.js / Vue.js</li>
              <li>TypeScript / JavaScript</li>
              <li>HTML5 / CSS3</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div class="skill-category">
            <h3>Backend</h3>
            <ul>
              <li>Node.js / Express</li>
              <li>C# / .NET</li>
              <li>API REST</li>
              <li>SQL Server / MongoDB</li>
            </ul>
          </div>
          <div class="skill-category">
            <h3>Outils & Méthodes</h3>
            <ul>
              <li>Git / GitHub</li>
              <li>CI/CD</li>
              <li>Tests unitaires</li>
              <li>Agile / Scrum</li>
            </ul>
          </div>
          <div class="skill-category">
            <h3>Créatif</h3>
            <ul>
              <li>Unity (Game Development)</li>
              <li>Blender (3D Modeling)</li>
              <li>Animation 2D</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="cv-section">
        <h2>🚀 Projets Principaux</h2>
        
        <div class="project">
          <h3>🎮 Jeu Unity 2D – Game Jam</h3>
          <p class="project-description">
            Développement d'un jeu complet avec Unity et C# dans le cadre d'une Game Jam. 
            Gestion des animations, logique de gameplay et publication sur itch.io.
          </p>
          <p class="technologies"><strong>Technologies :</strong> Unity, C#, Animation 2D</p>
          <p class="project-link">
            <strong>Lien :</strong> 
            <a href="https://www.youtube.com/watch?v=KUJCyjT9TX4" target="_blank">
              Voir la vidéo de démonstration
            </a>
          </p>
        </div>

        <div class="project">
          <h3>🧠 API sécurisée en .NET</h3>
          <p class="project-description">
            Projet OpenClassrooms : développement d'une API REST avec authentification JWT, 
            implémentation de tests unitaires (xUnit, MOQ), et mise en place de CI/CD avec GitHub Actions.
          </p>
          <p class="technologies"><strong>Technologies :</strong> .NET, JWT, xUnit, MOQ, GitHub Actions</p>
        </div>

        <div class="project">
          <h3>🌐 Application React / Node.js</h3>
          <p class="project-description">
            Projet final Wild Code School : application web complète full-stack avec React, Express et MongoDB. 
            Gestion d'utilisateurs et documentation technique complète.
          </p>
          <p class="technologies"><strong>Technologies :</strong> React, Express, MongoDB, JWT</p>
        </div>
      </section>

      <section class="cv-section">
        <h2>🌐 Langues</h2>
        <ul class="languages">
          <li><strong>Français :</strong> Natif</li>
          <li><strong>Anglais :</strong> Technique (lecture documentation, veille technologique)</li>
        </ul>
      </section>

      <section class="cv-section">
        <h2>🎯 Centres d'Intérêt</h2>
        <ul class="interests">
          <li>Développement de jeux vidéo</li>
          <li>Modélisation 3D avec Blender</li>
          <li>Veille technologique</li>
          <li>Participation à des Game Jams</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.back()
}

const printCV = () => {
  window.print()
}
</script>

<style scoped>
.cv-container {
  min-height: 100vh;
  background: var(--color-background-secondary);
  padding: var(--spacing-lg);
}

.cv-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-xl);
  padding: var(--spacing-md);
  background: var(--color-background);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}

.back-btn, .print-btn {
  padding: var(--spacing-sm) var(--spacing-md);
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-weight: var(--font-weight-medium);
  transition: all var(--transition-normal);
}

.back-btn {
  background: var(--gradient-secondary);
  color: var(--color-text-inverse);
}

.back-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.print-btn {
  background: var(--gradient-primary);
  color: var(--color-text-inverse);
}

.print-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.cv-content {
  max-width: 900px;
  margin: 0 auto;
  background: var(--color-background-secondary);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
}

.cv-header-content {
  text-align: center;
  border-bottom: 3px solid var(--color-primary);
  padding-bottom: var(--spacing-xl);
  margin-bottom: var(--spacing-2xl);
}

.cv-header-content h1 {
  font-size: var(--font-size-4xl);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
}

.cv-subtitle {
  font-size: var(--font-size-xl);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-lg);
}

.contact-info {
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
}

.contact-info span {
  background: var(--color-background);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-sm);
}

.cv-section {
  margin-bottom: var(--spacing-2xl);
}

.cv-section h2 {
  color: var(--color-primary);
  border-bottom: 2px solid var(--color-border-light);
  padding-bottom: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
}

.formation-item {
  margin-bottom: var(--spacing-xl);
  padding: var(--spacing-lg);
  background: var(--color-background);
  border-radius: var(--radius-md);
  border-left: 4px solid var(--color-primary);
}

.formation-item h3 {
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-xs);
}

.institution {
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-sm);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-lg);
}

.skill-category {
  background: var(--color-background);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  border-left: 4px solid var(--color-primary);
}

.skill-category h3 {
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
  text-align: center;
}

.skill-category ul {
  list-style: none;
  padding: 0;
}

.skill-category li {
  padding: var(--spacing-xs) 0;
  border-bottom: 1px solid var(--color-border-light);
}

.skill-category li:last-child {
  border-bottom: none;
}

.project {
  background: var(--color-background);
  padding: var(--spacing-xl);
  margin-bottom: var(--spacing-lg);
  border-radius: var(--radius-md);
  border-left: 4px solid var(--color-accent);
}

.project h3 {
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
}

.project-description {
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-md);
}

.technologies {
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-sm);
}

.project-link a {
  color: var(--color-primary);
  text-decoration: none;
}

.project-link a:hover {
  text-decoration: underline;
}

.languages, .interests {
  list-style: none;
  padding: 0;
}

.languages li, .interests li {
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid var(--color-border-light);
}

.languages li:last-child, .interests li:last-child {
  border-bottom: none;
}

/* Styles d'impression */
@media print {
  .cv-header {
    display: none;
  }
  
  .cv-container {
    padding: 0;
    background: white;
  }
  
  .cv-content {
    box-shadow: none;
    padding: 20px;
  }
  
  .cv-section {
    page-break-inside: avoid;
  }
  
  .project {
    page-break-inside: avoid;
  }
}

@media (max-width: 768px) {
  .cv-header {
    flex-direction: column;
    gap: var(--spacing-md);
  }
  
  .contact-info {
    flex-direction: column;
    align-items: center;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .cv-content {
    padding: var(--spacing-lg);
  }
}
</style>