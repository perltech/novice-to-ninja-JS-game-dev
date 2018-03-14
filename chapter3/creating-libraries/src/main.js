import pop from "../pop/index.js";
const {
  Container,
  CanvasRenderer,
  Text
} = pop;


// Game setup code
const w = 640;
const h = 480;
const renderer = new CanvasRenderer(w, h);
document.querySelector("#board").appendChild(renderer.view);

// Game objects
const scene = new Container();
const message = new Text("The Renderer!", {
  font: "40pt sans-serif",
  fill: "DarkRed",
  align: "center"
});
message.pos.x = w / 2;
message.pos.y = h / 2;
scene.add(message);

// Render the main container
//renderer.render(scene);

// Animate scrolling on message
message.update = function (dt) {
  this.pos.x -= 100 * dt;
  if (this.pos.x < -420) {
    this.pos.x = w;
  }
};
scene.add(message);

let dt = 0;
let last = 0;

// Infinite loop to continuously execute rendering, targeting the canvas
function loopy(ms) {
  requestAnimationFrame(loopy);
  const t = ms / 1000;
  dt = t - last;
  last = t;
  scene.update(dt, t);
  renderer.render(scene);
}
requestAnimationFrame(loopy);