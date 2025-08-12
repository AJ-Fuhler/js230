document.addEventListener('DOMContentLoaded', () => {
  let composer = document.querySelector('.composer');
  let textarea = composer.querySelector('textarea');
  let counter = composer.querySelector('.counter');
  let button = composer.querySelector('button');

  function updateCounter() {
    let length = textarea.value.length;
    let remaining = 140 - length;
    let message = `${remaining} characters remaining`;
    let invalid = remaining < 0;

    textarea.classList.toggle('invalid', invalid);
    button.disabled = invalid;
    counter.textContent = message;


  }

    textarea.addEventListener('keyup', updateCounter);

    updateCounter();
});