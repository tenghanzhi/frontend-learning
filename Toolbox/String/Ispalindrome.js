// Original Methods
function isPalindrome(string) {
	var i, length = string.length;
	for (i = 0; i < length / 2; i++) {
		if (string[i] !== string[length - 1 - i])
			return false;
	}
	return true;
}

// JS HOF methods
function checkPalindrom(string) {
	return string == string.split('').reverse().join('');
}