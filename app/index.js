'use strict';

require('./auth')();

module.exports = {
    router: require('./router')(),
    session: require('./session')
}