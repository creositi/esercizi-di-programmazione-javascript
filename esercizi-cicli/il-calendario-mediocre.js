/*
  Il calendario mediocre
  Scrivi un programma che stampi il calendario di un mese, ricevi in input:
    - Il numero di giorni nel mese
    - Il giorno della settimana in cui questo comincia (0: lunedì ... 6: domenica)

  Variante
  Piuttosto che passarein input i giorni del mese passa direttamente il mese e calcola tu i giorni corrispondenti.
  http://www.imparareaprogrammare.it
*/
var days = 30;
var day = '';
var sett = 3;

for (var i = 1; i <= days; i++) {
    if (sett === 7) 
        sett = 0;

    switch (sett) {
        case 0:
            day = 'lunedi';
            break;
        case 1:
            day = 'martedi';
            break;
        case 2:
            day = 'mercoledi';
            break;
        case 3:
            day = 'giovedi';
            break;
        case 4:
            day = 'venerdi';
            break;
        case 5:
            day = 'sabato';
            break;
        case 6:
            day = 'domenica';
            break;
    }
    if (sett === 6)
        document.write(i + ' ' + day + '<br />');
    else if (i === days)
        document.write(i + ' ' + day + '<br />');
    else
        document.write(i + ' ' + day + ', ');

    sett = sett + 1;
}
