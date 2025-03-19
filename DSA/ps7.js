function findMiddleNode(head) {
    let slow = head;
    let fast = head;

   
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}


function createLinkedList(arr) {
    let dummy = { val: -1, next: null };
    let current = dummy;
    for (let val of arr) {
        current.next = { val, next: null };
        current = current.next;
    }
    return dummy.next;
}


function printLinkedList(head) {
    let result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}


let head1 = createLinkedList([1, 2, 3, 4, 5]);
let head2 = createLinkedList([1, 2, 3, 4, 5, 6]);

console.log(printLinkedList(findMiddleNode(head1))); 
console.log(printLinkedList(findMiddleNode(head2))); 
