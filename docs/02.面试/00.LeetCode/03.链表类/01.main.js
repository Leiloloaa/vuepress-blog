let head = [1, 2, 6, 3, 4, 5, 6],
    val = 6;

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

// 解题步骤
// 遍历 遇到 value 就把当前的 指针 指向 next.next
// 循环条件就是 cur.next 存在 链表最后一个是指向 null
function removeElements(head, val) {
    if (head === null) {
        return head;
    }
    const ret = new ListNode(0, head);
    let cur = ret;
    while (cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next;
            continue;
        }
        cur = cur.next;
    }
    return ret.next;
}

const test = removeElements(head, val);
console.log(test);