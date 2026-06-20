const style = document.createElement("style");
style.textContent = `
  @keyframes floatUp {
    0%   { transform: translateY(0) rotate(0deg) scale(1); opacity: 1; }
    70%  { opacity: 0.8; }
    100% { transform: translateY(-110vh) rotate(var(--r)) scale(0.4); opacity: 0; }
  }
`;
document.head.appendChild(style);

const colors = [
  "#e24b4a",
  "#d4537e",
  "#f09595",
  "#ed93b1",
  "#c0395a",
  "#ff6b8a",
  "#D7FDF0",
  "#ff9eb5",
  "#b03060",
  "#ff4d6d",
  "#AA78A6",
  "#B4D6D3",
  "#cdb4db",
  "Red",
  "#283618",
  "#f26a8d",
  "#f1faee",
  "#fbf8cc",
  "#fbf8ccff",
  "#fde4cfff",
  "#ffcfd2ff",
  "#f1c0e8ff",
  "#cfbaf0ff",
  "#a3c4f3ff",
  "#90dbf4ff",
  "#8eecf5ff",
  "#98f5e1ff",
  "#b9fbc0ff",
  "blue",
];

function spawnHeart() {
  const x = Math.random() * window.innerWidth;
  const color = colors[Math.floor(Math.random() * colors.length)];
  const size = 14 + Math.floor(Math.random() * 28);
  const duration = (3 + Math.random() * 3).toFixed(2);
  const rot = (Math.random() * 60 - 30).toFixed(1) + "deg";

  const h = document.createElement("div");
  h.textContent = "♥";
  h.setAttribute(
    "style",
    `
    position: fixed;
    left: ${x}px;
    bottom: 0px;
    font-size: ${size}px;
    color: ${color};
    pointer-events: none;
    user-select: none;
    line-height: 1;
    z-index: 9999;
    --r: ${rot};
    animation: floatUp ${duration}s linear forwards;
  `,
  );
  document.body.appendChild(h);
  h.addEventListener("animationend", () => h.remove());
}

function rain() {
  spawnHeart();
  setTimeout(rain, 150 + Math.random() * 200);
}

rain();
