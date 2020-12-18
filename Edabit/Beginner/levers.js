function determineLever(arr) {
  if (arr === ["e", "f", "l"]) {
    return "first class lever";
  } else if (arr === ["e", "l", "f"]) {
    return "second class lever";
  } else if (arr === ["f", "e", "l"]) {
    return "third class lever";
  }
}
