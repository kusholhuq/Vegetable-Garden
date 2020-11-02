function sortDrinkByPrice(drinks) {
  drinks.sort((a, b) => {
    if (a.price < b.price) {
      return -1;
    } else {
      return 1;
    }
  })
  return drinks
}
