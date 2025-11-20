let prompt = require("prompt-sync")();
// function RemplirTab() {
//   // on prend le tableau en paramètre
//   let tab = [];
//   for (let i = 0; i < 5; i++) {
//     let name = prompt("give me your name");
//     tab.push(name);
//   }
//   console.log(tab);
// }
// RemplirTab();

// challenge 2
// let tab = [23, 0, 0, 0];
// let somme = 0;
// function sommeTableau() {
//   for (let i = 0; i < tab.length; i++) {
//     somme = somme + tab[i];
//   }
//   console.log("la sommme est " + somme);
// }
// sommeTableau();

// challenge 2 method 2

// let tab = [23, 1, 0, 0];
// // let somme = 0;
// function sommeTableau() {
//   let somme = tab.reduce((a, b) => a - b);
//   console.log("la sommme est " + somme);
// }
// sommeTableau();

// challenge 3

// let tab = [23, 327, 1000, 0];
// function maxTableau() {
//   //   let maxElement = Math.max(...tab);
//   //   console.log("good work" + maxElement);

//   // or
//   let maxelement = tab[0];

//   for (let i = 0; i < tab.length; i++) {
//     if (tab[i] > maxelement) {
//       maxelement = tab[i];
//     }
//   }
//   console.log("The maximum value is: " + maxelement);
// }
// maxTableau();

// عندما تكون مستعدًا للتفتح
// أعظم تضحية
// لا مزيد من القتال
// لا مزيد من الإصلاح
// ستدرك أخيرًا معنى أن تحب بكل ما هو مُقدّر لهم حتى لو لم تستطع مشاركتهم ذلك
// challenge 4
// function CompterOccurrences() {
//   let num = Number(prompt("entre un number"));
//   let valeur = 0;
//   let tab = [2, 3, 5, 6, 7, 8, 4, 3, 1, 2];
//   for (let i = 0; i < tab.length; i++) {
//     if (tab[i] === num) {
//       valeur++;
//     }
//   }
//   if (valeur > 0) {
//     console.log("le nombre est repeter " + valeur);
//   } else {
//     console.log(num + " n'est pas repeter");
//   }
// }
// CompterOccurrences();

// challenge 5
// function filtrerPairs() {
//   let array = [12, 21, 21, 32, 43, 54, 6, 6, 26, 422];
//   let tab = [];
//   for (let a in array) {
//     if (array[a] % 2 == 0) {
//       tab.push(array[a]);
//     }
//   }
//   console.log(tab);
// }
// filtrerPairs();

// challenge 6
// function produitTableau() {
//   let tab = [2, 3, 3, 1, 1, 1];
//   let elementMulti = tab.reduce((a, b) => a * b, 1);
//   console.log(elementMulti);
// }
// produitTableau();
// challenge 7
// function MoyNote() {
//   let tab = [2, 3, 3, 1, 1, 1];
//   let somme = tab.reduce((a, b) => a + b);
//   console.log(somme);
// }
// MoyNote();

// challenge 8
// function doubler() {
//   let tab = [2, 3, 3, 1, 1, 1];
//   let multupl = tab.map((num) => num * 2);
//   console.log(multupl);
// }
// doubler();

// challenge 9
// function Fusionner() {
//   let tab1 = [1, 3, 5, 67, 7, 8];
//   let tab2 = [13232, 3, 32, 67, 232337, 8];
//   let tabfusionner = tab1.concat(tab2);
//   console.log(tabfusionner);
// }
// Fusionner();

// challeng 10
function supprimerDoublons(tab) {
  let resultat = [];
  for (let element of tab) {
    if (!resultat.includes(element)) {
      resultat.push(element);
    }
  }
  return resultat;
}
// console.log(supprimerDoublons([2, 5, 67, 7, 7, 9, 4, 67, 3]));
// method 2
function supprimerDoublons(tab) {
  return [...new Set(tab)];
}
// console.log(supprimerDoublons([2, 5, 67, 7, 7, 9, 4, 67, 3]));

// challenge 11
function tableMultiplication(n) {
  let resultat = [];

  for (let i = 1; i <= 10; i++) {
    resultat.push(n * i);
  }

  return resultat;
}
// console.log(tableMultiplication(3));
//challenge 12
function motsLongs(tabMots, longueur) {
  let resultat = [];

  for (let mot of tabMots) {
    if (mot.length >= longueur) {
      resultat.push(mot);
    }
  }

  return resultat;
}
// console.log(motsLongs(["chat", "éléphant", "souris", "lion"], 5));
