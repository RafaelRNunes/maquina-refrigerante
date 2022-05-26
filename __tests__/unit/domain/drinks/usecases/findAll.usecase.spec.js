const Repository = () => {
  let drinks = []

  const findAll = () => {
    return drinks
  }

  const save = (drink) => {
    const id = drinks.length + 1
    drink.id = id
    drinks.push(drink)
  }

  const clear = () => {
    drinks = []
  }

  return { findAll, save, clear }
}

const repository = Repository()

const service = require('../../../../../src/domain/drinks')(repository)

describe('FindAll Usecase', () => {
  beforeEach(() => {
    repository.clear()
  })

  it('should return a list of drinks', () => {
    service.create({ name: 'water', price: 2.5 })
    service.create({ name: 'soda', price: 3 })
    service.create({ name: 'beer', price: 7.25 })

    const drinks = service.findAll()

    expect(drinks).toBeDefined()
    expect(drinks.length).toBe(3)
  })

  it('should throw an exception', () => {
    expect(() => {
      service.findAll()
    }).toThrowError('Resources not found.')
  })
})
