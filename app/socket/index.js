'use strict';

module.exports = (io,app) => {
    let allchatrooms = app.locals.chatrooms;

    allchatrooms.push({
        room: 'C# Programming',
        roomID: '0001',
        users: []
    });

    allchatrooms.push({
        room: 'JAVA Programming',
        roomID: '0002',
        users: []
    })

    io.of('chatroomlists').on('connection', socket => {
        socket.on('getChatRooms', () => {
            socket.emit('getChatRoomJSON', JSON.stringify(allchatrooms));
        });
    })
}