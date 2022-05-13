class RefrigeranteInvalidoException extends Error {

  constructor(message = 'Refrigerante Inválido') {
    super();
    this.name = 'RefrigeranteInvalidoException'
    this.message = message
  }
}

module.exports = RefrigeranteInvalidoException
