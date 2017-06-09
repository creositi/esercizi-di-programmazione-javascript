/*
  Tanti numeri
  Scrivi un programma che dato un insieme di valori in un array, calcolai la media dei valori e restituisca in output tutti i valori minori della media.
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.
  http://www.imparareaprogrammare.it
*/


var numbers = [1, 2, 3, 4, 5];
var tot = 0;


for (i = 1; i <= numbers.length; i++) {
  tot = tot + i;
  var tot2 = tot / numbers.length;
}

var filtered = numbers.filter(function (item) {
    return item < tot2;
}
);

var filtered2 = numbers.length - filtered.length;

console.log(`La media dei numeri è ${tot2}. I valori minori della media sono ${filtered.length}. I valori maggiori della media sono ${filtered2}`)
