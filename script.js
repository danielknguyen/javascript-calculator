$(document).ready(function(){
	//grabbing values of the operations
	var percent = document.getElementById("percent").value;
	var divide = document.getElementById("divide").value;
	var multiply = document.getElementById("multiply").value;
	var subtract = document.getElementById("subtract").value;
	var add = document.getElementById("add").value;
	var decimal = document.getElementById("decimal").value;

	//declaring variables that will be used during calculations
	var input = '';
	var current = '';
	var total = '';

	//when clicking button prints out value onto calculator screen
	$('button').on('click',function(){
		var buttonValue = $(this).attr('value');
		//assigning and adding button value to variables
		input += buttonValue;
		current += buttonValue;
		//displaying input number onto calculator screen
		$('#initial').text(input);
		$('#currentChain').text(input);
		//calculator sceen clears both input and current chain if AC is clicked
		if(buttonValue === 'ac') {
			input = '';
			current = '';
			$('#initial').text(0);
			$('#currentChain').text(0);
		}
		//calcuator screen clears input if ce is clicked
		// if(buttonValue === 'ce') {
			 
		// }
		
		//a switch statement if any arithmetic buttons are clicked;specific function will run
		switch(expression) {
			case divide:
				divide();
				break;
			case multiply:
				multiply();
				break;
			case subtract:
				subtract();
				break;
			case add:
				add();
				break;
			case equal:
				equal();
				break;
			default:
				break;
		}
		console.log(input);
		console.log(current);
		console.log(total);
	});
	function divide() {

	}
});
