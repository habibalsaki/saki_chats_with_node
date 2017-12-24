'use strict';

if(process.env.NODE_ENV === "production"){
    module.exports = {
        host : process.env.host,
        dbURI : process.env.dbURI,
        secretKey: process.env.secretKey
    }
}else{
    module.exports = require("./development.json");
}