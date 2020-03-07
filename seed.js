const db = require("./server/db/db")
const { red, blue, green } = require("chalk")
// This function does literally nothing, but it allows VSCode to format my SQL
// statements nicely, so whatevs.
const sql = str => str

async function seed () {
  try {
    await db.none(sql`DROP TABLE cats`)
    await db.none(sql`CREATE TABLE cats (name TEXT)`)
    const result = await db.none(sql`INSERT INTO cats (name) VALUES ()`)
    // console.log(result)
  }
  catch (err) {
    console.error(err)
  }
}
seed()
