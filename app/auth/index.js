'use strict';

const passport = require('passport');
const config = require('../config');
const FBAuthStrategy = require('passport-facebook').Strategy;
const TwitterAuthStrategy = require('passport-twitter').Strategy;
const helper = require('../helpers');

module.exports = () => {

    passport.serializeUser((user,done) => {
        done(null,user.id);
    });
    passport.deserializeUser((id, done) => {
        helper.findById(id)
                .then(user => done(null,user))
                .catch(error => console.log('error while deserializing user'));

    })
    let AuthProcessorMethod = (accessToken, refreshToken, profile, done) => {
        
            helper.findOneRecord(profile.id)
            .then(result => {
                //console.log(profile);
                if(result){
                    done(null, result);
                }else{
                    helper.createNewUser(profile)
                            .then(newUser => done(null, newUser))
                            .catch(err => console.log('New user create error', err));
                }
            });
        
        
    };

    passport.use(new FBAuthStrategy(config.fb, AuthProcessorMethod));
    passport.use(new TwitterAuthStrategy(config.twitter, AuthProcessorMethod));
}