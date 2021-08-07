const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const MOVE_INT = 25;
let xL = 120;
let xLT = 150;
let xLB = 250;
let xLR = 280;
let yL = 144;
let yLL = 294;
let yLT = 114;

function leftHandler(event) {
  if (event.code === 'ArrowLeft') {
    xL -= MOVE_INT;
    xLT -= MOVE_INT;
    xLB -= MOVE_INT;
    xLR -= MOVE_INT;
  }
}

function rightHandler(event) {
  if (event.code === 'ArrowRight') {
    xL += MOVE_INT;
    xLT += MOVE_INT;
    xLB += MOVE_INT;
    xLR += MOVE_INT;
  }
}

function upHandler(event) {
  if (event.code === 'ArrowUp') {
    yL -= MOVE_INT;
    yLL -= MOVE_INT;
    yLT -= MOVE_INT;
  }
}

function downHandler(event) {
  if (event.code === 'ArrowDown') {
    yL += MOVE_INT;
    yLL += MOVE_INT;
    yLT += MOVE_INT;
  }
}

const left = document.addEventListener('keydown', leftHandler);
const right = document.addEventListener('keydown', rightHandler);
const up = document.addEventListener('keydown', upHandler);
const down = document.addEventListener('keydown', downHandler);

canvas.width = 400;
canvas.height = 400;
context.strokeStyle = '#fff';

requestAnimationFrame(tick);
function tick() {
  requestAnimationFrame(tick);

  context.clearRect(0, 0, canvas.width, canvas.height);

  context.beginPath();
  context.moveTo(xL, yL);
  context.lineTo(xL, yLL);
  context.lineWidth = 16;
  context.stroke();

  context.beginPath();
  context.moveTo(xLT, yLT);
  context.lineTo(xLB, yLT);
  context.lineWidth = 16;
  context.stroke();

  context.beginPath();
  context.moveTo(xLR, yL);
  context.lineTo(xLR, yLL);
  context.lineWidth = 16;
  context.stroke();
}
