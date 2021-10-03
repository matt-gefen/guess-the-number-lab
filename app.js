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
  biggestNum: 2,
  smallestNum: 1,
  secretNum: null,
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
  play: function() {
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + 1
    let playerGuess = this.getGuess()
    return [playerGuess, this.secretNum]
    
    }
  }


console.log(game.play())
// testing play

// let secret = Math.floor(Math.random() * (2 - 1 + 1)) + 1

// let previous = []
// let playerGuess = NaN

// while (playerGuess !== secret) {
//   playerGuess = parseInt(prompt('enter something, dummy'))
//   previous.push(playerGuess)
// }