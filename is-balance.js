exports.isBalance = (input) => {
	let left = 0;
	let right = 0;
	for (let i = 0; i < input.length; i++) {
		if (
			input.charAt(i) === "(" ||
			input.charAt(i) === "[" ||
			input.charAt(i) === "{"
		) {
			left += 1;
		} else if (
			input.charAt(i) === ")" ||
			input.charAt(i) === "]" ||
			input.charAt(i) === "}"
		) {
			right += 1;
		}
	}
	return left === right ? "is balance" : "is not balance";
};
