var longestPrefix = function(s) {
    let length = s.length
    let i = 1
    let j = 0
  let lps =new Array(length).fill(0);
  let hp = ""
    while(i<length){
      if(s[i] === s[j]){
          lps[i] = j+1
          hp=hp+s[i]
          i++
          j++
      }
      else{
          if(j !==0){
              j = lps[j-1]
          }
          else{
              lps[i]=0
              i++
          }
      }
    }

   return hp
  };
  
  longestPrefix("babbb")