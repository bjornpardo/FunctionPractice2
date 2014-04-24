// Write a function called 'getName' which takes a single object argument 
// and returns the value of the 'name' property of the given object.

var getName = function(obj){
	return obj[name];

	// or return obj.name;
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


// Write a function called 'vowels' which takes a string and returns 
// an array of all the vowels in the string, including duplicates.

// vowels('alabama') should return ['a', 'a', 'a', 'a']
// vowels('What lets in youth?') should return ['a', 'e', 'i', 'o', 'u']

var vowels = function(str) {
	var regexp = /[AEIOU]/gi;
	var newArray = str.match(regexp);
	return newArray; 
};

// Write a function called 'twins' which takes an array and 
// returns true if every pair of items in the array is the same.

// twins(['a', 'a', 'b', 'b', 'c', 'c']) should return true
// twins(['a', 'a', 'b', 'z']) should return false
// twins(['a', 'a', 'b']) should return false
// twins(['a', 'a', 'b', undefined]) should return false

var twins = function() {

};


// Write a function called 'or' which takes an array of booleans and 
// returns true if any one of them is true. Given an empty array, 
// return false. If you find an item that is true, the function should 
// return true immediately and not continue checking further values.

// or([false, false, true, false]) should return true
// or([false, false, false]) should return false
// or([]) should return false

// var or = function(arr) {
// 	for( var i = 0; i < arr.length; i++) {
// 		if (arr[i]) {
// 			return true;
// 			// break;
// 		}

// 		else if (arr[i] === undefined) {
// 			return false;
// 		}

// 		else {
// 			return false;
// 		}
// 	}	
// };

var or = function(arr) {
	var data = [];
	for( var i = 0; i < arr.length; i++) {
		if (arr[i]) {
			data.push(true);
		}
	}
	if (data.length > 0) {
		return true;
	}
	else {
		return false;
	}
	
};


// Write a function called 'unique' which takes an array of strings, 
// and returns a new array consisting of the unique values (no duplicates).

// unique(['a', 'b', 'a', 'c', 'd', 'd']) should return ['a', 'b', 'c', 'd']
// unique(['todd', 'avery', 'maria', 'avery']) should return ['todd', 'avery', 'maria']

var unique = function() {

};



























