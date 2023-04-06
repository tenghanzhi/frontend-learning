//////////////////////////////////////////////
// 1. Find the Longest Word With a `for` Loop //
//////////////////////////////////////////////

function findLongestWord1(str) {
	let strSplit = str.split(' '),
		longestWord = 0,
		result;

	for (let i = 0, len = strSplit.length; i < len; i++) {
		if (strSplit[i].length > longestWord) {
			longestWord = strSplit[i].length;
			result = strSplit[i]
		}
	}
	return result;
}
findLongestWord1("The quick brown fox jumped over the lazy dog");

/////////////////////////////////////////////////////
// 2. Find the Longest Word With the `sort()` Method //
/////////////////////////////////////////////////////

function findLongestWord2(str) {
	let longestWord = str.split(' ').sort((a, b) => b.length - a.length);
	return longestWord.shift();
}
findLongestWord2("The quick brown fox jumped over the lazy dog");

///////////////////////////////////////////////////////
// 3. Find the Longest Word With the `reduce()` Method //
///////////////////////////////////////////////////////

function findLongestWord3(str) {
	let longestWord = str.split(' ').reduce((longest, currentWord) => currentWord.length > longest.length ? currentWord : longest, "");
	return longestWord;
}
findLongestWord3("The quick brown fox jumped over the lazy dog");