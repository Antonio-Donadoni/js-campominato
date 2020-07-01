
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50
var numeriTotali
var difficoltà = prompt("Scegli il livello di difficoltà da 0 a 2")
switch (parseInt(difficoltà)) {
  case 0:
    numeriTotali = 100
    console.log("👶Livello facile👶");
    break;
  case 1:
    numeriTotali = 80
    console.log("🧐Livello intermedio🧐");
    break;
  case 2:
    numeriTotali = 50
    console.log("🤯Livello difficile🤯");
    break;
  default:
  console.log("⛔⛔Input errato. Inserire un numero fra 0 a 2⛔⛔");
}

// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
var numeriMinati = [];
var i = 0;
while (numeriMinati.length < 16) {
  var numero = getRandomIntInclusive(1,numeriTotali);
  if (!numeriMinati.includes(numero)) {
      numeriMinati.push(numero)
  }
i++
}
// console.log(numeriMinati);

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var i = 0;
var punteggio = 0
var minaTrovata = false;
var listaNumeri = [];
while (minaTrovata == false && listaNumeri.length < (numeriTotali - numeriMinati.length)) {
  var numeroUtente = prompt('Inserisci un numero tra 1 e ' + numeriTotali);
  numeroUtente = parseInt(numeroUtente);
  // L’utente non può inserire più volte lo stesso numero.
  if (listaNumeri.includes(numeroUtente)) {
      console.log("❗❗ Numero già inserito. Riprova");
    }
    else if (numeroUtente < 0 || numeroUtente > numeriTotali) {
      console.log("❗❗ Numero non valido. Riprova");
    }
    else if ( isNaN(numeroUtente)) {
    console.log("❗❗ Non hai inserito un numero. Riprova");
    }

    else {
      listaNumeri.push(numeroUtente);
      // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
      // La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
      for (var n = 0; n < numeriMinati.length; n++) {
        if (numeroUtente == numeriMinati[n]) {
          minaTrovata = true;
        }
      }
      if (minaTrovata) {
        console.log(" 💣💀 MINA ESPLOSA, HAI PERSO 💀💣");
        console.log("Il tuo punteggio è: " + punteggio );
      } else {
        console.log("CONTINUA COSI");
      }
       punteggio = punteggio + 1;
       i++
     }
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
