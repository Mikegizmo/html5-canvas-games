const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'red';  //fill color

ctx.fillRect(100,100,500,300); //filled shape

ctx.strokeRect(90,90,520,320); //outline

ctx.clearRect(150,150,400,200);  //transparent

ctx.fillStyle = '#0000ff'; // 6 digit hex code
ctx.fillRect(40,40,100,100);

ctx.fillStyle = '#0f0'; // 3 digit hex code
ctx.fillRect(80,80,100,100);

ctx.fillStyle = 'rgb(255,0,255)'; // rgb color code
ctx.fillRect(120,120,100,100);

ctx.fillStyle = 'rgba(255,0,255,0.2)'; // rgba color code - opacity
ctx.fillRect(20,20,400,400);

ctx.fillStyle = 'red';
ctx.strokeStyle = 'blue';

ctx.rect(100,500,200,100);
ctx.fill(); // inherits previous color, default to black
ctx.stroke();

ctx.strokeRect(350,500,200,100);

ctx.fillStyle = 'rgba(0,0,255,0.2)';
ctx.beginPath(300,300);
ctx.moveTo(50,450); // move pen
ctx.lineTo(580,450); // draws a line
ctx.lineTo(580,620); // draws a line
ctx.lineTo(50,620); // draws a line
ctx.lineTo(50,450); // draws a line
ctx.fill();

//triangle
ctx.beginPath(300,300);
ctx.moveTo(200,320);
ctx.lineTo(500,320);
ctx.lineTo(350,220);
ctx.lineTo(200,320);
ctx.stroke();
ctx.fillStyle = '#333';
ctx.fill();