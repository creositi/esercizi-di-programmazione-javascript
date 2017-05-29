/*
  Quanti anni ha?
  Scrivi un programma che prenda in input un anno di nascita e determini l'età della persona, calcola anche quanti anni sono necessari per raggiungere i 100. Stampa in output entrambi i risultati.
  http://www.imparareaprogrammare.it
*/

var birth = 1982;
var data = new Date();
var year = data.getFullYear(); // anno corrente
var age = year - birth;
var centenary = 100;
var rest = centenary - age;

console.log('eta:', age, 'Mancano', rest, 'anni per arrivare a', centenary, 'anni');
