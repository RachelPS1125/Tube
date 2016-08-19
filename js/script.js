$(function(){
	var nextPage;
	var userInput;
	$('.youtube-search').submit(function(event){
		event.preventDefault();
		userInput = $('.query').val();
		$.ajax({
			data:{
				part:'snippet',
				key: 'AIzaSyAOWl3SLULm-VPCQlYbKEyjnGqFhC4FP2w',
				q: userInput
			},
			dataType: 'json',
			method: 'GET',
			url: 'https://www.googleapis.com/youtube/v3/search',
		}).done(function(results){
			console.log(results);
			nextPage = results.nextPageToken;
			$.each(results.items, function(index, element){
				$('.search-results').append('<li>' +element.snippet.title + '</li>');
			});
		})
	});
	$('.more-answers').click(function(){
		$.ajax({
			data:{
				part:'snippet',
				key: 'AIzaSyAOWl3SLULm-VPCQlYbKEyjnGqFhC4FP2w',
				q: userInput
			},
			dataType: 'json',
			method: 'GET',
			url: 'https://www.googleapis.com/youtube/v3/search',
			pageToken: nextPage
		});
	});

});