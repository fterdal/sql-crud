const { pgp, db } = require("../db")
const { sql } = require("../util")

const cs = new pgp.helpers.ColumnSet(['name'], {table: 'cats'});

// May take an array of cats or a single cat:
// [{name: "Rigatoni"}, {name: "Ares"}]
// {name: "Peabody"}
const insertCats = cats => {
  return db.none(pgp.helpers.insert(cats, cs))
}

const resetCatsTable = async () => {
  await db.none(sql('cats/drop.sql'))
  return db.none(sql('cats/create.sql'))
}

const findCatById = id => {
  return db.one(sql('cats/findById.sql'), id)
}

const findAllCats = () => {
  return db.many(sql('cats/findAll.sql'))
}

const deleteCatById = id => {
  return db.none(sql('cats/deleteById.sql'), id)
}

module.exports = {
  insertCats,
  resetCatsTable,
  findCatById,
  findAllCats,
  deleteCatById,
}
