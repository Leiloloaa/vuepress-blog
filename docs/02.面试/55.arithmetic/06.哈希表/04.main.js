// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出和为目标值 target 的那两个整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。

// 示例 1：
// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

// 示例 2：
// 输入：nums = [3,2,4], target = 6
// 输出：[1,2]

// 示例 3：
// 输入：nums = [3,3], target = 6
// 输出：[0,1]

// 任务拆分
// 不做暴力破解，所以只有一个循环
// 新建一个 map 用来存放 target-num 的值和下标
// 如果循环的过程中，已经存在了，那就说明找到了
function isTwoSum(nums, target) {
  // [2, 7, 4], 9;
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let temp = target - nums[i];
    if (map.has(temp)) {
      let j = map.get(temp);
      return [j, i];
    }
    map.set(nums[i], i);
  }
}

console.log(isTwoSum([3, 2, 4], 6));
