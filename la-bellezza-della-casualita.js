/*
  La bellezza della casualità
  Scrivi una funzione che prenda in input un numero e restituisca un numero casuale compreso tra 0 e l'argomento passato.
  http://www.imparareaprogrammare.it
*/

var a = 5;

function myFunction(x){
    x = Math.floor( Math.random() * a ) + 1;
    return x;
}

console.log(myFunction());
