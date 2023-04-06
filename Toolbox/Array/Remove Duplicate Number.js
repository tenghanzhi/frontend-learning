// Find out the duplicated number that need to be remove. (Not all the element need to be removed)
// Below code, e.q.: [1, 3, 5]

const arr = [1, 1, 3, 1, 3, 1, 5];
const removeDupes = (arr) => {
  let result = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    if (result.indexOf(arr[i]) < 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(removeDupes(arr));