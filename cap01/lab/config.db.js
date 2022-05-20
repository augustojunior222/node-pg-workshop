const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'nodeapi',
  password: 'postgres',
  port: 35432,
})


module.exports = pool;