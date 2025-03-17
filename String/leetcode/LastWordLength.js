function lastword(str) {
  const s = str.trim();
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      count++;
    } else {
      break;
    }
  }
 return count
}

lastword("   fly me   to   the moon");
