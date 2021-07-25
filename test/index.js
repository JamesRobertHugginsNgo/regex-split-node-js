const regexSplit = require('../index');

const str = '\\x1b[33mTesting\\x1b[0m Hello World \\x1b[33mTesting\\x1b[0m'
const pattern = /\\x1b\[\d{1,2}m/;

console.log(regexSplit(str, pattern));
console.log(regexSplit(str, pattern, { includeMatch: true }));
console.log(regexSplit(str, pattern, { includeMatch: true, trim: true }));
