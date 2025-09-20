let form = document.querySelector('form');
let inputs = [...form.querySelectorAll('input')];
let genericError = form.firstElementChild;

const INVALID_EMAIL_MESSAGE = "Please Enter a Valid Email";
const EMPTY_PASSWORD_MESSAGE = "Password is a required field."
const INVALID_PASSWORD_MESSAGE = "Password must be at least 10 characters long.";
const INVALID_PHONE_MESSAGE = "Please Enter a Valid Phone Number.";
const EMPTY_FIRST_NAME_MESSAGE = "First Name is a required field.";
const EMPTY_LAST_NAME_MESSAGE = "Last Name is a required field.";

function getErrorMessage(input) {
  let id = input.id;

  switch (id) {
    case 'first-name':
      return EMPTY_FIRST_NAME_MESSAGE;
    case 'last-name':
      return EMPTY_LAST_NAME_MESSAGE;
    case 'email':
      return INVALID_EMAIL_MESSAGE;
    case 'password':
      if (input.value.length === 0) {
        return EMPTY_PASSWORD_MESSAGE;
      }
      return INVALID_PASSWORD_MESSAGE;
    case 'phone':
      return INVALID_PHONE_MESSAGE;
  }
}

function handleValidityBlur(event) {
  let input = event.target;

  if (!input.checkValidity()) {
    input.classList.add('error-input')
    let previousError = input.parentNode.querySelector('.error-message');

    if (previousError) {
      previousError.remove();
    }

    let errorParagraph = document.createElement('p');
    errorParagraph.textContent = getErrorMessage(input);
    errorParagraph.classList.add('error-message');
    input.parentNode.appendChild(errorParagraph);
  }
}

function handleFocus(event) {
  let input = event.target;
  input.classList.remove('error-input');
  let errorMessage = input.parentNode.querySelector('.error-message');

  if (errorMessage) {
    errorMessage.remove();
  }
}

function anyErrors() {
  return inputs.some(input => !input.checkValidity());
}

function showGenericError() {
  genericError.classList.remove('hide');
}

function hideGenericError() {
  genericError.classList.add('hide');
}

document.addEventListener('blur', event => {
  if (event.target.tagName === 'INPUT') {
    handleValidityBlur(event);
    if (!anyErrors()) {
      hideGenericError();
    }
  }
}, true);

document.addEventListener('focus', event => {
  if (event.target.tagName === 'INPUT') {
    handleFocus(event);
  }
}, true);

form.addEventListener('submit', event => {
  if (anyErrors()) {
    event.preventDefault();
    showGenericError();
    inputs.forEach(input => input.dispatchEvent(new Event('blur')));
  } else {
    hideGenericError();
  }
})