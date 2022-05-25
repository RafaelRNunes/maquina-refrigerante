const InvalidDrinkException = require('../exceptions/InvalidDrinkException');

module.exports = (repository) => {
  const create = (drink = throwException()) => {

    if (!drink.name || (!drink.price && drink.price !== 0) || drink.price < 0) {
      throw new InvalidDrinkException('Enter the name and value of the drink.')
    }

    return repository.save(drink) // return uma identification
  }

  const throwException = () => {
    throw new InvalidDrinkException()
  }

  return { create }
}
