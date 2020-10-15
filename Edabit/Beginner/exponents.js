function calculateExponent(num, exp) {
	var result=num;
	for(var i=0; i<exp-1; i++){
		result=result*num;
	}
	return result;
}
