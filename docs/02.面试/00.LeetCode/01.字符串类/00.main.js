var lengthOfLastWord = function(s) {
  // 去掉两边的空格
  s = s.trim();
  for (i = s.length - 1; i >= 0; --i) {
    if (s[i] == ' ') {
      return s.slice(i, -1).length;
    }
  }
  return s.length;

  //    return s.trim().split(" ").at(-1).length
};

let s = 'Hello World';
lengthOfLastWord(s);
