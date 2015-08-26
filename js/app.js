	

	// var m1 = ['е','л','к','а'];
	// var m2 = ['_','_','_','_'];

	// function guessLetter(a){
	// var gA = false;
	// var hS = false;
	// for(var i = 0 ; i < m1.length ; i++){
	// 	if(m1[i] == a){
	// 		m2[i]=a;
	// 		gA = true;
	// 	}
	// 	if(m2[i] == '_'){
	// 		hS = true;
	// 	}

	// }

	// if (gA) {
	// 	console.log('Правильная буква');
	// 	console.log(m2.join(''));
	// 	if(!hS){
	// 		console.log('Вы победили');
	// 	}
	// }
	// else {
	// 	console.log('Неверная буква');
	// }
		
	// }






	var arr1 = ['q','w','e','r'];
	var arr2 = ['_','_','_','_'];
	var gameOver = false;
	
	var game = {	

	guessLetter: function (letter){
	
	var goodLetter = false;
	var fin = false;

	arr1.forEach(function guessL(elem, index){
		if(elem == letter){
			arr2[index]=letter;
			goodLetter = true;
		}
		if(arr2[index] == '_'){
			fin = true;
		}

	})

	if (goodLetter) {
		alert('Правильная буква');
		alert(arr2.join(' '));
		if(!fin){
			gameOver = true; 
			alert('Вы победили');
		}
	}
	else {
		alert('Неверная буква');
	}
		
	},

	initialize: function (){
		
		while(true){
			var b = prompt('Введите букву','');
			game.guessLetter(b);
			if(!!gameOver) break;

		}
	}
}