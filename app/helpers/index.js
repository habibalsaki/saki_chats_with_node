'use strict';
const router = require('express').Router();

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

module.exports = {
    route
}

