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

alert(person.firstName);
alert(person.lastName);


