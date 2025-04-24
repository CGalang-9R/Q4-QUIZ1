function bmi(){
	var kg = document.getElementById('enterKilo').value;
	var m = document.getElementById('enterM').value;
	var bmi = kg/(m*m);


	window.alert('Your BMI is ' + bmi);
}


function round_bmi(){
	var kg = document.getElementById('enterKilo').value;
	var m = document.getElementById('enterM').value;
	var bmi = kg/(m*m);
	var roundBMI = Math.round(bmi);


	window.alert('Your BMI is ' + roundBMI);
}


function output(){
	var kg = document.getElementById('enterKilo').value;
	var m = document.getElementById('enterM').value;
	var bmi = kg/(m*m);

	if(bmi<18.5){
		window.alert('Oops, you are underweight! You can still improve!');
	}

	else if(bmi>= 18.5 && bmi<= 24.9){
		window.alert('Nice, you are normal! Keep it up!');
	}

	else if(bmi>=25 && bmi<= 29.9){
		window.alert('Uh oh, you are overweight! I believe in you!');
	}

	else {
		window.alert('Oh no, you are obese! It is ok, you can do it!');
	}

}