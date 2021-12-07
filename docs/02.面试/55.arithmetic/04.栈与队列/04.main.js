/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    if (k === 1 && nums.length === 1) return nums;
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i])) {
            let temp = map.get(nums[i]);
            map.set(nums[i], temp.add(i));
        } else {
            let dep = new Set();
            map.set(nums[i], dep.add(i));
        }
    }
    let arr = [];
    let kArr = [];
    for (let value of map.values()) {
        arr.push(value.size);
        kArr.push(value.size);
    }
    kArr.sort((a, b) => b - a);
    // [ 3, 4, 1 ]
    // [4, 3, 1]
};

let nums = [1, 1, 1, 2, 2, 2, 2, 3];
let k = 2;
topKFrequent(nums, k);