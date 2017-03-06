
var respuestas =[['a','b','b'],['a','b','c']];
function login(){
	var nombre = prompt("Cual es Nombre");
	document.getElementById('nombre').innerHTML = "Hola coder "+ nombre;
}

function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}
window.addEventListener('load',function() {
	login();
});

function validar(sprint){
	var k = 0;
	var radios = document.getElementsByClassName(sprint);
	for (var i = 0 ; i < radios.length; i++) {
		if(radios[i].checked == true){
			k = 1;
		}
	}
	if(k == 0){
		alert("Marque una respuesta en la pregunta 1");
		document.getElementById("1").focus();
	}
}

function enviar(sprint){
	var correctas = 0;
	var respuesta = [];
	var test ;
	var radios = document.getElementsByClassName(sprint);
	for (var i = 0 ; i < radios.length; i++) {
		if(radios[i].checked == true ){
			respuesta.push(radios[i].id);
		}
	}
	console.log(respuesta);
	if(sprint == "p1"){
		test = respuestas[0];
	}
	if(sprint == "p2"){
		test = respuestas[0];
	}
	for (var i = 0 ; i < 3; i++) {
		if(respuesta[i] === test[0][i]){
			correctas ++;
		}
	}
	document.getElementById('form1').style.display = "none";
	document.getElementById('records').innerHTML = "Tienes "+ correctas + " correctas";
	document.getElementById('records2').innerHTML = "Tienes "+ correctas + " correctas";
	limpiar(sprint);
	console.log(correctas);
	correctas = 0;
}
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

function limpiar(quiz){
	var radios  = document.getElementsByClassName(quiz);
	console.log(radios);
	for (var i = 0 ; i < radios.length ; i++) {
		radios[i].checked = false;
	}

}

var mostarOcultar = function(divtexte) {
	document.getElementById('form1').style.display = "block";
	document.getElementById('form2').style.display = "block";
	document.getElementById('records').innerHTML = "";
	var divtext = document.getElementById(divtexte);
	if (divtext.id == "text1" ) {
		divtext.style.display = "block";
		document.getElementById('text2').style.display = "none";
		document.getElementById('text3').style.display = "none"
	}else if(divtext.id == "text2" ) {
		divtext.style.display = "block";
		document.getElementById('text1').style.display = "none";
		document.getElementById('text3').style.display = "none"
	}
	else {
		divtext.style.display = "block";
		document.getElementById('text1').style.display = "none";
		document.getElementById('text2').style.display = "none"
	}
 
}