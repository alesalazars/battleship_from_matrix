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
var carrier = [ [28,5], [28,6], [28,7], [28,8], [28,9] ];
//Battleship ship
var bat1 = sea[0][3] = 1;
var bat2 = sea[1][3] = 1;
var bat3 = sea[2][3] = 1;
var bat4 = sea[3][3] = 1;
var battleship = [ [0,3], [1,3], [2,3], [3,3]];
//Cruiser ship
var cru1 = sea[43][88] = 1;
var cru2 = sea[43][89] = 1;
var cru3 = sea[43][90] = 1;
var cruiser = [ [0,3], [1,3], [2,3] ];
//Submarine ship
var sub1 = sea[14][0] = 1;
var sub2 = sea[14][1] = 1;
var sub3 = sea[14][2] = 1;
var submarine = [ [14,0], [14,1], [14,2] ];
//Destroyer ship
var des1 = sea[90][3] = 1;
var des2 = sea[90][4] = 1;
var destroyer = [ [90,3], [90,4] ];


console.log(sea);


var button = document.getElementById('submitPositions');

button.addEventListener('click', function(){

  var x = document.getElementById('xPosition').value;
  var y = document.getElementById('yPosition').value;
  var ask = sea[x][y];

  console.log("value of ask: " + ask);

  for ( i = 0 ; i < carrier.length ; i++ ){
    if( x == carrier[i][0] && y == carrier[i][1] ){
      console.log("You've sinked the Carrier ship! :D");
      sea[28][5] = "x";
      sea[28][6] = "x";
      sea[28][7] = "x";
      sea[28][8] = "x";
      sea[28][9] = "x";
      console.log(sea);
      break;
    }
    else {
      console.log("You've missed :(");
    }
  }

  for ( i = 0 ; i < battleship.length ; i++ ){
    if( x == battleship[i][0] && y == battleship[i][1] ){
      console.log("You've sinked the Battleship ship! :D");
      sea[0][3] = "x";
      sea[1][3] = "x";
      sea[2][3] = "x";
      sea[3][3] = "x";
      console.log(sea);
      break;
    }
    else {
      console.log("You've missed :(");
    }
  }

  for ( i = 0 ; i < cruiser.length ; i++ ){
    if( x == cruiser[i][0] && y == cruiser[i][1] ){
      console.log("You've sinked the Cruiser ship! :D");
      sea[43][88] = "x";
      sea[43][89] = "x";
      sea[43][90] = "x";
      console.log(sea);
      break;
    }
    else {
      console.log("You've missed :(");
    }
  }

  for ( i = 0 ; i < submarine.length ; i++ ){
    if( x == submarine[i][0] && y == submarine[i][1] ){
      console.log("You've sinked the Submarine ship! :D");
      sea[14][0] = "x";
      sea[14][1] = "x";
      sea[14][2] = "x";
      console.log(sea);
      break;
    }
    else {
      console.log("You've missed :(");
    }
  }

  for ( i = 0 ; i < destroyer.length ; i++ ){
    if( x == destroyer[i][0] && y == destroyer[i][1] ){
      console.log("You've sinked the Destroyer ship! :D");
      sea[90][3] = "x";
      sea[90][4] = "x";
      console.log(sea);
      break;
    }
    else {
      console.log("You've missed :(");
    }
  }

});
