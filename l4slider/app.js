var slides = document.getElementsByClassName("carousel-item");
// console.log(slides);  // HTML Collection
var dots = document.querySelectorAll(".dot");
// console.log(dots);  //NodeList


var currslide = 1;

// Prev Btn
document.getElementById("prev").addEventListener('click',function(){
	carousel(currslide -= 1);
});

// Next Btn
document.getElementById("next").addEventListener('click',function(){
	carousel(currslide += 1);
});

for(var q=0 ; q<dots.length ; q++){
	// console.log(q);

	dots[q].addEventListener('click',function(){
		// console.log(this.getAttribute("data-bs-slide-to"));

		currslide = this.getAttribute("data-bs-slide-to");

		carousel(currslide);
	});
}

carousel(currslide);

function carousel(slidenum){

	var x,y;
	for(x=0 ; x<slides.length ; x++){
		slides[x].style.display = "none";
	}

	for(y=0 ; y<dots.length; y++){
		dots[y].classList.remove("active");

	}

	if(slidenum > slides.length){
		currslide = 1;
	}else if(slidenum < 1){
		currslide = slides.length;
	}
	// console.log(currslide);

	slides[currslide-1].style.display = "block";
	dots[currslide-1].className = "dot active";
}

// slide  		0   1   2
// currslide 	1-1 2-1 3-1

