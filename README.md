### README - Application Todo List


## Introduction

Cette application est une simple liste de tâches basée sur le navigateur qui permet aux utilisateurs d'ajouter, de cocher, de décocher et de supprimer des tâches. Elle utilise `localStorage` pour sauvegarder les tâches afin qu'elles soient persistantes même après le rechargement de la page.

## Fichiers

- **index.html** : Contient la structure HTML de la page.
- **css/styles.css** : Contient le style CSS de l'application.
- **js/script.js** : Contient le code JavaScript qui gère la logique de l'application.

## Fonctionnalités

### HTML (index.html)

1. **Formulaire d'ajout de tâche** : Permet d'ajouter une nouvelle tâche.
2. **Bouton "Tout supprimer"** : Supprime toutes les tâches.
3. **Statistiques des tâches** : Affiche le nombre total de tâches, les tâches actives et les tâches complétées.
4. **Liste des tâches** : Affiche toutes les tâches ajoutées.

### JavaScript (js/script.js)

1. **Charger les tâches** : Charge les tâches à partir du `localStorage`.
2. **Ajouter une tâche** : Ajoute une nouvelle tâche à la liste et au `localStorage`.
3. **Basculer l'état de complétion** : Permet de cocher ou décocher une tâche.
4. **Supprimer une tâche** : Supprime une tâche de la liste et du `localStorage`.
5. **Supprimer toutes les tâches** : Vide la liste des tâches et le `localStorage`.
6. **Mise à jour des statistiques** : Calcule et affiche le nombre total de tâches, les tâches actives et les tâches complétées.

## Utilisation

1. **Ajouter une tâche** : Saisissez une tâche dans le champ de texte et cliquez sur "Ajouter".
2. **Cocher/Décocher une tâche** : Cliquez sur la case à cocher à côté d'une tâche.
3. **Supprimer une tâche** : Cliquez sur le bouton "×" à côté d'une tâche.
4. **Supprimer toutes les tâches** : Cliquez sur le bouton "Tout supprimer".

## Conclusion

Cette application Todo List est simple et efficace pour gérer vos tâches quotidiennes. Elle conserve vos tâches même après avoir fermé le navigateur grâce à l'utilisation de `localStorage`. 
