function candies(n, m) {
  for (let i = m; i > 0; i--) {
    if (i % n === 0) {
      return i;
    }
  }
  return 0;
}
