function Instagram () {
	this.user_id = '453332141'
	this.url = 'https://api.instagram.com/v1/users/' + this.user_id + '/media/recent/?client_id=7bd7db58c7744703b10aca3f91c71cb5'
}

Instagram.prototype.getImages = function() {
	$.ajax({
	 	type: "GET",
	 	url: this.url,
	 	dataType: "jsonp",
	 	success: function(res){
	 		console.log(res)
	 	},
	 	error: function(){
	 		console.log('Something went wrong')
	 	}
	})
};