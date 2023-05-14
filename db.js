
// Importing the pg module (Node.js library) and the Pool class (pool of client connections to postgresql db)
const Pool = require('pg').Pool 


// Creating a new pool with these connections
const pool = new Pool({
  user: 'superuser',
  host: 'localhost',
  database: 'twl_db',
  password: 'superuser',
  port: 5432,
});

// Exporting the pool to make it usable for other modules
modtoule.exports = pool;

