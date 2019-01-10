function initialize() {
    var bird = document.getElementById("bird");
    bird.style.top = "300px"; 
    bird.style.left = "50px"; 
}

initialize(); 

function upArrow(){
    var bird = document.getElementById("bird");
    bird.style.top = parseInt(bird.style.top) - 10 + 'px';
    
}
function downArrow(){
    var bird = document.getElementById("bird");
    bird.style.top = parseInt(bird.style.top) + 10 + 'px';
}
function move(event){
      switch(event.keyCode){
        case 38:
           upArrow();
        break;
        case 40:
            downArrow();
        break;
    }
}

function docReady(){
    window.addEventListener('keydown', move);
}