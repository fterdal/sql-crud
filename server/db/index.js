const {QueryFile} = require('pg-promise');
const path = require('path');
const { db, pgp } = require("./db")

// See: https://github.com/vitaly-t/pg-promise-demo/blob/master/JavaScript/db/sql/index.js
function sql(file) {

  const fullPath = path.join(__dirname, file);

  const options = { minify: true };

  const qf = new QueryFile(fullPath, options);

  if (qf.error) {
      console.error(qf.error);
  }

  return qf;
}

module.exports = {
  sql,
  db,
  pgp
}
