/*
  Vinci tu!
  Scrivi un programma che simula un gioco di dadi tra due utenti, prendi in input il numero di quanti tiri effettuare per ciascun giocatore (N), dopodiché ogni utente tira N volte un dado a sei facce.
  Stampa il vincitore che ha totalizza più punti.
  http://www.imparareaprogrammare.it
*/

var tiri = 3;
var dadoutente1 = Math.floor(Math.random() * (7 - 1)) + 1;
var dadoutente2 = Math.floor(Math.random() * (7 - 1)) + 1;
var utente1 = tiri * dadoutente1;
var utente2 = tiri * dadoutente2;

if (utente1 < utente2)
    document.write("Ha vinto l'utente 2 <br />");
else if (utente1 > utente2)
    document.write("Ha vinto l'utente 1 <br />");
else
    document.write("Pareggio");

document.write(`L'utente 1 ha totalizzato ${utente1} punti. Mentre l'utente 2 ha totalizzato ${utente2} punti.`);
