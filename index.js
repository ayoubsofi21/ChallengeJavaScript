// Challange number 1
// const prompt = require('prompt-sync')();
function AffichageInfo(){
    let nom=prompt('entre votre nom ');
    let prenom=prompt('entre votre prenom ');
    let age=prompt('entre votre age ');
    let sexe=prompt('entre votre sexe ');
    let numero=prompt('entre votre numero ');
 console.log('hello everyone my name is ' + nom +"  "+ prenom + ", I'm "+age+"years old "+","+sexe+","+"and my number is "+numero);
}
// AffichageInfo();

// Challange 2
// const prompt = require('prompt-sync')();
function Conversion(){
    var temp=prompt('donner moi la température ');
    var F=(temp*1.8)+32;
    console.log("la convertit en Fahrenheit"+F)

}
// Conversion();

// Challange 
// const prompt = require('prompt-sync')();
function Echange(){
    let A=21 ;
    let B= 41 ;
    let C= 72 ;
    var VSecondaire =A ;
    A=B;
    B=C;
    C=VSecondaire;
    console.log(A,B,C);
}
// Echange();

// chanllange 4
// const prompt = require('prompt-sync')();
function CalculAfficher(){
    let a = parseInt(prompt('entrer le nombre a '));
    let b = parseInt(prompt('entrer le nombre b '));
    let addition= a + b;
    let soustraction= a-b;
    let multiplication =a*b;
    console.log("l'addition est "+ addition +" soustraction "+ soustraction +" multiplication "+multiplication);
}
// CalculAfficher();

// challange 5 
// const prompt = require('prompt-sync')();
function someMoyenne(){
    let n1 = parseFloat(prompt("Entrez le premier nombre :"));
    let n2 = parseFloat(prompt("Entrez le deuxième nombre :"));
    let n3 = parseFloat(prompt("Entrez le troisième nombre :"));
    let n4 = parseFloat(prompt("Entrez le quatrième nombre :"));
    let somme = n1 + n2 + n3 + n4;
    let moyenne = somme / 4;
    console.log("la moyenne est "+moyenne);
}
// someMoyenne();

//challange 6
// const prompt = require('prompt-sync')();
// let distance =parseFloat(prompt('entrer la distance de a parcour en Km'));
// let vitesse =parseFloat(prompt('entrer la vitesse '));

// let temps=(distance/vitesse);
// console.log("Le temps de trajet est de  " + temps +"heures");


// challange 7
// const prompt = require('prompt-sync')();
// let rayon =parseFloat(prompt('entrer la rayon un cercle'));
// let c=2*Math.PI*rayon;
// console.log("La circonférence est "+c);

// challange 8
// const prompt = require('prompt-sync')();
// let nombre = prompt("Entrez un nombre entier à 3 chiffres :");
// if (nombre.length === 3 && !isNaN(nombre)) {
//     let splitary = nombre.split('');
//     let inverse=splitary.reverse();
//     let join=inverse.join('');
//     // let inverse = nombre.split('').reverse().join('');
//     console.log("l'affichage  de  inverse "+join);
// }else {
//     console.log("Veuillez entrer un nombre entier à 3 chiffres ");
// }

// challenge 9
// const prompt =require('prompt-sync')();
// function ConversionToMil(){
//     let km=prompt('entre une distance en kilomètres ');
//     let mile=km/1.609;
//     console.log('la distance en mile est '+ mile);
// }
// ConversionToMil();

// challange 9
// const  prompt=require('prompt-sync')();
// let euro=prompt("entrer l'euro ");
// let dirhame=euro*10.61;
// console.log("l'euro en dirhame est " +dirhame);


















