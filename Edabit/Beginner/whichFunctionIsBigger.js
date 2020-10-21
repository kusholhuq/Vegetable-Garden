function whichIsLarger(f, g) {
  const fResult = f();
  const gResult = g();

  if (fResult > gResult) {
    return "f";
  } else if (fResult === gResult) {
    return 'neither';
  } else {
    return "g";
  }
}
