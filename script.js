
  
//   TODO define a counter variable that is mutable
let counter = 0

let counterElement = document.getElementById("counter");

function updateCounter() {
  counterElement.innerText = counter
}

function handleIncrement() {
  // TODO update count by adding 1
  counter += 1
  
  updateCounter();
}

function handleDecrement() {
  // TODO update count by subtracting 1
  if (counter > 0) {
  counter -= 1
  }
  updateCounter();
}

let incrementButton = document.getElementById("increment-button");
incrementButton.addEventListener("click", handleIncrement);

let decrementButton = document.getElementById("decrement-button");
decrementButton.addEventListener("click", handleDecrement);

updateCounter();
