// Età
const age = 21;

//Nome

let nome = prompt('Dimmi il tuo nome');


//Cognome

let cognome = prompt('Dimmi il tuo cognome');

//Colore Preferito

let colore = prompt('Dimmi il tuo colore preferito');



//Password

 let password = `${nome} + ${cognome} + ${colore} + ${age}`;
 
 console.log(nome);

 document.getElementById('text').innerHTML = password;
 console.log( document.getElementById('text').innerHTML) = password;