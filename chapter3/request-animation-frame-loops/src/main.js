const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");
const {
    width: w,
    height: h
} = canvas;

/* Request Animation Frame Boilerplate
// Game setup code
function loopy (t) {
requestAnimationFrame(loopy);
// Game logic code
}
requestAnimationFrame(loopy); // Start things running!
*/

// Game setup code
// Set background color
ctx.fillStyle = "#000";
ctx.globalAlpha = 0.02;

function loopy(t) {
    requestAnimationFrame(loopy);
    // Game logic code
    // Set drop color
    ctx.save();
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#fff";
    ctx.globalAlpha = 1;

    // Random circle
    const x = Math.random() * w;
    const y = Math.random() * h;
    const radius = Math.random() * 20;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

}
requestAnimationFrame(loopy); // Start things running!