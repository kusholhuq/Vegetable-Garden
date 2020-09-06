function mirrorBits(a) {
  const binary = a.toString(2);
  const stringArray = binary.split('');
  const reversedArray = stringArray.reverse();
  return parseInt((reversedArray.join('')), 2);

}
