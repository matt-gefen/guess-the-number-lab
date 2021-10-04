const game = {
  title: 'Guess the Number!',
  biggestNum: 10,
  smallestNum: 1,
  secretNum: null,
  playerGuess: null,
  prevGuesses: [],
  getGuess: function() {
    let guess = NaN
    while(isNaN(guess)) {
      guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
      guess = parseInt(guess)
      if (guess > this.secretNum) {
        this.biggestNum = guess
      }
      else {
        this.smallestNum = guess
      }
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
    this.smallestNum = parseInt(prompt(`Enter the low end of the range`))
    this.biggestNum = parseInt(prompt(`Enter the high end of the range`))
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