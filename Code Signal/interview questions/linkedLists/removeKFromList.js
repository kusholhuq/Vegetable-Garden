// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function removeKFromList(l, k) {
  //a --> b --> c --> k --> d

  let first = l;
  if (first === null) {
    return first;
  }
  while (first.value === k) {

    l = first.next;
    first = l;
    if (first === null) {
      return first;
    }
  }

  let second = first.next;
  while (second !== null) {
    if (second.value === k) {
      let third = second.next;
      first.next = third;
    }
    console.log(first.value);
    first = first.next;
    if (first === null) {
      return l;
    }
    second = first.next;
  }
  return l;
}

//this worked for 8/10 tests

//I tried
//I'll do

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function removeKFromList(l, k) {
  let currentNode = l;
  const array = [];
  while (currentNode !== null) {
    array.push(currentNode.value);
    currentNode = currentNode.next;
  }
  console.log(array);

  for (let b = 0; b < array.length; b++) {
    if (array[b] === k) {
      array.splice(b, 1);
      b--;
    }
  }
  console.log(array);
  let newHead = {
    value: array[0],
    next: null
  };
  currentNode = newHead;
  for (let i = 1; i < array.length; i++) {
    const newNode = {
      value: array[i],
      next: null
    }
    currentNode.next = newNode;
    currentNode = currentNode.next;
  }
  currentNode.next = null;
  return array;
  return newHead;
}
