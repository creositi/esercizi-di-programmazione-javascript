/*
  Vinci tu!
  Scrivi un programma che simula un gioco di dadi tra due utenti, prendi in input il numero di quanti tiri effettuare per ciascun giocatore (N), dopodiché ogni utente tira N volte un dado a sei facce.
  Stampa il vincitore che ha totalizza più punti.
  http://www.imparareaprogrammare.it
*/

var tiri = 5;
var utente1 = 0;
var utente2 = 0;


for (i = 0; i < tiri; i++) {
    var dadoutente1 = Math.floor(Math.random() * (6)) + 1;
    var dadoutente2 = Math.floor(Math.random() * (6)) + 1;
    utente1 = utente1 + dadoutente1;
    utente2 = utente2 + dadoutente2;
}
document.write(`Punteggio utente 1: ${utente1}<br />`);
document.write(`Punteggio utente 2: ${utente2}<br />`);
