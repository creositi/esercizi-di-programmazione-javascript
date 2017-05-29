/*
  Conta il tempo
  Scrivi un programma che prenda in input un numero di secondi e calcoli la quantità di ore, minuti e secondi corrispondenti, poi stampa il risultato. L'output avrà solo numeri interi.
  Esempio
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.
  http://www.imparareaprogrammare.it
*/

var seconds = 12560;
var hours = seconds / 3600; // ore
var hours2 = Math.floor(hours); // ore arrotondate
var secondsinhours = hours2 * 3600; // quanti secondi delle ore arrotondate
var rest = seconds - secondsinhours; // quanti secondi rimangono
var minuts = rest / 60; // minuti
var minuts2 = Math.floor(minuts); // minuti arrotondati
var secondsinminuts = minuts2 * 60; // quanti secondi dei minuti arrotondati
var seconds2 = seconds - secondsinhours - secondsinminuts; // secondi

console.log(hours2, 'ore,', minuts2, 'minuti,', seconds2, 'secondi');
