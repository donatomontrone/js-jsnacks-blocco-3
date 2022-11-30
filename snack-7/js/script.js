/**
 * Crea due tag div con due id diversi.
 * Un div avrà il testo colorato di rosso mentre l'altro di verde.
 * Partendo da un array di numeri,
 * creiamo un nuovo elemento p e lo stampiamo nell'div rosso  se è un numero dispari
 * e nel div verde se è un numero pari.
 *
 *
 */

// funzione che crei un nuovo elemento <p> </p>
// restituirlo a chi invoca la funzione
 //
 // ciclo per ogni elemento dell'array
 // se l'elemento è un numero pari, crei nuovo elemento e lo aggiungo al div verde
 // se l'elemento è un numero dispari, creo  nuovo elemento e lo aggiungo al div rosso

const array = [1,33,55,64,33,22,10,44];

const sectionElement = document.querySelector('section');

for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 === 0) {
        sectionElement.append(getNewElement('p','text-success' ,array[index]))
    } else{
        sectionElement.append(getNewElement('p', 'text-danger',array[index]))
    }
    
}


function getNewElement(tag, className, arrayName) {
    const element = document.createElement(tag);
    element.classList.add(className);
    element.append(arrayName);

    return element
}
