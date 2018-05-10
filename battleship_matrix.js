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

//Carrier ship
var car1 = sea[28][5] = 1;
var car2 = sea[28][6] = 1;
var car3 = sea[28][7] = 1;
var car4 = sea[28][8] = 1;
var car5 = sea[28][9] = 1;
var carrier = [ sea[28][5], sea[28][6], sea[28][7], sea[28][8], sea[28][9] ];
//Battleship ship
var bat1 = sea[0][3] = 1;
var bat2 = sea[1][3] = 1;
var bat3 = sea[2][3] = 1;
var bat4 = sea[3][3] = 1;
var battleship = [ sea[0][3], sea[1][3], sea[2][3], sea[3][3]];
//Cruiser ship
var cru1 = sea[43][88] = 1;
var cru2 = sea[43][89] = 1;
var cru3 = sea[43][90] = 1;
var cruiser = [ sea[0][3], sea[1][3], sea[2][3] ];
//Submarine ship
var sub1 = sea[14][0] = 1;
var sub2 = sea[14][1] = 1;
var sub3 = sea[14][2] = 1;
var submarine = [ sea[14][0], sea[14][1], sea[14][2] ];
//Destroyer ship
var des1 = sea[90][3] = 1;
var des2 = sea[90][4] = 1;
var destroyer = [ sea[90][3], sea[90][4] ];

console.log(sea);


var button = document.getElementById('submitPositions');

button.addEventListener('click', function(){
  var x = document.getElementById('xPosition').value;
  var y = document.getElementById('yPosition').value;
  var ask = sea[x][y];

  console.log(ask);

  if( sea[x][y] == sea[28][5] || sea[28][6] || sea[28][7] || sea[28][8] || sea[28][9]){
    console.log("You've sinked the Carrier ship! :D");
    sea[28][5] = "x";
    sea[28][6] = "x";
    sea[28][7] = "x";
    sea[28][8] = "x";
    sea[28][9] = "x";
    console.log(sea);
  }
  else if( sea[x][y] == sea[0][3] || sea[1][3] || sea[2][3] || sea[3][3] ){
    console.log("You've sinked the Battleship ship! :D2");
    sea[0][3] = "x";
    sea[1][3] = "x";
    sea[2][3] = "x";
    sea[3][3] = "x";
    console.log(sea);
  }else if( sea[x][y] == sea[43][88] || sea[43][89] || sea[43][90] ){
    console.log("You've sinked the Cruiser ship! :D3");
    sea[43][88] = "x";
    sea[43][89] = "x";
    sea[43][90] = "x";
    console.log(sea);
  }else if( sea[x][y] == sea[14][0] || sea[14][1] || sea[14][2] ){
    console.log("You've sinked the Submarine ship! :D4");
    sea[14][0] = "x";
    sea[14][1] = "x";
    sea[14][2] = "x";
    console.log(sea);
  }else if( sea[x][y] == sea[90][3] || sea[90][4] ){
    console.log("You've sinked the Destroyer ship! :D5");
    sea[90][3] = "x";
    sea[90][4] = "x";
    console.log(sea);
  }
  else {
    console.log("You've missed :(");
  }

});
