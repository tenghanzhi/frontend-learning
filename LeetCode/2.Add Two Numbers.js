var addTwoNumbers = function (l1, l2) {
    let sum = new ListNode(0);
    let head = sum
    let carry = 0

    while (l1 || l2 || carry) {
        let val1 = l1 === null ? 0 : l1.val;
        let val2 = l2 === null ? 0 : l2.val;
        const res = val1 + val2 + carry
        carry = res >= 10 ? 1 : 0
        sum.next = new ListNode(res % 10)
        sum = sum.next
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }
    return head.next

};