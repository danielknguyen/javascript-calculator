$(document).ready(function(){
	//variable to push numbers that are pressed down
	var answer = "";
	//function to sum all numbers
	function sum(numbers){
		var total = "";
		return total+= numbers;
	};
	//operation input
	if(answer[0] !== undefined || isNaN(answer[0]) || !isNaN(answer[answer.length-1])) {
		$('#percent').on('click',function(element){
			$('#numInput').text('').hide();
			$('#opsInput').text('%').show();
			$('#chainOps').append('%').show();
			answer += '%';
		});
		$('#divide').on('click',function(element){
			$('#numInput').text('').hide();
			$('#opsInput').text('/').show();
			$('#chainOps').append('/').show();
			answer += '/';
		});
		$('#multiply').on('click',function(element){
			$('#numInput').text('').hide();
			$('#opsInput').text('*').show();
			$('#chainOps').append('*').show();
			answer += '*';
		});
		$('#subtract').on('click',function(element){
			$('#numInput').text('').hide();
			$('#opsInput').text('-').show();
			$('#chainOps').append('-').show();
			answer += '-';
		});
		$('#add').on('click',function(element){
			$('#numInput').text('').hide();
			$('#opsInput').text('+').show();
			$('#chainOps').append('+').show();
			answer += '+';
		});
		$('#ce').on('click',function(element){
			$('#numInput').text('').hide();
			$('#opsInput').text('').show();
		});
		$('#ac').on('click',function(element){
			$('#numInput').text('').show();
			$('#opsInput').text('').hide();
			$('#chainOps').text('').hide();
		});
	}
	//number input
	$('#7').on('click',function(element){
		$('#opsInput').hide();
		$('#numInput').append('7').show();
		$('#chainOps').append('7').show();
		answer += 7;
	});
	$('#8').on('click',function(element){
		$('#opsInput').hide();
		$('#numInput').append('8').show();
		$('#chainOps').append('8').show();
		answer += 8;
	});
	$('#9').on('click',function(element){
		$('#opsInput').hide();
		$('#numInput').append('9').show();
		$('#chainOps').append('9').show();
		answer += 9;
	});
	$('#4').on('click',function(element){
		$('#opsInput').hide();
		$('#numInput').append('4').show();
		$('#chainOps').append('4').show();
		answer += 4;
	});
	$('#5').on('click',function(element){
		$('#opsInput').hide();
		$('#numInput').append('5').show();
		$('#chainOps').append('5').show();
		answer += 5;
	});
	$('#6').on('click',function(element){
		$('#opsInput').hide();
		$('#numInput').append('6').show();
		$('#chainOps').append('6').show();
		answer += 6;
	});
	$('#1').on('click',function(element){
		$('#opsInput').hide();
		$('#numInput').append('1').show();
		$('#chainOps').append('1').show();
		answer += 1;
	});
	$('#2').on('click',function(element){
		$('#opsInput').hide();
		$('#numInput').append('2').show();
		$('#chainOps').append('2').show();
		answer += 2;
	});
	$('#3').on('click',function(element){
		$('#opsInput').hide();
		$('#numInput').append('3').show();
		$('#chainOps').append('3').show();
		answer += 3;
	});
	$('#zero-button').on('click',function(element){
		$('#opsInput').hide();
		$('#numInput').append('0').show();
		$('#chainOps').append('0').show();
		answer += 0;
	});
	$('#decimal').on('click',function(element){
		$('#opsInput').hide();
		$('#numInput').append('.').show();
		$('#chainOps').append('.').show();
		answer += '.';
	});
	//chain operations input
	$('#equal').on('click',function(){
		if(answer.length !== undefined) {
			$('#numInput').text('').hide();
			$('#opsInput').text('').hide();
			$('#chainOps').text(sum(answer));
			console.log(answer);
		}
	});
});