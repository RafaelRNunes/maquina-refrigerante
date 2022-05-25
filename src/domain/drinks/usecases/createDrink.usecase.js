const InvalidDrinkException = require('../exceptions/InvalidDrinkException');

module.exports = (repository) => {
  const create = (drink = throwException()) => {
    if (!drink.name) throw new InvalidDrinkException('Enter the name of the drink.')
    if (!drink.price && drink.price !== 0.0) throw new InvalidDrinkException('Enter the price of the drink.')
    if (drink.price < 0) throw new InvalidDrinkException(`The price can't be less than 0.`)

    return repository.save(drink)
  }

  const throwException = () => {
    throw new InvalidDrinkException('Enter the name and price of the drink.')
  }

  return { create }
}
