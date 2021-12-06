/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicates = function(s) {
    const stack = [];
    // 遍历字符串
    for (const x of s) {
        // 标志值
        let c = null;
        // 如果 x 等于 stack 的最后一项 那么久不保存
        // continue 语句只结束本次循环，而不是终止整个循环。break 语句则是结束整个循环过程，不再判断执行循环的条件是否成立。
        if (stack.length && x === (c = stack.pop())) continue;
        // 因为上面弹出来了 所以还需要 存一下
        c && stack.push(c);
        stack.push(x);
        console.log(stack);
    }
    return stack.join('');
};
console.log(removeDuplicates('abbac'));