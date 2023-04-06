// Add missed attribute(s) to the object that is need, and assign them by the defaultVal
// Below code, e.q.: ​​​​​[ { name: 'poojan', age: '30' }, { name: 'Justin', age: 'NA' } ]​​​​​

let arr = [{
	name: 'poojan',
	age: '30'
}, {
	name: 'Justin'
}]

function addMissingKey(arr, key, defaultVal) {
	for (let index of arr) {
		if (!index.hasOwnProperty(key)) {
			index[key] = arr[key] || defaultVal;
		}
	}
	return arr;
}

addMissingKey(arr, 'age', 'NA')