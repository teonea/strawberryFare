$(document).ready(function(){
	var $root = $('html, body');
	$('nav a').click(function(){
		var href = $.attr(this, 'href');
		$root.animate({
			scrollTop: $(href).offset().top
		}, 500);
	});
});

