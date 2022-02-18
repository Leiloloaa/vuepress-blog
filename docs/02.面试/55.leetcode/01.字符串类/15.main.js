let numArr = [3, 2, 2, 3, 1, 2, 3, 4, 5, 6, 2, 3],
    val = 3;

// 快慢双指针
// 快指针 遇到了 val 慢指针 就不走 直到不等于 val 然后慢指针才走

function removeElement(arr, val) {
    let slowIndex = 0;
    let fastIndex = 0;
    while (fastIndex < arr.length) {
        if (arr[fastIndex] == val) {
            arr[slowIndex] = arr[fastIndex++];
        } else {
            arr[slowIndex++] = arr[fastIndex++];
        }
    }
    return arr.splice(0, slowIndex);
}

const res = removeElement(numArr, val);
console.log(res);