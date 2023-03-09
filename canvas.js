const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADASS';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

let isdrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction=true;

function draw(e) {
    if (!isdrawing) return;//stop function when mouse button is up
    console.log(e);
    ctx.strokeStyle = `hsl(${hue},100%, 50%)`;
    ctx.beginPath();
    //start path
    ctx.moveTo(lastX, lastY);
    //go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
    hue++;
    if (hue >= 360) {
        hue = 0;
    }
    if(ctx.lineWidth>=100 || ctx.lineWidth<=1){
        direction=!direction;
    }
    if(direction){
        ctx.lineWidth++;
    }
    ctx.lineWidth--;

}

canvas.addEventListener('mousedown', (e) => {
    isdrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isdrawing = false);
canvas.addEventListener('mouseout', () => isdrawing = false);
