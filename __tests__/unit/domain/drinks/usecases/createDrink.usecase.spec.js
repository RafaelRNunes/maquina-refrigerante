const CreateUseCase = require('../../../../../src/domain/drinks/usecases/create.usecase')
const InvalidDrinkException = require('../../../../../src/domain/drinks/exceptions/InvalidDrinkException');
const Drink = require("../../../../../src/domain/drinks/entities/Drink");

const repositoryMock = { save: (drink) => { return 1 } }
// red, green and refactor
describe('Object validations', () => {
  it('Should throw a exception when drink is undefined', () => {
    //given, when, then GWT
    expect(() => {
      CreateUseCase(repositoryMock).create(undefined)
    }).toThrowError(InvalidDrinkException)
  })

  it('Should throw a exception when drink is null', () => {
    //given, when, then GWT
    expect(() => {
      CreateUseCase(repositoryMock).create(null)
    }).toThrowError(InvalidDrinkException)
  })

  it('Should throw a exception when drink properties is undefined', () => {
    expect(() => {
      CreateUseCase(repositoryMock).create({})
    }).toThrowError(InvalidDrinkException)
  })

  it('Should throw a exception when drink price property is undefined', () => {
    const drink = new Drink({ name: 'water' })

    expect(() => {
      CreateUseCase(repositoryMock).create(drink)
    }).toThrowError(InvalidDrinkException)
  })

  it('Should throw a exception when drink name property is undefined', () => {
    const drink = new Drink({ price: 2.5 })

    expect(() => {
      CreateUseCase(repositoryMock).create(drink)
    }).toThrowError(InvalidDrinkException)
  })
})

describe('Price validations', () => {
  it('Should accept price equals 0', () => {
    const drink = new Drink({ name: 'water', price: 0 })

    expect(
        CreateUseCase(repositoryMock).create(drink)
    ).toBe(1)
  })

  it('Should not accept negative value for price', () => {
    const drink = new Drink({ name: 'water', price: (-2.5) })

    expect(() => {
      CreateUseCase(repositoryMock).create(drink)
    }).toThrowError(InvalidDrinkException)
  })

  it('Should create drink and return a identification', () => {
    const drink = new Drink({ name: 'water', price: 2.5 })

    expect(
        CreateUseCase(repositoryMock).create(drink)
    ).toBe(1)
  })
})

