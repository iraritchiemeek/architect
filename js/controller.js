$(window).load(function(){
	var instagram = new Instagram
	var view = new View
	var user_id = '453332141'
	var url = 'https://api.instagram.com/v1/users/' + user_id + '/media/recent/?client_id=7bd7db58c7744703b10aca3f91c71cb5'

	$('.frame').on('mouseenter', function(e){
		view.unhideDeleteExpand(e)
	})

	$('.frame').on('mouseleave', function(e){
		view.hideDeleteExpand(e)
	})

	$('.image_interaction').on('mouseenter', function(e){
		view.increaseOpacity(e)
	})

	$('.image_interaction').on('mouseleave', function(e){
		view.resetOpacity(e)
	})



	$.ajax({
	 	type: "GET",
	 	url: url,
	 	dataType: "jsonp",
	 	success: function(res){
	 		var user_image = res.data[0].user.profile_picture
	 		var user_name = res.data[0].user.username

	 		view.displayUserInfo(user_image, user_name)
	 		view.fillFrames(instagram.makeImageArray(res))
	 	},
	 	error: function(){
	 		alert('Something went Wrong')
	 	}
	})

})