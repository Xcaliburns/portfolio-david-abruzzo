# 🎥 Guide d'intégration des vidéos YouTube

## Comment ajouter tes vidéos spécifiques

### Étape 1 : Récupérer l'ID de tes vidéos YouTube

Pour chaque vidéo sur ta chaîne, l'URL ressemble à :
```
https://www.youtube.com/watch?v=KUJCyjT9TX4
```

L'**ID de la vidéo** est la partie après `v=` → `KUJCyjT9TX4`

### Étape 2 : Me fournir la liste

Donne-moi tes vidéos dans ce format :

```
1. Jeu Unity 2D : KUJCyjT9TX4 (déjà intégré)
2. API .NET : [TON_VIDEO_ID]
3. App React/Node.js : [TON_VIDEO_ID]
4. Autre projet : [TON_VIDEO_ID]
```

### Étape 3 : Ce que je ferai automatiquement

Pour chaque vidéo, je remplacerai :

**Avant :**
```html
<div class="video-placeholder">
  <h3>🎥 Vidéo de démonstration</h3>
  <p>Fournir le lien YouTube...</p>
</div>
```

**Après :**
```html
<div class="video-container">
  <iframe 
    src="https://www.youtube.com/embed/[TON_VIDEO_ID]" 
    title="Titre de ta vidéo"
    frameborder="0" 
    allowfullscreen>
  </iframe>
</div>
```

### Étape 4 : Résultat final

Chaque projet aura :
- ✅ **Vidéo intégrée** (lecteur YouTube direct)
- ✅ **Lien vers la vidéo** (ouverture en nouvel onglet)
- ✅ **Code source GitHub** (quand tu me donneras les liens)
- ✅ **Images/captures** (quand tu les ajouteras)

## Exemple complet

Si tu me dis : "API .NET : dQw4w9WgXcQ"

Je transformerai automatiquement le placeholder rouge en lecteur vidéo fonctionnel !

---
**Une fois que tu me donnes les IDs, l'intégration prend 2 minutes ! 🚀**