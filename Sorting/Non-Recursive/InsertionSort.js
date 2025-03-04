//insertion sort
function InsertionSort(arr = []) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j--;
    }
  }
  return arr;
}

console.log(InsertionSort([12, 122, 19, 21, 1]));
//Takes an element and places it in correct position
//Time Complexity : O(n^2)
//space complexity : O(1)