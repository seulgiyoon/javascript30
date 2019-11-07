const canvas = document.getElementById('draw');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = 'orange';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 100;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

const draw = function(event) {
  if (!isDrawing) {
    return;
  }
  context.strokeStyle = `hsl(${hue}, 60%, 50%)`
  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(event.offsetX, event.offsetY);
  context.stroke();
  [lastX, lastY] = [event.offsetX, event.offsetY];

  if (hue >= 360) {
    hue = 0;
  } else {
    hue = hue + 1;    
  }

  if (context.lineWidth >= 100 || context.lineWidth <= 1) {
    direction = !direction;
  }

  if (direction) {
    context.lineWidth = context.lineWidth + 1;
  } else {
    context.lineWidth = context.lineWidth - 1;
  }

}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (event) => {
  isDrawing = true;
  [lastX, lastY] = [event.offsetX, event.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false );
canvas.addEventListener('mouseout', () => isDrawing = false );