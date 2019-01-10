function changeAsteroidHeight(id) {
    var randomNumber = Math.floor(Math.random() * (550 - 175) + 175);
    $("#" + id).css("top", randomNumber + "px");
}

// Init asteroids the first time
changeAsteroidHeight("asteroid1");
changeAsteroidHeight("asteroid2");
changeAsteroidHeight("asteroid3");
