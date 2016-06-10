$(document).ready(function() {
	$("h1").text("Hello World!");
	setInterval("rotateimages()",2000);
});

function rotateimages(){
	var oCurPhoto = $("#photogallery div.current");
	var oNxtPhoto = oCurPhoto.next();
	if(oNxtPhoto.length == 0){
		oNxtPhoto = $("#photogallery div:first")
	}
	oCurPhoto.removeClass('current').addClass('previous');
	oNxtPhoto.css({opacity: 0.0}).addClass('current').animate({opacity: 1.0},1000,function(){
		oCurPhoto.removeClass('previous');
	});
}