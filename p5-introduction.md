# Découverte de P5.js

## On code avec quoi ? 

Plusieurs solutions existent pour coder en P5.js

- Grâce à l'éditeur de code en ligne https://alpha.editor.p5js.org/ ou celui de [OpenProcessins](openprocessing.org)
- En utilisant votre environnement de développement en local 

Dans la suite de ce cours, nous utiliserons votre environnement local (VS Code et Google Chrome recommandé)

### Exemple 1
Ouvrez le fichier index.html et décommentez la ligne suivante: 
```html
<script src="exemples/1.js"></script>
```
[Lien vers le fichier javascript](/code/exemples/1.js)

#### Explication du code 

```javascript 
function setup(){}
```

Cette partie représente la configuration de départ, **l'état initial**, elle ne va s'éxécuter qu'une seule fois contraîtement à la fonction **draw** qui s'exécute en boucle. Par exemple, la fonction createCanvas défini la taille de la zone de travail (800px par 600px)

```javascript 
function draw(){}
```

La fonction draw est exécutée en boucle, tout ce qui s'y trouve est dessiné en boucle par le programme. 

### Exemples 2,3,4

## Dessiner 
Nous pouvons imaginer la feuille P5.js comme une feuille à carreaux de X pixels de long sur X pixels de large.

🤔 Notez que les éléments s'affichent du haut vers le bas.

## Les contours 

```javascript
// La fonction stroke() définit la couleur du contour
stroke(100);
// La fonction strokeWeight définit la taille du contour
strokeWeight();
// La fonction noStroke() efface le contour 
noStroke();
```

## Colorier
p5.js utilise le niveau de gris (256, de 0 à 255), RGB et RGBA pour la gestion des couleurs.
Rappel: 0: aucune lumière, 255 pleine lumière.

Il suffit de définir un code RGB dans la fonction fill() pour changer la couleur des instructions dans la suite du programme. 

Par exemple 
```javascript
fill(255,30,50);
ellipse(500, 480, 110, 110);
```

## Documentation
Pour en savoir plus sur les fonctions de base : https://p5js.org/reference/

## Exercice en groupe
[Exercice du tic-tac-toe avec P5.js](/code/exercices/tictactoe.md)

## Documentation
[Documentation P5.js](https://p5js.org/reference/)
