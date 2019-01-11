function getRandomHeight() {
    // Height is in vh, so generate a number between 0 and 100
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


setInterval(function() {
    var asteroidIncrement = 1;
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
    var id = "asteroid" + asteroidIncrement;
    $asteroid.attr("id", id);

    let height = getRandomHeight();
    let speed = getRandomSpeed();

    $asteroid.css("transition-duration", speed + "s");
    $asteroid.css("top", height + "vh");

    $("#viewer").append($asteroid);

    setTimeout(function() {
        $("#" + id).remove();
    }, speed*1000);

    asteroidIncrement++; // For keeping track of which asteroid to remove
}, 2000);
