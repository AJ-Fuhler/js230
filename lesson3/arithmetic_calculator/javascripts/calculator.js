document.addEventListener('DOMContentLoaded', () => {
  let resultHeader = document.querySelector('#result');
  let form = document.querySelector('form');
  let firstNumber = form.querySelector('#first-number');
  let operator = form.querySelector('#operator');
  let secondNumber = form.querySelector('#second-number');

  form.addEventListener('submit', event => {
    event.preventDefault();

    let operatorValue = operator.value;
    let firstNumberValue = Number(firstNumber.value);
    let secondNumberValue = Number(secondNumber.value);

    if (operatorValue === '+') {
      resultHeader.textContent = String(firstNumberValue + secondNumberValue);
    } else if (operatorValue === '-') {
      resultHeader.textContent = String(firstNumberValue - secondNumberValue);
    } else if (operatorValue === '*') {
      resultHeader.textContent = String(firstNumberValue * secondNumberValue);
    } else {
      resultHeader.textContent = String(firstNumberValue / secondNumberValue);
    }
  });
});