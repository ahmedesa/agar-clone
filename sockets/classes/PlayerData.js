class PlayerData {
    constructor(playerName, settings) {
        this.name = playerName;
        this.locX = Math.floor(Math.random() * settings.worldWidth + 100);
        this.locY = Math.floor(Math.random() * settings.worldHeight + 100);
        this.color = this.randomColor();
        this.redis = settings.defaultSize;
        this.score = 0;
    }

    randomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
}

module.exports = PlayerData;