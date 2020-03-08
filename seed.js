const {
  resetCatsTable,
  insertCats,
  findCatById,
  findAllCats
} = require("./server/db/cats")

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
    await resetCatsTable()
    await insertCats(cats)
    // const cat1 = await findCatById(1)
    // console.log(cat1)
    const allCats = await findAllCats()
    console.log(allCats)
  }
  catch (err) {
    console.error(err)
  }
}
seed()
