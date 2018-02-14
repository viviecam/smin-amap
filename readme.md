# Rendu Final Camille VIVIER

Ce que j'ai réussi à faire (vos consignes + mes rajouts):
 - En cliquant sur ajouter au panier, le veggie s'ajoute dans Order.
 - Format du prix
 - On peut rajouter plusieurs "items" (visuellement, des kg) de chaque veggie en cliquant à nouveau sur ajouter au panier.
 - Ajout de nbAvailable dans les samplesVeggies, pour donner le nombre d'item disponible de chaque veggie.
 - Si l'on atteint le nombre maximum d'items disponible, le bouton "Ajouter au panier" devient disabled et "Plus en stock", on ne peut donc plus rajouter des items supplémentaires. --> Note : ne marche pas si le nbAvailable est de 1, car la condition qui modifie le statut du veggie, et donc l'affichage du "Plus de sotck, fait partie de la condition dans laquelle on vérifie si le légume existe déjà dans notre commande (pour rajouter plusieurs items) (voir fonction addVeggieToOrder dans app). J'y ai réfléchi mais je n'ai pas réussi à contourner le problème.
 - Ajout d'un icone " - " pour chaque veggie dans la commande, qui permet de retirer kg par kg (item par item) du veggie
 - Si l'on avait ajouté dans order le nombre maximum d'item d'un veggie, et donc que le signe plus en stock était affiché, si l'on retire un item, alors le bouton redevient "Ajouter au panier"
 - Local storage en place, les veggies ajoutés à la commande sont sauvegardés si l'on recharge la page
 - Si l'on enlève des items d'un veggie, le local storage est updaté
 - Bouton "Vider le panier" qui vide le state ORDER et vide le local storage, et on réinitialise les status des veggies disponibles, pour cacher le "Plus de stock"
 - Si l'on avait ajouté le nombre maximum d'un veggie, et donc que le signe plus en stock était affiché sur ce veggie, si l'on recharge la page, puis que l'on clique à nouveau sur charger des légumes, le légume "plus en stock" aura bien son signe "Plus de stock" affiché --> Note : cela ne marche que pour les sample veggies (voir fonctions loadSample dans app), car la "vérification" du nombre d'item dans la commande est faite dans cette fonction, il faudrait l'adapter dans le cas ou l'on ajoute un veggie via le formulaire (dans le cas ou ce veggie ajouté est lui aussi stocké dans le local storage, ce qui n'est pas le cas)


Sur une autre branche "devEnPlus", j'ai tenté les choses suivantes, sans que cela soit parfaitement fonctionnel : 
 - Ajouter par défaut, tous les veggies dans le state order, et les masquer si le nombre d'item est égal à 0
 --> Mon problème vient du prix, car, en voulant ajouter tous les veggies, je "me sers" dans sampleVeggie, qui contient les prix unitaires de chaque veggie, et donc par défaut, lorsque l'on charge l'application, meme si il y a "0 kg" de chaque veggie, il y a bien le prix pour un item. J'ai voulu donc réinitialiser le prix à 0 avant d'ajouter tous les veggies dans le state order, or j'effectue cette dernière manipulation dans le componentDidMount (pour ensuite ajouter les éléments contenus dans le local storage), mais ce n'est pas forcément pertinant, car ce qu'il faudrait, c'est une fonction qui se lance uniquement au chargement de la page, et non à chaque fois que le composant est modifié, ce qui à pour conséquence de garder le prix à 0 même si l'on ajoute des items.
    A ce stade, je ne sais même plus dire exactement ce qui marche ou non sur cette tentative, j'ai essayé, vraiment, d'aller au bout, mais la il est tard et je vais me coucher xD


# React pour les SMIN — Projet AMAP

Ce repo contient les fichiers de départ pour notre projet. 

## Pour commencer

1. cd dans `projet-amap` et suivez le cours

Le dossier `solutions-pas-a-pas` contient les réponses qui seront ajoutées au fir et à mesure de l'avancement du cours. Donc si vous avez besoin des réponses, et qu'elles sont disponibles, copiez le contenu du dossier de réponses approprié dans votre dossier projet `projet-amap`.

### Utilisation du projet

Pour commencer installez les dépendences,
`npm install` 

Les commandes disponibles sont
`npm start` pour lancer le serveur
`npm run watch` pour lancer le serveur
`npm run build` pour générer un build du projet

* JS Syntax Highlighting → [Babel](https://packagecontrol.io/packages/Babel)
* HTML + raccourcis CSS → [Emmet](https://packagecontrol.io/packages/Emmet) — 
