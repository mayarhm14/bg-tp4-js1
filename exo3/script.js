"use strict";
// Le mode strict est présenté à la diapo 52.
// Fonction (diapo 46) : A affiche le statut d'admission de chaque étudiant.
function A(){
   // Tableau de tableaux (diapo 39) : numéro, prénom, nom, note et autre donnée.
   const etudiants = [
    [1000, "JOHN", "DOE", 14, 5],
    [2000, "BOB", "CARLTON", 7, 1],
    [3000, "RAYANE", "SMITH", 13, 3]
  ];
  // Boucle for...of (diapo 45) : parcourt les étudiants un par un.
  for(const etudiant of etudiants){
    // Condition if...else (diapo 43) : B vérifie si la note (indice 3) atteint 10.
    if(B(etudiant[3])==true){
         // L'indice 0 correspond au numéro de l'étudiant.
         console.log(etudiant[0], ": ADMIS");
    }
    else{
        // Une note inférieure à 10 entraîne le statut ajourné.
        console.log(etudiant[0], ": AJOURNÉ");
    }
  }
}
// Fonction (diapo 46) : renvoie true si la note est >= 10 (comparaison, diapo 42).
function B(note){
    return note>=10;
}
