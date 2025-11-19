const prompt = require("prompt-sync")();
// challenge 4
// let name = prompt("give me your name ");
// let action = ["tu as decouvrir", "attention a", "ne refuse pas "];
// let objet = ["une opportunite", "une pizza", "un bugs", "un pigeon"];
// let situation = ["au travail", "en ligne", "dans tes reves"];
// //Math.random() → génère un nombre entre 0 et 1
// // Math.random() * actions.length → nombre entre 0 et la taille du tableau
// // Math.floor(...) → arrondit vers le bas pour obtenir un entier
// // actions[randomIndex] → prend l’élément à cet index

// // let index = Math.floor(Math.random() * (action, objet, situation).length);
// // let act = action[index];f
// // i want to do a function do all this for good structure
// function Random(array) {
//   return array[Math.floor(Math.random() * array.length)];
// }
// let act = Random(action);
// let obj = Random(objet);
// let situatio = Random(situation);
// console.log(act, obj, situatio);

// challenge 5
// function DetecSymetrie() {
//   let tab = [];
//   for (let i = 0; i < 5; i++) {
//     let name = prompt("gave me some number or caracter");
//     tab.push(name);
//   }
//   console.log(tab);
//   if (tab[0] == tab[4] && tab[1] == tab[3]) {
//     console.log("Symétrique");
//   } else {
//     console.log("Non symétrique");
//   }
// }
// DetecSymetrie();

// Challenge 6
function EquilPanier() {
  let tab = [];
  for (let i = 1; i <= 5; i++) {
    let somme = 0;
    let prix = prompt(`ecrire le prix numero ${i} `);
    somme = somme + prix;
    tab.push(prix);
    var moyenne = somme / tab.length;
  }
  console.log("Prix saisis :", tab);
  console.log("Moyenne :", moyenne);

  if (tab[tab.length - 1] > moyenne) {
    console.log("Ce produit est trop cher");
  } else {
    console.log("Prix raisonnable");
  }
}
EquilPanier();
