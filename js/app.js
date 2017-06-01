
var navi = document.getElementById("navegadorId");

window.addEventListener("scroll", function(){
	
	if (document.body.scrollTop > 150) {
    navi.classList.add('shrink');
  } else {
    navi.classList.remove('shrink');
  }
});

(function main(){
	var boxes = Array.from(document.getElementsByClassName("col-4"));
	var modal = document.getElementById("modalId");
	var bodyModal, close, img;

	boxes.forEach(function(box){
		box.addEventListener("click", function(){
			
			modal.innerHTML = "";

			modal.innerHTML = box.innerHTML;			
			
			modal.classList.remove("hide");

			close = document.createElement("div");
			close.classList.add("close");
			img = document.createElement("img");
			close.appendChild(img);
			modal.appendChild(close);
			img.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png");
			
			close.addEventListener("click",function(){
				modal.classList.add("hide");
			});
		});		
	});
})();

//Validacion de inputs

document.getElementById("sendId").addEventListener("click", function(val){
	var nombre = document.getElementById("nameId").value;
	var email = document.getElementById("emailId").value;
	var telefono = document.getElementById("phoneId").value;
	var mensaje = document.getElementById("messageId").value;

	val.preventDefault()
	
		if(nombre.charAt(0) != nombre.charAt(0).toUpperCase() || nombre == ""){
			alert("Nombre con mayúscula");
		}
		else if(email.indexOf("@") == -1){
			alert("eMail incorrecto");
		}
		else if(telefono == "" || isNaN(telefono)){
			alert("Teléfono no valido");
		}
		else if(mensaje.length > 100 || mensaje == ""){
			alert("Mensaje no puede ser vacio ni tener más de 100 caracteres");
		}
		 
	 return true;	
});