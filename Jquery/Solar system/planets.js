$(".row img").hover(function() {
	$(this).css("opacity", "0.5");
	var name = $(this).attr("alt");
	$("<p class='name'>" + name + "</p>").insertAfter(this);
}, 
function() {
	$(this).css("opacity", "1");
	$(".name").remove();
});

$(".row img").click(function(e){
	e.stopPropagation();
	var src = $(this).attr("src");
	$("<img id='image' src='" + src + "' />").insertAfter("#container");
	$("<div id='overlay'></div>").insertBefore("#container");
	$("#image").css("top", ($(window).height()/2)-250 + "px");
	$("#image").css("left", ($(window).width()/2)-250 + "px");
});

$("body").click(function(){
	$("#image").remove();
	$("#overlay").remove();
})