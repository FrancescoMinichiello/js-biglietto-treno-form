/*
1 raccolgo gli elementi dal DOM
2 faccio reagire al click il bottone di conferma

| Nel momento in cui clicco
- recupero i valori del form
TODO validazione
-calcolo del prezzo di base ( in base ai kms)
- verifico se applicare lo sconto
- calcolo il totale definitivo
- arrotondo a 2 decimali
?Svuoto i campi del form?
- preparo i valori corretti nel biglietto
- mostro il biglietto
*/

// # Fase di preparazione
//FORM ELEMENTS
const form = document.querySelector('form')
const nameField = document.getElementById('name');
const kmsField = document.getElementById('kms');
const ageField = document.getElementById('age');
const confirmButton = document.getElementById('confirm-button');

// TICKET ELEMENTS
const ticketSection = document.getElementById('ticket-section');
const passengerElement = document.getElementById('passenger-name');
const carElement = document.getElementById('car');
const rateElement = document.getElementById('rate');
const pnrElement = document.getElementById('pnr');
const priceElement = document.getElementById('price');

// VARIABILI INIZIALI
const pricePerKm = 0.21;
let rateName = 'Tariffa Ordinaria'

//GESTIONE EVENTI
// Quando clicco sul bottone...
confirmButton.addEventListener('click', function (e) {
    //! IMPEDISCO IL RICARICAMENTO
    e.preventDefault();
    // Recupero i valori del form 
    const nameValue = nameField.value.trim();
    const kmsValue = parseInt(kmsField.value)
    const ageValue = ageField.value;

    console.log('nameValue', nameValue);
    console.log('kmsValue', kmsValue);
    console.log('ageValue', ageValue);

    // TODO VALIDATION

    //Calcolo del prezzo base
    let price = kmsValue * pricePerKm;

    //Verifico se devo fare sconti
    if (ageValue === 'junior') {
        price *= 0.8;
        rateName = 'Tariffa minorenni'
    } else if (ageValue === 'senior') {
        price *= 0.6;
        rateName = 'Tariffa senior'
    }

    console.log(price, rateName)

    // TODO CALCOLARE PNR E CARROZZA
    const carNumber = Math.floor(Math.random() * 9) + 1;
    const pnr = Math.floor(Math.random() * (100000 - 90000)) + 90000;

    //Montare i dati nel biglietto
    passengerElement.innerText = nameValue;
    rateElement.innerText = rateName;
    carElement.innerText = carNumber;
    pnrElement.innerText = pnr;
    priceElement.innerText = '€ ' + price.toFixed(2);

    //Mostrare il biglietto
    ticketSection.classList.remove('d-none')
    // Reset form
    form.reset();
})
