const splitWithPattern = require('../index');

const str = '\\x1b[33mTesting\\x1b[0m Hello World'
const pattern = /\\x1b\[\d{1,2}m/;

console.log(splitWithPattern(str, pattern));
console.log(splitWithPattern(str, pattern, { includeMatch: true }));
