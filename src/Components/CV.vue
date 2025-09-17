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
/* Import du fichier CSS séparé */
@import '../styles/components/CV.css';
</style>