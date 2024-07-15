const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234helo',
    database: 'vinicola'
});

module.exports = connection;