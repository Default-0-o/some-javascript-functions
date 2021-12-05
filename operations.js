exports.operations = (input) => {
	let commands = input.split(" ");
	let arr = [];
	let sum = 0;
	for (let i = 0; i < commands.length; i++) {
		if (/\d/.test(commands[i])) {
			arr.push(parseInt(commands[i]));
		}
		switch (commands[i]) {
			case "D":
				if (arr.length >= 1) arr.push(arr[arr.length - 1] * 2);
				break;
			case "R":
				if (arr.length >= 1) arr.pop();
				break;
			case "+":
				if (arr.length >= 2)
					arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
				break;
			default:
				break;
		}
	}
	arr.forEach((item) => {
		sum += item;
	});
	return sum;
};
