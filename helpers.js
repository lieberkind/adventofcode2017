const contains = (val, arr) => arr.indexOf(val) > -1;
const replaceAt = (idx, val, arr) => [...arr.slice(0, idx), val, ...arr.slice(idx + 1)];

module.exports = {
	contains,
	replaceAt
};
