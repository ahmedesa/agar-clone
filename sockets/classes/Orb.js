class Orb {
    constructor(settings) {
        this.color = this.randomColor();
        this.locX = Math.floor(Math.random() * settings.worldWidth);
        this.locY = Math.floor(Math.random() * settings.worldHeight);
        this.redis = 5;
    }

    randomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
}

module.exports = Orb;