function newWord(txt) {
  var result = '';
  for (var i = 1; i < txt.length; i++) {
    result = result + txt[i];
  }
  return result;
}
