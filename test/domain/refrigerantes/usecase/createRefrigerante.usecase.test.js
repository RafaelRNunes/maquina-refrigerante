const CreateUseCase = require('../../../../src/domain/refrigerantes/usecase/createRefrigerante.usecase')
const RefrigeranteInvalidoException = require("../../../../src/domain/refrigerantes/exceptions/RefrigeranteInvalidoException");
const repository = { save: () => { return 1 } }

describe('Object validations', () => {
  it('Should throw a exception when refrigerante is undefined', () => {
    expect(() => {
      CreateUseCase(repository).create()
    }).toThrowError(RefrigeranteInvalidoException)
  })

  it('Should throw a exception when refrigerante properties is undefined', () => {
    expect(() => {
      CreateUseCase(repository).create({})
    }).toThrowError(RefrigeranteInvalidoException)
  })

  it('Should throw a exception when refrigerante preco property is undefined', () => {
    expect(() => {
      CreateUseCase(repository).create({ nome: 'coca' })
    }).toThrowError(RefrigeranteInvalidoException)
  })

  it('Should throw a exception when refrigerante nome property is undefined', () => {
    expect(() => {
      CreateUseCase(repository).create({ preco: 2.5 })
    }).toThrowError(RefrigeranteInvalidoException)
  })
})

describe('Values validations', () => {
  it('Should accept preco equals 0', () => {
    expect(
        CreateUseCase(repository).create({nome: 'coca', preco: 0.0})
    ).toBe(1)
  })

  it('Should not accept negative value for preco', () => {
    expect(() => {
      CreateUseCase(repository).create({nome: 'coca', preco: -2.5})
    }).toThrowError(RefrigeranteInvalidoException)
  })

  it('Should create refrigerante and return a identification', () => {
    expect(
        CreateUseCase(repository).create({nome: 'coca', preco: 2.5})
    ).toBe(1)
  })
})

