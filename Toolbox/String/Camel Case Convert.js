// Attributes name format transformation.
// Camel case to dash, e.q.: camelToDash -> ab-cd-ef
// Dash to camel case, e.q.: ab-cd-ef -> camelToDash

function camelToDash(str) {
	return str.replace(/([A-Z])/g, $1 => "-" + $1.toLowerCase());
}
console.log('camelToDash ->', camelToDash('camelToDash'));

let dashToCamel = str => {
	return str.replace(/(\-[a-z])/g, $1 => $1.toUpperCase().replace('-', ''));
}
console.log('ab-cd-ef ->', dashToCamel('ab-cd-ef')); // abCdEf