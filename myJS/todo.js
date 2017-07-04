jQuery('document').ready(function(){

	jQuery('#todo').append('<fieldset><legend>Мой список задач</legend><ul></ul><b>Новое задание:</b><br><input id="input" type="text"><button id="button">Записать</button></fieldset>');


	function click() {
		var text = jQuery('#input').val().replace(/[!@#$%^&*()_+,."'<>/\\:;?№`~|\[\]\{\}]/g, '');
		var id_li = text.replace(/\s*/g,'');
		//var x = 1;
		var id_input = id_li + 1;

		if (id_li != "") {
			jQuery('ul').append('<li id="' + id_li + '"><input id="' + id_input + '" type="checkbox">' + text + '</li>');
		} else {
			alert('Пустое значение!');
		};

		jQuery('#input').val('');

		jQuery('#' + id_input).on('click', function() {
			jQuery('#' + id_li).remove();
		});
	};


	jQuery('#input').keypress(function(event){
		if(event.keyCode==13) {
			click();
		};
	});

	jQuery('#button').on('click', function() {
		click();
	});
});