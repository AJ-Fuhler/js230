document.addEventListener('DOMContentLoaded', () => {
  let answer = Math.floor(Math.random() * 100) + 1;
  let form = document.querySelector('main > form');
  let input = form.querySelector('#guess');
  let link = document.querySelector('main > a');
  let p = document.querySelector('main > p');
  let guessCount = 0;
  let submitButton = form.querySelector('input[type="submit"]');

  function newGame() {
    submitButton.disabled = false;
    form.reset();
    answer = Math.floor(Math.random() * 100) + 1;
    p.textContent = 'Guess a number from 1 to 100';
    guessCount = 0;
  }

  form.addEventListener('submit', event => {
    event.preventDefault();

    let guess = parseInt(input.value, 10);
    guessCount += 1;

    let message;
    if (Number.isNaN(guess)) {
      message = 'Please enter a number';
    } else {
      if (guess > answer) {
        message = `My number is lower than ${guess}`;
      } else if (guess < answer) {
        message = `My number is higher than ${guess}`;
      } else {
        message = `You guessed it! It took you ${guessCount} guess${guessCount > 1 ? 'es' : ''}.`
        guessCount = 0;
        submitButton.disabled = true;
      }
    }

    p.textContent = message;
  });

  link.addEventListener('click', event => {
    event.preventDefault();
    newGame()
  });
});