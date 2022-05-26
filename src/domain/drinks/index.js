module.exports = (repository) => {
  const findAll = require('./usecases/findAll.usecase')(repository).findAll
  const create = require('./usecases/create.usecase')(repository).create

  return { findAll, create }
}
