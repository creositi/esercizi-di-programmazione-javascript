/*
  Operazioni tra array
  Scrivi un programma che dichiari 2 array di 10 elementi interi e li riempia con numeri casuali da 1 a 10.
  Il programma prende in input dall'utente il tipo di operazione aritmetica da effettuare, una delle seguenti:
    addizione
    sottrazione
    moltiplicazione
    divisione
  Ed esegue il calcolo tra ogni elemento dei due array salvando ciascun risultato in un terzo array di appoggio.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, che restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/

var arr = [];
var arr2 = Math.floor(Math.random()*(10) + 1);

var arr3 = [];
var arr4 = Math.floor(Math.random()*(10) + 1);

var operation = "addizione";
var appoggio = 0;




for (i = 1; i <= 10; i++) {
    arr = Math.floor(Math.random() * (10)) + 1;
    console.log(`Primo array ${arr}`);
}
for (i = 1; i <= 10; i++) {
    arr3 = Math.floor(Math.random() * (10)) + 1;  
    console.log(`Secondo array ${arr3}`);
}

if (operation === "addizione")
  appoggio = arr + arr3;
else if (operation = "sottrazione")
  appoggio = arr - arr3;
else if (operation = "moltiplicazione")
  appoggio = arr * arr3;
else if (operation = "divisione")
  appoggio = arr / arr3;
  
console.log(`Numero scelto da prima variabile ${arr} + Numero scelto da seconda variabile ${arr3} = ${appoggio}`);
