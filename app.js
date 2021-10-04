const game = {
  title: 'Guess the Number!',
  biggestNum: NaN,
  smallestNum: NaN,
  secretNum: NaN,
  playerGuess: NaN,
  prevGuesses: [],
  getRange: function () {
    while(isNaN(this.smallestNum)) {
      this.smallestNum = prompt(`Enter the low end of the range`)
      this.smallestNum = parseInt(this.smallestNum)
    }
    while(isNaN(this.biggestNum)) {
      this.biggestNum = prompt(`Enter the high end of the range`)
      this.biggestNum = parseInt(this.biggestNum)

    }
  },
  getGuess: function() {
    let guess = NaN
    while(isNaN(guess)) {
      guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
      guess = parseInt(guess)
      if ((guess > this.secretNum) && (guess <= this.biggestNum)) {
        this.biggestNum = guess
      }
      else if ((guess < this.secretNum) && (guess >= this.smallestNum)) {
        this.smallestNum = guess
      }
      else if ((guess < this.smallestNum) && (guess > this.biggestNum)) {
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
    this.getRange()
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + 1
    while (this.playerGuess != this.secretNum) {
      this.playerGuess = this.getGuess()
      this.prevGuesses.push(this.playerGuess)
      this.render()
    }
  },
}


game.play()