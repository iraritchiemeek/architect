$(window).load(function(){
	var instagram = new Instagram
	var view = new View
	var user_id = '453332141'
	var url = 'https://api.instagram.com/v1/users/' + user_id + '/media/recent/?client_id=7bd7db58c7744703b10aca3f91c71cb5'

	// view.make3Divs()

	$.ajax({
	 	type: "GET",
	 	url: url,
	 	dataType: "jsonp",
	 	success: function(res){
	 		view.displayImages(instagram.makeImageArray(res))
	 	},
	 	error: function(){
	 		alert('Something went Wrong')
	 	}
	})
})