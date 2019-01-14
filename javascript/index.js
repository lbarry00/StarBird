$(document).ready(function () {
    $div_name = $("#bird"); //Name of the div you wish to control
    $speed = 5; //Higher is slower
    $move = "10"; //Amount you want to move the element by
    $(document).keydown(function (e) {
        e.preventDefault();
        switch (e.which) { 
            case 38:
                //up
                if($div_name.position().top > 150)
                {
                    $($div_name).animate({
                        top: "-=" + $move,
                    }, $speed, function () {});
                }
                else if ($div_name.position().top < 150)
                {
                    $($div_name).animate({
                        top: "-=" + 0,
                    }, $speed, function () {});
                }
                break;
            case 40:
                //down
                if($div_name.position().top < 615)
                {
                    $($div_name).animate({
                        top: "+=" + $move
                    }, $speed, function () {});
                }
                else if($div_name.position().top > 615)
                {
                    $($div_name).animate({
                        top: "+=" + 0
                    }, $speed, function () {});
                }
                break;
        }
    });
});