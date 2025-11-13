const prompt = require('prompt-sync')();
// challange 1;
// const prompt=require('prompt-sync')();
// function pairInpair(){
//     let number = prompt('send a number ');
//     if (number%2==0){
//         console.log("pair ");
//     }else {
//         console.log("impair ");
//     }
// }
// pairInpair();

// challenge2
// const prompt = require('prompt-sync')();
// let number=prompt('send me some number ');
// if(number>0){
//     console.log('number is positive ');
// }else if(number==0){
//     console.log('number is null ');
// }else{
//     console.log('number is negative')
// }

// challenge 3
// function Eligibilite(){
//     let number=prompt('entrer un nombre ');
//     if(number>18){
//         console.log("Éligibldeux e au vote");
//     }else{
//         console.log('Non éligible');
//     }
// }
// Eligibilite()

// challenge 4
// let n1=parseInt(prompt('entrer n 1 '));
// let n2=parseInt(prompt('entrer n 2 '));
// if(n1>n2){
//     console.log('le nombre la plus grand est '+ n1);    
// }else {
//     console.log('le nombre la plus moins est '+ n2);
// }

// challenge 5
// let number=parseInt(prompt('entrer un numero entre 0 et 100 => '));
// switch (true) {
//     case (number>=90 ):
//         console.log('A');
//         break;
//     case (number>=80 && number<89 ):
//         console.log('B');
//         break;
//     case (number>70 && number<=79 ):
//         console.log('C');
//         break;
//     case (number>60 && number<=69 ):
//         console.log('D');
//         break;
//     case (number<60 ):
//         console.log('F');
//         break;

//     default:
//         console.log('entrer un nombre entre 0 et 100 ');
//         break;
// }

// challenge 6
// let numero=parseInt(prompt('entrer un annee'));
// if (numero%400==0 && numero%4==0 || !numero%100==0 ){
//     console.log('le nombre est bissextile');
// }else{
//     console.log('pas bissextile')
// }

// challange 7
// let longueur=prompt('Donne un mot de passe :');
// if (longueur.length<6){
//     console.log('faible');
// }else if( longueur.length>6 && /[0-9]/.test(longueur)){
//     console.log('Moyen');
// }else if (longueur.length>8 && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(longueur) && /[0-9]/.test(longueur)  ) 
// {
//     console.log('fort');
// }

// challenge 8
// let  color= prompt("donne un color ");
// switch(color){
//     case('rouge'):
//      console.log("Arret");
//     break;
//     case('jaune'):
//      console.log("Préparez-vous");
//     break;
//     case('vers'):
//      console.log("Allez");
//     break;
//     default:
//         console.log("This color is not acceptable");
//     break;
// }
//  challange 9
// let numero = prompt('entre quelque nombre :');
// function fizzBuzz() {
//     if (numero % 3 === 0 && numero % 5 === 0) {
//         console.log ("FizzBuzz");
//     } else if (numero % 3 === 0) {
//         console.log ("Fizz");
//     } else if (numero % 5 === 0) {
//         console.log ("Buzz");
//     } else {
//         console.log(numero);
//     }
// }
// fizzBuzz()
// challenge 10
correctUsername="ayoub";
correctPassword="1234";
let username=prompt('entrer votre username :')
let password=prompt('entre votre password  :')
if (username === correctUsername && password === correctPassword) {
    console.log("Bienvenue "+correctUsername);
} else if (username === correctUsername) {
    console.log("Mot de passe incorrect");
} else {
    console.log("Utilisateur introuvable");
}