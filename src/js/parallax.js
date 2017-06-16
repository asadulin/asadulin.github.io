function ff() {
	jQuery(".cont").css({
		"transform" : "translate(0%, 0%)" ,
		"opacity" : "1"
	});
}
setTimeout(ff, 1000);

jQuery(window).scroll(function() {

	var st = jQuery(this).scrollTop();
	var zt = st/1000, 
		q = 1,
		qq = zt*2

	jQuery(".head_text").css({
		"transform" : "translate(0%, " + st/2.5 + "%"
	});

	jQuery(".sect_1").css({
		"opacity" : q - qq
	});

	jQuery(".img").css({
		"transform" : "translate(" + st/15 + "%, 0%"
	});
});


//=====================================================

$(function() {
    var about_for = $('.footer').offset().top - $(window).height(),
        name_for = $('.abv').offset().top - $(window).height(),
        $about = $('.abv'),
        $name = $('.name')

    jQuery(window).scroll(function(){
 
        if  ($(window).scrollTop() > about_for) {
            $about.addClass('visible');
        }
        else {
            $about.removeClass('visible');
        }
        if  ($(window).scrollTop() > name_for) {
            $name.addClass('visible');
        }
        else {
            $name.removeClass('visible');
        }
    });
 
});