module.exports = class RefrigeranteEntity {
  #nome
  #preco

  constructor(nome, preco) {
    this.#nome = nome
    this.#preco = preco
  }

  toString() {
    return { nome: this.#nome, preco: this.#preco }
  }

}
