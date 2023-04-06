// Check sentence is palindromes or not. (Regardless of Punctuation marks)

//////////////////////////////////////////////////////
// 1. Check for Palindromes With Built-In Functions //
//////////////////////////////////////////////////////

function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}
palindrome("A man, a plan, a canal. Panama"); // Output: true

//////////////////////////////////////////////
// 2. Check for Palindromes With a FOR loop //
//////////////////////////////////////////////

function palindrome2(str) {
 var re = /[^A-Za-z0-9]/g;
 str = str.toLowerCase().replace(re, '');
 var len = str.length;
 for (var i = 0; i < len/2; i++) {
   if (str[i] !== str[len - 1 - i]) {
       return false;
   }
 }
 return true;
}
palindrome2("A man, a plan, a canal. Panama"); // Output: true


///////////////////////
// 3. JS HOF methods //
///////////////////////

// Check normal string.

function checkPalindrom(string) {
	return string == string.split('').reverse().join('');
}
checkPalindrom("A man, a plan, a canal. Panama"); //?
checkPalindrom("amanap lanacanal panama"); //?

