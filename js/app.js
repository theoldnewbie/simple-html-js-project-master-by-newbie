	

	var m1 = ['е','л','к','а'];
	var m2 = ['_','_','_','_'];

	function guessLetter(a){
	var gA = false;
	var hS = false;
	for(var i = 0 ; i < m1.length ; i++){
		if(m1[i] == a){
			m2[i]=a;
			gA = true;
		}
		if(m2[i] == '_'){
			hS = true;
		}

	}

	if (gA) {
		console.log('Правильная буква');
		console.log(m2.join(''));
		if(!hS){
			console.log('Вы победили');
		}
	}
	else {
		console.log('Неверная буква');
	}
		
	}