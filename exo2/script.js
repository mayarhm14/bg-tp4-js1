"use strict";
// Le mode strict (diapo 52) aide à repérer les erreurs.

// Tableau (diapo 39) : F1 crée puis affiche trois noms dans la console (diapo 34).
function F1(){
    const tableauEtudiant=['Etudiant1','Etudiant2','Etudiant3'];
    console.log(tableauEtudiant);
};

// Objet et propriétés (diapo 40) : F2 crée puis affiche un étudiant.
function F2(){
    const objetEtudiant={nom:'John',prenom:'Doe',age:30};
    console.log(objetEtudiant);
};

// Tableau d'objets (diapo 41) : F3 crée puis affiche trois étudiants.
function F3(){
    const tableauObjetsEtudiants=[
        // Chaque objet (diapo 40) contient le nom, le prénom et l'âge.
        {nom:'nom1',prenom:'prenom1',age:21},
        {nom:'nom2',prenom:'prenom2',age:22},
        {nom:'nom3',prenom:'prenom3',age:23}
    ];
    console.log(tableauObjetsEtudiants);
}
