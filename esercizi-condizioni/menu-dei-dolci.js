/*
  Menu dei dolci
  Scrivi un programma stampi il seguente menu:
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia
  Inoltre, prenda in input il valore numerico della scelta.
  Se la scelta non è tra quelle elencate verrà stampata la scritta 'Dolce non disponibile' altrimenti verrà visualizzata la scelta effettuata 'Hai scelto il dolce X'.
  http://www.imparareaprogrammare.it
*/
var menu = 5;

switch (menu) {
    case 1:
        console.log('Hai scelto il Tiramisu');
        break;
    case 2:
        console.log('Hai scelto la torta della nonna');
        break;
    case 3:
        console.log('Hai scelto il Cheesecake alla nutella');
        break;
    case 4:
        console.log('Hai scelto la Macedonia');
        break;
    default:
        console.log('Dolce non disponibile');
}
