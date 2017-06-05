/*
  Maggiore e minore
  Scrivi un programma che prenda quattro numeri in input, stampi in output il maggiore e il minore.
  http://www.imparareaprogrammare.it
*/

var first = 10; second = 2; third = 3; fourth = 0;

if (first < second && first < third && first < fourth)
    console.log(`Il primo numero, il ${first} e il piu piccolo`);
if (second < first && second < third && second < fourth)
    console.log(`Il secondo numero, il ${second} e il piu piccolo`);
if (third < first && third < second && third < fourth)
    console.log(`Il terzo numero, il ${third} e il piu piccolo`);
if (fourth < first && fourth < second && fourth < third)
    console.log(`Il quarto numero, il ${fourth} e il piu piccolo`);

if (first > second && first > third && first > fourth)
    console.log(`Il primo numero, il ${first} e il piu grande`);
if (second > first && second > third && second > fourth)
    console.log(`Il secondo numero, il ${second} e il piu grande`);
if (third > first && third > second && third > fourth)
    console.log(`Il terzo numero, il ${third} e il piu grande`);
if (fourth > first && fourth > second && fourth > third)
    console.log(`Il quarto numero, il ${fourth} e il piu grande`);
