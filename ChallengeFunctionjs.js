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
function CompterOccurrences() {
  let num = Number(prompt("entre un number"));
  let valeur = 0;
  let tab = [2, 3, 5, 6, 7, 8, 4, 3, 1, 2];
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] === num) {
      valeur++;
    }
  }
  if (valeur > 0) {
    console.log("le nombre est repeter " + valeur);
  } else {
    console.log("wl");
  }
}
CompterOccurrences();
