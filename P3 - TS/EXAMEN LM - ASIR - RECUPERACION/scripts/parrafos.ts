var miFormulario:HTMLFormElement;
var padre = <HTMLInputElement>document.getElementById("respuesta");

function addParrafo(){
	let newParrafo = document.createElement("p");
	let nParaf =padre.childNodes.length;
	let newText = document.createTextNode("Parrafo "+(nParaf-2));
	newParrafo.appendChild(newText);
	padre.insertBefore(newParrafo,padre.childNodes[nParaf-1]);
	newParrafo.addEventListener("click",eliminar);
}

function eliminar(event:any){
	padre.removeChild(event.target);
	miFormulario.btn_lanzar.style.display = "block";
}

function lanzar() {
	miFormulario.btn_lanzar.style.display = "none";
	//recoger el valor del los input del formulario
	let tituloPagina = miFormulario.titulo.value;
	let numP = miFormulario.numero.value;

	//creo el h1 y el contenido del h1
	let titulin = document.createElement("h1");
	let textoTitulo = document.createTextNode(tituloPagina);

	//meto el texto dentro del h1 y después lo escribo en el padre
	titulin.appendChild(textoTitulo);
	padre.appendChild(titulin);

	//creo el for donde voy a escribir n parrafos que indique el usuario
	for (let i = 1; i <= numP; i++) {
		let paraf = document.createElement("p");
		let parafText = document.createTextNode("parrafo " + i);
		paraf.appendChild(parafText);
		padre.appendChild(paraf);
		paraf.addEventListener("click",eliminar);
	}
	//creacion del boton para añadir más parrafos
	let inputButton = document.createElement("input");
	padre.appendChild(inputButton);	

	//cojo el boton y le añado los atributos
	let btnAñadir = padre.getElementsByTagName("input")[0];
	btnAñadir.setAttribute("type","button");
	btnAñadir.setAttribute("name","btn_añadir");
	btnAñadir.setAttribute("value","Añadir");

	//creo un evento inputButton.addEventListener("click",addParrafo);para cuando le de click ejecute la funcion addParrafo
	inputButton.addEventListener("click",addParrafo);
}

function validar() {
	let titulo=miFormulario.titulo.value;
	let numero=miFormulario.numero.value;
	if(/^\s+$/.test(numero) || numero=="" || numero.length==0){
		return false;
	}
	if(!/^[A-Z]{5,20}$/.test(titulo)){
		alert("debe ser una letra de la A - Z y de 5 a 20 caracteres");
		return false;
	}
}
window.onload = function () {
	miFormulario=<HTMLFormElement>document.getElementById("miFormulario");
	let titulo=miFormulario.titulo.value;
	let numero=miFormulario.numero.value;
	titulo.onblur=validar;
	numero.onblur=validar;
}
