/*
  Indovina il giorno
  Scrivi un programma con due funzioni, la prima prende in ingresso un intero e verifichs se sia compreso nel range da 1 a 7.
  Se è compreso, la funzione restituirà TRUE, se non è compreso restituirà FALSE.
  Scrivi una seconda funzione che, in caso la prima restituisca TRUE, visualizzi il giorno della settimana corrispondente considerando la seguente corrispondenza:
        1 = Lunedì
        ...
        7 = Domenica
  Nel caso il giorno non sia compreso nel range, il programma dovrà restituire un messaggio d'errore simile a questo: 'Peccato, non posso indovinare il giorno.'
  http://www.imparareaprogrammare.it
*/

var a = 0;

function myFunction(a){
    a <= 7 && a >= 1;
    return ' ';
}

if(myFunction(a)) {
    function myFunction2(){
        switch (a) {
    case 1:
        return 'lunedi';
        break;
    case 2:
        return 'martedi';
        break;
    case 3:
        return 'mercoledi';
        break;
    case 4:
        return 'giovedi';
        break;
    case 5:
        return 'venerdi';
        break;
    case 6:
        return 'sabato';
        break;
    case 7:
        return 'domenica';
        break;
    default:
        return 'nessun giorno';
}
}

 }


console.log(myFunction(a));
console.log(myFunction2(a));
