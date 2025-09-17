<template>
  <div class="cv-container">
    <div class="cv-header">
      <button @click="goBack" class="back-btn">← Retour au portfolio</button>
      <button @click="printCV" class="print-btn">🖨️ Imprimer</button>
    </div>
    
    <div class="cv-content">
      <header class="cv-header-content">
        <h1>David Abruzzo</h1>
        <p class="cv-subtitle">Développeur Logiciel C# / .NET</p>
        <p class="location">Grand Est / Luxembourg</p>
        <div class="contact-info">
          <span>� 06 19 86 20 66</span>
          <span>�📧 david.abruzzo@sfr.fr</span>
          <span>💼 <a href="https://www.linkedin.com/in/david-abruzzo-39a145101" target="_blank">LinkedIn</a></span>
          <span>🔗 <a href="https://github.com/Xcaliburns" target="_blank">GitHub</a></span>
          <span>🎥 <a href="https://www.youtube.com/@davidabruzzo7327" target="_blank">YouTube</a></span>
        </div>
      </header>

      <section class="cv-section">
        <h2>🎓 Formations</h2>
        <div class="formation-item">
          <h3>Concepteur Développeur Logiciel – OpenClassrooms</h3>
          <p class="dates">(2022–2025)</p>
          <p class="description">Diplômé en Conception et Développement Logiciel et Développement Web et Web Mobile. 
          Passionné par la création de solutions informatiques performantes et évolutives, je maîtrise aussi bien le backend .NET que les technologies web modernes. Curieux, rigoureux et adaptable, je m'investis pleinement dans chaque projet.</p>
        </div>
        <div class="formation-item">
          <h3>Développeur Web et Web Mobile – Wild Code School</h3>
          <p class="dates">(2022–2023)</p>
          <p class="description">Formation intensive en développement web full-stack et technologies modernes.</p>
        </div>
      </section>

      <section class="cv-section">
        <h2>💼 Compétences Techniques</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <h3>Langages de Programmation</h3>
            <ul>
              <li><strong>C#</strong> - Maîtrise</li>
              <li><strong>JavaScript / TypeScript</strong> - Assez bon niveau</li>
              <li><strong>HTML5 / CSS3</strong> - Maîtrise</li>
              <li><strong>SQL</strong> - Bon niveau</li>
              <li><strong>Python</strong> - Notions</li>
            </ul>
          </div>
          
          <div class="skill-category">
            <h3>Frameworks & Technologies Backend</h3>
            <ul>
              <li><strong>.NET Core / .NET Framework</strong></li>
              <li><strong>ASP.NET Core MVC / Web API</strong></li>
              <li><strong>Entity Framework Core / LINQ</strong></li>                            
              <li><strong>Identity Framework</strong></li>
            </ul>
          </div>

          <div class="skill-category">
            <h3>Frontend & Frameworks Web</h3>
            <ul>
              <li><strong>React.js</strong> </li>
              <li><strong>Vue.js 3</strong> </li>
              <li><strong>Bootstrap / Tailwind CSS</strong></li>
              <li><strong>Responsive Design</strong></li>
              <li><strong>Single Page Applications (SPA)</strong></li>
            </ul>
          </div>

          <div class="skill-category">
            <h3>Bases de Données</h3>
            <ul>
              <li><strong>SQL Server</strong> </li>
              <li><strong>MongoDB</strong> </li>
              <li><strong>MySQL </strong></li>
              <li><strong>Entity Framework</strong></li>              
            </ul>
          </div>

          <div class="skill-category">
            <h3>DevOps & Outils</h3>
            <ul>
              <li><strong>Git / GitHub</strong> - Workflow collaboratif</li>
              <li><strong>GitHub Actions</strong> - CI/CD</li>
              <li><strong>Docker</strong> </li>
              <li><strong>Visual Studio 2022</strong></li>
              <li><strong>VS Code</strong> </li>
              <li><strong>Postman / Swwagger</strong> </li>
              <li><strong>Figma</strong> - Prototypage UI/UX</li>
              <li><strong>Trello / Jira</strong> - Gestion de projet</li>
            </ul>
          </div>

          <div class="skill-category">
            <h3>Tests & Qualité</h3>
            <ul>
              <li><strong>Tests Unitaires</strong> - xUnit</li>
              <li><strong>Mocking</strong> - Moq Framework</li>              
            </ul>
          </div>

          <div class="skill-category">
            <h3>Architecture & Patterns</h3>
            <ul>
              <li><strong>Clean Architecture</strong></li>
              <li><strong>MVC / DDD</strong></li>
              <li><strong>Repository Pattern</strong></li>
              <li><strong>Dependency Injection</strong></li>
              <li><strong>SOLID Principles</strong></li>
              <li><strong>RESTful APIs</strong></li>
            </ul>
          </div>

          <div class="skill-category">
            <h3>Game Development & 3D</h3>
            <ul>
              <li><strong>Unity 3D</strong> - C# scripting</li>
              <li><strong>Unreal Engine</strong> - Blueprints</li>
              <li><strong>Blender</strong> - Modélisation 3D</li>              
              <li><strong>Animation 2D/3D</strong></li>
            </ul>
          </div>
        </div>
      </section>

      <section class="cv-section">
        <h2>� Expériences</h2>
        
        <div class="experience-item">
          <h3>Développeur C# / .NET – Projets pédagogiques OpenClassrooms</h3>
          <p class="dates">(2024–2025)</p>
          <ul>
            <li>Applications .NET avec SQL Server et MongoDB</li>
            <li>Architecture n-tiers avec LINQ, Entity Framework, JWT, Identity</li>
            <li>Tests unitaires (xUnit, MOQ) et CI/CD via GitHub Actions</li>
            <li>DDD, MVC, requêtes LINQ, Entity Framework</li>
            <li>Documentation fonctionnelle et technique</li>
          </ul>
        </div>

        <div class="experience-item">
          <h3>Retoucheur – Magna Uniport</h3>
          <p class="dates">(2009–2024)</p>
          <ul>
            <li>Élaboration de prototypes, résolution de problèmes techniques</li>
            <li>Collaboration avec les opérateurs qualité</li>
          </ul>
        </div>

        <div class="experience-item">
          <h3>Responsable Huilage Parquet – Colman Bois</h3>
          <p class="dates">(2004–2008)</p>
          <ul>
            <li>Finitions sur parquet, optimisation de la chaîne de production</li>
            <li>Gestion des stocks et formation du personnel</li>
          </ul>
        </div>

        <div class="experience-item">
          <h3>Télévendeur – Adler / Bosch Telecom</h3>
          <p class="dates">(2001–2003)</p>
          <ul>
            <li>Vente de produits personnalisés par téléphone</li>
            <li>Prise de rendez-vous clients</li>
          </ul>
        </div>
      </section>

      <section class="cv-section">
        <h2>�🚀 Projets Principaux</h2>
        
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
          <li><strong>Anglais :</strong> Intermédiaire</li>
          <li><strong>Allemand :</strong> Intermédiaire</li>
        </ul>
      </section>

      <section class="cv-section">
        <h2>🎯 Centres d'Intérêt</h2>
        <ul class="interests">
          <li>Développement de jeux vidéo (Unity, Unreal Engine)</li>
          <li>Modélisation 3D (Blender)</li>
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