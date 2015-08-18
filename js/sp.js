// var num = function () {
// 	return 6;
// }
// var str = function() {
// 	return 'ololo';
// }
// var boo = function() {
// 	return true;
// }
// var mass = function() {
// 	return [1,2,3];
// }
// var n = function() {
// 	return null;
// }

// console.log(num());
// console.log(str());
// console.log(boo());
// console.log(mass());
// console.log(n());

// function Chicken(name) {
//     this.gender = 'chicken';
//     this.name = name;
// }
// // вызов
// var joe = new Chicken('Joe');

// console.log(joe);

// var myNumber = new Number(23);
// var myString = new String('male');
// var myBoolean = new Boolean(false);
// var myObject = new Object();
// var myArray = new Array('foo', 'bar');
// var myFunction = new Function("x", "y", "return x*y");
// var myDate = new Date();
// var myRegExp = new RegExp('\bt[a-z]+\b');
// var myError = new Error('Darn!');


// function Me(name, age){
// 	this.name = name;
// 	this.age = age;
// 	this.color = 'white';
// 	this.profesion = 'JS Developer';
// 	this.state = 'hungry';

// }

// var me  = new Me("Vlad", 21);
// var kolya = new Me('Kolya', 25);
	

// Me.prototype.mName = function (){

	
// 		alert('Меня зовут ' + this.name);


// 	}
// var createdObj2 = Object.create();

function Lol(stick, name){
	this.stick = stick || 'wood';
	this.person = {
		name: name || 'Ace' 
	};
	this.getStick = function () {
		return this.stick;
	};
	this.getName = function() {
		return this.person.name;
	};

}

var ololo = {
	stick: 'wood',
	person: {
		name: 'Ace' 
	},
	getStick: function () {
		return this.stick;
	},
	getName: function() {
		return this.person.name;
	},

}

var lol = new Lol();
var lol1 = new Lol('Desert Eagle', 'Sam');

var lol2 = Object.create(ololo);
var lol3 = Object.create(ololo);
lol3.stick = 'steel';
lol3.person = {};
lol3.person.name = 'Sam';


