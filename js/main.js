// Game rules:
// A fiels with booleans
// if a block has 3 neighbors it becomes on
// if it has 2 it maintains state
// else off

// a row-major 2d array of booleans
// representing wheather the piece is on or off
var field = [];
const width = 40;
const height = 40;
// create a blank 100 x 50 (w*h) filed
function init(f) {
  //f = new Array();
  for (var row = 0; row < height; row++) {
    f[row] = new Array();
    for (var col = 0; col < width; col++) {
      f[row][col] = false;
    }
  }
}

init(field);

// computes all the cells for the next step
function nextStep() {
  var next = [];
  init(next);
  for (var row = 0; row < height; row++) {
    for (var col = 0; col < width; col++) {
      next[row][col] = nextState(row, col);
    }
  }
  field = next;
}


// returns the nest state of a given cell
function nextState(r, c) {
  // number of on neightbors to the given call
  var onNeighbors = 0;
  // if given is alive itself count it
  if (field[r][c]) {
    onNeighbors -= 1;
  }
  // count alive neightbors
  for (var row = -1 ; row <= 1; row += 1) {
    for (var col = -1; col <= 1; col += 1) {
      if(field[r + row]) {
      }
      if(field[r + row] && field[r + row][c + col]) {
        onNeighbors += 1;
      }
    }
  }
  // return based on rules
  return (onNeighbors === 3) || ((onNeighbors === 2) && field[r][c]);
  }



function glider() {
field[10][20] = true;
field[11][21] = true
field[12][21] = true
field[12][20] = true
field[12][19] = true;

// an oscilator
field[22][21] = true
field[22][20] = true
field[22][19] = true;
}
