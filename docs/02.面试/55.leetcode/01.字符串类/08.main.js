const lengthOfLongestSubstring = function(s) {
  if (s.length === 0) {
    return 0;
  }
  // 双指针
  let left = 0;
  let right = 1;
  let max = 0;

  // s = "pwwkew"
  while (right <= s.length) {
    let lr = s.slice(left, right); // p 
    const index = lr.indexOf(s[right]); // lr.indexOf(p) // 返回 0
    console.log(lr, index);

    if (index > -1) {
      // 这是不存在的情况下
      left = index + left + 1;
      // left 0 + 0 + 1 = 1
    } else {
      // 重复了
      lr = s.slice(left, right + 1);
      max = Math.max(max, lr.length);
    }
    right++;
    // 2
  }
  return max;
};

const s = lengthOfLongestSubstring('pwwkew');
