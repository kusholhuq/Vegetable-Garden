function removeDuplicates(head) {
  //loop through whole list
  //save first, second, and third
  //if first value matches second value
  //then point first value to third value
  //make current node be the next node
  //

  //a --> b --> c --> d
  let currentNode = head;
  while (currentNode.next !== null) {

    let secondNode = currentNode.next;

    console.log("currentNode", currentNode);
    console.log("secondNode", secondNode);

    if (secondNode.data === currentNode.data) {
      let thirdNode = secondNode.next;
      currentNode.next = thirdNode;
      continue;
    }

    currentNode = currentNode.next;
    if (currentNode === null) {
      return head;
    }

  }
  return head;
}
