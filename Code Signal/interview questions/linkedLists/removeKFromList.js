// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function removeKFromList(l, k) {
  //a --> b --> c --> k --> d

  //loop while you are not looking at null
  let first = l;
  let second = first.next;
  while (second !== null) {
    second = first.next;
    let third = second.next;
    if (second.value === k) {
      first.next = third;
    }
    first = first.next;
    second = first.next;

  }
  if ()

    return l;


  console.log("l", l);
}
