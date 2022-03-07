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

singleNumber([4, 1, 2, 1, 2])
// console.log(singleNumber([4, 1, 2, 1, 2]));

// console.log([4, 1, 2, 1, 2].indexOf(4));
// console.log([4, 1, 2, 1, 2].lastIndexOf(4));
