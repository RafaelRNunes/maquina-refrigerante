module.exports = (repository) => {
  const create = (currency) => {
    repository.save(currency)
  }

  return { create }
}
