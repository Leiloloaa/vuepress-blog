// numArr1 = [1,2,2,1] numArr2=[2]  => [2]
// numArr1 = [4,9,5] numArr2=[9,4,9,8,4,2]  => [9,4]

// 要求是让我们得出相同的部分 且需要去重
// 去重 要快速联想到 ES6 set

// 解题思路 我们无非是遍历一个短一点的数组 然后去 查到 长的 是否存在，存在就保存到 resArr 里面
function intersect(numArr1, numArr2) {
  let temp1 = numArr1,
    temp2 = numArr2,
    resArr = new Set([]);
  if (numArr1.length < numArr2.length) {
    temp1 = numArr2;
    temp2 = numArr1;
  }
  // 然后把要循环的 换成 set 这样就可以减少 循环次数
  temp1 = new Set(temp1);
  for (let i = 0; i < temp2.length; i++) {
    temp1.has(temp2[i]) && resArr.add(temp2[i]);
  }
  return Array.from(resArr);
}

const res = intersect([4, 9, 5], [9, 4, 9, 8, 4, 2]);
console.log(res);
