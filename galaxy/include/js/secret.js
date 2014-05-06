var secret = "8380656769877987";
var input = "";
var timer;
var mode = false;

function moveimg() {
    $("#phil").animate({left: "80%"}, 2000).animate({rotate: "90deg"}).animate({top: "67%"}, 1000).animate({rotate: "180deg"}).animate({left: "0%"}, 1600).animate({rotate: "270deg"}).animate({top: "-40%"}, 1500).animate({rotate: "0deg"}).animate({left: "-250px"}).animate({top: "0px"});
    $("#bryan").delay(300).animate({left: "80%"}, 2000).animate({rotate: "90deg"}).animate({top: "67%"}, 1000).animate({rotate: "180deg"}).animate({left: "0%"}, 1600).animate({rotate: "270deg"}).animate({top: "-40%"}, 1500).animate({rotate: "0deg"}).animate({left: "-250px"}).animate({top: "0px"});
    $("#alma").delay(600).animate({left: "80%"}, 2000).animate({rotate: "90deg"}).animate({top: "67%"}, 1000).animate({rotate: "180deg"}).animate({left: "0%"}, 1600).animate({rotate: "270deg"}).animate({top: "-40%"}, 1500).animate({rotate: "0deg"}).animate({left: "-250px"}).animate({top: "0px"});
}

$(document).keyup(function(e) {
    input += e.which;    
    
    clearTimeout(timer);
    timer = setTimeout(function() { input = ""; }, 400);
    
    check_input();
});

function check_input() {
    if(input == secret) {
		moveimg();
    }
}
