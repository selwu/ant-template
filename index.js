const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
context.strokeStyle = '#fff';

context.beginPath();
context.moveTo(128, 136);
context.lineTo(128, 286);
context.lineWidth = 16;
context.stroke();

context.beginPath();
context.moveTo(150, 114);
context.lineTo(250, 114);
context.lineWidth = 16;
context.stroke();

context.beginPath();
context.moveTo(272, 136);
context.lineTo(272, 286);
context.lineWidth = 16;
context.stroke();
