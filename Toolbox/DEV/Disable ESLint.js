// General case
/* eslint-disable */
console.log('JavaScript debug log');
console.log('eslint is disabled now');
/* eslint-enable */

// Disabling specific ESLint rules
/* eslint-disable no-console, no-control-regex*/
console.log('JavaScript debug log');
console.log('eslint is disabled now');

// eslint-disable no-console, no-control-regex
console.log('JavaScript debug log');
console.log('eslint is disabled now');

console.log('eslint is disabled for the current line'); // eslint-disable-line

// eslint-disable-next-line
console.log('eslint is disabled for the current line');