class InvalidDringException extends Error {

  constructor(message = 'Invalid Drink') {
    super();
    this.name = 'InvalidDrinkException'
    this.message = message
  }
}

module.exports = InvalidDringException
