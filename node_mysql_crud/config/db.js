const mysql = require('mysql2/promise');

const mySqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'rohit',
    database: 'student_db'
});

module.exports = mySqlPool;