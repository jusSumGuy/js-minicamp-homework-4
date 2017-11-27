/*


* Callback Functions

A callback function is a function that's passed in as an input into another functions parameter as an argument. 
These type of functions are usually called over and over again. 

	* Closure

This happens when a function inside a function which uses the local variables of the outer function to carry out its actions. 
It's normal for the inner function to have access or scope of the variables of the outer function. But Closure is when you assign 
the inner function to a variable outside of the outer function and the assigned function still has access to the variables that are 
local only to the outer function and the functions inside it.

	* `arguments`
The arguments key word is used when you don't know how many arguments, if any, are going to be entered into your function. 
Since the arguments key word has the length function like an array or string does, this allows you to use a for loop to iterate 
through all the arguments and still preform the intended task of the function. 

	* Recursion

Recursion is when you call a functions inside itself inorder to solve and preform a function by breaking 
it down into smaller parts. It's not the best tactic to use if speed is a priority.

	* `prototype`

Rather than adding the same exact method to every single object created from a constructor. 
A prototype method is only written and copied once so it takes less memory. The method is still 
available to all the objects made from the same constructor.

	* Constructors

Is a function which creates objects with the same properties and methods. Constructors are very useful because you 
can add properties or methods to thousands of objects by just adding them into the objects constructor. This way you don't have to write 
the same code for every single object.



*/


// Do not change any of the function names

function multiplyArguments() {
	if(arguments.length === 0)
		return 0;
	if(arguments.length === 1)
		return arguments[arguments.length - 1];
	var product = 1;
	for(var i = 0; i < arguments.length; i++){
		product *= arguments[i];
	}
	return product;
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
}

function invokeCallback(cb) {
  cb();
}

function sumArray(numbers, cb) {
	var total = 0;
	numbers.map(function(num){
		total += num;
	});
	cb(total);
  // sum up all of the integers in the numbers array
  // pass the result to cb
  // no return is necessary
}

function forEach(arr, cb) {
	arr.map(cb);
  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)
}

function map(arr, cb) {
	var secArr = arr.map(cb);
	return secArr;
  // create a new array
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  // the new array should be the same length as the array argument
}

function getUserConstructor() {
	function User(options){
		this.username = options.username;
		this.name = options.name;
		this.email = options.email;
		this.password = options.password;
	}
	User.prototype.sayHi = function () {
		return 'Hello, my name is {{' + this.name + '}}';
		
	};
	return User;
  // create a constructor called User
  // it should accept an options object with username, name, email, and password properties
  // in the constructor set the username, name, email, and password properties
  // the constructor should have a method 'sayHi' on its prototype that returns the string 'Hello, my name is {{name}}'
  // {{name}} should be the name set on each instance
  // return the constructor
}

function addPrototypeMethod(Constructor) {
	Constructor.prototype.sayHi = function (){
		return 'Hello World!';
	};
  // add a method to the constructor's prototype
  // the method should be called 'sayHi' and should return the string 'Hello World!'
}

function addReverseString() {
	String.prototype.reverse = function() {
			var reversed = '';
			var length = this.length - 1;
			for(var i = length; i >= 0; i--){
				reversed += this.charAt(i);
			}
			return reversed;
		};
		/*String.prototype.reverse = function(){
		return this.split('').reverse().join('');
	};*/

}
	

 


function nFactorial(n) {
	if(n === 1 )
		return 1;
	if(n === 2)
		return 2;
	return (n * nFactorial(n-1));
  // return the factorial for n
  // solve this recursively
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
}

function cacheFunction(cb) {
	var output = {};
	return function (arg) {
		if(output.hasOwnProperty(arg))
			return output[arg];
		else {
				output[arg] = cb(arg);
				//console.log(output[arg], arg, output);
				return output[arg];
			}
	};
}
/*
function cacheFunction(cb) 
{
	var output = {};
	return function (arg) 
	{
		if(output.hasOwnProperty(arg))
		{ 
			return output[arg];
		}
		else
		{
				//var result = cb(arg);
				output[arg] = cb(arg);
				//console.log(output[arg], arg);
                console.log(output)
				return output[arg];
		}
	};
}



var callb = function(num){
  return (num * num);
};
var funnk = cacheFunction(callb);
console.log(funnk(1));
funnk(2);
funnk(4);
funnk(3);
*/


		

  // Extra Credit
  // use closure to create a cache for the cb function
  // the function that you return should accept a single argument and invoke cb with that argument
  // when the function you return is invoked with an argument it should save that argument and its result
  // when the function you return is called again with an argument that it has seen before it should not call cb
  // but should instead directly returned the previous result
  // example:
  // cb -> function(x) { return x * x; }
  // if the function you return is invoked with 5 it would pass 5 to cb(5) and return 25
  // if the function you return is invoked again with 5 it will look on an object in the closure scope
  // and return 25 directly and will not invoke cb again



// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyArguments: multiplyArguments,
  invokeCallback: invokeCallback,
  sumArray: sumArray,
  forEach: forEach,
  map: map,
  getUserConstructor: getUserConstructor,
  addPrototypeMethod: addPrototypeMethod,
  addReverseString: addReverseString,
  nFactorial: nFactorial,
  cacheFunction: cacheFunction
};
