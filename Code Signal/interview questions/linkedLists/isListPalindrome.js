// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function isListPalindrome(l) {
  //could store everything in an array
  const array = [];

  let currentNode = l;
  while (currentNode !== null) {
    array.push(currentNode.value)
    currentNode = currentNode.next;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[array.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
