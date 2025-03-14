//selection sort

function SelectionSort(arr = []) {
  const n = arr.length;
  for (let i = 0; i <= n - 2; i++) {
    let minimum = i;
    for (let j = i + 1; j <= n - 1; j++) {
      if (arr[minimum] > arr[j]) {
        minimum = j;
      }
    }
    if (minimum !== i) {
      //   let temp = arr[minimum];
      //   arr[minimum] = arr[i];
      //   arr[i] = temp;
      [arr[i], arr[minimum]] = [arr[minimum], arr[i]];
    }
  }
  return arr;
}

console.log(SelectionSort([12, 1, 3, 14, 10, 0]));

//select minimum and swap
//Time Complexity : O(n^2)
//Space Complexity O(1)
