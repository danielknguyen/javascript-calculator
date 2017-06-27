$(document).ready(function(){
	//declaring variables that will be used during calculations
	var operands = ['+','-','*','/','%','.'];
	var regEx = "^[0-9]+$";
	var initial = '';
	var log = '';
	var current = '';
	var ans = 0;
	var decimal = true;
	var count = 0;
	//when clicking button prints out value onto calculator screen
	$('button').on('click',function() {
		// variable pointing to value of button
		var buttonValue = $(this).attr('value');
		if(buttonValue.match(regEx)) {
			//log screen if button is a number
			initial += buttonValue;
			log += buttonValue;
			current += buttonValue;
			$('#initial').text(initial);
			$('#currentChain').text(log);
		} 
		if(!buttonValue.match(regEx) && current.length !== 0 && buttonValue !== '.' && buttonValue !== '%' && buttonValue !== '=' && buttonValue !== 'ce') {
		//if buttonValue is an operator and if the length of current is not empty run; is not a decimal, %, equal sign and or clear this code block
			if(current.indexOf(initial) < 0) {
				//if there is no operator in the string of current add button value to log and current; out the values onto the calc screen
				initial = '';
				log += buttonValue;
				current += buttonValue;
				$('#initial').text(buttonValue);
				$('#currentChain').text(log);
		} else if(isNaN(current[current.length-1]) && isNaN(log[log.length-1])) {
				//if the last element in the string of current and log isn't an operator perform this code block
				initial += '';
				log += '';
				current += '';
				$('#initial').text(current[current.length-1]);
				$('#currentChain').text(log);
		} else {
				//there is an operator in the string therefore will evaluate the string
				initial = '';
				log += buttonValue;
				current = eval(current) + buttonValue;
				$('#initial').text(current);
				$('#currentChain').text(log);
			}
		} 
		//clear input when ac/ce are clicked on
		if(buttonValue === 'ac') {
			clear();
			$('#initial').text(0);
			$('#currentChain').text('');
		} else if(buttonValue === 'ce'){
			clearPrev();
			$('#initial').text(0);
			$('#currentChain').text(log);
		}
		//if button '=' is clicked on print the sum/total
		if(buttonValue === '=' && current.length !== 0 && !isNaN(current[current.length-1])) {
			ans = eval(current);
			$('#initial').text(ans);
			$('#currentChain').text(current);
		}
		//if output reaches max length
		if(initial.length > 12 || log.length > 14) {
			clear();
			$('#initial').text(0);
			$('#currentChain').text('Max digits!');
		}
		//if % button is clicked change initial number to decimal && only allow code to run if the initial is a number and not any operators
		if(buttonValue === '%' && !isNaN(initial[initial.length-1])) {
			current = current.slice(0, -initial.length);
			log = log.slice(0, -initial.length);
			var percent = (initial/100);
			initial = percent;
			log += initial;
			current += initial;
			$('#initial').text(initial);
			$('#currentChain').text(log);
		}
		if(buttonValue === '.' || buttonValue == !isNaN(buttonValue) + '.') {
			if(initial.indexOf('.') < 0) {
				if(!isNaN(initial[initial.length-1])) {
					initial += buttonValue;
					log += buttonValue;
					current += buttonValue;
					$('#initial').text(initial);
					$('#currentChain').text(log);
				} else if (initial === '') {
					initial += '0' + buttonValue;
					log += initial;
					current += initial;
					$('#initial').text(initial);
					$('#currentChain').text(log);
				} else {
					current = eval(current) + buttonValue;
					$('#initial').text(buttonValue);
					$('#currentChain').text(log);	
				}
			} else {
				return false;
			}
		}
		//function to clear calculator memory 
		function clear() {
			initial = '';
			log = '';
			current = '';
			ans = 0;
		}
		//function to only  clear initial log 
		function clearPrev() {
			current = current.slice(0, -initial.length);
			log = log.slice(0, -initial.length);
			initial = '';
		}
		
	

		//debugging
		console.log('initial: ' + initial);
		console.log('log: ' + log);
		console.log('current: ' + current);
		console.log('ans: ' + ans);
		count++;
		console.log(count);
	});
});