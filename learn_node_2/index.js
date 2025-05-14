const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/profile/:username', (req, res) => {
    let username = req.params.username;
    res.send(`This is ${username}'s profile`);
})

app.get('/profile/:username/:age', (req, res) => {
    let username = req.params.username;
    let age = req.params.age;
    res.send(`${username}'s age is ${age}`);
})


app.listen(3000, () => console.log("server running on PORT: 3000"));