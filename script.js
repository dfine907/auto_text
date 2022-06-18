const textElement = document.getElementById("text");
const speedElement = document.getElementById("speed");
const text = "I Love JavaScript";

let index = 1;
let speed = 300 / speedElement.value;

writeText();

function writeText() {
  textElement.innerHTML = text.slice(0, index);

  index++;

  if (index > text.length) {
    index = 1;
  }

  setTimeout(writeText, speed);
}

speedElement.addEventListener("input", (eventObj) => {
  speed = 300 / eventObj.target.value;
});
