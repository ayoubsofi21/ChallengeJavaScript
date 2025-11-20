// challenge 1
// let obj = { marque: "BM", modele: 7, annees: 2003 };
// obj.annees = 3000;
// obj.couleur = "red";
// delete obj.modele;
// console.log(obj);

// challenge 2

// let etudiant = { nom: "ayoub", age: 21 };
// function sePresenter() {
//   console.log(
//     `Bonjour je m'appele ${etudiant.nom} et j'ai  ${etudiant.age} ans `
//   );
// }
// sePresenter();
// let personne = { "date naissance": 1839, ville: "kasba tadla" };
// for (let key in personne) {
//   console.log(`${key} de ${personne[key]}`);
// }

// let classe = {
//   etudiant: ["ahmed", "housam", "ayoub"],
// };

// for (let etu in classe) {
//   console.log(`===> ${etu} ${classe[etu]}`);
// }

// let livres = [
//   {
//     titre: "the 7 habits of effective people",
//     auteur: "rover",
//     annee: 2007,
//   },
//   {
//     titre: "rich dad poor dad",
//     auteur: "rover",
//     annee: 2015,
//   },
// ];
// for (let lv in livres) {
//   console.log(` les titre est${lv} ${livres[lv].titre}`);
// }
// question 4
// const prompt = require("prompt-sync")();
// let livres = [
//   { titre: "the 7 habits of effective people", auteur: "rover", annee: 2007 },
//   { titre: "rich dad poor dad", auteur: "rover", annee: 2015 },
// ];
// function trouverLivre(livres) {
//   let name = prompt("Donne un titre :");
//   let trouve = livres.find((l) => l.titre === name); // trouve le livre
//   if (trouve) {
//     console.log(`Auteur : ${trouve.auteur} ${trouve.annee}`);
//   } else {
//     console.log("Ce livre n'est pas ici.");
//   }
// }
// trouverLivre(livres);
// challenge 3
const prompt = require("prompt-sync")();
// // 1
// let entreprise = {
//   rue: "120 zan9at asa3ada",
//   ville: "kasba tadla",
//   codePostal: 23350,
// };
// console.log(entreprise.ville);
// let produit = [
//   { nom: "gallete", prix: 1, quantite: 100 },
//   { nom: "4riba", prix: 2, quantite: 321 },
// ];
// let tab = [];
// for (let p in produit) {
//   var priQuan = produit[p].prix * produit[p].quantite;
//   tab.push(`le produit ${produit[p].nom} est avais PrixQuantite ${priQuan}`);
// }
// console.log(tab);
// question 3
// let nom1 = prompt("donner moi votre nom");
// class Animal {
//   constructor(nom, type) {
//     this.nom = nom1;
//     this.type = type;
//   }
//   parler(nom) {
//     console.log("hello " + this.nom);
//   }
// }
// const name = new Animal();
// name.parler();
// console.log();

// question 4

// let employes = [
//   { nom: "housam", salaire: 10 },
//   { nom: "ayoub", salaire: 30220 },
//   { nom: "sofi", salaire: 39238 },
//   { nom: "walid", salaire: 1000 },
// ];

// let salairegood = employes.filter((user) => user.salaire > 10000);

// // récupérer juste les noms
// let nomSal = salairegood.map((user) => user.nom);

// console.log(nomSal);

// question 5

// function Cloner() {
//   let obj = {
//     nom: "ayoub",
//     prenom: "sofi",
//   };
//   let copieObj = structuredClone(obj);
// //    copieObj = { ...obj };
//   console.log(copieObj);
// }
// Cloner();
