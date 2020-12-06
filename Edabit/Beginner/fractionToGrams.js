function jayAndBob(str) {
  //create an object with code values
  //multiply by 28
  //round to two decimal point
  //add gram unit
  const fraction = {
    "quarter": .25,
    "half": .5,
    "eighth": .125,
    "sixteenth": .0625
  };
  return `${fraction[str] * 28} grams`;

}
