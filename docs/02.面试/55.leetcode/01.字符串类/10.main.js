function reverseString(s) {
    // 采用双指针遍历
    let l = -1,
        r = s.length;
    while (++l < --r) {
        [s[l], s[r]] = [s[r], s[l]]
    }
    return s
}

console.log(reverseString(s = ["e", "d", "c", "b", "a"]));