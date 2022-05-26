const Drink = require('../../../../../src/domain/drinks/entities/Drink')

describe('to string', () => {
  it('should return a drink object', () => {
    const drink = new Drink({ name: 'water', price: 2.5 })
    const drink2 = new Drink({ name: 'water', price: 2.5 })
    expect(drink.name).toBe(drink.toString().name)
    expect(drink.price).toBe(drink.toString().price)

    expect(drink).toEqual(drink2)
  })
})
