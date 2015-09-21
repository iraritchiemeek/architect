function View () {
}

View.prototype.make3Divs = function() {
	for (var i = 3; i >= 0; i--) {
		$('container').append('<div class="frame" id="frame_' + i + '">')
	};
};

View.prototype.displayImages = function(image_array) {
	console.log(image_array)
};