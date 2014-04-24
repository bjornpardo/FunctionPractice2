// Write a function called 'getName' which takes a single object argument 
// and returns the value of the 'name' property of the given object.

var getName = function(obj){
	return obj.name;
};


// Write a function called 'totalLetters' which takes an array of strings 
// and returns the total number of letters in all strings.

var totalLetters = function(arr) {
	return arr.join('').length;
};


// Write a function called 'keyValue' which takes two arguments and returns 
// an object with a key of the first argument and the value of the second argument.

var keyValue = function(key, value) {
	var Obj = {};
	Obj[key] = value;
	return Obj;
};


// Write a function called 'negativeIndex' which takes an array and a 
// negative number, and returns the value from the array at the given negative index, 
// as if the array was circular, i.e. arr.length+num.

// negativeIndex(['a', 'b', 'c', 'd', 'e'], -2) should return 'd'
// negativeIndex(['jerry', 'sarah', 'sally'], -1) should return 'sally'

var negativeIndex = function(arr, num) {
	return arr[arr.length+num];
};


// Write a function called 'removeM' which takes a single string argument and 
// removes all 'm' characters from the string. The function should return the new string.

// removeM('family') should return 'faily'
// removeM('memory') should return 'eory'

var removeM = function(str) {
	var regexp = /[ABCDEFGHIJKLNOPQRSTUVWXYZ]/gi;
	var newArray = str.match(regexp);
	return newArray.join(''); 
};


// Write a function called 'printObject' which takes a single object argument 
// and console.log's each key-value pair in the format key is value on separate lines.

// printObject({ a: 10, b: 20, c: 30 }) should print:
// a is 10
// b is 20
// c is 30

// printObject({ firstName: 'pork', lastName: 'chops' }) should print:
// firstName is pork
// lastName is chops

var printObject = function(obj) {
	var str = '';
	for(key in obj) {
		str += key + ' is ' + obj[key] + '\n';
	}
	console.log(str);
};







