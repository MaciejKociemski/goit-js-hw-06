//zdarzenie input

const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
input.addEventListener("input", fn);
function fn(e) {
  text.style.fontSize = `${e.target.value}px`;
}

