/*
  La funzione che sembra difficile
  Scrivi una funzione che prenda in input due numeri N e K e restituisca la k-esima cifra (partendo da destra) di N.
  Se K è maggiore del numero delle cifre di N, la funzione restituirà 0.
    Input : 123456, 3
    Output:
            4
  http://www.imparareaprogrammare.it
*/

var n = 5200;
var k = 1;

function myFunction(n){
    n = n.toString();
    return n.charAt(k);
}
console.log(myFunction(n));
