/* Init gameover screen as hidden */
(function () {
    $("#gameover").hide();
})();

function getRandomHeight() {
    // Height is in vh--- Using px to play nice with the window dimensions.
    let min = 170;
    let max = 620;
    var height = Math.floor(Math.random() * (max-min) + min);
    return height;
}

function getRandomSpeed() {
    // Generate a random speed between 3-8 seconds
    var speed = Math.floor(Math.random() * (8 - 3) + 3);
    return speed;
}

function getRandomSize() {
    //Generate a random size between 0.8 and 3.0
    var size = Math.floor(Math.random() * (250 - 30) + 30);
    console.log("size is " + size);
    return size;
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

        let size = getRandomSize();
        let height = getRandomHeight() - parseInt($asteroid.css("height"), 10); /* Keep big asteroids in screen by subtracting height */
        let speed = getRandomSpeed();


        $asteroid.css("width", size + "px"); /* What size. auto height keeps aspect ratio */
        $asteroid.css("height", "auto");
        $asteroid.css("animation-duration", speed + "s"); /* How fast */
        $asteroid.css("top", height + "px"); /* What height */


        $("#gameContainer").append($asteroid);

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
        $("#gameover").show(); //Unhide gameover.
    }
}, 25);
