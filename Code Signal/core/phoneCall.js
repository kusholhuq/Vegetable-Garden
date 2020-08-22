function phoneCall(min1, min2_10, min11, s) {
  //see if you have enough for 1 minute, s -min1 is 0, then return 0, if not continue
  let count = 0;
  let money = s;
  if (s >= min1) {
    count++;
    money -= min1;
  } else {
    return count;
  }
  //see how many min2s you can do checking after each min if its 0 cents now
  //if its 0, return the count, if not continue

  for (let i = 2; i <= 10; i++) {
    money -= min2_10;
    if (money < 0) {
      return count;
    } else {
      count++;
    }
  }

  //see how many min11s you can do with a loop checking after each min if you are 0 cents
  //if 0 return count

  while (money >= 0) {
    money -= min11;
    if (money < 0) {
      return count;
    } else {
      count++;
    }
  }

}
