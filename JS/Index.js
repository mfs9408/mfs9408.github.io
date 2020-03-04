//Изменение фотографий
var slides = document.querySelectorAll('#slider .slider');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 5000);
 
function nextSlide() {
    slides[currentSlide].className = 'slider';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slider showing';
}


//Верхнее меню 

let bar = document.querySelector(".bar");
console.log(bar.getBoundingClientRect());

let red = document.querySelector(".outer-box");
console.log(red.getBoundingClientRect());