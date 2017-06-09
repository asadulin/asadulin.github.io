jQuery('document').ready(function(){

	jQuery('#todo').append('<fieldset><legend>Мой список задач</legend><ul></ul><b>Новое задание:</b><br><input id="input" type="text"><button>Записать</button></fieldset>');


	function click() {
		var tx = jQuery('#input').val();
		var ttx = tx.replace(/\s*/g,'');
		var x = 1;
		var txx = ttx + 1;

		if (ttx != "") {
			jQuery('ul').append('<li id="' + ttx + '"><input id="' + txx + '" type="checkbox">' + tx + '</li>');
		} else {
			alert('Пустое значение!');
		};

		jQuery('#input').val('');

		jQuery('#' + txx).on('click', function() {
			jQuery('#' + ttx).remove();
		});
	};


	jQuery('#input').keypress(function(event){
		if(event.keyCode==13) {
			click();
		};
	});

	jQuery('button').on('click', function() {
		click();
	});
});