
var navi = document.getElementById("navegadorId");

window.addEventListener("scroll", function(){
	
	if (document.body.scrollTop > 150) {
    navi.classList.add('shrink');
  } else {
    navi.classList.remove('shrink');
  }
});
