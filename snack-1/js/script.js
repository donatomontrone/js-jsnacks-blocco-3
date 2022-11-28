// Continuare a chiedere all'utente un numero tra 1 e 10 fino a quando l'utente non inserisce il valore corretto


// let userNumber = parseInt(prompt('Inserisci un numero tra 1 e 10'));

// while ((Number.isNaN(userNumber) || userNumber == 0 || userNumber > 10)) {
//     userNumber = parseInt(prompt('Inserisci un numero tra 1 e 10'));
// }

// console.log(`Hai inserito il numero ${userNumber}`)


let userNumber;

do {
    userNumber = parseInt(prompt('Inserisci un numero tra 1 e 10'));
} while (((Number.isNaN(userNumber) || userNumber <1 || userNumber > 10)));

console.log(`Hai inserito il numero ${userNumber}`)