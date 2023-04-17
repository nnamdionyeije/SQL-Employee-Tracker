const mysql = require('mysql2');

//establishes mysql2
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 's7n&n2tNuV^bzAABAaRj',
    database: 'employees_db'
})

connection.connect(function (err) {
    if (err) throw err;
});

//Async mysql2 setup for async functions
const asyncConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 's7n&n2tNuV^bzAABAaRj',
    database: 'employees_db'
}).promise();

asyncConnection.connect(function (err) {
    if (err) throw err;
});

//Exports both functions
module.exports = {connection, asyncConnection};