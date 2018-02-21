/* FIND SINKED SHIP IN A MATRIX */

var sea = [];
var row = [];

for ( i = 0 ; i < 100; i++ ){
  row.push(0);
}
for ( i = 0 ; i < 100 ; i++ ){
  sea.push(row.slice());
}

console.log('WELCOME TO BATTLESHIP MATRIX\n');

console.log('In this two-dimensional array named "sea" there are 100 rows per 100 columns filled with zeros, find the position of the "ship" by asking the console for its position.');

var ship;
//Carrier ship
var car1 = sea[28][5] = 1;
var car2 = sea[28][6] = 1;
var car3 = sea[28][7] = 1;
var car4 = sea[28][8] = 1;
var car5 = sea[28][9] = 1;
//Battleship ship
var bat1 = sea[0][3] = 1;
var bat2 = sea[1][3] = 1;
var bat3 = sea[2][3] = 1;
var bat4 = sea[3][3] = 1;
//Cruiser ship
var cru1 = sea[43][88] = 1;
var cru2 = sea[43][89] = 1;
var cru3 = sea[43][90] = 1;
//Submarine ship
var sub1 = sea[14][0] = 1;
var sub2 = sea[14][1] = 1;
var sub3 = sea[14][2] = 1;
//Destroyer ship
var des1 = sea[90][3] = 1;
var des2 = sea[90][4] = 1;

console.log(sea);

ship = sea[90][3];

if ( ship == 1 ){
  console.log('You have sinked part of the ship! :D');
}
else{
  console.log('You have missed :(');
}
