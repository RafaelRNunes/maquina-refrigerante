const Repository = () => {
  let currencies = []

  const findAll = () => {
    return currencies
  }

  const save = (currency) => {
    currencies.push(currency)
  }

  return { findAll, save }
}

const Create = (repository) => {
  const create = (currency) => {
    repository.save(currency)
  }

  return { create }
}

const repository = Repository()
const service = Create(repository)
service.findAll = () => { return repository.findAll() }

describe('Create Currencies', () => {
  it('should create currencies', () => {
    service.create({ description: '1 cent - Penny', value: .01, quantity: 100 })
    service.create({ description: '5 cents - Nickel', value: .05, quantity: 20 })
    service.create({ description: '10 cents - Dime', value: .1, quantity: 10 })
    service.create({ description: '25 cents - Quarter', value: .25, quantity: 4 })
    service.create({ description: '50 cents - Half Dollar', value: .5, quantity: 2 })
    service.create({ description: 'Dollar', value: 1, quantity: 50 })
    service.create({ description: '5 Dollars', value: 5, quantity: 10 })
    service.create({ description: '10 Dollars', value: 10, quantity: 5 })

    const currencies = service.findAll()

    expect(currencies).toBeDefined()
    expect(currencies.length).toBe(8)
  });
})
