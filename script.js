/*
 0 recuperare gli elementi dal DOM
 -gestisco il cick del bottone (al click stampo "cliccato" in console)
 -Raccolgo i campi dall'input 
 1 chiedere all'utente il numero di chilometri che vuole percorrere
 2 chiedere l'età all'utente 
 3 calcolare il prezzo del biglietto
 4 applicare uno sconto (20% minorenni - 40% over 65)
 5 stampare in pagina
*/

// Fase preparatoria

const input = document.getElementById('km')
console.log('km', km);
const age = document.getElementById('age')
console.log('age', age);
const button = document.querySelector('button')
console.log('button', button);
const kmPrice = 0.21;
console.log('kmPrice', kmPrice);
const paragraph = document.getElementById('result')
console.log('result', result);

// Fase gestione eventi
button.addEventListener('click', function () {
    // Recupero il valore dell'input
    const inputValue = km.value.trim();
    // stampo in console
    console.log(inputValue);
    // stampo nel paragrafo
    if (inputValue) {
        paragraph.innerText = inputValue;
        input.value = '';
    }
})