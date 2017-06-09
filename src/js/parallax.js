jQuery(window).scroll(function() {

	var st = jQuery(this).scrollTop();

	jQuery(".head_text").css({
		"transform" : "translate(0%, " + st/2 + "%"
	});
});