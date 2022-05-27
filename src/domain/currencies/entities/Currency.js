class Currency {
  #description
  #value
  #quantity

  constructor({description, value, quantity}) {
    this.#description = description
    this.#value = value
    this.#quantity = quantity
  }
}

module.exports = Currency
