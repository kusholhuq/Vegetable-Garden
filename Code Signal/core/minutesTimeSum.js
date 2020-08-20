function lateRide(n) {
  const hours = Math.floor(n / 60);
  console.log(hours);
  const minutes = n % 60;
  const combinedTime = hours + '' + minutes;
  let sum = 0;
  for (let i = 0; i < combinedTime.length; i++) {
    sum += parseInt(combinedTime[i]);
  }
  return sum;
}
