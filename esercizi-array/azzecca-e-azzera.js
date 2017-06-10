/*
  Azzecca e azzera
  Scrivi un programma che dichiari un array di 100 elementi interi e lo riempia con numeri casuali da 1 a 50.
  Permetti all'utente di inserire una serie di numeri e azzera tutti i numeri nell'array principale che contengono un multiplo del numero inserito.
  Il programma termina quando tutti gli elementi dell'array principale sono uguali a zero.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, che restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/

var arr = [];
var arr3 = [];
var number = [2,3,1];


for(i = 0; i < 100; i++) {
    arr[i] = Math.floor( Math.random() * 50 );
    var arr2 = arr[i];
    arr3 = arr2;
      if (arr2 % number[0] === 0 || arr2 % number[1] === 0 || arr2 % number[2] === 0)
      arr[i] = 0;

console.log(arr3);
}

console.log(arr);
