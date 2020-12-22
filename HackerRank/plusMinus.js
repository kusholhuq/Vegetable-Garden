function plusMinus(arr) {
    let positive =0;
    let zero =0;
    let negative =0;

    for (let i=0; i<arr.length; i++){
        if(arr[i]>0){
            positive++;
        }
        if(arr[i]===0){
            zero++;
        }
        if(arr[i]<0){
            negative++;
        }
    }
    const posFraction = positive/(arr.length);
    const zeroFraction = zero/(arr.length);
    const negFraction = negative/(arr.length);

    console.log(posFraction);
    console.log(negFraction);
    console.log(zeroFraction);
}
