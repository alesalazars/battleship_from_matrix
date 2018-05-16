/* FIND SINKED SHIP IN A MATRIX */


// First I create the multidimentional array of 100x100
var sea = [];
var row = [];

for ( i = 0 ; i < 100; i++ ){
  row.push(0);
}
for ( i = 0 ; i < 100 ; i++ ){
  sea.push(row.slice());
}

console.log('WELCOME TO BATTLESHIP MATRIX');


// Set coordenates for the ships and put 1's in them

//Carrier ship
var carrier = [ [28, 5], [28, 6], [28, 7], [28, 8], [28, 9] ];
fillWithOnes(carrier);

//Battleship ship
var battleship = [ [0, 3], [1, 3], [2, 3], [3, 3] ];
fillWithOnes(battleship);

//Cruiser ship
var cruiser = [ [43, 88], [43, 89], [43, 90] ];
fillWithOnes(cruiser);

//Submarine ship
var submarine = [ [14, 0], [14, 1], [14, 2] ];
fillWithOnes(submarine);

//Destroyer ship
var destroyer = [ [90, 3], [90, 4] ];
fillWithOnes(destroyer);

function fillWithOnes(shipName){
  for ( i = 0 ; i <= shipName.length - 1; i++ ){
    for ( j = 0 ; j <= shipName[i].length; j++ ){
      sea[ shipName[i][0] ][ shipName[i][1] ] = 1;
    }
  }
}


console.log(sea);


// Clicking on the button runs the function that checks for a coincidence

var button = document.getElementById('submitPositions');

button.addEventListener('click', function(){

  var x = document.getElementById('xPosition').value;
  var y = document.getElementById('yPosition').value;
  var ask = sea[x][y];

  console.log("value of ask: " + ask);

  if( ask == 1 ){

        for ( i = 0 ; i <= carrier.length - 1; i++ ){
          for ( j = 0 ; j <= carrier[i].length; j++ ){
            if( x == carrier[i][0] && y == carrier[i][1] ){
              console.log("You've sinked the Carrier ship! :D");

              for ( k = 0 ; k <= carrier.length - 1; k++ ){
                for ( l = 0 ; l <= carrier[k].length; l++ ){
                  sea[ carrier[k][0] ][ carrier[k][1] ] = "x";
                }
              }

            }
          }
        }

        for ( i = 0 ; i <= battleship.length -1 ; i++ ){
          for ( j = 0 ; j <= battleship[i].length ; j++ ){
            if( x == battleship[i][0] && y == battleship[i][1] ){
              console.log("You've sinked the Battleship ship! :D");

              for ( k = 0 ; k <= battleship.length -1 ; k++ ){
                for ( l = 0 ; l <= battleship[k].length ; l++ ){
                  sea[ battleship[k][0] ][ battleship[k][1] ] = "x";
                }
              }

            }
          }
        }

        for ( i = 0 ; i <= cruiser.length - 1; i++ ){
          for ( j = 0 ; j <= cruiser[i].length ; j++ ){
            if( x == cruiser[i][0] && y == cruiser[i][1] ){
              console.log("You've sinked the Cruiser ship! :D");
              
              for ( k = 0 ; k <= cruiser.length -1 ; k++ ){
                for ( l = 0 ; l <= cruiser[k].length ; l++ ){
                  sea[ cruiser[k][0] ][ cruiser[k][1] ] = "x";
                }
              }

            }
          }
        }

        for ( i = 0 ; i <= submarine.length - 1 ; i++ ){
          for ( j = 0 ; j <= submarine[i].length ; j++ ){
            if( x == submarine[i][0] && y == submarine[i][1] ){
              console.log("You've sinked the Submarine ship! :D");
              
              for ( k = 0 ; k <= submarine.length -1 ; k++ ){
                for ( l = 0 ; l <= submarine[k].length ; l++ ){
                  sea[ submarine[k][0] ][ submarine[k][1] ] = "x";
                }
              }

            }
          }
        }

        for ( i = 0 ; i <= destroyer.length - 1; i++ ){
          for ( j = 0 ; j <= destroyer[i].length ; j++ ){
            if( x == destroyer[i][0] && y == destroyer[i][1] ){
              console.log("You've sinked the Destroyer ship! :D");
              
              for ( k = 0 ; k <= destroyer.length -1 ; k++ ){
                for ( l = 0 ; l <= destroyer[k].length ; l++ ){
                  sea[ destroyer[k][0] ][ destroyer[k][1] ] = "x";
                }
              }

            }
          }
        }

  }else if ( ask == "x" ){
    console.log("You've already sinked this ship, keep trying");
  }else{
    console.log("You've missed :(");
  }


});