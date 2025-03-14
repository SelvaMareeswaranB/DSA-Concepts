function BinarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    else if (target > arr[mid]) low = mid + 1;
    else high = mid - 1;
  }

  return low;
}

const arr = [1, 2, 3, 4,7];
console.log(BinarySearch(arr, 10));


// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var searchInsert = function(nums, target) {
//     let low = 0;
//   let high = nums.length - 1;
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     if (nums[mid] === target) return mid;
//     else if (target > nums[mid]) low = mid + 1;
//     else high = mid - 1;
//   }

//   return low;
// };