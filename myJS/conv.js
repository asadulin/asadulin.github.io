var num;

jQuery('document').ready(function(){

	jQuery('#conv').append('<fieldset><legend>Конвертор валюты</legend><div class="valute"><b>Из</b><select id="cod" size="1"></select><p id="val">1.0000</p><p id="name">RUB</p></div><br><div class="valute"><b>В</b><select id="cod2" size="1"></select><p id="val2">1.0000</p><p id="name2">RUB</p></div><br><div class="valute"><input id="x" type="text" placeholder="Кол-во" /><button id="convert">Конверт.</button></div><br><div class="valute"><b>Итого:</b><p id="rez"></p></div></fieldset>');

	loadXMLDoc();

	jQuery('#cod').on('click', function() {
		num = jQuery('#cod').val();
		loadXMLDoc2(num);
		loadXMLDoc4(num);
	});
	jQuery('#cod2').on('click', function() {
		num = jQuery('#cod2').val();
		loadXMLDoc3(num);
		loadXMLDoc5(num);
	});

	jQuery('#convert').on('click', function() {
		var from = document.getElementById("val").innerHTML;
		var to = document.getElementById("val2").innerHTML;
		var x = jQuery('#x').val().replace(/\,/g, '.');
		var y = eval((x*from)/to).toFixed(4);
		document.getElementById("rez").innerHTML = y;
	});
});

function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "XML_daily.asp", true);
  xmlhttp.send();
}
function myFunction(xml) {
  var x, i, xmlDoc, txt;
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("Name");
  for (i = 0; i< x.length; i++) {
    txt += "<option value='" + i + "'>" + x[i].childNodes[0].nodeValue + "</option>";
  }
  document.getElementById("cod").innerHTML = txt;
  document.getElementById("cod2").innerHTML = txt;
}
function loadXMLDoc2(number) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction2(this, number);
    }
  };
  xmlhttp.open("GET", "XML_daily.asp", true);
  xmlhttp.send();
}
function myFunction2(xml, number) {
  var x, i, xmlDoc, txt;
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("Value");
    txt = x[num].childNodes[0].nodeValue;
  document.getElementById("val").innerHTML = txt.replace(/\,/g, '.');
}

function loadXMLDoc3(number) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction3(this, number);
    }
  };
  xmlhttp.open("GET", "XML_daily.asp", true);
  xmlhttp.send();
}
function myFunction3(xml, number) {
  var x, i, xmlDoc, txt;
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("Value");
    txt += x[num].childNodes[0].nodeValue;
  document.getElementById("val2").innerHTML = txt.replace(/\,/g, '.');
}
function loadXMLDoc4(number) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction4(this, number);
    }
  };
  xmlhttp.open("GET", "XML_daily.asp", true);
  xmlhttp.send();
}
function myFunction4(xml, number) {
  var x, i, xmlDoc, txt;
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("CharCode");
    txt += x[num].childNodes[0].nodeValue;
  document.getElementById("name").innerHTML = txt;
}
function loadXMLDoc5(number) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction5(this, number);
    }
  };
  xmlhttp.open("GET", "XML_daily.asp", true);
  xmlhttp.send();
}
function myFunction5(xml, number) {
  var x, i, xmlDoc, txt;
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("CharCode");
    txt += x[num].childNodes[0].nodeValue;
  document.getElementById("name2").innerHTML = txt;
}