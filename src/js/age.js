jQuery('document').ready(function(){
	var gr = 1990;
	var date = new Date();
	var year = date.getFullYear();
	var old = year - gr;
	jQuery('#age').append(old);
});