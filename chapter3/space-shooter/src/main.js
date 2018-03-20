import pop from "../pop/index.js";
const {
  Container,
  CanvasRenderer,
  Texture,
  Sprite
} = pop;


// Game setup code
const w = 640;
const h = 480;
const renderer = new CanvasRenderer(w, h);
document.querySelector("#board").appendChild(renderer.view);

// Game objects
const scene = new Container();
const texture = new Texture("res/images/spaceship.png");

for (let i = 0; i < 50; i++) {
  const speed = Math.random() * 150 + 50;
  const ship = new Sprite(texture);
  const {
    pos
  } = ship;

  pos.x = Math.random() * w;
  pos.y = Math.random() * h;
  scene.add(ship);

  ship.update = function (dt) {
    this.pos.x += speed * dt;
    if (this.pos.x > w) {
      this.pos.x = -32;
    }
  };
}

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