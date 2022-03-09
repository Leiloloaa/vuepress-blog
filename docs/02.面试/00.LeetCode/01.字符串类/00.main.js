// var lengthOfLastWord = function(s) {
//   // 去掉两边的空格
//   s = s.trim();
//   for (i = s.length - 1; i >= 0; --i) {
//     if (s[i] == ' ') {
//       return s.slice(i, -1).length;
//     }
//   }
//   return s.length;

//   //    return s.trim().split(" ").at(-1).length
// };

// let s = 'Hello World';
// lengthOfLastWord(s);

// var isPalindrome = function(s) {
//   let str = s.toLocaleLowerCase().replace(/[\W_]/gi, '').split('');
//   if (!str) return true;
//   console.log(str);
//   let startIndex = 0;
//   let endIndex = str.length - 1;
//   while (startIndex < endIndex) {
//     if (str[startIndex] === str[endIndex]) {
//       startIndex++;
//       endIndex--;
//     } else {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(isPalindrome('0P'));

var singleNumber = function(nums) {
    for (let item of nums) {
        console.log(item);
        // console.log(nums.indexOf(nums[i]), nums.lastIndexOf(nums[i]));
        // if (nums.indexOf(nums[i]) == nums.lastIndexOf(nums[i])) {
        //   return nums[i];
        // }
    }
};

// singleNumber([4, 1, 2, 1, 2]);
// console.log(singleNumber([4, 1, 2, 1, 2]));

// console.log([4, 1, 2, 1, 2].indexOf(4));
// console.log([4, 1, 2, 1, 2].lastIndexOf(4));

function getSum(num) {
    let sum = 1
    while (num) {
        sum = num * sum
        num--
    }
    return sum
}

function getSum2(num) {
    if (num <= 0) {
        return 1
    } else {
        return num * getSum2(num - 1)
    }
}

// console.log(getSum2(3));

// 扁平化数组 [1,[2,3,[4]]]
function changeArr(arr) {
    let result = []
    for (const item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(changeArr(item))
        } else {
            result.push(item)
        }
    }
    return result
}

function changeArr2(arr) {
    // return arr.toString().split('');
    return arr.flat(2)
}

console.log(changeArr2([1, [2, 3, [4]]]));
// console.log([1, [2, 3, [4]]].toString());

// set 集合的时间复杂度
// 普通数组的的查找都是 o(n)
// set 集合则是 o(1)

// max 的时间复杂度
const a = [1, 3, 5, 6]

console.log(Math.max(...a));