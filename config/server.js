const express = require('express');
const mssql = require('mssql');
const consign = require('consign');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

(async function () {
    mssql.connect('Server=127.0.0.1,1433;Database=database_node;User Id=douglas;Password=340$Uuxwp7Mcxo7Khy;')
        .then(conn => {
            global.conn = conn;
            console.log('conectou...');
            //return conn.query('SELECT * from passgens;')
        })
        // .then(result => {
        //     console.dir(result)
        // })
        .catch(err => console.log("erro! " + err));

})()
consign()
    .include('app/routes')
    .into(app);

module.exports = app;