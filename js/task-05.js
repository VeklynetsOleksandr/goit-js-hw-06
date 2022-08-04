const inputRef = document.querySelector("#name-input");
const nameLabel = document.querySelector("#name-output");

inputRef.addEventListener("input", onInputChange);

function onInputChange(event) {
  nameLabel.textContent = event.currentTarget.value;
}
