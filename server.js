'use strict';

const express = require('express');
const app = express();
const chatRootModule = require('./app');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');


app.use(express.static('public'));
app.use(chatRootModule.session);
app.use('/',chatRootModule.router);


app.listen(app.get('port'), () => {
    console.log("App is running on port ", app.get('port'));
})