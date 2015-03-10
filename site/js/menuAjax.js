$(document).ready(function(){
	//add event listeners
	$('#searchField').keyup(predictiveSearch);
});

function predictiveSearch() {
	//empty out values
	$('#searchPredicts').html('');
	//assign value to a variable
	var search = $('#searchField').val();
	if(search == ''){
		return;
	}
	//prepare data to send
	var dataToServer = {
		value: search
	};
	//use AJAX to communicate with the server
	$.ajax({
		type: 'post',
		url: 'predictiveSearch.php',
		data: dataToServer,
		success: function(dataFromServer){
			$(dataFromServer).each(function(i){
				$('#searchPredicts').append('<li>'+dataFromServer[i]+'</li>');
			});	
		},
		error: function(){
			alert('Error');
		}
	});
}