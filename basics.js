const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'red';  //fill color
ctx.fillRect(100,100,500,300); //filled shape

ctx.strokeRect(90,90,520,320); //outline

ctx.clearRect(150,150,400,200);  //transparent
