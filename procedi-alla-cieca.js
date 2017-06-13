/*
  Procedi alla cieca
  Scrivi un programma che stampi il contenuto di una matrice i cui valori interi sono generati casualmente nel range di 0 e 100.
  http://www.imparareaprogrammare.it
*/

var n = [];

for(i = 0; i < 100; i++) {
n[i] = Math.floor( Math.random() * 100 );
}

console.log(n);
