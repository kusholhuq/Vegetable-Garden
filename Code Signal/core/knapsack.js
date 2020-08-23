function knapsackLight(value1, weight1, value2, weight2, maxW) {
  let priority1;
  let priority2;
  let priorityw1;
  let priorityw2;

  if (value1 >= value2) {
    priority1 = value1;
    priority2 = value2;
    priorityw1 = weight1;
    priorityw2 = weight2;
  } else {
    priority1 = value2;
    priority2 = value1;
    priorityw1 = weight2;
    priorityw2 = weight1;
  }
  console.log(
    'priority1:', priority1,
    'priority2:', priority2,
    'priorityw1:', priorityw1,
    'priorityw2:', priorityw2
  )
  if (maxW < priorityw1 && maxW < priorityw2) {
    return 0;
  }

  //default is return everything
  //if everything is too much,
  //return priority 1
  //if 1 is too heavy, check 2
  //if 2 is too heavy return nothing
  if (maxW >= weight1 + weight2) {
    return priority1 + priority2;
  }
  if (maxW < weight1 + weight2) {
    if (priorityw1 <= maxW) {
      return priority1;
    }
    if (priorityw2 <= maxW) {
      return priority2;
    }
  }
}
