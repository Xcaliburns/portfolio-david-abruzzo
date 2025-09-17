<template>
  <section class="about">
    <h1>À propos de moi</h1>
    
    <div class="about-content">
      <div class="bio">
        <h2>Mon parcours</h2>
        <p>
          Passionné par la technologie depuis toujours, j'ai entrepris une reconversion professionnelle 
          vers le développement web et logiciel. Formé à la <strong>Wild Code School</strong>, je poursuis 
          actuellement un parcours <strong>Concepteur Développeur Logiciel</strong> chez OpenClassrooms.
        </p>
        
        <h2>Mes compétences techniques</h2>
        <div class="skills">
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
        </div>
      </div>
      
      <div class="contact">
        <h2>Me contacter</h2>
        <p>Vous pouvez me joindre par email ou télécharger mon CV :</p>
        
        <div class="contact-info">
          <p><strong>Email :</strong> <a href="mailto:davidabruzzogames@gmail.com">davidabruzzogames@gmail.com</a></p>
          <p><strong>GitHub :</strong> <a href="https://github.com/davidabruzzo" target="_blank">github.com/davidabruzzo</a></p>
          <p><strong>LinkedIn :</strong> <a href="https://www.linkedin.com/in/david-abruzzo" target="_blank">linkedin.com/in/david-abruzzo</a></p>
        </div>
        
        <router-link to="/cv" class="download-btn">
          📄 Voir mon CV
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Import du fichier CSS séparé */
@import '../styles/components/About.css';
</style>
