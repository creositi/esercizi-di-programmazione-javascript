/*
  La calcolatrice
  Scrivi un programma che prenda tre input:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Le operazioni supportate sono le suguenti:
    somma => +
    sottrazione => -
    moltiplicazione => *
    divisione => /
    modulo (solo tra interi) => %
    potenza => ^
    media => m
  Utilizza il costrutto Switch-Case mediante acquisizione di caratteri.
  http://www.imparareaprogrammare.it
*/
var operation = 'media';

switch (operation) {
    case 'somma':
        console.log(first + second);
        break;
    case 'sottrazione':
        console.log(first - second);
        break;
    case 'moltiplicazione':
        console.log(first * second);
        break;
    case 'divisione':
        console.log(first / second);
        break;
    case 'modulo':
        console.log(first % second);
        break;
    case 'potenza':
        console.log(Math.pow(first, second));
        break;
    case 'media':
        console.log((first + second)/2);
        break;
    default:
        console.log('nessuna opearazione');
}
