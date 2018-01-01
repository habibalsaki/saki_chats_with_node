'use strict';
const router = require('express').Router();
const db = require('../db');

let _registerRoute = (routes, method) => {
    for(let key in routes){
        if(typeof routes[key] === 'object' && routes[key] !== null && !(routes[key] instanceof Array)){
            _registerRoute(routes[key], key);
        }else{
            if(method === 'get'){
                router.get(key, routes[key]);
            }
            else if(method === 'post'){
                router.post(key, routes[key]);
            }
            else{
                router.use(routes[key]);
            }
        }
    }
}

let route = routes => {
    _registerRoute(routes);
    return router;
}

let findOneRecord = profileId => {
    return db.userModel.findOne({'profileId': profileId});
}

let createNewUser = profile => {
    return new Promise((resolve, reject) => {
        let newUser = new db.userModel({
            profileId: profile.id,
            fullName: profile.displayName,
            profilePic: profile.photos[0].value,
            name: profile.name
        });

        newUser.save(err => {
            if(err){
                reject(err);
            }else{
                resolve(newUser);
            }
        });
    });
}

let findById = id => {
    return new Promise((resolve, reject) => {
        db.userModel.findById(id, (err, user) => {
            if(err){
                reject(err);
            }else{
                resolve(user);
            }
        })
    })
}

let isAuthenticated = (req,res,next) => {
    if(req.isAuthenticated()){
        next();
    }else{
        res.redirect('/');
    }
}

module.exports = {
    route,
    findOneRecord,
    createNewUser,
    findById,
    isAuthenticated
}

