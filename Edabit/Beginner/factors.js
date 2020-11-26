function findFactors(num) {
	//loop from numbers 1 to num
	//and at each one, divide num by it and see if theres a remainder
	//if theres a remainder add it to the factor array

	const factors =[];
	for(let i=1; i<=num;i++){
		if(num%i===0){
			factors.push(i);
		}
	}
	return factors;

}
