function replaceSpace(s) {
    let arr = s.split('');
    let count = 0; // 空格数
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') {
            ++count;
        }
    }
    // 双指针
    // 从后往前移动
    // 长度为 8 的话 是要从 位置 7 开始
    let l = arr.length - 1;
    let r = arr.length + count * 2 - 1;
    // 循环到 第一个 位置
    while (l >= 0) {
        if (arr[l] === ' ') {
            arr[r--] = '0';
            arr[r--] = '2';
            arr[r--] = '%';
            l--;
        } else {
            arr[r--] = arr[l--];
        }
    }
    return arr.join('');
}

console.log(replaceSpace('d ca bab c'));