function knapsackLight(value1, weight1, value2, weight2, maxW) {
  //a few cases
  //check for highest value
  //take highest value if possible
  //check if you have any more weight to carry the second item
  //if not its over and return
  //if you can carry the first item, check if you can carry the second item
  let mostValuableItem;
  let mostValuableItemWeight;
  if (value1 >= value2) {
    mostValuableItem = value1;
    mostValuableItemWeight = weight1;
    if (mostValuableItemWeight <= maxW) {
      if (maxW - mostValuableItemWeight >= weight2) {
        return (mostValuableItem + value2);
      }
      else {
        return mostValuableItem;
      }
    }
    else if (weight2 <= maxW) {
      return value2;
    }
    else {
      return 0;
    }
  }
  if (value2 >= value1) {
    mostValuableItem = value2;
    mostValuableItemWeight = weight2;
    if (mostValuableItemWeight <= maxW) {
      if (maxW - mostValuableItemWeight >= weight1) {
        return (mostValuableItem + value1);
      }
      else {
        return mostValuableItem;
      }
    }
    else if (weight1 <= maxW) {
      return value1;
    }
    else {
      return 0;
    }
  }



}
