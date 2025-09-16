<template>
  <section class="home">
    <h1>David Abruzzo</h1>
    <h2>Développeur Web & Logiciel</h2>
    <p>
      Passionné par le développement d'applications modernes, formé à la Wild Code School chez OpenClassrooms,
       je suis titulaire d'un titre de Concepteur Développeur Logiciel niveau 2 (Bac +3/4) ainsi que d'un titre de Développeur Web et Web Mobile niveau 3 (Bac +2).
    </p>
    <p>
      Je travaille avec React, Node.js, C#, .NET, SQL Server, et j’explore aussi Unity et Blender pour des projets créatifs.
    </p>
    <div class="action-links">
      <a href="https://www.youtube.com/@davidabruzzo7327" target="_blank" class="action-btn btn-youtube">
        🎥 Soutenances de projets en vidéo
      </a>
      <a href="https://www.linkedin.com/in/david-abruzzo-39a145101" target="_blank" class="action-btn btn-linkedin">
        🔗 Profil LinkedIn
      </a>
      <router-link to="/cv" class="action-btn btn-cv">
        📄 Voir mon CV
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
// Page d'accueil du portfolio
</script>

<style scoped>
.home {
  text-align: left;
  padding: var(--spacing-3xl) var(--spacing-xl);
  max-width: 800px;
  margin: 0 auto;
}

.home h1 {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-sm);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.home h2 {
  font-size: var(--font-size-2xl);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
  font-weight: var(--font-weight-medium);
}

.home p {
  margin: var(--spacing-lg) 0;
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-secondary);
}

.action-links {
  margin-top: var(--spacing-2xl);
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  justify-content: center;
}

.action-btn {
  display: inline-block;
  padding: var(--spacing-md) var(--spacing-xl);
  color: var(--color-text-inverse);
  text-decoration: none;
  border-radius: var(--radius-md);
  font-weight: var(--font-weight-medium);
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-md);
  border: 2px solid transparent;
}

.action-btn:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-xl);
}

.btn-youtube {
  background: var(--gradient-accent);
}

.btn-youtube:hover {
  background: linear-gradient(135deg, #c0392b, #a93226);
}

.btn-linkedin {
  background: linear-gradient(135deg, #0077b5, #005582);
}

.btn-linkedin:hover {
  background: linear-gradient(135deg, #005582, #004066);
}

.btn-cv {
  background: var(--gradient-primary);
  position: relative;
}

.btn-cv:hover {
  background: linear-gradient(135deg, var(--color-primary-dark), #1f5582);
}

.btn-cv::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #f39c12, #e67e22, #e74c3c, #9b59b6);
  border-radius: var(--radius-md);
  z-index: -1;
  animation: pulse-border 2s infinite;
}



@keyframes pulse-border {
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
  .home {
    padding: var(--spacing-2xl) var(--spacing-md);
  }
  
  .home h1 {
    font-size: var(--font-size-3xl);
  }
  
  .home h2 {
    font-size: var(--font-size-xl);
  }
  
  .home p {
    font-size: var(--font-size-base);
  }
  
  .action-links {
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-md);
  }
  
  .action-btn {
    width: 100%;
    max-width: 280px;
    text-align: center;
    padding: var(--spacing-md);
  }
}
</style>
