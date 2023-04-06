// Find out the intersection part of following two arrays.
// Below code, e.q.: ['sue', 'kathy']

let arr1 = ["mike", "sue", "tom", "kathy", "henry"],
	arr2 = ["howey", "jim", "sue", "jennifer", "kathy", "hank", "alex"];

function intersection(a, b) {
	return a.filter(e => b.indexOf(e) > -1)
}

intersection(arr1, arr2);//?