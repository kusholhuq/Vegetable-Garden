function emotify(str) {
  const stringArray = str.split(" ");
  for (let i = 0; i < stringArray.length; i++) {
    switch (stringArray[i]) {
      case "sad":
        stringArray.splice(i, 1, ":(");
        break;
      case "mad":
        stringArray.splice(i, 1, ":P");
        break;
      case "grin":
        stringArray.splice(i, 1, ":)");
        break;
      case "smile":
        stringArray.splice(i, 1, ":D");
    }
  }
  const newString = stringArray.join(" ");
  return newString;
}
