'use strict';

const express = require('express');
const app = express();
const chatRootModule = require('./app');
const passport = require('passport');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');


app.use(express.static('public'));
app.use(chatRootModule.session);

app.use(passport.initialize());
app.use(passport.session());
app.use('/',chatRootModule.router);

app.listen(app.get('port'), () => {
    console.log("App is running on port ", app.get('port'));
})