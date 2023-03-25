const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

// line width progressions
for(let x = 0; x < 20; x++) {
  ctx.lineWidth = 1 + x;
  ctx.beginPath();
  ctx.moveTo(100, 50 + (x * 20));
  ctx.lineTo(500, 50 + (x * 20));
  ctx.strokeStyle = 'blue';
  ctx.stroke();
}

ctx.clearRect(0,0,640,640);

// lineCap types
ctx.beginPath();
ctx.lineWidth = 10;
ctx.lineCap = 'butt';
ctx.moveTo(100,10);
ctx.lineTo(100,500);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 10;
ctx.lineCap = 'round';
ctx.moveTo(200,10);
ctx.lineTo(200,500);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 10;
ctx.lineCap = 'square';
ctx.moveTo(300,10);
ctx.lineTo(300,500);
ctx.stroke();

ctx.clearRect(0,0,640,640);

// lineJoin types
ctx.beginPath();
ctx.lineWidth = 30;
ctx.lineJoin = 'round';
ctx.moveTo(100,10);
ctx.lineTo(200,110);
ctx.lineTo(100,220);
ctx.lineTo(200,330);
ctx.lineTo(100,440);
ctx.lineTo(200,550);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 30;
ctx.lineJoin = 'bevel';
ctx.moveTo(300,10);
ctx.lineTo(400,110);
ctx.lineTo(300,220);
ctx.lineTo(400,330);
ctx.lineTo(300,440);
ctx.lineTo(400,550);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 30;
ctx.lineJoin = 'miter';
ctx.moveTo(500,10);
ctx.lineTo(600,110);
ctx.lineTo(500,220);
ctx.lineTo(600,330);
ctx.lineTo(500,440);
ctx.lineTo(600,550);
ctx.stroke();