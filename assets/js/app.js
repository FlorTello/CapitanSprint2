var coders = [ { nombre : "Meche", apellido : "Zubieta",  promocion : "1era. promoción", estado : "Trabajando" },
			 { nombre : "Arabela", apellido : "Rojas", promocion : "2da. promoción", estado : "Trabajando" },
			 { nombre : "Maria", apellido : "Rosán",  promocion : "2da. promoción", estado : "Trabajando" },
			 { nombre : "Guadalupe", apellido : "Racio",  promocion : "3era. promoción", estado : "Trabajando" },
			 { nombre : "Sara", apellido : "Casa",  promocion : "3era. promoción", estado : "Trabajando" },
			 { nombre : "Daniella", apellido : "Durán",  promocion : "4ta. promoción", estado : "Trabajando" },
			 { nombre : "Michelle", apellido : "Seguil",  promocion : "5ta. promoción", estado : "Trabajando" },
			 { nombre : "Diana", apellido : "Navarro",  promocion : "5ta. promoción", estado : "Trabajando" } ];
login();
function login(){
	var nombre = prompt("Cual es Nombre");
	document.getElementById('nombre').innerHTML = "Hola coder "+ nombre;
}

function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
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

var mostarOcultar = function(divtexte) {
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
	else{
		divtext.style.display = "block";
		document.getElementById('text1').style.display = "none";
		document.getElementById('text2').style.display = "none"
	}
 
}