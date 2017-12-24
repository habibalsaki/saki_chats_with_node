'use strict';
const helper = require('../helpers');

module.exports = () => {
    let routes = {
        'get' : {
            '/' : (req,res,next) => {
                res.render('login');
            },
            '/chat' : (req,res,next) => {
                res.render('chatroom');
            },
            '/room' : (req,res,next) => {
                res.render('rooms');
            },
            '/getSession': (req, res, next) => {
                res.send(req.session.favColor)
            },
            '/setSession': (req,res,next) => {
                req.session.favColor = "red";
                res.send("session set");
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