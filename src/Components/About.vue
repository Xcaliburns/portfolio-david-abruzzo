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
.about {
  max-width: 1000px;
  margin: 0 auto;
  padding: var(--spacing-3xl) var(--spacing-xl);
}

.about-content {
  display: grid;
  gap: var(--spacing-2xl);
}

.bio h2, .contact h2 {
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
  border-bottom: 2px solid var(--color-primary);
  padding-bottom: var(--spacing-sm);
}

.skills {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-lg);
}

.skill-category {
  background: var(--color-background-secondary);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.skill-category h3 {
  color: var(--color-primary);
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

.contact {
  background: var(--color-background-secondary);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.contact-info p {
  margin: var(--spacing-sm) 0;
}

.download-btn {
  display: inline-block;
  margin-top: var(--spacing-lg);
  padding: var(--spacing-md) var(--spacing-lg);
  background: var(--gradient-primary);
  color: var(--color-text-inverse);
  text-decoration: none;
  border-radius: var(--radius-md);
  font-weight: var(--font-weight-bold);
  transition: all var(--transition-normal);
  position: relative;
  border: 2px solid transparent;
}

.download-btn:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-xl);
  background: linear-gradient(135deg, var(--color-primary-dark), #1f5582);
}

.download-btn::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #f39c12, #e67e22, #e74c3c, #9b59b6);
  border-radius: var(--radius-md);
  z-index: -1;
  animation: pulse-border-about 2s infinite;
}

@keyframes pulse-border-about {
  0%, 100% {
    opacity: 0.7;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
}

@media (max-width: 768px) {
  .skills {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
  
  .about {
    padding: var(--spacing-xl) var(--spacing-md);
  }
}
</style>
