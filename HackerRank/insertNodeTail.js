function insertNodeAtTail(head, data) {
  //loop to the end of the list
  //once on the last node
  //change its pointer to the new node
  //new node is value of data, with pointer to null
  console.log("head", head);
  console.log("data", data);
  const newNode = {
    data: data,
    next: null
  };
  let currentNode = head;
  if (head === null) {
    head = newNode;
    return head;
  }
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }
  currentNode.next = newNode;
  return head;

}
