const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");
const {
    width: w,
    height: h
} = canvas;

const randColor = () => Math.floor(Math.random() * 255);

ctx.fillStyle = "black";
ctx.fillRect(0, 0, w, h);


let x, y, radius;

for (let i = 0; i < 550; i++) {
    ctx.fillStyle = `rgb(${randColor()}, ${randColor()}, ${randColor()})`;
    
    x = Math.random() * w;
    y = Math.random() * h;
    radius = Math.random() * 3;

    // draw the star!
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fill();
}