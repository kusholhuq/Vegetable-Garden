function reversePrint(head) {
  //a --> b --> c --> d
  //v1    v2    temp

  let currentNode = head;
  const result = [];
  while (currentNode !== null) {
    result.push(currentNode.data);
    currentNode = currentNode.next;
  }
  for (let i = result.length - 1; i >= 0; i--) {
    console.log(result[i]);
  }
}
