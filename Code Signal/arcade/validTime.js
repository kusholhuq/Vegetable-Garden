function validTime(time) {
  //a few checks
  //should be type string
  //should have length 5
  //we can give a range for first two indeces, and a range for the 4-5th indeces
  //middle should be a colon

  if (time.length !== 5) {
    return false;
  }

  const hour = parseInt(time[0] + time[1]);
  const minute = parseInt(time[3] + time[4]);

  if (hour > 23 || hour < 0) {
    return false;
  }
  if (minute > 59 || minute < 0) {
    return false;
  }
  if (time[2] !== ':') {
    return false;
  }
  return true;
}
