function mostrarDatos(){
	var coders = [ { nombre : "Meche", apellido : "Zubieta",  promocion : "1era. promoción", estado : "Trabajando" },
			 { nombre : "Arabela", apellido : "Rojas", promocion : "2da. promoción", estado : "Trabajando" },
			 { nombre : "Maria", apellido : "Rosán",  promocion : "2da. promoción", estado : "Trabajando" },
			 { nombre : "Guadalupe", apellido : "Racio",  promocion : "3era. promoción", estado : "Trabajando" },
			 { nombre : "Sara", apellido : "Casa",  promocion : "3era. promoción", estado : "Trabajando" },
			 { nombre : "Daniella", apellido : "Durán",  promocion : "4ta. promoción", estado : "Trabajando" },
			 { nombre : "Michelle", apellido : "Seguil",  promocion : "5ta. promoción", estado : "Trabajando" },
			 { nombre : "Diana", apellido : "Navarro",  promocion : "5ta. promoción", estado : "Trabajando" } ];

	var mostrar = "<ul>";
	coders.forEach(function(e){
		mostrar += "<div class = 'div-coder'><li> Nombre: "+e.nombre+"<br /></li>"+
				   "<li>Apellido: "+e.apellido+"<br /></li>"+
				   "<li>Promoción: "+e.promocion+"<br /></li>"+
				   "<li>Estado: "+e.estado+"<br /></li></div>";
	});
	mostrar += "</ul>";
	document.write(mostrar);
}
mostrarDatos();

var respuestas =[{p1 : 'p1' , p2 : 'p2' , p3 : 'p2'},{p1 : 'p1' , p2 : 'p2' , p3 : 'p2'},{p1 : 'p1' , p2 : 'p2' , p3 : 'p2'}]
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

function enviar(f){
	var ckbox = document.getElementsByName('p1');
	var res = ckbox.checked();
	console.log(res);
	if(true){

	}
	var ok = 0;
	ckbox.map(e => e.checked == true ? ok = 1 : ok);
	if(ok == 0){
		alert('Responda todas las preguntas');
		return 0;
	}

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