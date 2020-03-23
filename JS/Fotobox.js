let photos = [
	"../photo/Fotobox/Bella18.jpg",
	"../photo/Fotobox/Inna1.jpg",
	"../photo/Fotobox/Iva1.jpg",
	"../photo/Fotobox/Iva2.jpg",
	"../photo/Fotobox/Iva3.jpg",
	"../photo/Fotobox/Iva4.jpg",
	"../photo/Fotobox/Iva5.jpg",
	"../photo/Fotobox/Iva6.jpg",
	"../photo/Fotobox/Lera1.jpg",
	"../photo/Fotobox/Lera2.jpg",
	"../photo/Fotobox/Lera3.jpg",
	"../photo/Fotobox/Lera4.jpg",
	"../photo/Fotobox/Lera5.jpg",
	"../photo/Fotobox/Lera6.jpg",
	"../photo/Fotobox/Lera7.jpg",
	"../photo/Fotobox/Lila1.jpg",
	"../photo/Fotobox/Valeria13.jpg",
	"../photo/Fotobox/Valeria15.jpg",
	"../photo/Fotobox/Valeria2.jpg",
	"../photo/Fotobox/Valeria5.jpg",
	"../photo/Fotobox/Zanna15.jpg",
	"../photo/Fotobox/Zanna16.jpg",
];

var thumbnails = document.querySelectorAll('.gallery-photo-preview');
var fullPhoto = document.querySelector('.full-photo');

var addThumbnailClickHandler = function (thumbnail, photo) {
	thumbnail.addEventListener('click', function () {
		fullPhoto.src = photo;
	});
};

for (var i = 0; i < thumbnails.length; i++) {
	addThumbnailClickHandler(thumbnails[i], photos[i]);
}

//* Слайдер

let width = 260;
let quantity = 6;
let position = 0;

let list = document.querySelector("ul");
let Elements = document.querySelectorAll("li");


document.querySelector("#left-button").onclick = function () {
	position += width * quantity;
	position = Math.min(position, 0);
	list.style.marginLeft = position + 'px';
};

document.querySelector("#right-button").onclick = function () {
	position -= width * quantity;
	position = Math.max(position, -width * (Elements.length - quantity));
	list.style.marginLeft = position + 'px';
}


