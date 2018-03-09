const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");
const {
    width: w,
    height: h
} = canvas;


function draw() {
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        ctx.fillRect(x, y, 50, 50);
    }
}

// Draw background
ctx.fillStyle = "black";
draw();

ctx.save();
// Draw midground
ctx.fillStyle = "red";
draw();
// Draw foreground using black square background
ctx.restore();
draw();