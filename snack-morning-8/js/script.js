
/**
 *
 * Data una lista di 20 numeri diversi.
 * generiamo una lista secondaria di
 * 10 numeri presi dalla lista, diversi tra loro.
 *
 */


function getRandomNumber(numMin, numMax) {
    return Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;;
}

const startingList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const randomicList = [];


while (randomicList.length < 10) {

    //Il numero generato è l'indice da cui prendere il numero dal primo array.
    let randomicNumber = getRandomNumber(0, startingList.length - 1 );
    
    if (!randomicList.includes(startingList[randomicNumber])) {
        randomicList.push(startingList[randomicNumber]);
    }
}


console.log(startingList);
console.warn(randomicList);

function getRandomUniqueRandom(blackList, numMin, numMax) {
    let check = false;
    let randomNumber;

    while (!check) {
        randomNumber = getRandomNumber(numMin, numMax)

        if (!blackList.includes(randomNumber)) {
            check = true;
        }
    }
    return randomNumber;
}