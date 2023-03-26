const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const str = 'Hello World';
ctx.font = 'bold 50px Arial';
ctx.fillStyle = 'blue';
ctx.textAlign = 'left';
ctx.fillText(str,100,100);

ctx.font = 'italic 30px Arial';
ctx.fillStyle = 'green';
ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;
ctx.shadowBlur = 2;
ctx.shadowColor = 'rgba(255,0,0,0.5)';

for (let i = 10; i > -1; i--) {
  ctx.save();
  let tog = i%2 ? -1 : 1;
  ctx.scale(tog,1);
  ctx.fillText("counter: " + i, 150*tog, (600-(40*i)));
  ctx.restore();
}