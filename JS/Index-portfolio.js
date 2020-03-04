let animation = function (class1, class2) {
	$(class1).mouseenter(function() {
	$(class2).animate({top: "-=35px"}, 300, "linear");
});

	$(class1).mouseleave(function() {
	$(class2).animate({top: "+=35px"}, 300,"linear");
});
};


animation(".animation-1", ".inform-1");
animation(".animation-3", ".inform-3");
animation(".animation-4", ".inform-4");



