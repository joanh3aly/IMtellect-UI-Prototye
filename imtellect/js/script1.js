$( document ).ready(function() {
	var $divs = $("div.content_div").hide(),
    i = 0;
	$divs.eq(i).show();
	
	$("input").click(function() {
	    $divs.eq(i).hide();
	    i = (i+1) % $divs.length;
	    $divs.eq(i).show();   	    
	});

	$(window).scroll(function() {
	    $divs.eq(i).hide();
	    i = (i+1) % $divs.length;
	    $divs.eq(i).delay(2000).show();   	    
	}); 

	var $divRegions = $("div.regions").hide();
    var j = 0;

	$divRegions.eq(j).show();

	$(window).scroll(function() {    
	    $divRegions.eq(j).fadeOut(1000);
	    $divRegions.eq(j).fadeIn(1000);	    	    
	});

});