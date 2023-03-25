const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

// red circle for head
ctx.beginPath();
// params for circle (x, y, radius, startAngle, endAngle, anticlockwise)
ctx.arc(320,160,100,0, 2*Math.PI);
ctx.stroke();
ctx.fillStyle = 'red';
ctx.fill();

// eyes
ctx.beginPath();
ctx.arc(280,130,20,0,2*Math.PI);
ctx.fillStyle = 'black';
ctx.fill();

ctx.beginPath();
ctx.arc(360,130,20,0,2*Math.PI);
ctx.fillStyle = 'black';
ctx.fill();

// nose
ctx.beginPath(320,160);
ctx.moveTo(320,140);
ctx.lineTo(330,180);
ctx.lineTo(310,180);
ctx.lineTo(320,140);
ctx.fill();

// smile
ctx.beginPath();
ctx.arc(320,180,50,0,Math.PI);
ctx.strokeStyle = 'black';
ctx.lineWidth = 10;
ctx.stroke();

//hat
ctx.beginPath(320,60);
ctx.moveTo(320,40);
ctx.lineTo(420,80);
ctx.lineTo(420,90);
ctx.lineTo(220,90);
ctx.lineTo(220,80);
ctx.lineTo(320,40);
ctx.lineWidth = 1;
ctx.stroke();
ctx.fillStyle = 'blue';
ctx.fill();

// body
ctx.beginPath(320,260);
ctx.moveTo(320,260);
ctx.lineTo(320,400);
ctx.lineWidth = 10;
ctx.stroke();

// arms
ctx.beginPath(320,320);
ctx.moveTo(220,320);
ctx.lineTo(420,320);
ctx.stroke();

// legs
ctx.beginPath(320,400);
ctx.moveTo(220,540);
ctx.lineTo(320,400);
ctx.lineTo(420,540);
ctx.stroke();

// text
const str = 'Weird Stick Man';
ctx.font = 'bold 50px Arial';
ctx.fillStyle = 'blue';
ctx.textAlign = 'left';
ctx.fillText(str,120,600);