const fs = require('fs');

const first = instrs => {
	// Prevent mutating the input
	let _instrs = [...instrs];

	let jumpCount = 0;
	let index = 0;

	while (index < _instrs.length) {
		const instr = _instrs[index];

		jumpCount++;
		_instrs[index]++;
		index = index + instr;
	}

	return jumpCount;
};

const second = instrs => {
	// Prevent mutating the input
	let _instrs = [...instrs];

	let jumpCount = 0;
	let index = 0;

	while (index < _instrs.length) {
		const instr = _instrs[index];

		jumpCount++;

		if (instr >= 3) {
			_instrs[index]--;
		} else {
			_instrs[index]++;
		}

		index = index + instr;
	}

	return jumpCount;
};

fs.readFile('./aoc5.in', 'utf8', (err, data) => {
	const input = data.split('\n').map(num => parseInt(num, 10));

	console.log(first(input));
	console.log(second(input));
});

// meh, tail recursive version yields stack overflow, thanks, V8

// const replaceAt = (idx, val, arr) => [...arr.slice(0, idx), val, ...arr.slice(idx + 1)];

// const escape = instrs => {
// 	const _escape = (_instrs, _jumpCount, _index) => {
// 		return _index >= _instrs.length
// 			? _jumpCount
// 			: _escape(
// 					replaceAt(_index, _instrs[_index] + 1, _instrs),
// 					_jumpCount + 1,
// 					_index + _instrs[_index]
// 				);
// 	};

// 	return _escape(instrs, 0, 0);
// };
