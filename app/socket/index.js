'use strict';

const helper = require('../helpers');


module.exports = (io,app) => {
    let allchatrooms = app.locals.chatrooms;

    

    io.of('chatroomlists').on('connection', socket => {
        socket.on('getChatRooms', () => {
            socket.emit('getChatRoomJSON', JSON.stringify(allchatrooms));
        });

        socket.on('createNewRom', newRoom => {
            if(!helper.findRoomByName(allchatrooms, newRoom)){
                allchatrooms.push({
                    room: newRoom,
                    roomID: helper.generateRoomId(),
                    users: []
                });    
            }

            socket.emit('getChatRoomJSON', JSON.stringify(allchatrooms));
            socket.broadcast.emit('getChatRoomJSON', JSON.stringify(allchatrooms));
        })
    })
}