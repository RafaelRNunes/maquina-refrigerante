const CreateUseCase = require('../../../../../src/domain/drinks/usecases/createDrink.usecase')
const InvalidDrinkException = require('../../../../../src/domain/drinks/exceptions/InvalidDrinkException');

const repositoryMock = { save: () => { return 1 } }

describe('Object validations', () => {
  it('Should throw a exception when drink is undefined', () => {
    expect(() => {
      CreateUseCase(repositoryMock).create()
    }).toThrowError(InvalidDrinkException)
  })

  it('Should throw a exception when drink properties is undefined', () => {
    expect(() => {
      CreateUseCase(repositoryMock).create({})
    }).toThrowError(InvalidDrinkException)
  })

  it('Should throw a exception when drink price property is undefined', () => {
    expect(() => {
      CreateUseCase(repositoryMock).create({ name: 'water' })
    }).toThrowError(InvalidDrinkException)
  })

  it('Should throw a exception when drink name property is undefined', () => {
    expect(() => {
      CreateUseCase(repositoryMock).create({ price: 2.5 })
    }).toThrowError(InvalidDrinkException)
  })
})

describe('Price validations', () => {
  it('Should accept price equals 0', () => {
    expect(
        CreateUseCase(repositoryMock).create({ name: 'water', price: 0.0 })
    ).toBe(1)
  })

  it('Should not accept negative value for price', () => {
    expect(() => {
      CreateUseCase(repositoryMock).create({ name: 'water', price: -2.5 })
    }).toThrowError(InvalidDrinkException)
  })

  it('Should create drink and return a identification', () => {
    expect(
        CreateUseCase(repositoryMock).create({ name: 'water', price: 2.5 })
    ).toBe(1)
  })
})

