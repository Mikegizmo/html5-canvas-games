const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

// large yellow circle
ctx.beginPath();
// params for circle (x, y, radius, startAngle, endAngle, anticlockwise)
ctx.arc(320,320,200,0, 2*Math.PI);
ctx.strokeStyle = 'blue';
ctx.stroke();
ctx.fillStyle = 'yellow';
ctx.fill();

// left eye
ctx.beginPath();
ctx.arc(250,250,30,0, 2*Math.PI);
ctx.fillStyle = 'black';
ctx.fill();

// right eye
ctx.beginPath();
ctx.arc(390,250,30,0, 2*Math.PI);
ctx.fillStyle = 'black';
ctx.fill();

// smile
ctx.beginPath();
ctx.arc(320,340,100,0,Math.PI);
ctx.strokeStyle = 'black';
ctx.lineWidth = 10;
ctx.stroke();