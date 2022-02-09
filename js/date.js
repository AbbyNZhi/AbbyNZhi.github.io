
var dv = document.getElementById("content");
dv.style.opacity = 0;
var dv1 = document.getElementById("content2");
dv1.style.opacity =0;
var val = 0;
var val1 = 0;
function timer(){
	var start = new Date(2021, 3, 30, 0, 0);
	var t = new Date() - start;
	var d = Math.floor(t / 1000 / 60 / 60 / 24);
	var h = Math.floor(t / 1000 / 60 / 60 % 24);
	if(h < 10){
		h = "0" + h;
	}
	var m = Math.floor(t / 1000 / 60 % 60);
	if(m < 10){
		m = "0" + m;
	}
	var s = Math.floor(t / 1000 % 60);
	if(s < 10){
		s = "0" + s;
	}
	document.getElementById("d").innerHTML = d;
	document.getElementById("h").innerHTML = h;
	document.getElementById("m").innerHTML = m;
	document.getElementById("s").innerHTML = s;
}
function timer1(){
	var abby_days_init = 7123;
	var t = new Date();
	for (let i = 40 ; i > 1 ; i--) {
		var delt = Math.ceil(abby_days_init / i);
		var anni = new Date(2021,4,30);
		anni.setDate(anni.getDate() + delt);
		if (t < anni) {
			t = anni - t;
			break;
		}
	}
	var d = Math.floor(t / 1000 / 60 / 60 / 24);
	var h = Math.floor(t / 1000 / 60 / 60 % 24);
	if(h < 10){
		h = "0" + h;
	}
	var m = Math.floor(t / 1000 / 60 % 60);
	if(m < 10){
		m = "0" + m;
	}
	var s = Math.floor(t / 1000 % 60);
	if(s < 10){
		s = "0" + s;
	}
	document.getElementById("dd").innerHTML = d;
	document.getElementById("hh").innerHTML = h;
	document.getElementById("mm").innerHTML = m;
	document.getElementById("ss").innerHTML = s;
}


function fadein(){
	if(val < 1){
		val += 0.025;
		dv.style.opacity = val;
	}
	else{
		clearInterval(fadeinInterval);
		if(ok == 2){
			ok += 1;
		}
	}
}
function fadein1(){
	if(val1 < 1){
		val1 += 0.05;
		dv1.style.opacity = val1;
	}
	else{
		clearInterval(fadeinInterval1);
		if(ok == 2){
			ok += 1;
		}
	}
}

var fadeInterval;
var fadeinInterval;
var fadeInterval1;
var fadeinInterval1;


timer();
setInterval(timer, 1000);
timer1();
setInterval(timer1, 1000);

fadeInterval = setInterval(function(){
	if(ok == 2){
		clearInterval(fadeInterval);
		fadeinInterval = setInterval(fadein, 50);
	}
}, 50)
fadeInterval1 = setInterval(function(){
	if(ok == 2){
		clearInterval(fadeInterval1);
		fadeinInterval1 = setInterval(fadein1, 75);
	}
}, 75)

