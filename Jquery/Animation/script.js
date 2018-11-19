setInterval( function() {
	$("h1").fadeToggle(2000);
}, 2000);

setInterval( function() {
	$("h1").css("color", "rgb(" + parseInt(Math.random()*255) + ", " + parseInt(Math.random()*255) + ", " + parseInt(Math.random()*255) + ")");
}, 4000);