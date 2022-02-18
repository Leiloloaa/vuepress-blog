// 示例 1：
// 输入: s = "abcdefg", k = 2
// 输出: "cdefgab"

// 示例 2：
// 输入: s = "lrloseumgh", k = 6
// 输出: "umghlrlose"

function reverseLeftStr(s, k) {
    let i = 0;
    while (i < k) {
        s = s + s[i];
        i++;
    }
    return s.slice(2);
}

const res = reverseLeftStr('abcdefg', 2);
console.log(res);