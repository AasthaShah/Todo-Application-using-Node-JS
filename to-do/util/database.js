const mysql = require('mysql2');

const pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'Aastha.1997',
    database : 'todo'
});

module.exports = pool.promise();