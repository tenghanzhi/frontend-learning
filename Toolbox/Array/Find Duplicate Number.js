// Find out the duplicated number. 
// Below code, e.q.: 4, 7, 6

const arr = [1, 2, 3, 4, 4, 5, 6, 7, 7, 8, 6, 10];
const findDupes = (arr) => {
	const observed = {};
	for (let i = 0, len = arr.length; i < len; i++) {
		if (observed[arr[i]]) {
			console.log(arr[i]);
		} else {
			observed[arr[i]] = arr[i];
		}
	}
}
findDupes(arr);