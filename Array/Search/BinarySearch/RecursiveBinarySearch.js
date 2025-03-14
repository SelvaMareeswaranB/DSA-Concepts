function BinarySearch(arr, low, high, target) {
  
  if (low > high) return -1;
  let mid = Math.floor((low + high) / 2);
  console.log(arr[mid],target,arr[mid]===target)
    if (arr[mid] === target) return mid;
  else if (target>arr[mid])return BinarySearch(arr, mid + 1, high, target);
  else return BinarySearch(arr, low, mid - 1, target);
}
const array = [1, 2, 3, 4, 5, 6]
console.log(BinarySearch(array,0,array.length-1,6))


//T.C :O(log n)
//S.C : O(1)