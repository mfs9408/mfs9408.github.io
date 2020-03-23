window.addEventListener('scroll', function() {
 var col = document.getElementById('showScroll'); 
	var pic = document.getElementById('text');
	col.innerHTML = pageYOffset + 'px';
	if (pageYOffset > 50) {
		pic.style.color = 'red';
		pic.style.backgroundColor= 'blue';
	}
	else if (pageYOffset < 50) {
		pic.style.color = 'black';
		pic.style.backgroundColor= 'white';
	}
});

window.addEventListener ("scroll", function() {
	var text = document.getElementById('headline'); 
	console.log(text);
	console.log(pageYOffset);
	if (pageYOffset > 50) {
		text.style.color = 'red';
	}
});