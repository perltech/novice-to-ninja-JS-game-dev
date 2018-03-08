const canvas = document.querySelector('#board canvas');
const ctx = canvas.getContext("2d");
console.log(ctx.canvas);


// Set color styles
ctx.strokeStyle = "black";
ctx.fillStyle = "red";

// Draw square
ctx.fillRect(300, 200, 50, 50);
ctx.strokeRect(300, 200, 50, 50);

// Draw circle
ctx.beginPath();
ctx.arc(325, 170, 25, 0, Math.PI * 2, false);
ctx.fill();
ctx.stroke();

// Convert degrees and radians
const deg2Rad = deg => (Math.PI / 180) * deg;
const rad2Deg = rad => (180 / Math.PI) * rad;

