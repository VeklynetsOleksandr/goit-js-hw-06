function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector(".change-color");
const colorText = document.querySelector(".color");
const bodyEl = document.querySelector("body");

changeColorButton.addEventListener("click", onChangeColorButton);

function onChangeColorButton(event) {
  event.preventDefault();

  const newColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newColor;
  colorText.textContent = `${newColor}`;
}
