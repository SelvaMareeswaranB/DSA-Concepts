function QuickSort(arr, low, high) {
  if (low < high) {
    let pivot = partition(arr, low, high);
    QuickSort(arr, low, pivot - 1);
    QuickSort(arr, pivot + 1, high);
  }
}

function partition(arr, low, high) {
  let pivot = arr[low];
  let i = low;
  let j = high;
  while (i < j) {
    while (i <= high - 1 && arr[i] <= pivot) {
      i++;
    }
    while (j >= low + 1 && arr[j] > pivot) {
      j--;
    }
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[low], arr[j]] = [arr[j], arr[low]];
  return j;
}
let array = [11, 100, 12, 1, 192, 12];
QuickSort(array, 0, array.length - 1);
console.log(array)

//pick a pivot element and place it in its correct place in the sorted array (divide and conquer algo)
//smaller on the left and larger on the right
//T.C : O(n logn)
//S.C : O(1)
