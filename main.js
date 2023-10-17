const canvas = document.querySelector("canvas");
let fontSizeRangeX = document.querySelector("#fontSizeX");
let fontSizeRangeY = document.querySelector("#fontSizeY");
let format = document.querySelector("#format");
const c = canvas.getContext("2d");
c.fillStyle = "red";
let sizeDrawX = 5;
let sizeDrawY = 0;
fontSizeRangeX.onchange = function (e) {
  sizeDrawX = e.target.value;
};
fontSizeRangeY.onchange = function (e) {
  sizeDrawY = e.target.value;
};

function draw(x, y) {
  if (isDrawing) {
    c.beginPath();
    c.arc(x, y, sizeDrawX, sizeDrawY, Math.PI * 2);
    c.closePath();
    c.fill();
  }
}
canvas.onclick = function () {
  canvas.addEventListener("mousemove", (event) =>
    draw(event.offsetX, event.offsetY)
  );
};

canvas.addEventListener("mousedown", () => (isDrawing = true));
canvas.addEventListener("mouseup", () => (isDrawing = false));
format.onchange = function (e) {
  document.querySelector("a").download = `my_painting.${e.target.value}`;
};
document
  .querySelector("a")
  .addEventListener(
    "click",
    (event) => (event.target.href = canvas.toDataURL())
  );
