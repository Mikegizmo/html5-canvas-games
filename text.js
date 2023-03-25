const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const str = 'Hello World';
ctx.font = 'bold 50px Arial';
ctx.fillStyle = 'blue';
ctx.textAlign = 'left';
ctx.fillText(str,100,100);

ctx.font = 'italic 30px Arial';
ctx.fillStyle = 'green';

for (let i = 10; i > -1; i--) {
  ctx.fillText("counter: "+ i,50,(600-(40*i)));
}