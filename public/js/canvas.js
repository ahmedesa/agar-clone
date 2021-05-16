let ground = 500;

player.locX = Math.floor(ground * Math.random() + 100);
player.locY = Math.floor(ground * Math.random() + 100);

function draw() {
    //init random location
    context.setTransform(1, 0, 0, 1, 0, 0)
    context.clearRect(0, 0, canvas.width, canvas.height)

    // adjust the camera to the player
    const viewX = -player.locX + canvas.width / 2
    const viewY = -player.locY + canvas.height / 2
    // translate allows us to move the canvas around
    context.translate(viewX, viewY)

    drawPlayers();

    drawOrbs();

    requestAnimationFrame(draw)
}

canvas.addEventListener('mousemove', (event) => {

    const mousePosition = {
        x: event.clientX,
        y: event.clientY
    };

    const angleDeg = Math.atan2(mousePosition.y - (canvas.height / 2), mousePosition.x - (canvas.width / 2)) * 180 / Math.PI;

    const destination = getDestination(angleDeg);

    player.xVector = destination.x;
    player.yVector = destination.y
})

function getDestination(angleDeg) {
    if (angleDeg >= 0 && angleDeg < 90) {
        return {
            x: 1 - (angleDeg / 90),
            y: -(angleDeg / 90),
        };
    }
    if (angleDeg >= 90 && angleDeg <= 180) {
        return {
            x: -(angleDeg - 90) / 90,
            y: -(1 - ((angleDeg - 90) / 90)),
        };
    }
    if (angleDeg >= -180 && angleDeg < -90) {
        return {
            x: (angleDeg + 90) / 90,
            y: (1 + ((angleDeg + 90) / 90)),
        };
    }
    if (angleDeg < 0 && angleDeg >= -90) {
        return {
            x: (angleDeg + 90) / 90,
            y: (1 - ((angleDeg + 90) / 90)),
        };
    }
}

function drawOrbs() {
    orbs.forEach((orb) => {
        context.beginPath();
        context.fillStyle = orb.color;
        context.arc(orb.locX, orb.locY, orb.redis, 0, Math.PI * 2);
        context.fill();
    })
}

function drawPlayers() {
    players.forEach((p) => {
        context.beginPath();
        context.fillStyle = p.color;
        context.arc(p.locX, p.locY, 10, 0, Math.PI * 2);
        context.arc(200, 200, 10, 0, Math.PI * 2);
        context.fill();
        context.lineWidth = 3;
        context.strokeStyle = '#7FFF00';
        context.stroke();
    })
}