const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const left = document.addEventListener('keydown', leftHandler);
const right = document.addEventListener('keydown', rightHandler);
const up = document.addEventListener('keydown', upHandler);
const down = document.addEventListener('keydown', downHandler);

function leftHandler(event) {
  if (event.code === 'ArrowLeft') {
    console.log('left');
  }
}

function rightHandler(event) {
  if (event.code === 'ArrowRight') {
    console.log('ArrowRight');
  }
}

function upHandler(event) {
  if (event.code === 'ArrowUp') {
    console.log('ArrowUp');
  }
}

function downHandler(event) {
  if (event.code === 'ArrowDown') {
    console.log('ArrowDown');
  }
}

canvas.width = 400;
canvas.height = 400;
context.strokeStyle = '#fff';

requestAnimationFrame(tick);
function tick() {
  requestAnimationFrame(tick);

  context.clearRect(0, 0, canvas.width, canvas.height);

  context.beginPath();
  context.moveTo(120, 144);
  context.lineTo(120, 294);
  context.lineWidth = 16;
  context.stroke();

  context.beginPath();
  context.moveTo(150, 114);
  context.lineTo(250, 114);
  context.lineWidth = 16;
  context.stroke();

  context.beginPath();
  context.moveTo(280, 144);
  context.lineTo(280, 294);
  context.lineWidth = 16;
  context.stroke();
}
