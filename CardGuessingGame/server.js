const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const db = new sqlite3.Database(':memory:'); // In-memory database for example purposes

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Initialize database
db.serialize(() => {
    db.run("CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT NOT NULL)");
});

app.post('/login', (req, res) => {
    const { username } = req.body;
    db.run("INSERT INTO users (username) VALUES (?)", [username], function(err) {
        if (err) {
            return console.error(err.message);
        }
        res.redirect('/game.html');
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
