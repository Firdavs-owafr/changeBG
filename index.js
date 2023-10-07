let colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let title = document.querySelector(".title");
let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let heshteg = "#";

  for (let a = 0; a < 6; a++) {
    heshteg += colors[random(a)];
  }

  document.body.style.background = heshteg;
  title.textContent = heshteg;
});

function random() {
  return Math.floor(Math.random() * colors.length);
}
