// Return the maximum and minimum missing number in the array
// Below code, e.q.: [3, 9]

let arr = [1, 2, 6, 7, 8, 10];
const findMissingNum = (arr) => {
  let newArr = [];
  for (let i = 0, len = arr.length - 1; i < len; i++) {
    if (arr[i] + 1 != arr[i + 1]) {
    	console.log(arr[i] + 1)
      newArr.push(arr[i] + 1);
    }
  }
  return newArr;
}
console.log(findMissingNum(arr));
