function copy(o) {
  var copy = Object.create(Object.getPrototypeOf(o));
  var propNames = Object.getOwnPropertyNames(o);

  propNames.forEach(function(name) {
    var desc = Object.getOwnPropertyDescriptor(o, name);
    Object.defineProperty(copy, name, desc);
  });

  return copy;
}

var newbie = {
	nic: 'newbie',
	age: 21
}

var newbie1 = {
	nic: 'punk',
	age: 18
}

var clonNewbie = copy(newbie);

var clonNewbie1 = newbie1 ;
clonNewbie.nic = 'lolololol'
clonNewbie1.nic = 'ololololo'

console.log(newbie);

console.log(newbie1);

console.log(clonNewbie);

console.log(clonNewbie1);