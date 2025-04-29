function sumar(){
	var n=document.getElementById("num").value;
	var n1=document.getElementById("num1").value;
	var res=parseInt(n)+parseInt(n1);
	document.getElementById("r").innerHTML=res;
}

function restar(){
	var n=document.getElementById("num").value;
	var n1=document.getElementById("num1").value;
	var res=parseInt(n)-parseInt(n1);
	document.getElementById("r").innerHTML=res;
}
function multiplicar(){
	var n=document.getElementById("num").value;
	var n1=document.getElementById("num1").value;
	var res=parseInt(n)*parseInt(n1);
	document.getElementById("r").innerHTML=res;
}
function dividir(){
	var n=document.getElementById("num").value;
	var n1=document.getElementById("num1").value;
	var res=parseInt(n)/parseInt(n1);
	document.getElementById("r").innerHTML=res;
}