exoorts.encoder = (input, number) => {
	let alphabet = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];
	let commands = input.split("");
	commands.unshift(commands.pop());
	for (let i = 0; i < commands.length; i++) {
		if (alphabet.includes(commands[i])) {
			let el = alphabet.indexOf(commands[i]) + 1;
			if (el > 25) el = 0;
			commands[i] = alphabet[el];
		}
		if (i === commands.length - 1 && number > 1) {
			i = -1;
			number -= 1;
		}
	}
	return commands.join("");
};
