/*
  Caldo o freddo
  Scrivi un programma che prenda in input sette valori relativi alle temperature della settimana e stabilisca la giornata più calda e quella più fredda.
  http://www.imparareaprogrammare.it
*/

var mon = 5; tue = 4; wed = 7; thu = 15; fri = 20; sut = 22; sun = 25;

if (mon < tue && mon < wed && mon < thu && mon < fri && mon < sut && mon < sun)
                        console.log('La giornata piu fredda e lunedi');

if (tue < mon && tue < wed && tue < thu && tue < fri && tue < sut && tue < sun)
                        console.log('La giornata piu fredda e martedi');

if (wed < mon && wed < tue && wed < thu && wed < fri && wed < sut && wed < sun)
                        console.log('La giornata piu fredda e mercoledi');

if (thu < mon && thu < tue && thu < wed && thu < fri && thu < sut && thu < sun)
                        console.log('La giornata piu fredda e giovedi');

if (fri < mon && fri < tue && fri < wed && fri < thu && fri < sut && fri < sun)
                        console.log('La giornata piu fredda e venerdi');

if (sut < mon && sut < tue && sut < wed && sut < thu && sut < fri && sut < sun)
                        console.log('La giornata piu fredda e sabato');


if (sun < mon && sun < tue && sun < wed && sun < thu && sun < fri && sun < sut)
                        console.log('La giornata piu fredda e domenica');

if (mon > tue && mon > wed && mon > thu && mon > fri && mon > sut && mon > sun)
                        console.log('La giornata piu calda e lunedi');

if (tue > mon && tue > wed && tue > thu && tue > fri && tue > sut && tue > sun)
                        console.log('La giornata piu calda e martedi');

if (wed > mon && wed > tue && wed > thu && wed > fri && wed > sut && wed > sun)
                        console.log('La giornata piu calda e mercoledi');

if (thu > mon && thu > tue && thu > wed && thu > fri && thu > sut && thu > sun)
                        console.log('La giornata piu calda e giovedi');

if (fri > mon && fri > tue && fri > wed && fri > thu && fri > sut && fri > sun)
                        console.log('La giornata piu calda e venerdi');

if (sut > mon && sut > tue && sut > wed && sut > thu && sut > fri && sut > sun)
                        console.log('La giornata piu calda e sabato');


if (sun > mon && sun > tue && sun > wed && sun > thu && sun > fri && sun > sut)
                        console.log('La giornata piu calda e domenica');
