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
/* Import du fichier CSS séparé */
@import '../styles/components/Home.css';
</style>
