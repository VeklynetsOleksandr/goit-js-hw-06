const ref = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  valueBtn: document.querySelector("#value"),
};

let counterValue = 0;

ref.decrementBtn.addEventListener("click", decrementCounter);

function decrementCounter(evt) {
  counterValue -= 1;
  ref.valueBtn.textContent = counterValue;
}

ref.incrementBtn.addEventListener("click", incrementCounter);

function incrementCounter(evt) {
  counterValue += 1;
  ref.valueBtn.textContent = counterValue;
}
