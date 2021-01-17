function reverse(head) {
  // a --> b --> c --> d
  //   <--   <--
  // 0     1     2     3
  //grab leader
  //grab target
  //grab follower
  //
  let currentNode = head;
  let secondNode = currentNode.next;
  let temp;
  while (secondNode) {
    temp = secondNode.next;
    secondNode.next = currentNode;
    currentNode = secondNode;
    secondNode = temp;
  }
  //now i need to point a to null
  //and reset the head to the currentnode

  //a is on head right now
  head.next = null;
  head = currentNode;
  return head;




}
