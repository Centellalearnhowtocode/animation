const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const cx = canvas.width / 2;
const cy = canvas.height / 2;

function heartX(t) {
  return 16 * Math.pow(Math.sin(t), 3);
}

function heartY(t) {
  return -(
    13 * Math.cos(t) -
    5 * Math.cos(2 * t) -
    2 * Math.cos(3 * t) -
    Math.cos(4 * t)
  );
}

const scale = Math.min(canvas.width, canvas.height) / 44;

const particles = [];
for (let i = 0; i < 300; i++) {
  const t = Math.random() * Math.PI * 2;
  particles.push({
    tx: heartX(t),
    ty: heartY(t),
    x: (Math.random() - 0.5) * canvas.width,
    y: (Math.random() - 0.5) * canvas.height,
    size: Math.random() * 2 + 0.5,
    alpha: Math.random(),
    pulse: Math.random() * Math.PI * 2,
  });
}

let frame = 0;
function draw() {
  frame++;
  ctx.fillStyle = "rgba(0, 0, 0, 0.18)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const beat = 1 + 0.06 * Math.sin(frame * 0.05);

  particles.forEach((p) => {
    p.pulse += 0.02;
    const tx = cx + p.tx * scale * beat;
    const ty = cy + p.ty * scale * beat;
    p.x += (tx - p.x) * 0.04;
    p.y += (ty - p.y) * 0.04;
    ctx.globalAlpha = 0.5 + 0.5 * Math.sin(p.pulse);
    ctx.fillStyle = "hsl(345,100%,65%)";
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.globalAlpha = 1;
  requestAnimationFrame(draw);
}

draw();

