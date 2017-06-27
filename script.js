$(document).ready(function(){
	//declaring variables that will be used during calculations
	var operands = ['+','-','*','/','%','.'];
	var regEx = "^[0-9]+$";
	var initial = '';
	var log = '';
	var current = '';
	var ans = 0;
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
		} else {
				if(current.indexOf(initial) < 0) {
					//sum the total of log and assign to current if operator is already in the string; if not add operator to screen
					initial = '';
					log += buttonValue;
					current += buttonValue;
				} else if(buttonValue !== '=') {
						if(buttonValue !== 'ce') {
							initial = '';
							log += buttonValue;
							current = eval(current) + buttonValue;
						}
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
		if(buttonValue === '=') {
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
		//function to clear calculator memory 
		function clear() {
			initial = '';
			log = '';
			current = '';
			ans = 0;
		}
		//function to only  clear initial log 
		function clearPrev(){
			current = current.slice(0, -initial.length);
			log = log.slice(0, -initial.length);
			initial = '';
		}
		
	


		console.log('initial: ' + initial);
		console.log('log: ' + log);
		console.log('current: ' + current);
		console.log('ans: ' + ans);
		count++;
		console.log(count);
	});
	
});
