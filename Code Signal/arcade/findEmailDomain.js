function findEmailDomain(address) {
  const stringArray = (address.split('@'));
  return stringArray[stringArray.length - 1];

}
