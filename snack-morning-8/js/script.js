
/**
 *
 * Data una lista di 20 numeri diversi.
 * generiamo una lista secondaria di
 * 10 numeri presi dalla lista, diversi tra loro.
 *
 */


function getRandomNumber(numMax, numMin) {
    const randomNumber = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
    return randomNumber;
}

const startingList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const randomicList = [];

for (let index = 0; index < 10; index++) {
    let randomicNumber = getRandomNumber(0, startingList.length);
    randomicList.push(randomicNumber);
    
}


console.log(startingList);
console.warn(randomicList);
