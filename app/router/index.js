'use strict';
const helper = require('../helpers');
const passport = require('passport');
const config = require('../config');

module.exports = () => {
    let routes = {
        'get' : {
            '/' : (req,res,next) => {
                res.render('login');
            },
            '/chat' : [helper.isAuthenticated, (req,res,next) => {
                res.render('chatroom');
            }],
            '/room' : [helper.isAuthenticated, (req,res,next) => {
                res.render('rooms', {
                    user: req.user,
                    host: config.host
                });
            }],
            '/auth/facebook' : passport.authenticate('facebook',{scope : ['public_profile','email']}),
            '/auth/facebook/callback': passport.authenticate('facebook', {
                successRedirect: '/room',
                failureRedirect: '/'
            }),
            '/auth/twitter' : passport.authenticate('twitter'),
            '/auth/twitter/callback': passport.authenticate('twitter', {
                successRedirect: '/room',
                failureRedirect: '/'
            }),
            '/logout': (req,res,next) => {
                req.logout();
                res.redirect('/');
            }
        },
        'post' : {

        },
        'NotAvailable': (req,res,next) => {
            res.status(404).sendFile(process.cwd() + '/views/404.htm');
        }
    };

    return helper.route(routes);
}