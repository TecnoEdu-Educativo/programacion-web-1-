function leer() {
 var nom = document.forms["form"].elements[0].value;
 var clav = document.getElementById("pass").value;
	var carr = document.getElementsByTagName("select")[0].value;
 var gen = document.getElementsByName("gen");
 var genero = "";

for (var i = 0; i < gen.length; i++) {
	if (gen[i].checked) {
	genero = gen[i].value;
	break;
	}
}

var cas = document.getElementById("casilla").checked;
var ok = cas ? "Aceptado" : "No aceptado"; 

 document.getElementById("res").innerHTML = "Tu nombre es: " + nom +
"<br>Tu contraseña es: " + clav + "<br>Tu carrera es: " + carr +
"<br>Tu Genero es: " + genero+ "\<br>Aceptacion de los acuerdos: "+ ok;
}