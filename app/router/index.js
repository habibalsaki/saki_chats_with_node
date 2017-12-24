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