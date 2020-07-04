function addBorder(picture) {
  //brainstorm
  //will have to count the length of the string elements of the matrix
  //and add 2, thats the the number of asterisks to add to top and bottom
  //then add an asterisk to the start and end of each element


  //basically look at each array element and replace it with *itself*
  //thne unshift and push a row of *'s with the correct length
  for (let i = 0; i < picture.length; i++) {
    picture.splice(i, 1, "*" + picture[i] + "*");
  }
  let borderLength = picture[0].length;
  let border = "";
  for (let k = 0; k < borderLength; k++) {
    border += "*";
  }
  picture.unshift(border);
  picture.push(border);
  return picture;
}
