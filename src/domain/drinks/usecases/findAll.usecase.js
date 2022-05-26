module.exports = (repository) => {
  const findAll = () => {
    const drinks = repository.findAll()

    if (!drinks || drinks.length === 0) {
      throw new Error('Resources not found.')
    }

    return drinks
  }

  return { findAll }
}
