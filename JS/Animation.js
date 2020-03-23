var slides = document.querySelectorAll('#slider .slider');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
	slides[currentSlide].className = 'slider';
	currentSlide = (currentSlide + 1) % slides.length;
	slides[currentSlide].className = 'slider showing';
}


window.addEventListener ("scroll", function() {
	var bar = document.getElementById('bar'); 
	console.log(pageYOffset);
	if (pageYOffset > 100) {
		bar.style.background = "rgba(255, 255, 255, 0.9)";
		bar.style.height = "40px";
		bar.style.transition = "height 0.5s ease-out, background 0.5s ease-out";
	}
	if (pageYOffset < 100) {
		bar.style.background = "rgba(255, 255, 255, 0.0)";
		bar.style.height = "0";
	}	
})