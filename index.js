/**
 * Split string with regular expression pattern.
 * @param {string} str
 * @param {RegExp} pattern
 * @param {Object} options
 * @param {Boolean} options.includeMatch
 * @returns {string[]}
 */
function regexSplit(str, pattern, { includeMatch = false } = {}) {
	const returnValue = [];

	let match;
	do {
		match = str.match(pattern);
		if (match) {
			returnValue.push(str.substring(0, match.index));
			if (includeMatch) {
				returnValue.push(match[0]);
			}

			str = str.substring(match.index + match[0].length);
		} else {
			returnValue.push(str);
		}
	} while (match);

	if (returnValue.length > 1) {
		if (returnValue[0] === '') {
			returnValue.shift();
		}

		if (returnValue[returnValue.length - 1] === '') {
			returnValue.pop();
		}
	}

	return returnValue;
}

module.exports = regexSplit;
