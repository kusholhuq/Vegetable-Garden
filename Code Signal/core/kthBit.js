function killKthBit(n, k) {
  return n & ~(1 << k - 1);
}
//   const array=n.toString(2).split("");
//   array.splice(array.length-k,1,0);
//   let string='';
//   for(let i=0; i<array.length;i++){
//       string+=array[i];
//   }
//   console.log(string);
//   const cool = 2147450879;
//   console.log(cool.toString(2));
//  return (parseInt(string,2));
