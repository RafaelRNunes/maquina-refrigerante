const RefrigeranteInvalidoException = require("../exceptions/RefrigeranteInvalidoException");

module.exports = (repository) => {
  const create = (refrigerante = throwException()) => {

    if (!refrigerante.nome || (!refrigerante.preco && refrigerante.preco !== 0) || refrigerante.preco < 0) {
      throw new RefrigeranteInvalidoException('Informe o nome e o valor do refrigerante.')
    }

    return repository.save(refrigerante) // return uma identification
  }

  const throwException = () => {
    throw new RefrigeranteInvalidoException()
  }

  return { create }
}
