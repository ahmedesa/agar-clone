const express = require('express');
const app = express();
const socketIO = require('socket.io');

app.use(express.static(__dirname + '/public'));

const server = app.listen(8000, () => {
    console.log("Server running on port 8000");
});

const io = socketIO(server);

module.exports = {
    app,
    io
};