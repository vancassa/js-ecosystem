// ES6 modules
// import factorial from "./library"; // Import default module
import { factorial } from "./library"; // Import named module

const $input = document.querySelector("#input");
const $result = document.querySelector("#result");
const $calculateButton = document.querySelector("#calculate-button");

$calculateButton.addEventListener("click", () => {
  const inputNumber = $input.value;
  if (Number(inputNumber) > 0) {
    const factorialResult = factorial(Number(inputNumber));
    $result.textContent = factorialResult;
  }
});
