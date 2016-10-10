window.addEventListener("load", main);

function main() {
	var mensajes = document.getElementById("mensajes");
	mensajes.addEventListener("click", limpiarPlaceholder)
	var send = document.getElementById("reemEnviar");
	send.addEventListener("click", sendMensaje);
}

function limpiarPlaceholder(){
	mensajes.placeholder = "";
}

function sendMensaje(){
	imprimirConversacion();
	mensajes.value = "";
}

function imprimirConversacion(){
	var boxConversacion = document.getElementById("conversacion");
	boxConversacion.classList.add("w-message");
	boxConversacion.classList.add("w-message-out");
	var divmensaje = document.createElement("div");
	//divmensaje.addClass("w-message-out w-message-text");
	divmensaje.classList.add("w-message-text");
	var pmensaje = document.createElement("p");
	pmensaje.innerHTML = mensajes.value;
	divmensaje.insertBefore(pmensaje,divmensaje[0]);
	var hora = document.createElement("div");
	hora.classList.add("time");
	boxConversacion.insertBefore(divmensaje, boxConversacion[0]);

}

//elemento.classList.add("nombre de la calse");