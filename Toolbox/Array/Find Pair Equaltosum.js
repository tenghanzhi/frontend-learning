// Find out all the pairs that equal to the same summation
// Below code, e.q.: ​​​​​[ [ 5, 1 ], [ 1, 5 ], [ 0, 6 ], [ 1, 5 ] ]​​​​​

let arr = [1, 5, 6, 1, 2, 3, 0, 1];
const findSumPairs = (arr, value) => {
  let sumsLookup = {};
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    let targetVal = value - arr[i];

    if (sumsLookup[targetVal]) {
      output.push([arr[i], targetVal]);//?
    }

    sumsLookup[arr[i]] = true;
  }

  return output;
}
console.log(findSumPairs(arr, 6));
