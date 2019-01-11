
 $( "body" ).keydown(function(event) { //triggers function on keydown
    if ( event.which == 40 ) { //down button moves bird immage down 50 px
        $( ".bird" ).animate({
        top: "+=50" });
    }
    else if (event.which == 38 ) { //up button moves up 50 px
        $( ".bird" ).animate({
        top: "-=50" });
    }    
});


 