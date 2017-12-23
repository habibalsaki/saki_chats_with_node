'use strict';

const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req,res,next) => {
    res.send(`<h1>Hello Express</h1>`);
});

app.get('/dashboard', (req,res,next) => {
    console.log(req.hello);
    res.render('login');
});

app.listen(app.get('port'), () => {
    console.log("App is running on port ", app.get('port'));
})