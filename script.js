$(document).ready(function(){
	//grabbing values of the operations
	var percent = document.getElementById("percent").value;
	var divide = document.getElementById("divide").value;
	var multiply = document.getElementById("multiply").value;
	var subtract = document.getElementById("subtract").value;
	var add = document.getElementById("add").value;
	var decimal = document.getElementById("decimal").value;

	var input = 0;
	var current = 0;
	var total = 0;
	

	//when clicking button prints out value
	$('button').on('click',function(){
		//assigning button value to input
		input = $(this).attr('value');
		console.log(input);
	});

});
