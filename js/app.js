
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