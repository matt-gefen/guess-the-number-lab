// Features:
// 1. Allow the player to be prompted to guess at the secret number until they guess correctly
// 2. If the player has an incorrect guess, display an alert message that informs the player:
  // whether the guess is too high or too low
  // A list of all preciously guessed numbers (without array brackets)
// If the player has guessed the secret number:
  //  Display an alert that congratulates and informs total guesses
  // End the gameplay

const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  },
  prevGuesses: [],
  // getGuess: function() {
  //   let guess = NaN
  //   while (parseInt(guess) === NaN) {
  //     guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
  //   }
  // }
}

function getGuess() {
  let guess = NaN
  while(isNaN(guess)) {
    guess = prompt(`Enter a guess between 1 and 100`)
    guess = parseInt(guess)
    if (guess <= 1 || guess >= 100) {
      guess = NaN
    }
  }
  return guess

  }

  console.log(getGuess())
