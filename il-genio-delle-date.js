/*
  Il genio delle date
  Scrivi una funzione che prenda in input due argomenti, il Giorno e il Mese. La funzione deve restituire il numero del giorno compreso tra 1 e 366.
    Input : 5, 2 
    Output:
            36
  Hint: puoi definire un array con i giorni di ogni mese e ciclarlo.          
  http://www.imparareaprogrammare.it
*/

var day = 5;
var month = 2;
var all = [31,28,31,30,31,30,31,31,30,31,30,31];
var number = 0;
var number2 = 0;

for (i = 0; i <= (month - 2); i++){
    number = number + all[i];
    number2 = number;
        }

console.log(number2);


function myFunction(a){
    a = number2 + day;
    return a;
}

console.log(myFunction(a));
