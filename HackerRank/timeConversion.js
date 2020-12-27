function timeConversion(s) {
  /*
   * Write your code here.
   */
  //lets separate the hours, minutes, and seconds
  //subtract 12 from hours
  //concat them all back together

  let hours = s[0] + s[1];
  let minutes = s[3] + s[4];
  let seconds = s[6] + s[7];
  let ampm = s[8] + s[9];

  if (ampm === 'PM' && parseInt(hours) !== 12) {
    hours = eval(parseInt(hours) + 12);
  }
  if (ampm === 'AM' && parseInt(hours) === 12) {
    hours = '00';
  }
  console.log(`${hours}:${minutes}:${seconds}`)
  return `${hours}:${minutes}:${seconds}`;
}
