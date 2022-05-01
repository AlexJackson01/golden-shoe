require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
    host: DB_HOST || "127.0.0.1",
    user: DB_USER || "root",
    password: DB_PASS,
    database: DB_NAME || "golden_shoe",
    multipleStatements: true,
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    //ADD THE TABLES THAT YOU WANT IN THE BACK-END HERE\\

    /* DATABASE TABLES FOR THE WORKREQSLIST.JS COMPONENT */

    let sql =
        "DROP TABLE if exists shopping_cart; CREATE TABLE shopping_cart(id INT NOT NULL AUTO_INCREMENT, product_id VARCHAR(10) not null, url VARCHAR(100) not null, price VARCHAR(10) not null, product_name VARCHAR(100) not null, colour VARCHAR(20), size INT not null, PRIMARY KEY (id));";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Table creation `shopping_cart` was successful!");

        console.log("Closing...");
    });

    con.end();
});