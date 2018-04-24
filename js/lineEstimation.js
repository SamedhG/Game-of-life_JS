class perceptron {
  constructor() {
    // this.xWeight = (Math.random() * 2) - 1;
    // this.yWeight = (Math.random() * 2) - 1;
    // this.biasWeight = (Math.random() * 2) - 1;
    this.xWeight = 0.5;
    this.yWeight = 0.5;
    this.biasWeight = 0.5;
    this.learningRate = 0.1;
  }

  guess(x, y) {
    let val = x * this.xWeight + y * this.yWeight + this.biasWeight;
    if(val < 0) {
      return -1;
    }
    else {
      return 1;
    }
  }

  train(x, y, ans) {
    let g = this.guess(x, y);
    let error = ans - g;
    this.xWeight += error * x * this.learningRate;
    this.yWeight += error * y * this.learningRate;
    this.biasWeight += error * this.learningRate;
  }
}

class line {
  constructor(grad, yinter) {
    this.m = grad;
    this.c = yinter;
  }

  check(x, y){
    if (((this.m * x) + this.c) < y) {
      return 1;
    }
    else {
      return - 1;
    }
  }

}

function start() {
  document.getElementById("runBtn").addEventListener("click", run);
}

function genLine() {
  // the gradient
  let grad = document.getElementById("gradient");
  if (!grad.checkValidity() || grad.value == "") {
    alert("Invalid Gradient")
  }
  grad = grad.value;
  if (grad >= 0 && grad <= 999) {
    grad = "0." + grad;
  }

  // the y intercept
  let yIntercept = document.getElementById("y-inter");
  if (!yIntercept.checkValidity() || yIntercept.value == "") {
    alert("Invalid Y intercept")
  }
  yIntercept = yIntercept.value;
  if (yIntercept >= 0 && yIntercept <= 999) {
    yIntercept = "0." + yIntercept;
  }

  return new line(parseFloat(grad), parseFloat(yIntercept));

}

function run() {

  // the number of tries
  let numTries = document.getElementById("num-tries");
  if (!numTries.checkValidity() || numTries.value == "") {
    alert("Invalid Number of tries")
  }
  numTries = numTries.value;

  let l = genLine();
  var p = new perceptron();
  for (var i = 0; i < numTries; i++) {
      let rX = Math.random() * 2 - 1;
      let rY = Math.random() * 2 - 1;
      p.train(rX, rY, l.check(rX, rY));
  }

  let m = - p.xWeight / p.yWeight;
  let c = - p.biasWeight / p.yWeight;
  console.log( "m = " + m + " c = " + c );


}
