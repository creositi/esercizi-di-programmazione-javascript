/*
  Sommali tutti
  Scrivi un programma che:
    - Prenda in input due numeri, N e M.
    - Generi una matrice di NxM popolata di valori casuali da 1 a 100.
    - Stampi la matrice e la somma di tutti i valori contenuti.
  
    Input : 
      2 3
    Output:
      [
        [1, 50, 100],
        [1, 20, 40],
      ]
      212
  http://www.imparareaprogrammare.it
*/

var n = 2;
var m = 3;
var arr = [];
var arrbis = 0;


for(j = 0; j < n; j++) {
  arr[j] = [];
  for(i = 0; i < m; i++) {
    arr[j][i] = Math.floor( Math.random() * 100 ) + 1;
        arrbis = arrbis + arr[j][i];
  }
}
    console.log(arr);
           console.log(arrbis);
