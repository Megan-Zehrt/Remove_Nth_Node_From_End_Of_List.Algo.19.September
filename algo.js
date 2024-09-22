// 19. Remove Nth Node From End of List



// Given the head of a linked list, remove the nth node from the end of the list and return its head.









/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    let dummy = new ListNode(0);  // Dummy node to handle edge cases (e.g., removing head)
    dummy.next = head;
    
    let slow = dummy;
    let fast = dummy;
    
    // Move fast pointer `n + 1` steps ahead
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }
    
    // Move both pointers until fast reaches the end
    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }
    
    // Slow is now at the node before the nth node from the end
    slow.next = slow.next.next;  // Remove the nth node
    
    return dummy.next;  // Return the modified list starting from the original head

};