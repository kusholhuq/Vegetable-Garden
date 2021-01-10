function printLinkedList(head) {
  let currentNode = head;
  const printedList = [];
  while (currentNode !== null) {
    console.log(currentNode.data);
    printedList.push(currentNode.data);
    currentNode = currentNode.next;
  }
  //console.log(printedList);
  //return printedList;

}
