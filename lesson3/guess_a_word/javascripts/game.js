class Game {
  static words = ['apple', 'banana', 'orange', 'pear'];
  static MAX_WRONG_GUESSES = 6;

  constructor() {
    this.word = Game.getRandomWord();
    if (!this.word) {
      throw new Error('You ran out of words to guess!');
    }
    this.word = [...this.word];
    this.lettersGuessed = [];
    this.incorrectGuesses = 0;
  }

  getCurrentState() {
    return this.word.map(char => {
      return this.lettersGuessed.includes(char) ? char : '_';
    }).join(' ');
  }

  hasWon() {
    return this.word.every(char => this.lettersGuessed.includes(char));
  }

  hasLost() {
    return this.incorrectGuesses >= Game.MAX_WRONG_GUESSES;
  }

  gameOver() {
    return this.hasWon() || this.hasLost();
  }

  makeGuess(char) {
    char = char.toLowerCase();
    if (Game.notALetter(char)) return;
    if (this.lettersGuessed.includes(char)) return;

    this.lettersGuessed.push(char);
    if (!this.word.includes(char)) {
      this.incorrectGuesses += 1;
    }
  }

  showState() { // method for testing only
    console.log('word: ', this.word);
    console.log('currentState: ', this.getCurrentState());
    console.log('incorrectGuesses: ', this.incorrectGuesses);
    console.log('lettersGuessed: ', this.lettersGuessed)
    console.log('hasWon: ', this.hasWon());
    console.log('hasLost: ', this.hasLost());
  }

  static getRandomWord() {
    if (Game.words.length === 0) return undefined;
    const randomIndex = Math.floor(Math.random() * Game.words.length);
    return Game.words.splice(randomIndex, 1)[0];
  }

  static notALetter(char) {
    return /[^a-z]/i.test(char);
  }
}


document.addEventListener('DOMContentLoaded', () => {
  let body = document.querySelector('body');
  let message = document.querySelector('#message');
  let wordDiv = document.querySelector('#spaces')
  let guessesDiv = document.querySelector('#guesses');
  let replayLink = document.querySelector('#replay');
  let game = new Game();
  let apples = document.querySelector('#apples');

  function setApplesLost(incorrectGuesses) {
    if (incorrectGuesses === 0) {
      apples.className = '';
      return;
    }
    apples.className = `guess_${game.incorrectGuesses}`;
  }

  let wordP = document.createElement('p');
  wordP.style.display = 'inline-block';
  wordP.textContent = game.getCurrentState();
  wordDiv.appendChild(wordP);

  let guessesP = document.createElement('p');
  guessesP.style.display = 'inline-block';
  guessesDiv.appendChild(guessesP);

  replayLink.style.display = 'none';

  document.addEventListener('keyup', event => {
    let key = event.key;
    if (key.length !== 1 || Game.notALetter(key)) return;

    game.makeGuess(key);
    setApplesLost(game.incorrectGuesses);
    wordP.textContent = game.getCurrentState();
    guessesP.textContent = game.lettersGuessed.join(' ');

    if (game.gameOver()) {
      if (game.hasWon()) {
        message.textContent = 'You win!';
        body.classList.add('win');
      } else if (game.hasLost()) {
        message.textContent = "Sorry! You're out of guesses.";
        body.classList.add('lose')
      }

      replayLink.style.display = 'block';
    }

  });

  replayLink.addEventListener('click', event => {
    event.preventDefault();

    try {
      game = new Game();
    } catch (error) {
      message.textContent = "Sorry, I've run out of words!";
      replayLink.style.display = 'none';
      return;
    }

    body.classList.remove('win', 'lose');
    setApplesLost(game.incorrectGuesses);
    message.textContent = '';
    wordP.textContent = game.getCurrentState();
    guessesP.textContent = '';
    replayLink.style.display = 'none';
  });
});