/*
  La difficoltà del fattoriale
  Scrivi una funzione che calcoli in maniera iterativa (usando un ciclo) il fattoriale di un numero preso in input.
    Input : 5
    Output:
            120
  Hint: 5! = 5*4*3*2*1
  http://www.imparareaprogrammare.it
*/

var number = 5;


function myFunction (x) {
    var i = x - 1;
        while (i > 0) {
            x = x * i;
            i--;
        }
            return x;
        }

            console.log(myFunction(number));
