// The element with the most occurrences and the number of times.
// below code, e.q.:​​​​​ { element: 2, times: 6 }​​​​​
 
function countOfElement(arr, N) {
  let encounteredNums = {};
  let num;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (encounteredNums[num]) {
      // value already encountered, count++
      encounteredNums[num]++;
    } else {
      // first encounter, initialize count
      encounteredNums[num] = 1;
    }
  }
  return {
    element: N,
    times: encounteredNums[N]
  } || 0; // 6 times
  // return encounteredNums[N] || 0; // 2
}
// returns 6
countOfElement([3, 4, 2, 3, 2, 2, 2, 2, 3, 2], 2); //?