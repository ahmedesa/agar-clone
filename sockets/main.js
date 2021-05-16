const io = require('./../server').io;
const Orb = require('./classes/Orb');
const PlayerConf = require("./classes/PlayerConf");
const PlayerData = require("./classes/PlayerData");
const Player = require("./classes/Player");

let orbs = [];
let players = [];

let settings = {
    defaultOrbs: 500,
    defaultSpeed: 6,
    defaultSize: 6,
    defaultZoom: 1.5,
    worldWidth: 500,
    worldHeight: 500,
}

initGame();


io.sockets.on('connect', (socket) => {
    let player = {};
    socket.on('init', (data) => {
        socket.join('game');
        let playerConf = new PlayerConf(settings)
        let playerDate = new PlayerData(data.playerName, settings)
        player = new Player(socket.id, playerConf, playerDate)
        socket.emit('initResponse', {orbs});

        setInterval(() => {
            io.to('game').emit('tock', {
                players,
                playerX: player.playerData.locX,
                playerY: player.playerData.locY,
            })
        }, 33)

        players.push(player)
    })

    socket.on('tick', (data) => {
        x = player.playerConfig.xVector = data.xVector;
        y = player.playerConfig.yVector = data.yVector;

        player.move(x, y);
    })
})

function initGame() {
    for (let i = 0; i < settings.defaultOrbs; i++) {
        orbs.push(new Orb(settings));
    }
}

module.exports = io;


