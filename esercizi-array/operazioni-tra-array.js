/*
  Operazioni tra array
  Scrivi un programma che dichiari 2 array di 10 elementi interi e li riempia con numeri casuali da 1 a 10.
  Il programma prende in input dall'utente il tipo di operazione aritmetica da effettuare, una delle seguenti:
    addizione
    sottrazione
    moltiplicazione
    divisione
  Ed esegue il calcolo tra ogni elemento dei due array salvando ciascun risultato in un terzo array di appoggio.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, che restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/

var arr = [];
var arr3 = [];

var operation = "addizione";
var appoggio = 0;
var appoggio2 = 0;



for(i = 0; i < 10; i++) {
arr[i] = Math.floor( Math.random() * 10 );
var arrbis = arr[i];
var arr2bis = arrbis;
console.log(`Numeri primo array per operazione: ${arr2bis}`);
}

for(i = 0; i < 10; i++) {
arr3[i] = Math.floor( Math.random() * 10 );
var arr3bis = arr3[i];
var arr4bis = arr3bis;
console.log(`Numeri secondo array per operazione: ${arr4bis}`);
}


for(i = 0; i < 10; i++) {
      if (operation === "addizione"){
  appoggio = arr[i] + arr3[i];
  }
else if (operation = "sottrazione"){
  appoggio = arr[i] - arr3[i];
  }
else if (operation = "moltiplicazione"){
  appoggio = arr[i] * arr3[i];
  }
else if (operation = "divisione"){
  appoggio = arr[i] / arr3[i]; 
}
appoggio2 = appoggio;
    console.log(`Operazione di ${operation} tra ${arr[i]} e ${arr3[i]} = ${appoggio2}`);
}

 

console.log(arr);
console.log(arr3);
console.log(appoggio);
