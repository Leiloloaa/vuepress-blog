// 要求
// 1、单个单词需要反转
// 2、多个空格压缩成一个
// 3、前后不能有空格

const str = ' a good   example '; // => "example good a"

function reverseWord(s) {
    // 字符串转数组
    const strArr = Array.from(s);
    // 移除多余空格
    removeExtraSpaces(strArr);
    // 翻转
    reverse(strArr, 0, strArr.length - 1);
    let start = 0;

    for (let i = 0; i <= strArr.length; i++) {
        if (strArr[i] === ' ' || i === strArr.length) {
            // 翻转单词
            reverse(strArr, start, i - 1);
            start = i + 1;
        }
    }

    return strArr.join('');
}

// 删除多余空格
// TODO 这个双指针还没理解
function removeExtraSpaces(strArr) {
    // 一个快的指针 一个慢的指针
    // 快的指针主要是用于 遇到 空格 要快速移动 重复的空格 保留一个
    // 慢的指针是指没有多余的时候 就把快的指针 赋值给 慢的指针
    let slowIndex = 0;
    let fastIndex = 0;

    console.log(slowIndex++);
    //a el   b
    while (fastIndex < strArr.length) {
        // 移除开始位置和重复的空格
        if (
            strArr[fastIndex] === ' ' &&
            (fastIndex === 0 || strArr[fastIndex - 1] === ' ')
        ) {
            fastIndex++;
        } else {
            strArr[slowIndex++] = strArr[fastIndex++];
        }
    }
    // 移除末尾空格
    strArr.length = strArr[slowIndex - 1] === ' ' ? slowIndex - 1 : slowIndex;
}

// 翻转从 start 到 end 的字符
function reverse(strArr, start, end) {
    let left = start;
    let right = end;

    while (left < right) {
        // 交换
        [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
        left++;
        right--;
    }
}

const res = reverseWord(str);
// console.log(res);

const r = ' a good   example ';
console.log(r.replace(/\s+/g, ''));