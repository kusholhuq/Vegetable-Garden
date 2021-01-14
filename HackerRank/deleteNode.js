function deleteNode(head, position) {
  //a --> b --> c
  //we want to delete b
  //we need to point a to c
  //traverse to leader
  //save target
  //save follower
  //point leader to follower
  if (position === 0) {
    head = head.next;
    return head;
  }

  //special case for start and end
  let currentNode = head;
  let counter = 0;
  while (counter < position - 1) {
    currentNode = currentNode.next;
    counter++;
  }
  const leader = currentNode;
  const target = currentNode.next;
  const follower = currentNode.next.next;
  leader.next = follower;
  return head;

}
