const Pool = require('pg').Pool

const pool = new Pool({
  user: 'doadmin',
  host: 'db-postgresql-fra1-32058-do-user-14018081-0.b.db.ondigitalocean.com',
  database: 'defaultdb',
  password: 'AVNS_0biH4F6ZTJJ0rnfeXk7',
  port: 25060,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;

