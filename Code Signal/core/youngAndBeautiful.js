function willYou(young, beautiful, loved) {
  if (young && beautiful && !loved) {
    return true;
  }
  if (!young || !beautiful) {
    if (loved) {
      return true;
    }
  }
  return false;

}
