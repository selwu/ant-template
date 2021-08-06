const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
context.strokeStyle = '#fff';

context.beginPath();
context.moveTo(50, 150);
context.lineTo(50, 300);
context.lineWidth = 16;
context.stroke();

context.beginPath();
context.moveTo(72, 128);
context.lineTo(172, 128);
context.lineWidth = 16;
context.stroke();

context.beginPath();
context.moveTo(194, 150);
context.lineTo(194, 300);
context.lineWidth = 16;
context.stroke();
