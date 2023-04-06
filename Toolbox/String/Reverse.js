// 1. Reverse a String With Built-In Functions
function reverseString1(str) {
	return str.split("").reverse().join("");
}
reverseString1("hello");

// 2. Reverse a String With a Decrementing For Loop
function reverseString2(str) {
	var newString = "";
	for (var i = str.length - 1; i >= 0; i--) {
		newString += str[i];
	}
	return newString;
}
reverseString2('hello');

// 3. Reverse a String With Recursion
function reverseString3(str) {
	return (str === '') ? '' : reverseString3(str.substr(1)) + str.charAt(0);
}
reverseString3("hello");