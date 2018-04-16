// Game rules:
// A fiels with booleans
// if a block has 3 neighbors it becomes on
// if it has 2 it maintains state
// else off
function gameOfLife() {
  // a row-major 2d array of booleans
  // representing wheather the piece is on or off
  var field = [];
  //the width and height of the feild
  const width = 100;
  const height = 50;
  // create a blank filed
  // feild -> feild
  function init(f) {
    //f = new Array();
    for (var row = 0; row < height; row++) {
      f[row] = new Array();
      for (var col = 0; col < width; col++) {
        f[row][col] = false;
      }
    }
  }

  // initialize the game function
  init(field);
  //glider();
  document.getElementById("GOLCanvas").addEventListener("click", change);
  document.getElementById("pauseBtn").addEventListener("click", start);
  document.getElementById("gliderBtn").addEventListener("click", glider);


  // computes all the cells for the next
  // EFFECT mutates the feild
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
  // Int Int -> Boolean
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

  // Spawn a glider in a random position
  // Effect updates the board
  function glider() {
    let h = parseInt(Math.random() * (height - 3));
    let w = parseInt(Math.random() * (width - 3));
    field[h][w + 1] = true;
    field[h + 1][w + 2] = true
    field[h + 2][w + 2] = true
    field[h + 2][w + 1] = true
    field[h + 2][w] = true;
    draw();
  }

  // change the state of a cell when clicked
  // Event -> void
  // Efect mutates the feild
  function change(e){
    var canvas = document.getElementById("GOLCanvas");
    var rect = canvas.getBoundingClientRect();
    let x = (e.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
    let y = (e.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
    var context = canvas.getContext("2d");
    posx = parseInt(x / 10);
    posy = parseInt(y / 10);
    console.log(posy);
    field[posy][posx] = !field[posy][posx];
    draw();
  }

  // draw the canvas
  function draw() {
    var canvas = document.getElementById('GOLCanvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      var curx = 0;
      var cury = 0;

      for (var arr of field) {
        for (var state of arr) {
          ctx.fillStyle = 'rgba(0, 0, 0)';
          ctx.fillRect(curx, cury, 10,  10 );
          if (state) {
            ctx.fillStyle = 'rgb(200, 0, 0)';
          }
          else {
            ctx.fillStyle = 'rgba(0, 0, 200)';
          }
          ctx.fillRect(curx + 3, cury + 3,  7,  7 );
          curx += 10
        }
        curx = 0;
        cury += 10;
      }
    }
  }

  // variables and functions for playpause stuff
  var playing = true;
  var ns = setInterval(nextStep, 100);
  var d = setInterval(draw, 100);

  function start() {
    if (playing) {
      clearInterval(ns);
      clearInterval(d);
      playing = false;
    }
    else {
      ns = setInterval(nextStep, 100);
      d = setInterval(draw, 100);
      playing = true;
    }
  }
}
