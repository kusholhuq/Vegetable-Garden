function insertNodeAtHead(head, data) {
  //if head is empty reset head to equal data
  //create a new node
  //set the current head to the next value of the new node
  //set head to equal our new node
  const newNode = {
    data: data,
    next: null
  };
  if (head === null) {
    head = newNode;
    return head;
  }
  newNode.next = head;
  head = newNode;
  return head;

}
