/*
  Rincorri la decina
  Scrivi un programma che che stampi i numeri da 1 a 100 andando a capo ogni 10.
  Hint: per andare a capo stampa '\n'.
  http://www.imparareaprogrammare.it
*/

var limit = 100;
var number = '';

for (i = 0; i <= limit; i++) {
    number = number + i + ' ';
    if (i % 10 == 0)
        number = number + '\n';
}

console.log(number);
