const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");
const {
    width: w,
    height: h
} = canvas;

const start = Date.now();
// Set interval for 60 frames per second
const timer = setInterval(() => {
    // Clear the screen
    ctx.fillStyle="#F0F0F0";
    ctx.fillRect(0, 0, w, h);
    // Write the time
    ctx.strokeText(Date.now() - start, 20, 80);
    if (Math.random() < 0.01) {
        ctx.strokeText("Game Over!", 160, 180);
        clearInterval(timer);
    }
}, 1000 / 60);

/* Using set timeout */
// set timeout only loops once, needs to be recalled recursively

// const start = Date.now();
// function loopy () {
// ctx.fillRect(0, 0, w, h);
// ctx.strokeText(Date.now() - start, 20, 80);
// if (Math.random() < 0.01) {
// ctx.strokeText("Game Over!", 160, 180);
// } else {
// // Loop
// setTimeout(loopy, 1000 / 60);
// }
// }
// loopy(); // Start things running!