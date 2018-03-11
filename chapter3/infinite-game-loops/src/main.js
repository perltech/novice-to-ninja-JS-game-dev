const start = Date.now();
// Set interval for 60 frames per second
const timer = setInterval(() => {
    // Clear the screen
    ctx.fillRect(0, 0, w, h);
    // Write the time
    ctx.strokeText(Date.now() - start, 20, 80);
    if (Math.random() < 0.01) {
        ctx.strokeText("Game Over!", 160, 180);
        clearInterval(timer);
    }
}, 1000 / 60);