function BinarySearch(arr,target){
    let low = 0;
    let high = arr.length -1;

    while(low<=high){
        let mid = Math.floor((low+high)/2)
        console.log(low,high,arr[mid],mid)
        if(arr[mid] === target) return mid;
        else if(target>arr[mid]){
            low = mid+1
        }
        else{
            high=mid-1
        }
    }
    return false
}

console.log(BinarySearch([1,2,3,4,5,6,7,8,9,10],10))
//T.C :O(log n)
//S.C : O(1)
//overflow case : mid = low + (high-low)/2w