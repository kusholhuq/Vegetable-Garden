function CompareLists(llist1, llist2) {
  let current1 = llist1;
  let current2 = llist2;
  console.log(current1, current2);
  //length check first
  let counter1 = 1;
  let counter2 = 1;
  while (current1 !== null) {
    current1 = current1.next;
    counter1++;
  }
  while (current2 !== null) {
    current2 = current2.next;
    counter2++;
  }
  if (counter1 !== counter2) {
    return 0;
  }
  current1 = llist1;
  current2 = llist2;
  while (current1 !== null || current2 !== null) {
    if (current1.data !== current2.data) {
      return 0;
    }
    console.log(`does ${current1.data} = ${current2.data}`);
    current1 = current1.next;
    current2 = current2.next;
  }

  return 1;

}
