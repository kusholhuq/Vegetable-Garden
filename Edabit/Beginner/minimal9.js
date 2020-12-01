/*function firstOne(a, b = 0 c = 0, d = 0) {
	if (a)
		return a;
	else if (b)
		return b;
  else if (c)
		return c;
  else if (d)
		return d;
	else
		return "not found";
} */
const firstOne = (a, b, c, d) => a || b || c || d || "not found";
