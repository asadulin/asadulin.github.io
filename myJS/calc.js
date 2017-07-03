jQuery('document').ready(function(){

	jQuery('#calc').append('<fieldset><legend>Калькулятор</legend><input class="input" type="text" /><div class="buttons"><button value="7" class="button"></button><button value="8" class="button"></button><button value="9" class="button"></button><button value="/" class="button" title="Деление"></button><button value="4" class="button"></button><button value="5" class="button"></button><button value="6" class="button"></button><button value="*" class="button" title="Умножение"></button><button value="1" class="button"></button><button value="2" class="button"></button><button value="3" class="button"></button><button value="+" class="button" title="Сложение"></button><button value="C" class="clear" title="Очистка"></button><button value="0" class="button"></button><button value="." class="button" title="Десятичная точка"></button><button value="-" class="button" title="Вычитание"></button><button value="<--" class="backspace" title="Посимвольное удаление"></button><button value="=" class="equation" title="Вычислить"></button></div></fieldset>');

	var button = jQuery('button');
	var key = jQuery('.button');
	var clear = jQuery('.clear');
	var equation = jQuery('.equation');
	var backspace = jQuery('.backspace');
	button.each(function() {
		jQuery(this).text(jQuery(this).attr('value'));
	});
	key.on('click', function(){
		jQuery('.input').val(jQuery('.input').val() + jQuery(this).attr('value'));
	});
	clear.on('click', function() {
		jQuery('.input').val('');
	});
	equation.on('click', function() {
		jQuery('.input').val( eval( jQuery('.input').val().replace(/\=/g, '').replace(/[!@#$%^&()_,"'<>\\:;?№`~|\[\]\{\}]/g, '').replace(/[a-zA-Z]/g, '').replace(/[а-яА-Я]/g, '') ) );
	});
	backspace.on('click', function() {
		jQuery('.input').val(jQuery('.input').val().substring(0, jQuery('.input').val().length - 1));
	})
	jQuery('.input').keypress(function(event){
		if(event.keyCode==13) {
			jQuery('.input').val( eval( jQuery('.input').val().replace(/\=/g, '').replace(/[!@#$%^&()_,"'<>\\:;?№`~|\[\]\{\}]/g, '').replace(/[a-zA-Z]/g, '').replace(/[а-яА-Я]/g, '') ) );
		};
	});
});