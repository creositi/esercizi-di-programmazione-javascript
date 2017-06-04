/*
  Chi l'azzecca?
  Scrivi un programma che generi un numero casuale compreso tra 1 e 100 (zero escluso).
  Successivamente prendi in input altri due numeri di due ipotetici utenti, e comunica se uno dei due ha azzeccato il numero casuale, in caso contrario quale dei due si è avvicinato di più al numero.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, che restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/
var num = 20; 
var first = 10; second = 20;
mediaf = num - first; medias = num - second; // differenza
mediafirst = mediaf * mediaf; mediasecond = medias * medias; // numero alla potenza in caso di negativo
mediafirst2 = Math.sqrt(mediafirst); mediasecond2 = Math.sqrt(mediasecond); // radice quadrata in caso di negativo

if (first === num)
    console.log("Bravissimo, il numero è corretto");
else if (second === num)
    console.log("Bravissimo, il numero è corretto");
else if (mediafirst2 < mediasecond2)
    console.log("Primo ti sei avvicinato di piu");
else if (mediafirst2 > mediasecond2)
    console.log("Secondo ti sei avvicinato di piu");
