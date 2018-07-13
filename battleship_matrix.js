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

// Form the multidimentional arrays for each ship with random coordinates every time

var carrier = [];
var battleship = [];
var cruiser = [];
var submarine = [];
var destroyer = [];
var shipList = [];



function fillShipCoordinates(shipName, shipNameLength, direction){
  let randomNumberX = Math.floor((Math.random() * 15) + 1);
  let randomNumberY = Math.floor((Math.random() * 15) + 1);

  for ( i = 0 ; i < shipNameLength; i++ ){
    let innerArray = [];
    if( direction == 'horizontal'){
      innerArray.push(randomNumberX);
      innerArray.push(randomNumberY + i);
    }else{
      innerArray.push(randomNumberX + i);
      innerArray.push(randomNumberY);
    }
    shipName.push(innerArray);
  }

  // for ( let j = 0 ; j < shipName.length; j++ ){
  //   for( let k = 0 ; k < shipList.length ; k++ ){
  //     while( shipName[j] === shipList[k] ){
  //       // shipName = [];
  //       // let randomNumberX = Math.floor((Math.random() * 15) + 1);
  //       // let randomNumberY = Math.floor((Math.random() * 15) + 1);
  //       // for ( l = 0 ; l < shipName.length; l++ ){
  //       //   var innerArray = [];
  //       //   innerArray.push(randomNumberX);
  //       //   innerArray.push(randomNumberY + l);
  //       //   shipName.push(innerArray);
  //       // }
  //       console.log('wa');
  //     }
  //   }
  // }
  
  shipList.push(shipName);
}



// Fill with 1's the coordinates in the sea matrix (visible on console)
function fillWithOnes(shipName){
  for ( i = 0 ; i <= shipName.length - 1; i++ ){
    for ( j = 0 ; j <= shipName[i].length; j++ ){
      sea[ shipName[i][0] ][ shipName[i][1] ] = 1;
    }
  }
}




//Carrier ship
function fillFirstShip(shipName, shipNameLength){
  let randomNumberX = Math.floor((Math.random() * 15) + 1);
  let randomNumberY = Math.floor((Math.random() * 15) + 1);
  for ( i = 0 ; i < shipNameLength; i++ ){
    let innerArray = [];
    innerArray.push(randomNumberX);
    innerArray.push(randomNumberY + i);
    shipName.push(innerArray);
  }
  shipList.push(shipName);
};
fillFirstShip(carrier, 5);
fillWithOnes(carrier);


//Battleship ship
fillShipCoordinates(battleship, 4, 'horizontal');
fillWithOnes(battleship);


//Cruiser ship
fillShipCoordinates(cruiser, 3, 'vertical');
fillWithOnes(cruiser);


//Submarine ship
fillShipCoordinates(submarine, 3, 'horizontal');
fillWithOnes(submarine);


//Destroyer ship
fillShipCoordinates(destroyer, 2, 'vertical');
fillWithOnes(destroyer);


console.log(sea);
console.log(shipList);





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

