const controlFont = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

controlFont.addEventListener("input", onInput);
controlFont.value = 16;

function onInput() {
  text.style.fontSize = controlFont.value + "px";
}
