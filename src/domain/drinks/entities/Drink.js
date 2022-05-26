class Drink {
  #name // # = private
  #price

  static quantidade = 0

  constructor({ name, price }) {
    this.#name = name
    this.#price = price
    Drink.quantidade++
  }

  get name() { return this.#name }

  get price() { return this.#price }

  toString() {
    return { name: this.name, price: this.price }
  }

}

module.exports = Drink
