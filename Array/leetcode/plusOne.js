var plusOne = function (digits) {
  let reminder = 1;
  let n = digits.length - 1;
  let result = [];
  for (let i = n; i > -1; i--) {
    if (digits[i] === 9 && reminder) {
      result[i]=0;
    } else {
      let temp = digits[i] + reminder;
      reminder = 0;
      result[i]=temp;
    }
  }
  reminder ? result.unshift(reminder) : "";
  return reminder
};

plusOne([9,9,9]);
