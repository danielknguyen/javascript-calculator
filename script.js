$(document).ready(function(){
	//grabbing values of the operations
	var percent = document.getElementById("percent").value;
	var divide = document.getElementById("divide").value;
	var multiply = document.getElementById("multiply").value;
	var subtract = document.getElementById("subtract").value;
	var add = document.getElementById("add").value;
	var decimal = document.getElementById("decimal").value;
	//printing element onto calculator
	function printElement(element){
		$('#numInput').text(element);
	}
	//when clicking button prints out value
	$('button').on('click',function(){
		//assigning button value to input
		var input = $(this).attr('value');
		if(input === 'ac'){
			input = 0;
		} else if(input === 'ce'){
			input = 0;
		}
		printElement(input);
		console.log(input);
	});
});