function shouldServeDrinks(age, onBreak) {
  if (age > 17 && onBreak === false) {
    return true;
  } else {
    return false;
  }
}
