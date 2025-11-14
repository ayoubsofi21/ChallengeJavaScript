const prompt=require("prompt-sync")();
// challenge 1
// const prompt=require("prompt-sync")();
// let number=parseInt(prompt("donner quelque numero "));
// for(let i=1; i<=10;i++){
//     let multip=number*i;
//     console.log(` ${number}*${i}= ${ multip}`);
// }
 
// challenge 2
// let number=parseInt(prompt("donner quelque numero "));
// if (number<=1){
//               console.log('not premier');
// }else{
//     let numero=true;
//     for(let i=2;i<number;i++){
//         if(number%i===0){
//             numero=false;
//             break;
//         }else{
//             numero=true;
//         }
//     }
//         console.log(numero ? 'premier' :'not premier');
// }

// challenge 3

// function Sommemax(){
//     let somme = 0;
//     let max = 0;
//     let number = parseInt(prompt("Écris un nombre positif (0 pour arrêter) :"));   
//     while (number!== 0) {
//             if (number > 0 && number < 100) {
//                 somme += number;
//                 if (number > max) {
//                     max = number;
//                 }
//         }

//         number = parseInt(prompt("Écris un nombre positif (0 pour arrêter) :"));
//     } 
//     console.log("Somme des valeurs valides : " + somme);
//     console.log("Maximum des valeurs valides : " + max); 
   
// }
// Sommemax()  

// challenge 4
// let number=prompt('donner un number pour fait un reverse');
// let inverse = number.split("").reverse("").join("");
// console.log(inverse);

// challenge 5
// let number=prompt('donner moi un number n');
//  for(let i=2; i<=number;i++){
//       let premier=true;
//       for(let j=2;j<i;j++){
//         if(i%j==0){
//             premier=false;
//             break;
//         }
//       }
// if(premier) console.log(i);
    // }
// challange 6
// // Puissance avec while 
// let  base=prompt('Entrez la base  ');
// let exposant=prompt("Entrez l'exposant ")
// function Puissance(){
//     if (base <= 0 || exposant < 0) {
//     console.log("La base doit être > 0 et l'exposant >= 0");
// } else {
//     let resultat = 1;
//     let compteur = 0;

//     while (compteur < exposant) {
//         resultat = base*resultat; 
//         compteur=compteur+1;
//     }

//     console.log(`notre equation est ${base}^${exposant} = ${resultat}`);
// }}
// Puissance();

// challenge 7
// let somme=0;
// let note = false;
// for(let i=1 ;i<10;i++){
//     let  number=Number(prompt('Entrez un number  '));    
//     if(number>0){
//         somme=somme+number
//         note=true;
//     }
// }
// console.log('La somme est '+ note ? somme :'pas some');



