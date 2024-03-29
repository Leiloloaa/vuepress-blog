// 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。
// 如果可以，返回 true ；否则返回 false 。
// magazine 中的每个字符只能在 ransomNote 中使用一次。

// 示例 1：
// 输入：ransomNote = "a", magazine = "b"
// 输出：false

// 示例 2：
// 输入：ransomNote = "aa", magazine = "ab"
// 输出：false

// 示例 3：
// 输入：ransomNote = "aa", magazine = "aab"
// 输出：true

// 解题思路
// 我们只需要确保 后者包含前者
// 参考 01.有效的字母异位词
// 设置 一个定长的数组
function canConstruct(ransomNote, magazine) {
  let tempArr = new Array(26).fill(0);
  let first = 'a'.charCodeAt();
  for (const i of magazine) {
    tempArr[i.charCodeAt() - first]++;
  }
  // 遍历第一个字符串 如果存在就 -1 如果等于0 那么就说明之前是不存在的
  for (const j of ransomNote) {
    if (tempArr[j.charCodeAt() - first] == 0) return false;
    tempArr[j.charCodeAt() - first]--;
  }
  return true;
}

console.log(canConstruct('aa', 'aab')); 
