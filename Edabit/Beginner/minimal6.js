/*function areTrue(a, b) {
	if (a == true) {
		if (b == true) {
			return "both";
		}
		else {
			return "first";
		}
	}
	else if (b = true) {
		return "second";
	}
	else {
		return "neither";
	}
}*/


function areTrue(a, b) {
  return a ? (b ? "both" : "first") : b ? "second" : "neither"
}
