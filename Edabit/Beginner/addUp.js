function addUp(num) {
  const array = [];
  for (let i = 0; i <= num; i++) {
    array.push(i);
  }
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return array.reduce(reducer)
}
