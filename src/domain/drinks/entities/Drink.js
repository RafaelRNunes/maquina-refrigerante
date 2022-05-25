class Drink {
  #name
  #price

  constructor({ name, price }) {
    this.#name = name
    this.#price = price
  }

  toString() {
    return { name: this.#name, price: this.#price }
  }

}

module.exports = Drink
