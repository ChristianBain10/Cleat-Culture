const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "CleatsDB"
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.get('/api/get', (req, res) => {
    const sqlSelect = "SELECT * FROM cleats"

    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.post('/api/insert', (req, res) => {

    const cleatName = req.body.cleatName;
    const brand = req.body.brand;
    const releaseYear = req.body.releaseYear;
    const rating = req.body.rating;
    const imageURL = req.body.imageURL;

    const sqlInsert = "INSERT INTO cleats (cleatName, brand, releaseYear, rating, imageURL) VALUE (?,?,?,?,?)"

    db.query(sqlInsert, [cleatName, brand, releaseYear, rating, imageURL], (err, result) => {
        console.log(result);
    });
})

app.delete('/api/delete/:cleatName', (req, res) => {
    // delete by id or delete by name?
    // both unique identifiers...
    const cleatName = req.params.cleatName;
    const sqlDelete = "DELETE FROM cleats WHERE cleatName = ?"

    db.query(sqlDelete, cleatName, (err, res) => {
        console.log(err);
    })
})

app.listen(3001, () => {
    console.log('running on port 3001...');
})