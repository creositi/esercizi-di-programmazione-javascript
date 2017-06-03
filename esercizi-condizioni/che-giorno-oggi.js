/*
  Che giorno è oggi?
  Scrivi un programma che accetti in ingresso un numero intero compreso tra 1 a 7 e visualizzi il corrispondente giorno della settimana, esempio:
    1 => lunedì
    2 => martedì
    3 => mercoledì
    ...
    6 => domenica
  Utilizza il costrutto Switch-case, prevedi anche il caso in cui il valore immesso non sia valido, e stampare un messaggio di errore a tua scelta.

  Variante
  Scriverne una versione che anziché i giorni della settimana, visualizzi i nomi dei mesi.
  http://www.imparareaprogrammare.it
*/

var day = 6;

switch (day) {
    case 1:
        console.log('lunedi');
        break;
    case 2:
        console.log('martedi');
        break;
    case 3:
        console.log('mercoledi');
        break;
    case 4:
        console.log('giovedi');
        break;
    case 5:
        console.log('venerdi');
        break;
    case 6:
        console.log('sabato');
        break;
    case 7:
        console.log('domenica');
        break;
    default:
        console.log('nessuna giorno');
}
