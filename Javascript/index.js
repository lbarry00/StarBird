
 $( "body" ).keydown(function(event) { //triggers function on keydown
    if ( event.which == 40 ) { //down button moves bird immage down 50 px
        if($(".bird").position().top < 550) { //if the bird goes below 550 px the animation won't activate
        $( ".bird" ).animate({
        top: "+=50" });
        }
    }
    else if (event.which == 38 ) { //up button moves up 50 px
        if($(".bird").position().top > 150) {//above 150 px the animation won't activate
            $( ".bird" ).animate({
        top: "-=25" });
    }    
    }
});


 