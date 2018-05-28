/* FIND SINKED SHIP IN A MATRIX */


////// First I create the multidimentional array of 20x20 with 0's in every position
var sea = [];
var row = [];

for ( i = 1 ; i < 22; i++ ){
  row.push(0);
}
for ( i = 1 ; i < 22 ; i++ ){
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

    let x = j;
    let y = i;

    templateCoordinate.addEventListener('click', function(){
      templateCoordinateClick(x, y);
    });

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
var carrier =[ [18,5], [18,6], [18,7], [18,8], [18,9] ];
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
var destroyer =[ [14,13], [14,14] ];
fillWithOnes(destroyer);


console.log(sea);





////// Clicking on a coordinate runs the function that checks for a coincidence

// Function that sinks a ship

function sinkShip(shipName, shipNameString, x, y, shipToCrossOut, shipSinkedInCS){
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

        shipToCrossOut.className = "crossedOut";
        shipSinkedInCS.className = "boxesSinked";

      }

    }
  }
}

// Function that reacts to clicking on a coordinate

var carrierToCrossOut = document.querySelector('#carrierToCrossOut > .col > h5');
var carrierSinkedInCS = document.querySelector('#carrierToCrossOut > .col > ul');
var battleshipToCrossOut = document.querySelector('#battleshipToCrossOut > .col > h5');
var battleshipSinkedInCS = document.querySelector('#battleshipToCrossOut > .col > ul');
var cruiserToCrossOut = document.querySelector('#cruiserToCrossOut > .col > h5');
var cruiserSinkedInCS = document.querySelector('#cruiserToCrossOut > .col > ul');
var submarineToCrossOut = document.querySelector('#submarineToCrossOut > .col > h5');
var submarineSinkedInCS = document.querySelector('#submarineToCrossOut > .col > ul');
var destroyerToCrossOut = document.querySelector('#destroyerToCrossOut > .col > h5');
var destroyerSinkedInCS = document.querySelector('#destroyerToCrossOut > .col > ul');

function templateCoordinateClick(j, i){
  var ask = sea[j][i];

  console.log("value of ask: " + ask);

  if( ask == 1 ){
    sinkShip(carrier, "Carrier", j, i, carrierToCrossOut, carrierSinkedInCS);
    sinkShip(battleship, "Battleship", j, i, battleshipToCrossOut, battleshipSinkedInCS);
    sinkShip(cruiser, "Cruiser", j, i, cruiserToCrossOut, cruiserSinkedInCS);
    sinkShip(submarine, "Submarine", j, i, submarineToCrossOut, submarineSinkedInCS);
    sinkShip(destroyer, "Destroyer", j, i, destroyerToCrossOut, destroyerSinkedInCS);
  }else if ( ask == "x" ){
    console.log("You've already sinked this ship, keep trying");
  }else{
    console.log("You've missed :(");
    var toMiss = document.getElementById(j + "-" + i);
    toMiss.className = "boxMissed";
  }

};


// Reset button
var resetBoard = document.getElementById("resetBoard");
resetBoard.addEventListener('click', function(){

  for( i = 1 ; i < sea.length ; i++ ){
    for( j = 1 ; j < sea[i].length ; j++ ){

      var resetCoordinate = document.getElementById(j + "-" + i);
      resetCoordinate.className = "boxBlank";

    }
  }
  fillWithOnes(carrier);
  fillWithOnes(battleship);
  fillWithOnes(cruiser);
  fillWithOnes(submarine);
  fillWithOnes(destroyer);

  var crossedOutElements = document.querySelectorAll(".crossedOut");
  [].forEach.call(crossedOutElements, function(coe) {
      coe.classList.remove("crossedOut");
  });
  var sinkedInCSElements = document.querySelectorAll(".boxesSinked");
  [].forEach.call(sinkedInCSElements, function(sicse) {
    sicse.classList.remove("boxesSinked");
  });

});

