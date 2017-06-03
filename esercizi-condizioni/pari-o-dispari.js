/*
  Pari o dispari?
  Scrivi un programma che prenda in input un numero intero e restituisca 0 se è pari o 1 se è dispari.
  http://www.imparareaprogrammare.it
*/

var number = 10;

if (number % 2 == 0)
    console.log('0');
else if (number % 2 == 1)
    console.log('1');
else
    console.log('non è un numero');
