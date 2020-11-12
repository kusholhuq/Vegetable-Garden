// modify the template variable to be a template string
function format(a, b, c) {
// the result string must give: "Their names were: a, b and c."
	const template = `Their names were: ${a}, ${b} and ${c}.`
	return template
}
