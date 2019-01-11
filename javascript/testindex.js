$(document).ready(function () {
    $div_name = $("#bird"); //Name of the div you wish to control
    $speed = 100; //Higher is slower
    $move = "50"; //Amount you want to move the element by
    $(document).keydown(function (e) {
        e.preventDefault();
        switch (e.which) { 
            case 38:
                //up
                $($div_name).animate({
                    top: "-=" + $move,
                }, $speed, function () {});
                break;
            case 40:
                //down
                $($div_name).animate({
                    top: "+=" + $move
                }, $speed, function () {});
                break;
        }
    });
});