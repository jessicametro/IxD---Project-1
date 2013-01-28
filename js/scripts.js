$(window).ready(function() {
    var header = $("#header");
    var lastTop = 0;  // the last px at the top of the browser
    $(window).scroll(function() {
    	var top = $(window).scrollTop();  // tells you where the page is
    	if (top < 0) {
    		top = 0; // compensates for bouncing
    	}
    	var direction = top - lastTop;
    	if (direction < 0) {  // if scrolling up
    		header.css('margin-top', '0px'); // show header (convoluted format)
    	} else if (direction > 0) {  // if scrolling down
    		header.css('margin-top', '-60px');  // hide header
    	}
    	
    	console.log(top - lastTop);  // tells you the direction
    	    // whenever number is positive you're scrolling down 
    		// whenever number is negative you're scrolling up
    	lastTop = top;  // set the last top to be the current top

    });
});

