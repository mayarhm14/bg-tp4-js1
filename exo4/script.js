"use strict";
// Le mode strict est présenté à la diapo 52.

// 1. Objet et propriétés (diapo 40) : nom, prix et quantité du produit.
const produit = {
  nom: "Cahier",
  prix: 2,
  quantite: 10
};

// Multiplication, opérateur arithmétique vu à la diapo 42.
const valeurProduit = produit.prix * produit.quantite;

// Affichage dans la console avec console.log (diapo 34).
console.log("1. Produit :", produit.nom ," son prix :", produit.prix, "sa quantité :" , produit.quantite);
console.log("Valeur de son stock :", valeurProduit, "€");


// 2. Tableau (diapo 39) contenant cinq objets produit (diapos 40-41).
const produits = [
  { nom: "Cahier", prix: 2, quantite: 10 },
  { nom: "Stylo", prix: 1.5, quantite: 20 },
  { nom: "Gomme", prix: 0.8, quantite: 15 },
  { nom: "Règle", prix: 1.2, quantite: 8 },
  { nom: "Trousse", prix: 5, quantite: 4 }
];

// reduce (tableaux, diapo 39) et fonction fléchée (diapo 47) additionnent les prix.
const sommePrix = produits.reduce((somme, p) => somme + p.prix, 0);
const prixMoyen = sommePrix / produits.length;

// Affiche le prix moyen puis un titre pour les produits plus chers que la moyenne.
console.log("\n2. Prix moyen du catalogue :", prixMoyen, "€");
console.log("Produits dont le prix dépasse le prix moyen :");

// filter (diapo 39) sélectionne les produits ; callbacks fléchées (diapos 47-48).
// forEach parcourt les résultats (diapo 45) et les affiche dans la console (diapo 34).
produits
  .filter(p => p.prix > prixMoyen)
  .forEach(p => console.log(p.nom, "-", p.prix, "€"));


// 3. reduce (méthode de tableau, diapo 39) cumule les articles et la valeur du stock.
const totaux = produits.reduce(
  (resultat, p) => {
    // Additionne les quantités et prix × quantité (opérateurs, diapo 42).
    resultat.articles += p.quantite;
    // Ajoute prix × quantité à la valeur globale du stock.
    resultat.valeurStock += p.prix * p.quantite;
    // Renvoie l'accumulateur mis à jour pour le produit suivant.
    return resultat;
  },
  // Valeurs initiales de l'accumulateur.
  { articles: 0, valeurStock: 0 }
);

// Affiche les deux totaux calculés.
console.log("\n3. Nombre total d'articles :", totaux.articles);
console.log("Valeur globale du stock :", totaux.valeurStock, "€");


// 4. Fonction réutilisable avec paramètre et return (diapo 46), objet en paramètre (diapo 40).
function calculerValeurStock(produit) {
  return produit.prix * produit.quantite;
}

// forEach parcourt le tableau (diapo 45) ; la callback fléchée est vue diapos 47-48.
console.log("\n4. Valeur du stock de plusieurs produits :");

produits.forEach(p => {
  console.log(p.nom, ":", calculerValeurStock(p), "€");
});


// 5. Callback (diapo 48) : reçoit une fonction à appliquer à chaque produit.
function traiterCatalogue(callback) {
  produits.forEach(callback);
}

// Callback fléchée (diapos 47-48) : affiche le nom de chaque produit.
console.log("\n5. Noms des produits :");
traiterCatalogue(p => console.log(p.nom));

// Callback fléchée (diapos 47-48) : affiche le prix de chaque produit.
console.log("Prix des produits :");
traiterCatalogue(p => console.log(p.prix, "€"));
