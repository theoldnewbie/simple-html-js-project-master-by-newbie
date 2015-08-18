function greaterNum(num1, num2){
	if(num1 > num2)
		return num1;
	else
		return num2;

	
}

function helloWorld(lang){
	if(lang == 'en')
		return 'Hello World';
	
	else if(lang == 'md')
		return 'Buna ziua';
	
	else if(lang == 'fr')
		return 'olololo';
	
	else
		return 'Privet mir';
	
}

function assignGrade(num){
	if((num > 100) || (num < 1))
		return 'only 1-100!!!';
	else if(num >= 80)
		return '5';
	else if (num >= 60) 
		return '4';
	else if (num >= 40) 
		return '3';
	else if (num >= 20)
		return '2';
	else
		return '1';
}

window.onload = function(){
	greaterNum(0,0);
	helloWorld();
	assignGrade(0);
}