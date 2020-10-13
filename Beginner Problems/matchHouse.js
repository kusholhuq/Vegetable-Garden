function matchHouses(step) {
  if (step === 0) {
    return 0;
  }
  return 6 + 5 * (step - 1);
}
