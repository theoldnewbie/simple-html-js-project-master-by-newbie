var me  = {
	name: 'Vladislav',
	age: 21,
	color: 'white',
	profesion: 'JS Developer',
	state: 'hungry',

	eat: function (food){

		if(food == pizza){
			state : 'full';
		alert('Я съел '+food.name + ' и ссыт');
		}else if(food == apple){
		alert('Я съел '+food.name + ' и голоден');
		}else
		alert('Я съел '+ food + ' и голоден');


	},

	move : function () {
		alert('Go go go');
	}
}

var apple = {
	name: 'apple',
	size: 'small',
	color: 'green'
}

var pizza = {
	name: 'pizza',
	size: 'big'

}