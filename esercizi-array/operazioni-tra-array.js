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

var arr = new Array (1,2,3,4,5,6,7,8,9,10);
var arr2 = Math.floor(Math.random()*(arr.length));

var arr3 = new Array (1,2,3,4,5,6,7,8,9,10);
var arr4 = Math.floor(Math.random()*(arr3.length));

var operation = "addizione";
var appoggio = 0;

if (operation === "addizione")
  appoggio = arr2 + arr4;
else if (operation = "sottrazione")
  appoggio = arr2 - arr4;
else if (operation = "moltiplicazione")
  appoggio = arr2 * arr4;
else if (operation = "divisione")
  appoggio = arr2 / arr4;

console.log(`${arr2} + ${arr4} = ${appoggio}`);
