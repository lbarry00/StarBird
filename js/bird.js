var height = 50; // 50vh
var $bird;
$(document).ready(function() {
    $bird = $("<img class='bird' id='bird' src='img/horizontalBird.gif'>")
    $("#viewer").append($bird);
});

function moveUp() {
    if (height - 2 < 27) {
        return 1;
    } else {
        height -= 2;
        $bird.css('top', height + "vh");
    }
}

function moveDown() {
    if (height + 2 > 80) {
        return 1;
    } else {
        height += 2;
        $bird.css('top', height + "vh");
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
