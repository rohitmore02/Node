// Learning and practicing all about middlewares

const express = require('express');
const app = express();

// middleware for handling request and response
app.use((req, res, next) => {
    console.log('This is middleware');
    next();
});

app.get('/', (req, res) => {
    res.send('This is home page');
});

// Session, Cookie

// error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});

app.listen(3000, () => console.log("Server running on PORT: 3000"));