function Instagram () {
	this.image_array = []
	// this.user_id = '453332141'
	// this.url = 'https://api.instagram.com/v1/users/' + this.user_id + '/media/recent/?client_id=7bd7db58c7744703b10aca3f91c71cb5'
}

// Instagram.prototype.getInstagramResponse = function() {
// 	var self = this
// 	$.ajax({
// 		async: false, // sorry
// 	 	type: "GET",
// 	 	url: this.url,
// 	 	dataType: "jsonp",
// 	 	success: function(res){
// 	 		// return res
// 	 		self.makeImageArray(res)
// 	 	},
// 	 	error: function(){
// 	 		alert('Something went Wrong')
// 	 	}
// 	})
// };

Instagram.prototype.makeImageArray = function(object) {
	var self = this
	$.each(object.data, function(index, value){
		self.image_array.push(value.images.standard_resolution.url)
	})
	return this.image_array
};