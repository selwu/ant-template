const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
context.strokeStyle = '#fff';

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
