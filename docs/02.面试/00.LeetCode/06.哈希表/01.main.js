// 如果两个相同 就 return true 否则就是 false
// 任务拆分
// 1、两个字符串中的元素出现次数相同
// 2、利用哈希表去判断，设置一个定长的数组，并填充为 0
let s = 'anagram',
  t = 'nagaran';
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  let tempArr = new Array(26).fill(0);
  let base = 'a'.charCodeAt(); // 97

  // 首先是存
  for (const i of s) {
    // tempArr[i.charCodeAt() - base] = tempArr[i.charCodeAt() - base] + 1;
    tempArr[i.charCodeAt() - base]++;
  }

  // 遍历第二个字符串 存在就 取1
  for (const j of t) {
    if (tempArr[j.charCodeAt() - base] == 0) return false;
    tempArr[j.charCodeAt() - base]--;
  }
  return true;
}

console.log(isAnagram(s, t));
