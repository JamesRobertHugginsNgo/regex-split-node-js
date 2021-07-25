function splitWithPattern(str, pattern, { includeMatch = false } = {}) {
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

	if (returnValue.length > 1 && returnValue[0] === '') {
		returnValue.shift();
	}

	return returnValue;
}

module.exports = splitWithPattern;
