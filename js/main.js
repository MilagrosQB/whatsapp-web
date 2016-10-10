window.addEventListener("load", main);

function main() {
	var mensajes = document.getElementById("mensajes");
	mensajes.addEventListener("click", limpiarPlaceholder)
	var send = document.getElementById("reemEnviar");
	send.addEventListener("click", sendMensaje);
	var chatUno = document.getElementById("chatUno");
	chatUno.classList.add("cursor-pointer");
	chatUno.addEventListener("click", mostrarChat);
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
			divmensaje.classList.add("w-message-text");
			divmensaje.classList.add("w-message-out");
	var pmensaje = document.createElement("p");
			pmensaje.innerHTML = mensajes.value;
	divmensaje.insertBefore(pmensaje,divmensaje[0]);
	var boxHora = document.createElement("div");
			boxHora.classList.add("time");
	var date = new Date().toLocaleTimeString(navigator.language, {hour:"2-digit", minute:"2-digit"});
      boxHora.innerText = date;  
	divmensaje.insertBefore(boxHora,divmensaje[1]);
	boxConversacion.insertBefore(divmensaje,boxConversacion[1]);
}

//elemento.classList.add("nombre de la clase");

function mostrarChat (){
	alert("No hagas eso!");
}