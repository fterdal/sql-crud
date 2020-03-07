const { db, pgp, sql } = require("./server/db")
// This function does literally nothing, but it allows VSCode to format my SQL
// statements nicely, so whatevs.
// const sql = str => str
// console.log(Object.keys(pgp))
// console.log(Object.keys(db))

const cs = new pgp.helpers.ColumnSet(['name'], {table: 'cats'});

const cats = [
  {name: "Rigatoni"},
  {name: "Ares"},
  {name: "Peabody"},
  {name: "Tiger"},
  {name: "Maurice"},
  {name: "ThunderMuff"}
]

async function seed () {
  try {
    // await db.none(sql`DROP TABLE cats`)
    await db.none("DROP TABLE IF EXISTS cats")
    // await db.none("DROP TABLE rooms")
    await db.none("CREATE TABLE cats (id SERIAL PRIMARY KEY, name TEXT)")
    // await db.none("INSERT INTO cats ($1:name) VALUES ($1:list)", [cats])
    await db.none(pgp.helpers.insert(cats, cs))
    const result = await db.many("SELECT * FROM cats")
    console.log(result)
  }
  catch (err) {
    console.error(err)
  }
}
seed()
