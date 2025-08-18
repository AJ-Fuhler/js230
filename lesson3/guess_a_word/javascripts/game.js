class Game {
  static words = ['apple', 'banana', 'orange', 'pear'];

  constructor() {
    this.word = Game.getRandomWord();
  }

  static getRandomWord() {
    if (Game.words.length === 0) return undefined;
    const randomIndex = Math.floor(Math.random() * Game.words.length);
    return Game.words.splice(randomIndex, 1)[0];
  }
}