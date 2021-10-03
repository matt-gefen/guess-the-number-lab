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
  biggestNum: 5,
  smallestNum: 1,
  secretNum: null,
  playerGuess: null,
  prevGuesses: [],
  getGuess: function() {
    let guess = NaN
    while(isNaN(guess)) {
      guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
      guess = parseInt(guess)
      if (guess < this.smallestNum || guess > this.biggestNum) {
        guess = NaN
      }
    }
    return guess
  },
  render: function() {
    let prevGuessesString = this.prevGuesses.join(', ')
    if (this.secretNum > this.playerGuess) {
      alert(`Your guess is too low. Previous guesses: ${prevGuessesString}`)
    }
    else if (this.secretNum < this.playerGuess) {
      alert(`Your guess is too high. Previous guesses: ${prevGuessesString}`)
    }
    else {
      alert(`Congrats! You guessed the number in ${this.prevGuesses.length}`)
    }
  },
  play: function() {
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + 1
    this.playerGuess = NaN
    while (this.playerGuess != this.secretNum) {
      this.playerGuess = this.getGuess()
      this.prevGuesses.push(this.playerGuess)
      this.render()
    }
  },
}


game.play()