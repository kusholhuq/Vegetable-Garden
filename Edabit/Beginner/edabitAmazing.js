function amazingEdabit(str) {
  const stringArray = str.split(' ');
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === "edabit") {
      return str;
    }
  }
  stringArray.splice(2, 0, "not");
  return stringArray.join(" ");
}
