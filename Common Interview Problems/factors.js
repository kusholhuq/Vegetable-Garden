function doesNumberHaveEvenorOddNumberOfFactors(number){
  let count = 0;
  for(let i = 1 ; i <= number; i++) {
    if (Number % i === 0) {
      count++;
    }
  }
  if(count % 2 === 0){
    return 'even';
  } else {
    return 'odd';
  }
}
