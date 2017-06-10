/*
  Invertimi
  Scrivi un programma che prenda in input un numero N generi una serie di N numeri all'interno di un array, stampa la serie di numeri ma invertendola.

  Variente
  Non utilizzare array di appoggio per inversione.
  http://www.imparareaprogrammare.it
*/

*/
var arr = [];

for(i = 0; i < 5; i++) {
    arr[i] = Math.floor( Math.random() * 5 );
    var arr2 = arr[i];
    arr3 = arr2;
}

    console.log(arr);

    arr.reverse();

    console.log(arr);
