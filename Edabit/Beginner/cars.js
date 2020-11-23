function carsNeeded(n) {
  const remainder = n % 5;
  const cars = n / 5;
  if (!remainder) {
    return cars;
  }
  return Math.ceil(cars);
}
