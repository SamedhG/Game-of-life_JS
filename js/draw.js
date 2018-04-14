function draw() {
  var canvas = document.getElementById('GOLCanvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var curx = 0;
    var cury = 0;
    ctx.font = '7px serif';



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
