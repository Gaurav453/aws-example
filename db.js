const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'test-db.c4vxqmngttl3.ap-south-1.rds.amazonaws.com',
    user: "admin",
    password: "admin123",
    db:'test_registration_app'
});
module.exports = con
