exports.removerRepetitive = (str) => {
	return str
		.split("")
		.filter((item, index) => {
			return str.indexOf(item) === index;
		})
		.join("");
};
