function divisibleByB(a, b) {
  let multiple = b;
  for (let i = 1; multiple < a; i++) {
    multiple = b * i;
  }
  return multiple;
}
