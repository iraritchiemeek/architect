function View () {
}

View.prototype.make3Divs = function() {
	for (var i = 3 - 1; i >= 0; i--) {
		$('#container').append('<div class="frame" id="frame_' + i + '">')
	};
};

View.prototype.fillFrames = function(image_array) {
	$.each($('.frame'), function(index, value) {
		$(value).css({'backgroundImage':'url(' + image_array[randNum(image_array.length)] + ')'})
	})
};

View.prototype.displayUserInfo = function(image_url, username) {
	$('#user_name').text(username.toUpperCase())
	$('#user_image').css({'backgroundImage': 'url(' + image_url + ')'})
};

View.prototype.unhideDeleteExpand = function(frame) {
	$.each(frame.currentTarget.children, function(index, div){
		$(div).show()
	})
};

View.prototype.hideDeleteExpand = function(frame) {
	$.each(frame.currentTarget.children, function(index, div){
		$(div).fadeOut('slow', function(){
			$(div).hide
		})
	})
};

View.prototype.increaseOpacity = function(button) {
	$(button.currentTarget).css({'opacity':'0.8'})
};

View.prototype.resetOpacity = function(button) {
	$(button.currentTarget).css({'opacity':'0.4'})
};