const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");
const {
    width: w,
    height: h
} = canvas;

const img = new Image();
img.src = "res/images/rick.png";
img.addEventListener("load", draw, false);

function draw() {
    // for (let i = 0; i < 100; i++) {
    //     let x = Math.random() * w - 50;
    //     let y = Math.random() * h - 100;
    //     ctx.drawImage(img, x, y);
    // }

    //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    // Draw the original
    ctx.drawImage(img, 170, 140);
    // Draw cropped images
    for (let i = 0; i < 22; i++) {
        ctx.drawImage(
            img,
            // source
            32, 0, 53, 75,
            // destination location
            i * 20, i * 10,
            // destination scale
            i * 0.2 * 53, i * 0.2 * 75
        );
    }
}