function Instagram () {
	this.image_array = []
}


Instagram.prototype.makeImageArray = function(object) {
	var self = this
	$.each(object.data, function(index, value){
		self.image_array.push(value.images.standard_resolution.url)
	})
	return this.image_array
};
