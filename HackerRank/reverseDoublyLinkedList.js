// Complete the reverse function below.

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */
function reverse(head) {
  //  -->   -->   -->
  //a     b     c     d
  //  <--   <--   <--

  //loop through each node
  //switch the next and prev values

  let currentNode = head;
  let nextNode = currentNode.next;
  while (currentNode !== null) {

    //save the forward direction
    nextNode = currentNode.next;

    //save next value

    //point current next to prev
    currentNode.next = currentNode.prev;
    //point current prev to saved value
    currentNode.prev = nextNode;
    if (nextNode === null) {
      head = currentNode;
    }
    currentNode = nextNode;

  }
  return head;
}
