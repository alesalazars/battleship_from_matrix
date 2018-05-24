/* FIND SINKED SHIP IN A MATRIX */


////// First I create the multidimentional array of 100x100 with 0's in every position
var sea = [];
var row = [];

for ( i = 1 ; i < 32; i++ ){
  row.push(0);
}
for ( i = 1 ; i < 32 ; i++ ){
  sea.push(row.slice());
}

// Draw the board to show in the HTML
var board = document.getElementById('board');

for( i = 1 ; i < sea.length ; i++ ){
  var templateRow = document.createElement('ul');
  board.appendChild(templateRow);
  for( j = 1 ; j < sea[i].length ; j++ ){
    var templateColumn = document.createElement('li');
    var templateCoordinate = document.createElement('a');
    templateColumn.appendChild(templateCoordinate);
    templateRow.appendChild(templateColumn);
    templateCoordinate.id = j + "-" + i;
    templateCoordinate.className = "boxBlank";
    templateCoordinate.innerHTML = j + "-" + i;
  }
}





////// Set coordenates for the ships and put 1's in them

function fillWithOnes(shipName){
  for ( i = 0 ; i <= shipName.length - 1; i++ ){
    for ( j = 0 ; j <= shipName[i].length; j++ ){
      sea[ shipName[i][0] ][ shipName[i][1] ] = 1;
    }
  }
}

//Carrier ship
var carrier =[ [28,5], [28,6], [28,7], [28,8], [28,9] ];
fillWithOnes(carrier);

//Battleship ship
var battleship =[ [1,3], [2,3], [3,3], [4,3] ];
fillWithOnes(battleship);

//Cruiser ship
var cruiser =[ [8,20], [9,20], [10,20] ];
fillWithOnes(cruiser);

//Submarine ship
var submarine =[ [14,1], [14,2], [14,3] ];
fillWithOnes(submarine);

//Destroyer ship
var destroyer =[ [24,23], [24,24] ];
fillWithOnes(destroyer);


console.log(sea);





////// Clicking on the button runs the function that checks for a coincidence

var button = document.getElementById('submitPositions');

var x;
var y;
var ask;

function sinkShip(shipName, shipNameString, x, y){
  for ( i = 0 ; i <= shipName.length - 1; i++ ){
    for ( j = 0 ; j <= shipName[i].length; j++ ){

      if( x == shipName[i][0] && y == shipName[i][1] ){
        console.log("You've sinked the " + shipNameString + " ship! :D");

        for ( k = 0 ; k <= shipName.length - 1; k++ ){
          for ( l = 0 ; l <= shipName[k].length; l++ ){
            sea[ shipName[k][0] ][ shipName[k][1] ] = "x";
            var m = shipName[k][0];
            var n = shipName[k][1];
            var toSink = document.getElementById(m + "-" + n);
            toSink.className = "boxSinked";
          }
        }

      }

    }
  }
}

button.addEventListener('click', function(){

  var x = document.getElementById('xPosition').value;
  var y = document.getElementById('yPosition').value;
  var ask = sea[x][y];

  console.log("value of ask: " + ask);

  if( ask == 1 ){

    sinkShip(carrier, "Carrier", x, y);
    sinkShip(battleship, "Battleship", x, y);
    sinkShip(cruiser, "Cruiser", x, y);
    sinkShip(submarine, "Submarine", x, y);
    sinkShip(destroyer, "Destroyer", x, y);

  }else if ( ask == "x" ){
    console.log("You've already sinked this ship, keep trying");
  }else{
    console.log("You've missed :(");
    var toMiss = document.getElementById(x + "-" + y);
    toMiss.className = "boxMissed";
  }

});