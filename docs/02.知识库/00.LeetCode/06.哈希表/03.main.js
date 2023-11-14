// 快乐数
// 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
// 然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
// 如果 可以变为 1，那么这个数就是快乐数。
// 如果 n 是快乐数就返回 true ；不是，则返回 false 。

// 任务拆解
// 1、获取正整数的每一项
// 2、平方和 如果为1 就是快乐数 如果无限循环 就不是
//    循环条件 num!=1 和 num 出现过
//    当我们要快速判断改元素是否出现过的时候，要考虑 哈希表
function isHappy(num) {
  let s = new Set();
  while (num != 1 && !s.has(num)) {
    s.add(num);
    num = getNum(num);
  }
  return num === 1;
}

function getNum(num) {
  let sum = 0;
  while (num) {
    let temp = num % 10;
    sum += temp * temp;
    num = Math.floor(num / 10);
  }
  return sum;
}

const res = isHappy(21);

// 21 => 2*2 +1*1=5 5*5=25 2*2 +5*5=29 2*2 + 9*9=85 64+25=89... 64+81 145 重复了
// 5
// 25
// 29
// 85
// 89
// 145
// 42
// 20
// 4
// 16
// 37
// 58
// 89
// 又到了 89
console.log(res);
