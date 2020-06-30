// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50

// Il computer deve generare 16 numeri casuali tra 1 e 100.
var numeriMinati = [];

for (var i = 0; i < 16; i++) {
  var numero = getRandomIntInclusive(1,100);
  numeriMinati.push(numero)
}
console.log(numeriMinati);

// I numeri non possono essere duplicati

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.


var numeriTotali = 100
var i = 0;
var punteggio = 0
var minaTrovata = false;
while (minaTrovata == false && i < (numeriTotali - numeriMinati.length)) {
  var numeroUtente = prompt('Inserisci un numero tra 1 e 100');
   for (var n = 0; n < numeriMinati.length; n++) {
     if (numeroUtente == numeriMinati[n]) {
       minaTrovata = true;
     }
   }
   if (minaTrovata) {
     console.log("MINA ESPLOSA, HAI PERSO");
     console.log("Il tuo punteggio è: " + punteggio );
   } else {
     console.log("CONTINUA COSI");
   }
    punteggio = punteggio + 1;
i++
}
if (!minaTrovata) {
  console.log("HAI VINTO COMPLIMENTI");
  console.log("Il tuo punteggio è: " + punteggio );
}



// FUNZIONI

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}
