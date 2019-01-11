function getRandomHeight() {
    // Height is in vh
    let min = 27;
    let max = 89;
    var height = Math.floor(Math.random() * (max-min) + min);
    return height;
}

function getRandomSpeed() {
    // Generate a random speed between 3-8 seconds
    var speed = Math.floor(Math.random() * (8 - 3) + 3);
    return speed;
}

var asteroidIncrement = 1;
var gameRunning = true;
setInterval(function() {
    if (gameRunning) {
        var randomAsteroidType = Math.floor(Math.random() * 2);
        var isAsteroidOne;
        if (randomAsteroidType % 2 == 0) {
            isAsteroidOne = true;
        } else {
            isAsteroidOne = false;
        }

        let $asteroid;
        if (isAsteroidOne) {
            $asteroid = $("<img src='img/asteroid1.png' />");
        } else {
            $asteroid = $("<img src='img/asteroid2.png' />");
        }
        $asteroid.addClass("asteroid");
        let id = "asteroid" + asteroidIncrement;
        $asteroid.attr("id", id);

        let height = getRandomHeight();
        let speed = getRandomSpeed();

        $asteroid.css("animation-duration", speed + "s");
        $asteroid.css("top", height + "vh");

        $("#viewer").append($asteroid);

        setTimeout(function() {
            $("#" + id).remove();
        }, speed*1000);

        asteroidIncrement++; // For keeping track of which asteroid to remove
    }
}, 2000);

setInterval(function() {
    var collisionList = $("#bird").collision(".asteroid");

    if (collisionList.length > 0) {
        $(".asteroid").remove();
        $("#bird").remove();

        gameRunning = false;
        var $gameOver = $("<h1 class='gameover'>Game Over!</h1>");
        var $playAgain = $("<a href='index.html' class='playagain'>Reload to play again.</a>")
        $("#gameover").prepend($playAgain);
        $("#gameover").prepend($gameOver);
    }
}, 25);
