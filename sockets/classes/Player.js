class Player {
    constructor(socketId, playerConfig, playerData) {
        this.socketId = socketId;
        this.playerConfig = playerConfig;
        this.playerData = playerData;
    }

    move(x, y) {
        if ((this.playerData.locX < 5 && this.playerData.xVector < 0) || (this.playerData.locX > 500) && (x > 0)) {
            this.playerData.locY -= this.playerConfig.speed * y;
        } else if ((this.playerData.locY < 5 && y > 0) || (this.playerData.locY > 500) && (y < 0)) {
            this.playerData.locX += this.playerConfig.speed * x;
        } else {
            this.playerData.locX += this.playerConfig.speed * x;
            this.playerData.locY -= this.playerConfig.speed * y;
        }
    }
}

module.exports = Player;