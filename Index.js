var slides = document.querySelectorAll('#slider .slider');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 5000);
 
function nextSlide() {
    slides[currentSlide].className = 'slider';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slider showing';
}
