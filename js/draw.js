

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









































/*//Create a stage by getting a reference to the canvas
stage = new createjs.Stage("GOLCanvas");



stage.update();

//stage = new createjs.Stage("GOLCanvas");
    //Create a Shape DisplayObject.
    circle = new createjs.Shape();
    circle.graphics.beginFill("red").drawCircle(0, 0, 40);
    //Set position of Shape instance.
    circle.x = circle.y = 50;
    //Add Shape instance to stage display list.
    stage.addChild(circle);
    //Update stage will render next frame
    stage.update();
*/
