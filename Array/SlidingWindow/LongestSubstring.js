var lengthOfLongestSubstring = function(s) {
  let left = 0;
  let maxLen = 0;
  let mapp = {};

  for (let right = 0; right < s.length; right++) {
      if (mapp[s[right]] !== undefined) {
          left = Math.max(mapp[s[right]], left);
      }
      maxLen = Math.max(maxLen, right - left + 1);
      mapp[s[right]] = right + 1;
  }
  
  return maxLen;
};
