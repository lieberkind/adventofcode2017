const { contains, replaceAt } = require('./helpers');

const test1 = [0, 2, 7, 0];
const test2 = [0, 2, 3, 4];
const input = [14, 0, 15, 12, 11, 11, 3, 5, 1, 6, 8, 4, 9, 1, 8, 4];
const input2 = [14, 13, 12, 11, 9, 8, 8, 6, 6, 4, 4, 3, 1, 1, 0, 12];

const largestBank = bank =>
	bank.reduce((largestBankIndex, currentBank, idx, bank) => {
		return currentBank > bank[largestBankIndex] ? idx : largestBankIndex;
	}, 0);

const reallocate = bank => {
	const largestBankIndex = largestBank(bank);

	const _reallocate = (_bank, _index, _blockCount) => {
		return _blockCount === 0
			? _bank
			: _reallocate(
					replaceAt(_index, _bank[_index] + 1, _bank),
					(_index + 1) % _bank.length,
					_blockCount - 1
				);
	};

	return _reallocate(
		replaceAt(largestBankIndex, 0, bank),
		(largestBankIndex + 1) % bank.length,
		bank[largestBankIndex]
	);
};

const redistributionCount = banks => {
	const _redistributionCount = (_banks, _count, _seenConfigs) => {
		const _banksHash = _banks.join(',');

		return contains(_banksHash, _seenConfigs)
			? // Return the count and the seen configuration
				[_count, _banks]
			: _redistributionCount(reallocate(_banks), _count + 1, _seenConfigs.concat(_banksHash));
	};

	return _redistributionCount(banks, 0, []);
};

const res = redistributionCount(input);
console.log(res[0]);
console.log(redistributionCount(res[1])[0]);
