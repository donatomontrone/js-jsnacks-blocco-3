     // Prendere due array della stessa lunghezza e generarne un terzo, prendendo alternativamente gli elementi da uno e dall'altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].


let arrayA = [1,2,3,4,5];
let arrayB = ['a', 'b', 'c', 'd', 'e'];
let arrayC = [];

    for(i = 0; i < arrayA.length; i++) {
            arrayC.push( arrayA[i],arrayB[i] );
        }

    console.warn(arrayA);
    console.warn(arrayB);
    console.warn(arrayC);