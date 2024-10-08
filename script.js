const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let drawing = false;

function startDrawing(e) {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY); 
}

function draw(e) {
    if (!drawing) return;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.strokeStyle = 'black'; 
    ctx.lineWidth = 1;
    ctx.stroke();
}

function stopDrawing() {
    drawing = false;
    ctx.closePath(); 
}


const clearButton = document.getElementById('clearCanvas');

clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw); 
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);
