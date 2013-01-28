$(window).ready(function() {
    var header = $("#header");
    var lastTop = 0;  // the last px at the top of the browser
    $(window).scroll(function() {
    	var top = $(window).scrollTop();  // tells you where the page is
    	if(top < 0) {
    		top = 0; // compensates for bouncing
    	}
    	var direction = top - lastTop;
    	
    	console.log(top - lastTop);  // tells you the direction
    	    // whenever number is positive you're scrolling down 
    		// whenever number is negative you're scrolling up
    	lastTop = top;  // set the last top to be the current top

    });
});

