var $bird;
var height;

$(document).ready(function() {
    $bird = $("<img class='bird' id='bird' src='img/horizontalBird.gif'>")
    $("#gameContainer").append($bird);
    height = parseInt($bird.css('top'), 10);  // 50vh Use $bird.css(top) instead to get height dynamically
});

function moveUp() {
    if (height - 2 < 170) {
        return 1;
    } else {
        height -= 10;
        $bird.css('top', height + "px");
    }
}

function moveDown() {
    if (height + 2 > 640) {
        return 1;
    } else {
        height += 10;
        $bird.css('top', height + "px");
    }
}

$(document).keydown(function(e) {
    switch(e.keyCode) {
        case 38: // up
            moveUp();
            break;

        case 40: // down
            moveDown();
            break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});
