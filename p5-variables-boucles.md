# Variables et boucles 

## Qu'est-ce qu'une variable ? 

Une variable stocke une valeur en mémoire afin qu’elle puisse être utilisée par la suite dans un programme.
Une variable peut être utilisée plusieurs fois dans un programme.

La raison principale pour utiliser des variables est d’éviter de répéter sa valeur dans le code. Le code est plus facile à mettre à jour grâce aux variables.

Par exemple, nous pouvons stocker dans l'exemple du Tic Tac Toe, nous pouvons stocker la taille de chaque carré.

```javascript
var size = 900;
var square = size / 2;

function setup(){
    createCanvas(size, size);
}

function draw(){
    stroke(0); // Ligne blanche 
    strokeWeight(10); // Taille de 10 

    line(square, 0, square, square);
    line(square * 2, 0, square * 2, square *);
}
```

## Créer une variable 
Pour créer une variable, il faut lui donner un nom et être précédée de *var*, elle doit être suivie par sa valeur initiale après le "=". 

- Les variables peuvent être placées à l'extérieur de *setup* et *draw*

- Il est possible d'utiliser les opérateurs +, -, / et * (voir exemple ci dessus)

## Les itérations 

Vous pouvez utiliser la boucle *for* pour boucler dans le code.

Par exemple, nous pouvons utiliser la fonction suivante pour dessiner créer un dessin abstrait 

```javascript
function draw(){
    for(x = 30; x < width >)
}
```

## Le random 

Voir [exemples/7.js](/code/exemples/7.js)

