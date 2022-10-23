let ville = "Cambrai";
const hypothenuse = 8;
let admission = true;
let nom = "SATRIANI";
let prenom = "Joe";
let age = 66;

let pommes = 4;
let peches = 6;
/*let totalFruits = ${pommes} + ${peches};*/
let totalFruits = pommes + peches;
console.log(`Pommes + pêches :` ,totalFruits);

let multFruits = pommes * peches;
console.log('Pommes x Pêches =', multFruits);

let nombre1 = 10;
let nombre2 = 5;
console.log('10 / 5 = ',nombre1/nombre2);

/* Fonction addition */
function addition(operande1,operande2){
    return operande1 + operande2;
}
console.log(addition(5,7));

/* Fonction soustraction */
function soustraction(operande1,operande2){
    return operande1 - operande2;
}
console.log(soustraction(5,7));

/* Fonction multiplication */
function multiplication(operande1,operande2){
    return operande1 * operande2;
}
console.log(multiplication(5,7));

/* Les objets */
const person = {
    firstName : "Angelo",
    lastName : "GUERRA",
    villeNaissance : "Cambrai"
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.villeNaissance);

// alert(person.firstName);
// alert(person.lastName);

/* Exercice variable */
let numero = 33;
let texte = "33";
let float = 3.14;
let binaire = true;

/* Exercice variables */
numero = 23;
texte ="45";
console.log('texte + numero = ',numero+texte);

// exercice PARSEINT
numero = 53;
texte ="33";
let temp = 0;

temp = parseInt(texte);

console.log('numero + temp = ', temp+numero);

numero = 12;
texte = "44";

numero = numero + parseInt(texte);
console.log("numero = 12 + 44 = ", numero);

numero = 12;
numero += parseInt(texte);
console.log("numero = 12 + 44 = ", numero);

// fonction isoNum

function isoNum() {
    return 42;
}
console.log("La fonction isoNum renvoie le nombre : ", isoNum());

console.log("10 + isoNum = ", 10+isoNum());

function maFonction(arg1,arg2) {
    return arg1*arg2+arg1+arg2;
}

console.log("ma Fonction avec 1 et 2 = ", maFonction(1,2));

// manipulation variables
let var1 = "3.14";
let nombre = parseFloat(var1);
console.log("nombre x 2 = ",nombre*2);

// Récupérer longueur string 
let var2 = "mon texte";
let longueur = var2.length;
console.log("la chaîne 'mon texte' contient ", longueur, " caractères");

// Concaténation
let var3 = "c'est une ";
let var4 = "concaténation";

let resultat = var3 + var4;

console.log("var3 + var4 = " + resultat);

// 
let var5 = "un anneau pour les trouver";

let result = var5[23];
console.log("le caractère situé à la 23ème position est : " + result);

// 
let var6 = "Le javascript c'est bien, le javascript";

let result1 = var6.replace('javascript','code');
console.log(result1);

function replaceAll(recherche, remplacement, chaineAModifier) {
    return chaineAModifier.split(recherche).join(remplacement);
}

let result2 = replaceAll("javascript","code",var6);
console.log(result2);






