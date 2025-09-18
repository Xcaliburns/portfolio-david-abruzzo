<template>
  <section class="about">
    <h1>À propos de moi</h1>
    
    <div class="about-content">
      <div class="bio">
        <h2>🎯 Mon profil</h2>
        <p>
          <strong>Développeur Logiciel C# / .NET</strong> passionné par la création de solutions informatiques 
          performantes et évolutives. Diplômé en <strong>Conception et Développement Logiciel</strong> chez 
          OpenClassrooms (2022-2025) et formé en <strong>Développement Web et Web Mobile</strong> à la Wild Code School.
        </p>
        
        <p>
          Curieux, rigoureux et adaptable, je m'investis pleinement dans chaque projet en alliant expertise 
          technique et approche créative. Après 15 ans d'expérience industrielle, j'ai entrepris une reconversion 
          réussie vers ce qui était mon hobby : le développement logiciel, apportant rigueur et méthodologie à mes réalisations.
        </p>

        
        
        <h2>💼 Mes compétences clés</h2>
        <div class="skills">
          <div class="skill-category">
            <h3>🎯 Expertise principale</h3>
            <ul>
              <li><strong>C# / .NET Core</strong></li>
              <li><strong>ASP.NET Core MVC</strong></li>
              <li><strong>Entity Framework</strong></li>
              <li><strong>SQL Server / MongoDB</strong></li>
            </ul>
          </div>
          
          <div class="skill-category">
            <h3>🌐 Technologies Web</h3>
            <ul>
              <li><strong>React.js / Vue.js</strong></li>
              <li><strong>TypeScript / JavaScript</strong></li>
              <li><strong>HTML5 / CSS3</strong></li>
              <li><strong>APIs RESTful</strong></li>
            </ul>
          </div>
          
          <div class="skill-category">
            <h3>🛠️ Outils & Méthodes</h3>
            <ul>
              <li><strong>Git / GitHub Actions</strong></li>
              <li><strong>Docker / CI/CD</strong></li>
              <li><strong>Tests unitaires (xUnit, Moq)</strong></li>
              <li><strong>Clean Architecture</strong></li>
            </ul>
          </div>

          <div class="skill-category">
            <h3>🎨 Créatif & 3D</h3>
            <ul>
              <li><strong>Unity 3D</strong></li>
              <li><strong>Blender (Modélisation)</strong></li>
              <li><strong>Game Design</strong></li>              
            </ul>
          </div>
        </div>
      </div>

      <h2>🚀 Ce qui me passionne</h2>
        <div class="passions">
          <div class="passion-item">
            <h3>💻 Modélisation 3D</h3>
            <p>modélisation 3D avec Blender</p>
          </div>
          <div class="passion-item">
            <h3>🎮 Game Development</h3>
            <p>Création de jeux avec Unity</p>
          </div>
          <div class="passion-item">
            <h3>🎮 Game Development</h3>
            <p>  participation à des Game Jams</p>
          </div>
         
        </div>
      
      <div class="contact">
        <h2>📧 Me contacter</h2>
        <p>Intéressé par mon profil ? N'hésitez pas à me contacter !</p>
        
        <div class="contact-info">
          <div class="contact-item">
            <span class="contact-label">📧 Email :</span> 
            <a href="mailto:david.abruzzo@sfr.fr">david.abruzzo@sfr.fr</a>
          </div>
          <div class="contact-item">
            <span class="contact-label">📱 Téléphone :</span> 
            <a href="tel:+33619862066">06 19 86 20 66</a>
          </div>
          <div class="contact-item">
            <span class="contact-label">🔗 GitHub :</span> 
            <a href="https://github.com/Xcaliburns" target="_blank">github.com/Xcaliburns</a>
          </div>
          <div class="contact-item">
            <span class="contact-label">💼 LinkedIn :</span> 
            <a href="https://www.linkedin.com/in/david-abruzzo-39a145101" target="_blank">LinkedIn Profile</a>
          </div>
          <div class="contact-item">
            <span class="contact-label">🎥 YouTube :</span> 
            <a href="https://www.youtube.com/@davidabruzzo7327" target="_blank">Chaîne YouTube</a>
          </div>
        </div>
        
        <div class="action-buttons">
          <router-link to="/cv" class="download-btn primary">
            📄 Voir mon CV complet
          </router-link>
          <router-link to="/projects" class="download-btn secondary">
            🚀 Mes projets
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Import du fichier CSS séparé */
@import '../styles/components/About.css';
</style>
