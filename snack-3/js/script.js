// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.


const arrayExpense = [3,4,5,6,7,78,854];
const arrayRevenues = [321,432,34,232,23,21,3,4,78,9,5,87,86,5,3];

while (arrayExpense.length != arrayRevenues.length) {
    let randomNumber = Math.floor(Math.random() * 90);

    if (arrayExpense.length > arrayRevenues.length) {
        arrayRevenues.push(randomNumber);
    } else {
        arrayExpense.push(randomNumber);
    }
}

console.log(arrayExpense);
console.log(arrayRevenues);