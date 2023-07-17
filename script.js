let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let random = document.getElementById("random");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

function randomGradient() {
  let val =
    Math.floor(Math.random() * 256) +
    ", " +
    (Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256));

  let val2 =
    Math.floor(Math.random() * 256) +
    ", " +
    (Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256));

  body.style.background = `linear-gradient(to right, rgb(${val}), rgb(${val2})`;

  color1.value = val;
  console.log(color1.value);

  css.textContent = body.style.background + ";";
}

console.log(css);
console.log(color1);
console.log(color2);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", randomGradient);
