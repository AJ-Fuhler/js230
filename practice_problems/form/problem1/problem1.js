let firstNameInput = document.getElementById('first-name');
let lastNameInput = document.getElementById('last-name');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let phoneInput = document.getElementById('phone');
let submitBtn = document.querySelector('button');

firstNameInput.addEventListener('blur', event => {
  if (firstNameInput.value.length < 1) {
    let textNode = document.createTextNode("Please Enter a valid Email.");
    textNode.classList.add('error');
  }
})