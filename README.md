# RegEx Split for NodeJS

Split a string using regular expression.

## Example 1

### Code

``` JavaScript
const regexSplit = require('./index');

const str = '\\x1b[33mTesting\\x1b[0m Hello World \\x1b[33mTesting\\x1b[0m'
const pattern = /\\x1b\[\d{1,2}m/;

console.log(regexSplit(str, pattern));
```

### Shell

``` JavaScript
[ '', 'Testing', ' Hello World ', 'Testing', '' ]
```

## Example 2

### Code

``` JavaScript
const regexSplit = require('./index');

const str = '\\x1b[33mTesting\\x1b[0m Hello World \\x1b[33mTesting\\x1b[0m'
const pattern = /\\x1b\[\d{1,2}m/;

console.log(regexSplit(str, pattern, { includeMatch: true }));
```

### Shell

``` JavaScript
[
  '',
  '\\x1b[33m',
  'Testing',
  '\\x1b[0m',
  ' Hello World ',
  '\\x1b[33m',
  'Testing',
  '\\x1b[0m',
  ''
]
```

## Example 3

### Code

``` JavaScript
const regexSplit = require('./index');

const str = '\\x1b[33mTesting\\x1b[0m Hello World \\x1b[33mTesting\\x1b[0m'
const pattern = /\\x1b\[\d{1,2}m/;

console.log(regexSplit(str, pattern, { includeMatch: true, trim: true }));
```

``` JavaScript
[
  '\\x1b[33m',
  'Testing',
  '\\x1b[0m',
  ' Hello World ',
  '\\x1b[33m',
  'Testing',
  '\\x1b[0m'
]
```

## Reference

### regexSplit(str, pattern, options)

``` JavaScript
/**
 * Split string with regular expression pattern.
 * @param {string} str
 * @param {RegExp} pattern
 * @param {Object} options
 * @param {Boolean} options.includeMatch
 * @param {Boolean} options.trim
 * @param {Boolean} options.trimStart
 * @param {Boolean} options.trimEnd
 * @returns {string[]}
 */
```