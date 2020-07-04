function alternatingSums(a) {
  //first, you need to go through entire array
  //alternate adding each person to team 1 then team 2
  //meaning adding them to sum1 and sum2
  //then return an array containing sum1,sum2

  let sum1 = 0;
  let sum2 = 0;


  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      sum1 += a[i];
    } else {
      sum2 += a[i];
    }
  }
  return [sum1, sum2];
}
