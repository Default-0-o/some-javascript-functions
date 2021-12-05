exports.getRepeatedInfo = (number) => {
	let string = number.toString();
	let obj = {};
	let dif = 1;
	for (let i = 0; i < string.length; i++) {
		if (!obj.hasOwnProperty(string.charAt(i))) {
			obj[parseInt(string.charAt(i))] = string.charAt(i);
			dif = 0;
		} else dif = 1;
		for (let j = 0; j < parseInt(string.charAt(i)) - dif; j++) {
			obj[parseInt(string.charAt(i))] += string.charAt(i);
		}
	}
	return obj;
};
