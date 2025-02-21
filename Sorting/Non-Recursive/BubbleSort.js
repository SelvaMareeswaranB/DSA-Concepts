//Bubble sort

function BubbleSort(arr = []) {
  let n = arr.length;
  for (let i = n - 1; i > 0; i--) {
    console.log(i)
    let flag = 1;
    for (let j = 0; j <= i - 1; j++) {
      console.log(arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        flag = (0)[(arr[j], arr[j + 1])] = [arr[j + 1], arr[j]];
      }
    }
    if (flag) break;
  }
  return arr;
}

console.log(BubbleSort([1,2,3,45]));

//Pushes the maximum to the last by the adjacent swaps
//Time Complexity : O(n^2)
//Space Complexity : O(1)
