const InvalidDrinkException = require('../exceptions/InvalidDrinkException');

module.exports = (repository) => {
  const create = (drink) => {
    if (!drink) throw new InvalidDrinkException('Enter with a drink.')
    if (!drink.name) throw new InvalidDrinkException('Enter the name of the drink.')
    if (!drink.price && drink.price !== 0.0) throw new InvalidDrinkException('Enter the price of the drink.')
    if (drink.price < 0) throw new InvalidDrinkException(`The price can't be less than 0.`)

    return repository.save(drink)
  }

  return { create }
}
