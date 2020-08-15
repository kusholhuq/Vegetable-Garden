function messageFromBinaryCode(code) {
  //break the code into groups of 8
  //translate them into letters
  //then concat them all
  const parts = [];
  for (let i = 0; i < code.length; i = i + 8) {
    let packet = code[i] + '' + code[i + 1] + '' + code[i + 2] + '' + code[i + 3] + '' + code[i + 4] + '' + code[i + 5] + '' + code[i + 6] + '' + code[i + 7];
    parts.push(packet);
  }
  console.log(parts);
  let string = '';
  for (let j = 0; j < parts.length; j++) {
    //lets sum up a binary
    //loop throughthe individual 8 char string
    //the value of the string is the power
    //and the index of the string is
    let charCode = 0;
    for (let k = parts[j].length - 1; k >= 0; k--) {
      charCode += Math.pow(2, 7 - k) * parseInt(parts[j][k])
    }
    const letter = String.fromCharCode(charCode);
    string += letter;
  }
  return string;
}
