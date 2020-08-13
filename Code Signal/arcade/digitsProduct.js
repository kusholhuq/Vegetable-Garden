function digitsProduct(product) {
  //     if(product===0){
  //         return 10;
  //     }
  // //find factors
  // //then concat factors
  // //then compare concatted factors

  // //make a storage space for the factors
  // //once you have 6 factors, then move on
  // const factors =[];
  // for(let i=1; i<=product;i++){
  //     let remainder = 0;
  //     if(product%i===0){
  //         remainder = product/i;
  //         factors.push([i, remainder]);
  //     }
  // }
  // console.log(factors);
  // const stringFactors=[];
  // for(let b=0;b<factors.length;b++){
  //     let stringPair=factors[b][0]+''+factors[b][1];
  //     stringFactors.push(stringPair);

  // }
  // console.log(stringFactors);

  // //before i find the lowest, i should do a check that the numbers all multiply to get the product
  // //then find the lowest
  // //if that new array comes up empty, return -1
  // const verifiedFactors=[];
  // for(let k=0;k<stringFactors.length;k++){
  //     let factorProduct = 1;
  //     for(let j=0; j<stringFactors[k].length;j++){
  //         factorProduct = factorProduct*stringFactors[k][j];
  //     }
  //     if(factorProduct===product){
  //         verifiedFactors.push(parseInt(stringFactors[k]));
  //     }
  // }
  // console.log(verifiedFactors);

  // if(!verifiedFactors[0]){
  //     return -1;
  // }

  // let min=verifiedFactors[0];
  // for(let c=0;c<verifiedFactors.length;c++){
  //     if(verifiedFactors[c]<min){
  //         min = verifiedFactors[c];
  //     }
  // }

  // return min;
  for (let g = 1; g < 5000; g++) {
    let string = g + '';
    let stringProduct = 1;
    for (let a = 0; a < string.length; a++) {
      stringProduct = stringProduct * parseInt(string[a]);
    }
    if (stringProduct === product) {
      return parseInt(string);
    }
  }
  return -1;

}
