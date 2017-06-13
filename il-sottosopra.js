/*
  Il sottosopra
  Scrivi un programma che prenda in input un array multidimensionale e stampi in output la sua trasposta, in questo modo:
    Input : 
      [
        [1, 2],
        [3, 4],
        [5, 6]
      ]
    Output:
      [
        [1, 3, 5],
        [2, 4, 6],
      ]
  http://www.imparareaprogrammare.it
*/

var n = [];
n[0] = [1, 2];
n[1] = [3, 4];
n[2] = [5, 6];
var first = [n[0][0], n[1][0], n[2][0]];
var second = [n[0][1], n[1][1], n[2][1]];

console.log(first, second);
