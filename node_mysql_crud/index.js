const express = require('express');
const dotenv = require('dotenv');
const mySqlPool = require('./config/db');

// configure dotenv
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// middlewares
app.use(express.json());

// routes
app.use('/api/v1/student', require('./routes/studentRoutes'));

app.get('/test', (req, res) => {
    res.status(200).send('<h1>NodeJs MySQL App</h1>');
});

// mySQL
mySqlPool.query('SELECT 1').then(() => {
    console.log('Databse connected successfully...!');
    app.listen(PORT, () => {
        console.log(`Server running on PORT: ${PORT}`);
    });
}).catch((error) => {
    console.log(error);
})
