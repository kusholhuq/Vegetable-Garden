function isTrue(relation) {
  const newString = relation.replace("=", "===");
  return eval(newString);
}
