var strStr = function(haystack, needle) {
  let stackLen = haystack.length
  let needleLen =needle.length
  if(stackLen<needleLen) return -1
  for(let i=0;i<stackLen;i++){
    if(Math.abs(stackLen-i)<needleLen) return -1
    let temp = haystack.substring(i,i+needleLen)
    if(temp ===  needle) return i
  }
  return -1
};


let haystack = "mississippi"
let needle = "a"

console.log(strStr(haystack,needle))