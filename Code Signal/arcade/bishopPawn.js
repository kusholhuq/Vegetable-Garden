function bishopAndPawn(bishop, pawn) {
  //determine if a white bishop can attack a pawn
  //so that is to say, is the pawn, on a diagonal of the bishop
  //so you can check all four directions of the bishop

  //a2 that is 2/1 3/2 4/3
  //so if i take the slope between the two points, the value should be 1
  //we need to convert the given strings into numbers
  let letter1 = bishop[0];
  const number1 = parseInt(bishop[1]);
  let letter2 = pawn[0];
  const number2 = parseInt(pawn[1]);

  //convert letters to numbers
  switch (letter1) {
    case 'a':
      letter1 = 1;
      break;
    case 'b':
      letter1 = 2;
      break;
    case 'c':
      letter1 = 3;
      break;
    case 'd':
      letter1 = 4;
      break;
    case 'e':
      letter1 = 5;
      break;
    case 'f':
      letter1 = 6;
      break;
    case 'g':
      letter1 = 7;
      break;
    case 'h':
      letter1 = 8;
  }
  switch (letter2) {
    case 'a':
      letter2 = 1;
      break;
    case 'b':
      letter2 = 2;
      break;
    case 'c':
      letter2 = 3;
      break;
    case 'd':
      letter2 = 4;
      break;
    case 'e':
      letter2 = 5;
      break;
    case 'f':
      letter2 = 6;
      break;
    case 'g':
      letter2 = 7;
      break;
    case 'h':
      letter2 = 8;
  }

  //now you have all numbers so find the slope
  const topNumber = letter2 - letter1;
  const bottomNumber = number2 - number1;
  const slope = topNumber / bottomNumber;
  if (slope === 1 || slope === -1) {
    return true;
  }
  return false;
}
