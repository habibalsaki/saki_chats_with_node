'use strict';

if(process.env.NODE_ENV === "production"){
    module.exports = {
        host : process.env.host,
        dbURI : process.env.dbURI,
        secretKey: process.env.secretKey,
        fb: {
            clientID: process.env.fbClientID,
            clientSecret: process.env.fbClientSecret,
            callbackURI: process.env.host + '/auth/facebook/callback',
            profileFields: ['id','displayName','name','picture']
        },
        "twitter": {
            consumerKey: process.env.twConsumerKey,
            consumerSecret: process.env.twConsumerSecret,
            callbackURL: process.env.host + "/auth/twitter/callback",
            profileFields: ["id","displayName","name","picture"]
        }
    }
}else{
    module.exports = require("./development.json");
}