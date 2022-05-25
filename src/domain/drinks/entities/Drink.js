class Drink {
  #name
  #price

  constructor({ name, price }) {
    this.#name = name
    this.#price = price
  }

  get name() { return this.#name }

  get price() { return this.#price }

}

module.exports = Drink
