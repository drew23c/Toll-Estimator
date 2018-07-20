let pgp = require('pg-promise')({});
let connectionString = 'postgres://localhost/map';
let db = pgp(connectionString);
module.exports = db;