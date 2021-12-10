function reverseStr(s, k) {
    // 对字符串的反转处理 我们要想到从遍历中找到取巧的地方
    // 对称匹配 使用双指针
    let len = s.length;
    let resArr = s.split('');
    // 每次 横跨 2k 个字符
    for (let i = 0; i < len; i += 2 * k) {
        // 只反转 2k 的前 k 个
        let l = i - 1,
            r = i + k > len ? len : i + k;
        while (++l < --r)[resArr[l], resArr[r]] = [resArr[r], resArr[l]];
    }
    return resArr.join('');
}

console.log(reverseStr('dcababc', 2));