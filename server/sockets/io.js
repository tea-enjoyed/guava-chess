/* 

module.exports = io => {
    io.on('connection', socket => {
        console.log('New player connected!');

        let currentCode = null;

        socket.on('move', function(move) {
            console.log('Move detected.')

            io.to(currentCode).emit('newMove', move);
        });
        
        socket.on('joinGame', function(data) {

            currentCode = data.code;
            socket.join(currentCode);
            if (!games[currentCode]) {
                games[currentCode] = true;
                return;
            }
            
            io.to(currentCode).emit('startGame');
            console.log("Game started!")
        });

        socket.on('disconnect', function() {
            console.log('Player disconnected!');

            if (currentCode) {
                io.to(currentCode).emit('gameOverDisconnect');
                delete games[currentCode];
            }
        });

    });
}; */

module.exports = io => {
    io.on('connection', socket => {
        console.log('New player connected!');
        let currentCode = null;
        let redirected = false;

        socket.on('joinGame', function(data) {
            currentCode = data.code;

            const room = io.sockets.adapter.rooms.get(currentCode);
            const numPlayers = room ? room.size : 0;

            if (numPlayers >= 2) {
                socket.emit('redirectHome', { error: 'invalidCode' });
                redirected = true;
                return;
            }

            socket.join(currentCode);

            if (numPlayers === 0) {
                games[currentCode] = true;
            }

            if (numPlayers === 1) {
                io.to(currentCode).emit('startGame');
                console.log('Game started!');
            }
        });

        socket.on('move', function(move) {
            if (currentCode) {
                io.to(currentCode).emit('newMove', move);
            }
        });

        socket.on('disconnect', function() {
            if (redirected) {
                let redirected = false;
                return;
            }
            console.log('Player disconnected!');
            if (currentCode) {
                io.to(currentCode).emit('gameOverDisconnect');
                delete games[currentCode];
            }
        });
    });
};
