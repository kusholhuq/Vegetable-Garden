function secret(text) {
  const number = text[text.length - 1];
  let newString = ''
  for (let b = 0; b < (text.length - 2); b++) {
    newString += text[b];
  }
  console.log(newString, number)
  let result = "";

  for (let i = 0; i < number; i++) {
    result += `<${newString}></${newString}>`
  }
  return result;
}
