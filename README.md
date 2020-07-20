# Konexio_Counter
App.js
Créer un composant App qui affiche le texte Counter dans une balise h1
Créer un state qui s’appelera count avec une valeur par défaut de 1
Ajouter le state dans la page dans une balise h2
Créer 1 bouton +
Le bouton + aura un attribut onClick avec la référence à la méthode this.incrementCount
Créer la méthode incrementCount incrémentera le state
Binder la méthode dans le constructeur (constructor)
Faire la même chose pour la décrémentation
components/Counter.js
Une fois que le code fonctionne avec le + et le -, vous pouvez passer à cette étape.

Créer le composant ./components/Counter.js
Dans le render, mettre dans une div les balises
qui contiennent le state du count de l’App et,
celles qui contiennent les 2 boutons
Comme les state du parent sont les props de l’enfant, changer le state en props et remplacer les méthodes this.incrementCount par this.props.incrementFn et this.decrementCount par this.props.decrementFn
Importer ce composant dans l’App
Ajouter le au render de l’App et ajouter les attributs :
incrementFn avec la valeur this.incrementCount
decrementFn avec la valeur this.decrementCount
count avec la valeur this.state.count
Bonus 1
Faire en sorte que le compteur ne descende jamais en dessous de 0
Bonus 2
Créer deux compteurs qui seront dépendant de l’un et de l’autre.

Le compteur 1 ne sera jamais au dessus du compteur 2
Quand on incrémente le compteur 1 et qu’il a la même valeur que le compteur 2, le compteur 2 s’incrémente aussi
Quand on décrémente le compteur 2 et qu’il a la même valeur que le compteur 1, le compteur 1 se décrémente aussi
Les compteurs ne descendront jamais en dessous de 0 et ne monteront jamais au dessus de 100