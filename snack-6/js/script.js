// Crea una funziona che dato un array che calcoli la somma dei suoi elementi.


function getSumOfArrayElements(array) {
    let sum = 0;

    for (let index = 0; index < array.length; index++) {
        const castedNumber = parseInt(array[index], 10);
        if ( !Number.isNaN(castedNumber) ) {
            sum += castedNumber;
        }
    }
    return sum;
}

const list = [1,2,'caio',4,'ciao',6,7,8,'9','11'];


console.error(getSumOfArrayElements(list));




