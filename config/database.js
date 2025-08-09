const mysql2 = require('mysql2');

const pool = mysql2.createPool({
  host: 'bhuizv8qb3uibt4h9wkf-mysql.services.clever-cloud.com',
  user: 'uq6w8prwny93mjof',
  password: 'cbbwCmXUHQnIXEszEg4N',
  database: 'bhuizv8qb3uibt4h9wkf',
});

module.exports = pool.promise();