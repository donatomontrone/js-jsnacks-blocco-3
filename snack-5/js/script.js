//Crea una funzione che accetti due argomenti, e che restituisca un valore numerico randomico tra i due argomenti inclusi.

function getRandomNumber(numMax, numMin) {
    const randomNumber = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
    return randomNumber;
}

console.warn(getRandomNumber(0,10000));
console.warn(getRandomNumber(0,10000));
console.warn(getRandomNumber(0,10000));
console.warn(getRandomNumber(0,10000));
console.warn(getRandomNumber(0,10000));