window.onload = function(){
	document.getElementById("i_hello").className = 'activ';
	document.getElementById("hello").style.opacity = "1";
	document.getElementById("hello").style.transform ="translate(0%, 0%)";
	document.getElementById("a_hello").onclick = function(){
		document.getElementById("i_hello").className = 'activ';
		document.getElementById("i_about").className = '';
		document.getElementById("i_works").className = '';
		document.getElementById("i_clients").className = '';
		document.getElementById("i_callmi").className = '';
		document.getElementById("about").removeAttribute("style");
		document.getElementById("callmi").removeAttribute("style");
		document.getElementById("works").removeAttribute("style");
		document.getElementById("clients").removeAttribute("style");
		document.getElementById("hello").style.opacity = "1";
		document.getElementById("hello").style.transform ="translate(0%, 0%)";
	};
	document.getElementById("a_about").onclick = function(){
		document.getElementById("i_hello").className = '';
		document.getElementById("i_about").className = 'activ';
		document.getElementById("i_works").className = '';
		document.getElementById("i_clients").className = '';
		document.getElementById("i_callmi").className = '';
		document.getElementById("hello").removeAttribute("style");
		document.getElementById("callmi").removeAttribute("style");
		document.getElementById("works").removeAttribute("style");
		document.getElementById("clients").removeAttribute("style");
		document.getElementById("about").style.opacity = "1";
		document.getElementById("about").style.transform ="translate(0%, 0%)";
	};
	document.getElementById("more").onclick = function(){
		document.getElementById("i_hello").className = '';
		document.getElementById("i_about").className = 'activ';
		document.getElementById("i_works").className = '';
		document.getElementById("i_clients").className = '';
		document.getElementById("i_callmi").className = '';
		document.getElementById("hello").removeAttribute("style");
		document.getElementById("callmi").removeAttribute("style");
		document.getElementById("works").removeAttribute("style");
		document.getElementById("clients").removeAttribute("style");
		document.getElementById("about").style.opacity = "1";
		document.getElementById("about").style.transform ="translate(0%, 0%)";
	};
	document.getElementById("a_clients").onclick = function(){
		document.getElementById("i_hello").className = '';
		document.getElementById("i_about").className = '';
		document.getElementById("i_works").className = '';
		document.getElementById("i_clients").className = 'activ';
		document.getElementById("i_callmi").className = '';
		document.getElementById("about").removeAttribute("style");
		document.getElementById("hello").removeAttribute("style");
		document.getElementById("callmi").removeAttribute("style");
		document.getElementById("works").removeAttribute("style");
		document.getElementById("clients").style.opacity = "1";
		document.getElementById("clients").style.transform ="translate(0%, 0%)";
	};
	document.getElementById("a_works").onclick = function(){
		document.getElementById("i_hello").className = '';
		document.getElementById("i_about").className = '';
		document.getElementById("i_works").className = 'activ';
		document.getElementById("i_clients").className = '';
		document.getElementById("i_callmi").className = '';
		document.getElementById("about").removeAttribute("style");
		document.getElementById("hello").removeAttribute("style");
		document.getElementById("callmi").removeAttribute("style");
		document.getElementById("clients").removeAttribute("style");
		document.getElementById("works").style.opacity = "1";
		document.getElementById("works").style.transform ="translate(0%, 0%)";
	};
	document.getElementById("a_callmi").onclick = function(){
		document.getElementById("i_hello").className = '';
		document.getElementById("i_about").className = '';
		document.getElementById("i_works").className = '';
		document.getElementById("i_clients").className = '';
		document.getElementById("i_callmi").className = 'activ';
		document.getElementById("about").removeAttribute("style");
		document.getElementById("hello").removeAttribute("style");
		document.getElementById("works").removeAttribute("style");
		document.getElementById("clients").removeAttribute("style");
		document.getElementById("callmi").style.opacity = "1";
		document.getElementById("callmi").style.transform ="translate(0%, 0%)";
	};

};


var picsNum = document.getElementById('works').getElementsByTagName('img').length;
var pics = document.getElementById('works').getElementsByTagName('img');
var now = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
	pics[now].className = '';
	now = (now+1)%picsNum;
	pics[now].className = 'activ';
}