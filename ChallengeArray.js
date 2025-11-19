let prompt = require("prompt-sync")();

// challenge 1
// let prompt = require("prompt-sync")();
// let tab = [];
// for (let i = 1; i <= 5; i++) {
//   let numero = prompt(`entrer un nombre : ${i} `);
//   tab.push(numero);
// }
// let affich = tab.reverse("");
// console.log(affich);

// challenge 2
let tab = [];
// let somme = [];
function SomemTab() {
  for (let i = 1; i <= 10; i++) {
    let numero = prompt(`entrer un nombre : ${i}  `);
    tab.puch(numero);
    // moyenne = somme / 10;
  }
  const sum = tab.reduce((acc, cur) => acc + cur, 0);
  const moyenne = sum / tab.length;
  console.log("La somme est : " + sum);
  console.log("La moyenne est : " + moyenne);
}
// console.log("la somme est " + sum);

SomemTab();
