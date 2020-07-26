function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let days = 0;
  let height = 0;
  while (true) {
    days++;
    console.log(days)
    height += upSpeed;
    if (height >= desiredHeight) {
      return days;
    }
    height -= downSpeed;
    if (height >= desiredHeight) {
      return days;
    }
  }
}
